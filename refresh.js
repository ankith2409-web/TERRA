/**
 * ═══════════════════════════════════════════════════════════════
 *  TERRA — Earthquake Data Backend
 *  Auto-refreshes every 20 seconds with robust error handling.
 * ═══════════════════════════════════════════════════════════════
 *
 *  Usage (in HTML):
 *    <script src="earthquake_backend.js"></script>
 *    <script>
 *      EarthquakeBackend.onUpdate((quakes) => {
 *        console.log('Got', quakes.length, 'earthquakes');
 *      });
 *      EarthquakeBackend.start();
 *    </script>
 */

const EarthquakeBackend = (function () {
    // ── Configuration ──────────────────────────────────────────
    const CONFIG = {
        // USGS GeoJSON feed — all earthquakes in the past day
        url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',
        refreshInterval: 20_000,   // 20 seconds
        maxRetries: 3,             // retries before waiting for next cycle
        retryDelay: 3_000,         // 3 seconds between retries
        requestTimeout: 15_000,    // abort fetch after 15 seconds
    };
    // ── Internal State ─────────────────────────────────────────
    let _intervalId = null;
    let _isRunning = false;
    let _isFetching = false;          // prevents overlapping fetches
    let _lastSuccessTime = null;
    let _lastData = null;             // cached latest dataset
    let _consecutiveErrors = 0;

    // Subscriber callbacks
    const _onUpdateCallbacks = [];
    const _onErrorCallbacks = [];
    const _onStatusCallbacks = [];
 
       // ── Helpers ─────────────────────────────────────────────────

    /** Broadcast to all registered callbacks of a given type */
    function _notify(list, payload) {
        for (let i = 0; i < list.length; i++) {
            try {
                list[i](payload);
            } catch (err) {
                console.error('[EarthquakeBackend] Subscriber threw:', err);
            }
        }
    }

       /** Emit a status update */
    function _emitStatus(status, detail) {
        _notify(_onStatusCallbacks, { status, detail, timestamp: Date.now() });
    }
	
     /** Parse raw USGS GeoJSON into a clean array of earthquake objects */
    function _parse(geojson) {
        if (!geojson || !Array.isArray(geojson.features)) {
            return [];
        }
        return geojson.features.map(function (feature) {
            const props = feature.properties || {};
            const coords = (feature.geometry && feature.geometry.coordinates) || [0, 0, 0];
            return {
                id: feature.id || null,
                magnitude: props.mag,
                place: props.place || 'Unknown',
                time: props.time,                          // epoch ms
                 timeHuman: new Date(props.time).toLocaleString(),
                updated: props.updated,
                url: props.url || null,
                tsunami: props.tsunami === 1,
                significance: props.sig || 0,
                type: props.type || 'earthquake',
                title: props.title || '',
                longitude: coords[0],
                latitude: coords[1],
                depth: coords[2],                          // km
            };
        });
    }
       /** Fetch with a timeout (AbortController) */
    function _fetchWithTimeout(url, timeoutMs) {
        const controller = new AbortController();
        const timer = setTimeout(function () {
            controller.abort();
        }, timeoutMs);

        return fetch(url, { signal: controller.signal })
            .finally(function () {
                clearTimeout(timer);
            });
    }

    /** Single fetch attempt */
    async function _fetchOnce() {
        const response = await _fetchWithTimeout(CONFIG.url, CONFIG.requestTimeout);

        if (!response.ok) {
            throw new Error('HTTP ' + response.status + ' ' + response.statusText);
        }

        return response.json();
    }

     /** Fetch with retry logic */
    async function _fetchWithRetry() {
        let lastError = null;

        for (let attempt = 1; attempt <= CONFIG.maxRetries; attempt++) {
            try {
                _emitStatus('fetching', 'Attempt ' + attempt + ' of ' + CONFIG.maxRetries);
                const raw = await _fetchOnce();
                return raw;                                // success — return immediately
            } catch (err) {
                lastError = err;
                console.warn(
                    '[EarthquakeBackend] Attempt ' + attempt + ' failed:',
                    err.message
                );
                 // Don't wait after the last attempt
                if (attempt < CONFIG.maxRetries) {
                    await new Promise(function (resolve) {
                        setTimeout(resolve, CONFIG.retryDelay);
                    });
                }
            }
        }

        // All retries exhausted
        throw lastError;
    }
