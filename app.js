document.addEventListener('DOMContentLoaded', () => {
    // UI Elements
    const totalCountEl = document.getElementById('total-count');
    const maxMagEl = document.getElementById('max-magnitude');
    const avgMagEl = document.getElementById('avg-magnitude');
    const lastUpdateEl = document.getElementById('last-update');
    
    const quakeCardsEl = document.getElementById('quake-cards');
    const loadingStateEl = document.getElementById('loading-state');
    const errorStateEl = document.getElementById('error-state');
    const emptyStateEl = document.getElementById('empty-state');
    const errorMessageEl = document.getElementById('error-message');
    const eventCountEl = document.getElementById('event-count');
    
    const refreshBtn = document.getElementById('refresh-btn');
    const retryBtn = document.getElementById('retry-btn');
    const countdownEl = document.getElementById('countdown');

    // Attach event listeners
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            EarthquakeBackend.forceRefresh();
            countdown = 20;
        });
    }

    if (retryBtn) {
        retryBtn.addEventListener('click', () => {
            EarthquakeBackend.forceRefresh();
            countdown = 20;
        });
    }

    // Subscriptions
    EarthquakeBackend.onStatus(info => {
        if (info.status === 'fetching') {
            if (loadingStateEl && !EarthquakeBackend.getLastData()) {
                loadingStateEl.classList.remove('hidden');
                if (errorStateEl) errorStateEl.classList.add('hidden');
                if (emptyStateEl) emptyStateEl.classList.add('hidden');
                if (quakeCardsEl) quakeCardsEl.classList.add('hidden');
            }
        } else if (info.status === 'success') {
            if (loadingStateEl) loadingStateEl.classList.add('hidden');
            if (errorStateEl) errorStateEl.classList.add('hidden');
            countdown = 20;
        } else if (info.status === 'error') {
            if (loadingStateEl) loadingStateEl.classList.add('hidden');
            if (!EarthquakeBackend.getLastData()) {
                if (errorStateEl) errorStateEl.classList.remove('hidden');
                if (emptyStateEl) emptyStateEl.classList.add('hidden');
                if (quakeCardsEl) quakeCardsEl.classList.add('hidden');
                if (errorMessageEl) errorMessageEl.textContent = info.detail || 'Could not load earthquake data.';
            }
        }
    });

    EarthquakeBackend.onUpdate(quakes => {
        if (!quakes || quakes.length === 0) {
            if (emptyStateEl) emptyStateEl.classList.remove('hidden');
            if (quakeCardsEl) quakeCardsEl.classList.add('hidden');
            if (totalCountEl) totalCountEl.textContent = '0';
            if (maxMagEl) maxMagEl.textContent = '0';
            if (avgMagEl) avgMagEl.textContent = '0';
            if (eventCountEl) eventCountEl.textContent = '(0 events)';
            return;
        }

        if (emptyStateEl) emptyStateEl.classList.add('hidden');
        if (quakeCardsEl) {
            quakeCardsEl.classList.remove('hidden');
            quakeCardsEl.innerHTML = '';
        }

        let maxMag = -Infinity;
        let sumMag = 0;

        quakes.forEach(quake => {
            if (quake.magnitude > maxMag) maxMag = quake.magnitude;
            sumMag += quake.magnitude;

            if (quakeCardsEl) {
                // Create card
                const card = document.createElement('div');
                card.className = 'quake-card';
                card.style.display = 'flex';
                card.style.alignItems = 'center';
                card.style.gap = '10px';
                card.style.padding = '10px';
                card.style.borderBottom = '1px solid #ccc';
                
                const magBadge = document.createElement('div');
                magBadge.className = 'quake-mag-badge';
                magBadge.textContent = quake.magnitude ? quake.magnitude.toFixed(1) : 'N/A';
                magBadge.style.fontWeight = 'bold';
                magBadge.style.fontSize = '1.2em';
                magBadge.style.minWidth = '40px';
                
                const infoDiv = document.createElement('div');
                infoDiv.className = 'quake-card-info';
                
                const placeEl = document.createElement('div');
                placeEl.className = 'quake-card-place';
                placeEl.textContent = quake.place;
                placeEl.style.fontWeight = 'bold';
                
                const metaEl = document.createElement('div');
                metaEl.className = 'quake-card-meta';
                metaEl.innerHTML = `<span>${quake.timeHuman}</span> | <span>Depth: ${quake.depth} km</span>`;
                metaEl.style.fontSize = '0.85em';
                metaEl.style.color = '#666';
                
                infoDiv.appendChild(placeEl);
                infoDiv.appendChild(metaEl);
                
                card.appendChild(magBadge);
                card.appendChild(infoDiv);
                
                quakeCardsEl.appendChild(card);
            }
        });

        if (totalCountEl) totalCountEl.textContent = quakes.length;
        if (maxMagEl) maxMagEl.textContent = maxMag > -Infinity ? maxMag.toFixed(1) : 'N/A';
        if (avgMagEl) avgMagEl.textContent = (sumMag / quakes.length).toFixed(1);
        if (lastUpdateEl) lastUpdateEl.textContent = new Date().toLocaleTimeString();
        if (eventCountEl) eventCountEl.textContent = `(${quakes.length} events)`;
    });

    // Start backend
    if (typeof EarthquakeBackend !== 'undefined') {
        EarthquakeBackend.start();
    } else {
        console.error('EarthquakeBackend is not defined. Did you include refresh.js?');
    }
    
    // Simulate countdown (since refreshInterval is 20s in refresh.js)
    let countdown = 20;
    setInterval(() => {
        countdown--;
        if (countdown <= 0) countdown = 20;
        if(countdownEl) countdownEl.textContent = countdown;
    }, 1000);
});
