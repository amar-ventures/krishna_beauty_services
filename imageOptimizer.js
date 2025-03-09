// Image optimization and lazy loading handler
class ImageOptimizer {
    constructor() {
        this.imageCache = new Map();
        this.observer = null;
        this.init();
    }

    init() {
        // Create intersection observer for lazy loading
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    this.loadImage(img);
                    this.observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });

        // Initialize lazy loading for all images with data-src
        document.querySelectorAll('img[data-src]').forEach(img => {
            this.observer.observe(img);
        });
    }

    async loadImage(img) {
        const src = img.getAttribute('data-src');
        
        // Check cache first
        if (this.imageCache.has(src)) {
            img.src = this.imageCache.get(src);
            return;
        }

        try {
            // Load and compress image
            const blob = await this.fetchAndCompress(src);
            const objectUrl = URL.createObjectURL(blob);
            
            // Cache the compressed image
            this.imageCache.set(src, objectUrl);
            img.src = objectUrl;
        } catch (error) {
            console.error('Error loading image:', error);
            img.src = src; // Fallback to original source
        }
    }

    async fetchAndCompress(src) {
        const response = await fetch(src);
        const blob = await response.blob();
        
        // Use canvas for compression
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                URL.revokeObjectURL(img.src);
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Calculate new dimensions (max 1200px width)
                let width = img.width;
                let height = img.height;
                if (width > 1200) {
                    height = (height * 1200) / width;
                    width = 1200;
                }

                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);

                // Convert to blob with reduced quality
                canvas.toBlob(resolve, 'image/jpeg', 0.8);
            };
            img.src = URL.createObjectURL(blob);
        });
    }
}