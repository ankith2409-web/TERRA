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
