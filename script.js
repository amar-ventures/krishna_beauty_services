function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const isOpen = mobileMenu.classList.contains('block');
    
    if (isOpen) {
        mobileMenu.classList.remove('block');
        mobileMenu.classList.add('hidden');
    } else {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('block');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileButton = document.querySelector('.md:hidden');
    
    if (!mobileButton.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Close menu when clicking menu items
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.add('hidden');
        document.getElementById('mobileMenu').classList.remove('block');
    });
});

 document.addEventListener('DOMContentLoaded', function() {
        // Apply animation classes to various sections
        const sections = {
            // Hero section
            'header': {
                'h1': 'animate-element animate-fade-up',
                'p': 'animate-element animate-fade-up delay-100',
                '.flex.flex-col.sm\\:flex-row': 'animate-element animate-fade-up delay-200',
                '.hero-image-container': 'animate-element animate-fade-left delay-300'
            },
            
            // About section
            '#about': {
                'h2': 'animate-element animate-fade-up',
                '.lg\\:w-2\\/5': 'animate-element animate-fade-right delay-100',
                '.lg\\:w-3\\/5 p': 'animate-element animate-fade-up delay-200',
                '.bg-white.p-6': 'animate-element animate-scale delay-300',
                '.inline-block.px-8.py-4': 'animate-element animate-fade-up delay-400'
            },
            
            // Services section
            '#services': {
                'h2': 'animate-element animate-fade-up',
                'p.text-center.text-lg': 'animate-element animate-fade-up delay-100',
                '.mb-20': 'animate-element animate-fade-up delay-200',
                '.mb-20 + .mb-20': 'animate-element animate-fade-up delay-300',
                '.mb-20 + .mb-20 + .mb-20': 'animate-element animate-fade-up delay-400'
            },
            
            // Why Choose Us section
            '.py-24.px-6.bg-gradient-to-br.from-white.to-pink-50': {
                'h2': 'animate-element animate-fade-up',
                '.bg-white.rounded-2xl:nth-child(1)': 'animate-element animate-scale delay-100',
                '.bg-white.rounded-2xl:nth-child(2)': 'animate-element animate-scale delay-200',
                '.bg-white.rounded-2xl:nth-child(3)': 'animate-element animate-scale delay-300',
                '.bg-white.rounded-2xl:nth-child(4)': 'animate-element animate-scale delay-400',
                '.bg-white.rounded-2xl:nth-child(5)': 'animate-element animate-scale delay-500',
                '.bg-white.rounded-2xl:nth-child(6)': 'animate-element animate-scale delay-100',
                '.mt-16.text-center': 'animate-element animate-fade-up delay-200'
            },
            
            // Testimonials section
            '#testimonials': {
                'h2': 'animate-element animate-fade-up',
                '.bg-pink-50.p-8:nth-child(1)': 'animate-element animate-scale delay-100',
                '.bg-pink-50.p-8:nth-child(2)': 'animate-element animate-scale delay-200',
                '.bg-pink-50.p-8:nth-child(3)': 'animate-element animate-scale delay-300'
            },
            
            // Gallery section
            '#gallery': {
                'h2': 'animate-element animate-fade-up',
                '.relative.rounded-xl.overflow-hidden:nth-child(1)': 'animate-element animate-fade-up delay-100',
                '.relative.rounded-xl.overflow-hidden:nth-child(2)': 'animate-element animate-fade-up delay-200',
                '.relative.rounded-xl.overflow-hidden:nth-child(3)': 'animate-element animate-fade-up delay-300',
                '.relative.rounded-xl.overflow-hidden:nth-child(4)': 'animate-element animate-fade-up delay-400'
            },
            
            // FAQ section
            '#faq': {
                'h2': 'animate-element animate-fade-up',
                '.border.border-gray-200:nth-child(1)': 'animate-element animate-fade-up delay-100',
                '.border.border-gray-200:nth-child(2)': 'animate-element animate-fade-up delay-200',
                '.border.border-gray-200:nth-child(3)': 'animate-element animate-fade-up delay-300',
                '.border.border-gray-200:nth-child(4)': 'animate-element animate-fade-up delay-400'
            },
            
            // Contact section
            '#contact': {
                '.bg-white.rounded-3xl': 'animate-element animate-scale'
            },
            
            // Footer
            'footer': {
                '.grid.md\\:grid-cols-4 > div:nth-child(1)': 'animate-element animate-fade-up delay-100',
                '.grid.md\\:grid-cols-4 > div:nth-child(2)': 'animate-element animate-fade-up delay-200',
                '.grid.md\\:grid-cols-4 > div:nth-child(3)': 'animate-element animate-fade-up delay-300',
                '.grid.md\\:grid-cols-4 > div:nth-child(4)': 'animate-element animate-fade-up delay-400',
                '.border-t': 'animate-element animate-fade-up delay-500'
            }
        };
        
        // Apply animation classes
        for (const [selector, elements] of Object.entries(sections)) {
            const section = document.querySelector(selector);
            if (section) {
                for (const [elementSelector, animationClass] of Object.entries(elements)) {
                    try {
                        const elements = section.querySelectorAll(elementSelector);
                        elements.forEach(el => {
                            el.classList.add(...animationClass.split(' '));
                        });
                    } catch (e) {
                        console.warn(`Could not apply animation to ${elementSelector} in ${selector}`);
                    }
                }
            }
        }
        
        // Helper function to check if an element is in viewport
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
            );
        }
        
        // Function to handle scroll animation
        function handleScrollAnimation() {
            const elements = document.querySelectorAll('.animate-element');
            elements.forEach(element => {
                if (isElementInViewport(element)) {
                    element.classList.add('visible');
                }
            });
        }
        
        // Add scroll event listener
        window.addEventListener('scroll', handleScrollAnimation);
        
        // Trigger on initial load
        setTimeout(handleScrollAnimation, 100);
        
        // Add scroll listener to navbar items for smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Offset for fixed navbar
                    const navbarHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobileMenu');
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
    });
    
    // Include your existing functions
    function toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenu.classList.toggle('hidden');
    }
