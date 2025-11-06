// Function to categorize destinations
function categorizeDestination(destination) {
    const name = destination.name.toLowerCase();
    const description = destination.description.toLowerCase();
    const state = destination.state.toLowerCase();
    
    // Check for monuments/heritage
    if (name.includes('taj') || name.includes('fort') || name.includes('palace') || 
        name.includes('temple') || name.includes('mahal') || name.includes('agra') ||
        name.includes('jaipur') || name.includes('udaipur') || name.includes('jaisalmer') ||
        name.includes('hampi') || name.includes('khajuraho') || name.includes('ellora') ||
        name.includes('ajanta') || name.includes('mysore') || name.includes('delhi') ||
        description.includes('palace') || description.includes('fort') || 
        description.includes('temple') || description.includes('heritage') ||
        description.includes('monument') || description.includes('architecture')) {
        return 'monuments';
    }
    
    // Check for nature
    if (name.includes('kerala') || name.includes('munnar') || name.includes('coorg') ||
        name.includes('meghalaya') || name.includes('kaziranga') || name.includes('ranthambore') ||
        name.includes('manali') || name.includes('shimla') || name.includes('ooty') ||
        name.includes('darjeeling') || name.includes('ladakh') || name.includes('rishikesh') ||
        description.includes('nature') || description.includes('wildlife') || 
        description.includes('mountain') || description.includes('backwater') ||
        description.includes('tea') || description.includes('forest') ||
        description.includes('valley') || description.includes('hill')) {
        return 'nature';
    }
    
    // Check for culture/spiritual
    if (name.includes('varanasi') || name.includes('amritsar') || name.includes('rishikesh') ||
        description.includes('spiritual') || description.includes('temple') ||
        description.includes('culture') || description.includes('ritual') ||
        description.includes('ganga') || description.includes('golden temple')) {
        return 'culture';
    }
    
    // Check for beaches
    if (name.includes('goa') || name.includes('andaman') || name.includes('lakshadweep') ||
        name.includes('pondicherry') || description.includes('beach') || 
        description.includes('island') || description.includes('coast')) {
        return 'festivals';
    }
    
    // Default to monuments for historical places
    return 'monuments';
}

// Generate gallery images from INDIA_DESTINATIONS
const galleryImages = typeof INDIA_DESTINATIONS !== 'undefined' 
    ? INDIA_DESTINATIONS.map((dest, index) => ({
        id: dest.id || index + 1,
        src: dest.image,
        thumbnail: dest.image,
        title: dest.name,
        description: dest.state,
        category: categorizeDestination(dest)
    }))
    : [];

// Initialize the gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('galleryContainer');
    let currentFilter = 'all';
    let lg = null;

    // Initialize LightGallery
    function initializeLightGallery() {
        if (lg) {
            lg.destroy();
        }
        lg = lightGallery(galleryContainer, {
            speed: 500,
            plugins: [lgZoom],
            counter: false,
            download: false,
            getCaptionFromTitleOrAlt: false,
            addClass: 'gallery-lightbox'
        });
    }

    // Create gallery items
    function createGalleryItem(image) {
        return `
            <div class="gallery-item ${image.category}" data-src="${image.src}">
                <img src="${image.thumbnail}" alt="${image.title}" class="gallery-img" loading="lazy">
                <div class="gallery-overlay">
                    <h3 class="gallery-title">${image.title}</h3>
                    <p class="gallery-description">${image.description}</p>
                </div>
            </div>
        `;
    }

    // Filter gallery items
    function filterGallery(category) {
        currentFilter = category;
        const items = document.querySelectorAll('.gallery-item');
        
        items.forEach(item => {
            const shouldShow = category === 'all' || item.classList.contains(category);
            item.style.opacity = '0';
            setTimeout(() => {
                item.style.display = shouldShow ? 'block' : 'none';
                if (shouldShow) {
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 50);
                }
            }, 300);
        });

        // Update active filter button
        document.querySelectorAll('.btn-filter').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === category);
        });
    }

    // Load gallery images
    function loadGallery() {
        const galleryHTML = galleryImages
            .map(image => createGalleryItem(image))
            .join('');
        galleryContainer.innerHTML = galleryHTML;

        // Initialize click events after loading images
        initializeLightGallery();
    }

    // Add filter button click events
    document.querySelectorAll('.btn-filter').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.filter;
            filterGallery(category);
        });
    });

    // Initial load
    loadGallery();

    // Lazy loading and animation on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe gallery items
    setTimeout(() => {
        document.querySelectorAll('.gallery-item').forEach(item => {
            observer.observe(item);
        });
    }, 100);
});