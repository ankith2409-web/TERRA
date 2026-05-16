// The United States Geological Survey (USGS) provides a free, public API 

const fetchLiveEarthquakes = async () => {
    // You can change the endpoint based on your needs. Other options include:
    // - all_day.geojson (All earthquakes past day)
    // - significant_month.geojson (Significant earthquakes past month)
    // - 4.5_day.geojson (Magnitude 4.5+ past day)
    const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log(`Found ${data.metadata.count} earthquakes in the last hour.`);

