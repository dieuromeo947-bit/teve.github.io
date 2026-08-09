document.addEventListener('DOMContentLoaded', () => {
    
    // --- Live Online Status Tracker (GMT+3 Schedule: 3:00 PM - 12:00 AM Midnight) ---
    function updateOnlineStatus() {
        const statusBadge = document.getElementById('live-status-badge');
        const statusText = document.getElementById('status-text');
        const cardStatus = document.getElementById('card-status-indicator');
        
        if (!statusBadge || !statusText) return;
        
        // Calculate current time in GMT+3 minutes from midnight
        const now = new Date();
        const utcHours = now.getUTCHours();
        const utcMinutes = now.getUTCMinutes();
        
        const gmt3TotalMinutes = ((utcHours + 3) % 24) * 60 + utcMinutes;
        
        // 3:00 PM (15:00) = 900 minutes | 12:00 AM Midnight = 1440 minutes
        const isOnline = (gmt3TotalMinutes >= 900);
        
        if (isOnline) {
            statusBadge.classList.remove('offline');
            statusBadge.classList.add('online');
            statusText.textContent = "Online Now";
            
            // Time remaining until 12:00 AM Midnight GMT+3
            const minsUntilOffline = 1440 - gmt3TotalMinutes;
            const hoursLeft = Math.floor(minsUntilOffline / 60);
            const minsLeft = minsUntilOffline % 60;
            
            if (cardStatus) {
                cardStatus.innerHTML = `<span style="color: #4CAF50; font-weight: 600;">Online Now</span> (active for ~${hoursLeft}h ${minsLeft}m more, until 12:00 AM GMT+3)`;
            }
        } else {
            statusBadge.classList.remove('online');
            statusBadge.classList.add('offline');
            statusText.textContent = "Offline Now";
            
            // Time remaining until 3:00 PM GMT+3
            const minsUntilOnline = 900 - gmt3TotalMinutes;
            const hoursLeft = Math.floor(minsUntilOnline / 60);
            const minsLeft = minsUntilOnline % 60;
            
            if (cardStatus) {
                cardStatus.innerHTML = `<span style="color: #FF5252; font-weight: 600;">Offline Now</span> (back online in ~${hoursLeft}h ${minsLeft}m, at 3:00 PM GMT+3)`;
            }
        }
    }
    
    updateOnlineStatus();
    setInterval(updateOnlineStatus, 60000); // Refresh status every minute
    
    // --- Schedule Button Highlight Effect ---
    const scheduleBtn = document.querySelector('.schedule-btn');
    if (scheduleBtn) {
        scheduleBtn.addEventListener('click', () => {
            const availCard = document.getElementById('availability-card');
            if (availCard) {
                availCard.classList.remove('highlight-card');
                void availCard.offsetWidth; // Trigger DOM reflow to restart animation
                availCard.classList.add('highlight-card');
            }
        });
    }

    // --- Scroll Reveal Logic ---
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            if (el.getBoundingClientRect().top < windowHeight - 80) el.classList.add('visible');
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    
    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ item
            item.classList.toggle('active');
        });
    });
    
    // --- Active Navbar Links on Scroll ---
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
    const navbar = document.getElementById('navbar');
    let navbarHeight = navbar ? navbar.offsetHeight : 70;
    
    window.addEventListener('resize', () => { navbarHeight = navbar ? navbar.offsetHeight : 70; });
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + navbarHeight + 100;
        sections.forEach(section => {
            if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) link.classList.add('active');
        });
    });

    // --- Dynamic Footer Year ---
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // --- Modal Logic ---
    const projectDetailModal = document.getElementById('project-detail-modal');
    const modalProjectName = document.getElementById('modal-project-name');
    const modalButtonContainer = document.getElementById('modal-button-container');
    const modalScreenshotsContainer = document.getElementById('modal-screenshots-container');
    const modalDescription = document.getElementById('modal-description');
    const modalTagsContainer = document.getElementById('modal-tags-container');
    const modalClientRequests = document.getElementById('modal-client-requests');
    const modalDevStats = document.getElementById('modal-dev-stats');
    const modalTimeSpent = document.getElementById('modal-time-spent');
    const modalPrice = document.getElementById('modal-price');
    const modalCloseButton = projectDetailModal.querySelector('.modal-close');

    document.querySelectorAll('.project-card[data-project-id]').forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.dataset.projectId;
            
            const data = projectsData[projectId]; 
            if (!data) return;
            
            modalProjectName.textContent = data.name;
            
            modalButtonContainer.innerHTML = '';
            if (data.youtubeId) {
                // Создаём контейнер для встроенного видео
                const videoDiv = document.createElement('div');
                videoDiv.classList.add('video-container');
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${data.youtubeId}?autoplay=0&rel=0`;
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;
                iframe.title = data.name + " video";
                videoDiv.appendChild(iframe);
                modalButtonContainer.appendChild(videoDiv);
            }
            if (data.demoUrl) {
                const demoButton = document.createElement('a');
                demoButton.href = data.demoUrl;
                demoButton.target = "_blank";
                demoButton.classList.add('button-base', 'button-demo');
                demoButton.innerHTML = '<i class="fas fa-gamepad"></i> Play Demo';
                modalButtonContainer.appendChild(demoButton);
            }
            
            // Screenshots
            modalScreenshotsContainer.innerHTML = '';
            data.screenshots.forEach(src => {
                const thumbContainer = document.createElement('div');
                thumbContainer.classList.add('screenshot-thumb-container');
                const img = document.createElement('img');
                img.src = src; 
                img.alt = `${data.name} Screenshot`; 
                img.classList.add('screenshot-thumb');
                img.dataset.fullsrc = src; 
                thumbContainer.appendChild(img);
                modalScreenshotsContainer.appendChild(thumbContainer);
            });
            attachLightboxListeners();
            
            modalDescription.textContent = data.description;
            modalClientRequests.textContent = data.clientRequest;
            modalPrice.innerHTML = `<strong>Price:</strong> ${data.price}`;
            modalTimeSpent.innerHTML = `<strong>Time:</strong> ${data.time}`;
            
            // Tags
            modalTagsContainer.innerHTML = '';
            if(data.tags && data.tags.length > 0){
                data.tags.forEach((tag, index) => {
                    const tagEl = document.createElement('span');
                    tagEl.classList.add('modal-tag', `tag-style-${(index % 5) + 1}`);
                    tagEl.textContent = tag;
                    modalTagsContainer.appendChild(tagEl);
                });
                 document.getElementById('modal-tags-section').style.display = 'block';
            } else {
                document.getElementById('modal-tags-section').style.display = 'none';
            }
            
            // Dev Stats
            modalDevStats.innerHTML = '';
            for(const [key, value] of Object.entries(data.devStats)){
                const li = document.createElement('li');
                li.innerHTML = `<strong>${key}:</strong> ${value}`;
                modalDevStats.appendChild(li);
            }
            
            projectDetailModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // --- Modal Closing Logic ---
    const closeModal = () => {
        projectDetailModal.classList.remove('active');
        document.body.style.overflow = '';
    };
    modalCloseButton.addEventListener('click', closeModal);
    projectDetailModal.addEventListener('click', (e) => { if (e.target === projectDetailModal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && projectDetailModal.classList.contains('active')) closeModal(); });
    
    // --- Lightbox Logic ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    
    function attachLightboxListeners() {
        modalScreenshotsContainer.querySelectorAll('.screenshot-thumb').forEach(thumb => {
            thumb.addEventListener('click', (e) => {
                e.stopPropagation();
                lightboxImg.src = thumb.dataset.fullsrc || thumb.src;
                lightbox.classList.add('active');
            });
        });
    }
    
    const closeLightbox = () => lightbox.classList.remove('active');
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox(); });
});
