document.addEventListener('DOMContentLoaded', () => {
    const listings = document.querySelectorAll('.listing');
    const formatFilter = document.getElementById('format-filter');
    const certsFilter = document.getElementById('certs-filter');
    const regionFilter = document.getElementById('region-filter');
    const moqFilter = document.getElementById('moq-filter');
    const clearFilters = document.getElementById('clear-filters');

    // Filter function
    function applyFilters() {
        const format = formatFilter.value;
        const certs = certsFilter.value;
        const region = regionFilter.value;
        const moq = moqFilter.value;

        listings.forEach(listing => {
            const listingFormat = listing.dataset.format;
            const listingCerts = listing.dataset.certs;
            const listingRegion = listing.dataset.region;
            const listingMoq = listing.dataset.moq;

            const formatMatch = !format || format === listingFormat;
            const certsMatch = !certs || certs === listingCerts;
            const regionMatch = !region || region === listingRegion;
            const moqMatch = !moq || moq === listingMoq;

            if (formatMatch && certsMatch && regionMatch && moqMatch) {
                listing.style.display = 'block';
            } else {
                listing.style.display = 'none';
            }
        });
    }

    // Event listeners for filters
    formatFilter.addEventListener('change', applyFilters);
    certsFilter.addEventListener('change', applyFilters);
    regionFilter.addEventListener('change', applyFilters);
    moqFilter.addEventListener('change', applyFilters);

    // Clear filters
    clearFilters.addEventListener('click', () => {
        formatFilter.value = '';
        certsFilter.value = '';
        regionFilter.value = '';
        moqFilter.value = '';
        listings.forEach(listing => {
            listing.style.display = 'block';
        });
    });

    // Initial filter application
    applyFilters();
});
