// Ensure data.js is loaded before this script
if (typeof INDIA_DESTINATIONS === 'undefined' || typeof QUIZ_QUESTIONS === 'undefined') {
    console.error("data.js not loaded. Cannot run script.js.");
}

// --- SCROLL ANIMATIONS ---
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Add scroll class to navbar
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}

// --- GLOBAL THEME TOGGLING LOGIC ---
function applyTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
    
    // Update all toggle buttons on all pages
    document.querySelectorAll('#darkModeToggle').forEach(button => {
        if(button) {
            const icon = theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-fill';
            const text = theme === 'dark' ? 'Light' : 'Dark';
            button.innerHTML = `<i class="bi ${icon} me-1"></i><span class="d-none d-md-inline">${text}</span>`;
        }
    });
}

function initializeTheme() {
    let currentTheme = localStorage.getItem('theme');
    
    if (!currentTheme) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentTheme = 'dark';
        } else {
            currentTheme = 'light';
        }
    }
    
    applyTheme(currentTheme);
}

window.toggleTheme = function() {
    const body = document.body;
    const isDark = body.classList.contains('dark-mode');
    const newTheme = isDark ? 'light' : 'dark';
    
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
}

// --- CORE NAVIGATION LOGIC (for index.html SPA content) ---

let currentPage = 'home';
const appContent = document.getElementById('app-content');
const quizContent = document.getElementById('quiz-content');

const pageRoutes = {
    'home': renderHomePage,
    'about': renderAboutPage,
    'contact': renderContactPage, // Now linked to the defined function below
};

// Only for use on index.html
window.navigateTo = function(pageName) {
    if (!pageRoutes[pageName] || !appContent) {
        // Fallback for navigation to separate HTML files
        if (pageName === 'quiz') {
            window.location.href = `quiz.html`;
        } else if (pageName === 'destination') {
            window.location.href = `destination.html`;
        }
        return;
    }

    window.location.hash = pageName;
    currentPage = pageName;

    appContent.innerHTML = '';
    pageRoutes[pageName]();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('hashchange', () => {
    // Check if we are on the index.html page (by checking for the app-content element)
    if (appContent) {
        const hash = window.location.hash.slice(1);
        if (hash && pageRoutes[hash]) {
            navigateTo(hash);
        }
    }
});

// Initial load: determine page from URL hash or default to 'home'
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme on all pages
    initializeTheme();
    document.getElementById('darkModeToggle')?.addEventListener('click', toggleTheme);

    // Initialize scroll animations
    initScrollAnimations();
    
    // Add scroll listener for navbar
    window.addEventListener('scroll', handleNavbarScroll);

    // Only execute SPA navigation logic on index.html
    if (appContent) {
        const initialHash = window.location.hash.slice(1) || 'home';
        navigateTo(initialHash);
    }
});

// --- PAGE RENDERING FUNCTIONS (INDEX.HTML) ---

function renderHomePage() {
    // 1. Carousel Slides HTML - Background with unique content
    const carouselInnerHtml = CAROUSEL_SLIDES.map((slide, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <div class="hero-carousel-slide" style="background-image: linear-gradient(135deg, rgba(63, 29, 7, 0.7), rgba(140, 42, 30, 0.5)), url('${slide.image}');">
                <div class="hero-slide-overlay"></div>
                <div class="hero-slide-content">
                    <h1 class="hero-slide-title">${slide.title}</h1>
                    <p class="hero-slide-location">
                        <i class="bi bi-geo-alt-fill"></i> ${slide.text}
                    </p>
                    <p class="hero-slide-subtitle">${slide.subtitle}</p>
                </div>
            </div>
        </div>
    `).join('');

    // 2. Accordion Items HTML (Local Tips)
    const tipsData = [
        { id: 'cultureTip', title: 'Culture & Etiquette', content: 'Always remove your shoes before entering a temple or a home. Use your right hand for giving and receiving things. A Namaste (folded hands) is a respectful greeting.' },
        { id: 'foodTip', title: 'Food & Health', content: 'Try local street food from busy, reputable stalls. Always drink bottled water. Carry mild stomach medication, especially if you are sensitive to spicy food.' },
        { id: 'festivalTip', title: 'Festivals & Events', content: 'Plan your trip around major festivals like Diwali, Holi, or Onam for a vibrant cultural experience. Book accommodation months in advance during these times.' }
    ];

    const accordionHtml = tipsData.map((item, index) => `
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading${item.id}">
                <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${item.id}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapse${item.id}">
                    ${item.title}
                </button>
            </h2>
            <div id="collapse${item.id}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading${item.id}" data-bs-parent="#localTipsAccordion">
                <div class="accordion-body">
                    ${item.content}
                </div>
            </div>
        </div>
    `).join('');

    appContent.innerHTML = `
        <section id="hero-carousel" class="hero-section">
            <div id="mainCarousel" class="carousel slide carousel-fade h-100" data-bs-ride="carousel" data-bs-interval="2000">
                <div class="carousel-inner h-100">
                    ${carouselInnerHtml}
                </div>
                
                <!-- Carousel Indicators -->
                <div class="carousel-indicators">
                    ${CAROUSEL_SLIDES.map((_, index) => `
                        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="${index}" 
                                class="${index === 0 ? 'active' : ''}" aria-current="${index === 0 ? 'true' : 'false'}" 
                                aria-label="Slide ${index + 1}"></button>
                    `).join('')}
                </div>
                
                <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            
            <!-- Hero Action Buttons Overlay -->
            <div class="hero-action-overlay">
                <div class="hero-buttons">
                    <a href="destination.html" class="btn btn-primary btn-lg">
                        <i class="bi bi-compass me-2"></i>Explore All Destinations
                    </a>
                    <a href="quiz.html" class="btn btn-outline-light btn-lg">
                        <i class="bi bi-question-circle me-2"></i>Test Your Knowledge
                    </a>
                </div>
            </div>
            
            <!-- Scroll Down Indicator -->
            <div class="scroll-indicator">
                <i class="bi bi-chevron-down"></i>
            </div>
        </section>

        <section class="container-lg py-5 reveal">
            <h2 class="text-center mb-5 display-5 fw-bold text-primary">Local Traveler Tips</h2>
            <div class="accordion accordion-flush mx-auto" id="localTipsAccordion" style="max-width: 900px;">
                ${accordionHtml}
            </div>
        </section>
        
        <section id="why-eco" class="bg-light py-5 reveal">
            <div class="container-lg">
                <h2 class="text-center mb-5 display-5 fw-bold text-primary">Why Eco-Tourism?</h2>
                <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
                    <div class="col reveal">
                        <div class="card h-100 border-0">
                            <div class="card-body p-5">
                                <div class="mb-4">
                                    <i class="bi bi-people-fill text-secondary" style="font-size: 3.5rem;"></i>
                                </div>
                                <h3 class="card-title fs-4 fw-bold mb-3">Support Local</h3>
                                <p class="card-text">Ensure your travel dollars directly benefit local communities and their sustainable practices.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col reveal">
                        <div class="card h-100 border-0">
                            <div class="card-body p-5">
                                <div class="mb-4">
                                    <i class="bi bi-tree-fill text-secondary" style="font-size: 3.5rem;"></i>
                                </div>
                                <h3 class="card-title fs-4 fw-bold mb-3">Preserve Nature</h3>
                                <p class="card-text">Choose destinations dedicated to conserving India's unparalleled biodiversity, from the Himalayas to the coast.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col reveal">
                        <div class="card h-100 border-0">
                            <div class="card-body p-5">
                                <div class="mb-4">
                                    <i class="bi bi-patch-check-fill text-secondary" style="font-size: 3.5rem;"></i>
                                </div>
                                <h3 class="card-title fs-4 fw-bold mb-3">Authentic Experiences</h3>
                                <p class="card-text">Experience the culture, history, and wildlife on a deeper, more meaningful level.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="quiz-link" class="py-5 reveal">
            <div class="container-lg text-center">
                <div class="glass p-5 mx-auto" style="max-width: 800px;">
                    <h2 class="display-5 fw-bold text-primary mb-4">Test Your India Knowledge!</h2>
                    <p class="lead mb-5">How well do you know the history, culture, and geography of India?</p>
                    <a href="quiz.html" class="btn btn-primary btn-lg px-5 py-3">Start the Quiz Now</a>
                </div>
            </div>
        </section>
    `;
    
    // Re-initialize scroll animations for newly added content
    setTimeout(() => initScrollAnimations(), 100);

    // Initialize Bootstrap carousel programmatically (safe for dynamic DOM insertion)
    try {
        const carouselEl = document.getElementById('mainCarousel');
        if (carouselEl && typeof bootstrap !== 'undefined' && bootstrap.Carousel) {
            // If a carousel instance already exists, dispose it first
            if (carouselEl._carouselInstance) {
                try { carouselEl._carouselInstance.dispose(); } catch(e) { /* ignore */ }
            }
            const opts = { interval: 2000, ride: 'carousel', pause: 'hover', touch: true };
            const instance = new bootstrap.Carousel(carouselEl, opts);
            // store reference so we can dispose later if needed
            carouselEl._carouselInstance = instance;
        }
    } catch (err) {
        // fail silently - carousel will still work if data attributes are honored
        console.warn('Carousel init failed:', err);
    }
}


function renderAboutPage() {
    appContent.innerHTML = `
        <section id="about" class="container-lg py-5 min-vh-100">
            <div class="card shadow-lg p-4 p-md-5 mx-auto" style="max-width: 900px;">
                <h1 class="text-center display-6 fw-bold text-primary mb-4 border-bottom pb-3">About Incredible India Tourism</h1>
                <div class="space-y-4">
                    <p class="lead"> 
                        This website is dedicated to showcasing the diverse travel landscape of India through the lens of **eco-tourism and responsible travel**. We believe that exploring India should not only be a breathtaking experience for the visitor but also a beneficial and sustainable one for the local communities and the environment. 
                    </p>
                    <h2 class="h4 fw-bold text-secondary mt-4">Our Vision</h2>
                    <p> 
                        Our vision is to be the premier digital guide for travelers seeking authentic and sustainable journeys in India. We emphasize lesser-known destinations alongside popular icons, providing detailed, accurate, and inspiring information to help you plan your next great adventure while minimizing your ecological footprint. We aim to highlight destinations where tourism helps preserve, not harm, the natural and cultural heritage. 
                    </p>
                    <h2 class="h4 fw-bold text-secondary mt-4">The Technology Behind the Guide</h2>
                    <p> 
                        The entire application—from the vibrant destination cards to the image gallery and the travel quiz—is built using **HTML5, Bootstrap 5, and Vanilla JavaScript**. This showcases the power of fundamental web technologies to create a fast, dynamic, and fully responsive multi-page experience. 
                    </p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex align-items-center"><i class="bi bi-code-slash text-primary me-2"></i><strong>Technology:</strong> HTML5, Bootstrap 5, Vanilla JavaScript.</li>
                        <li class="list-group-item d-flex align-items-center"><i class="bi bi-brush text-primary me-2"></i><strong>Design:</strong> Vibrant Indian palette, and responsive design with Dark Mode support.</li>
                        <li class="list-group-item d-flex align-items-center"><i class="bi bi-geo-alt-fill text-primary me-2"></i><strong>Data Source:</strong> Real-world locations and tourist information.</li>
                    </ul>
                </div>
            </div>
        </section>
    `; 
}

// 🐛 FIX: Added the missing renderContactPage function.
function renderContactPage() {
    appContent.innerHTML = `
        <section id="contact" class="container-lg py-5 min-vh-100">
            <div class="card shadow-lg p-4 p-md-5 mx-auto" style="max-width: 700px;">
                <h1 class="text-center display-6 fw-bold text-primary mb-4 border-bottom pb-3">Get In Touch</h1>
                <p class="text-center lead text-muted mb-4">We'd love to hear your feedback, suggestions, or collaboration inquiries.</p>
                
                <form id="contactForm" onsubmit="handleContactForm(event)">
                    <div class="mb-3">
                        <label for="nameInput" class="form-label fw-semibold">Your Name</label>
                        <input type="text" class="form-control" id="nameInput" required>
                    </div>
                    <div class="mb-3">
                        <label for="emailInput" class="form-label fw-semibold">Email address</label>
                        <input type="email" class="form-control" id="emailInput" required>
                    </div>
                    <div class="mb-3">
                        <label for="messageTextarea" class="form-label fw-semibold">Your Message</label>
                        <textarea class="form-control" id="messageTextarea" rows="4" required></textarea>
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-primary btn-lg mt-3">Send Message</button>
                    </div>
                </form>
                
                <div class="text-center mt-5 pt-3 border-top">
                    <p class="fw-bold mb-1">Follow Us</p>
                    <a href="#" class="text-decoration-none mx-2 text-secondary-500 fs-4"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="text-decoration-none mx-2 text-secondary-500 fs-4"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="text-decoration-none mx-2 text-secondary-500 fs-4"><i class="bi bi-instagram"></i></a>
                </div>
            </div>
        </section>
    `;
    
    // Simple handler for the form submission
    window.handleContactForm = function(event) {
        event.preventDefault();
        
        const name = document.getElementById('nameInput').value;
        
        // Show success modal
        const successModal = new bootstrap.Modal(document.getElementById('successModalBootstrap'));
        document.getElementById('modal-message-bs').textContent = `Thank you, ${name}! Your message has been received. We'll be in touch soon.`;
        successModal.show();
        
        document.getElementById('contactForm').reset();
    }
}

// --- QUIZ LOGIC (for quiz.html) ---
let currentQuizQuestion = 0;
let userAnswers = [];
let currentScore = 0;
const quizStatus = document.getElementById('quiz-status');
const resultDetails = document.getElementById('result-details');

// Sound effects for quiz
const correctSound = new Audio('assets/correct.mp3');
const incorrectSound = new Audio('assets/incorrect.mp3');

function playSound(isCorrect) {
    if (isCorrect) {
        correctSound.currentTime = 0;
        correctSound.play();
    } else {
        incorrectSound.currentTime = 0;
        incorrectSound.play();
    }
}

function renderQuizIntro() {
    currentScore = 0; // Reset score when starting quiz
    quizContent.innerHTML = `
        <div class="text-center">
            <h2 class="fw-bold text-secondary mb-3">Are you an India Expert?</h2>
            <p class="lead mb-4">Test your knowledge of India's geography, history, and culture with ${QUIZ_QUESTIONS.length} challenging questions.</p>
            <button class="btn btn-success btn-lg shadow-sm" onclick="startQuiz()">Start Quiz</button>
        </div>
    `;
    if (quizStatus) quizStatus.textContent = '';
    if (resultDetails) resultDetails.innerHTML = '';
}

window.startQuiz = function() {
    currentQuizQuestion = 0;
    userAnswers = Array(QUIZ_QUESTIONS.length).fill(null);
    renderQuestion(currentQuizQuestion);
}

function renderQuestion(index) {
    if (index >= QUIZ_QUESTIONS.length) {
        return submitQuiz();
    }
    
    const questionData = QUIZ_QUESTIONS[index];
    const progress = ((index + 1) / QUIZ_QUESTIONS.length) * 100;
    
    const questionHtml = `
        <div class="quiz-progress-header mb-4">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div class="quiz-score">
                    <span class="badge bg-success fs-6">Score: ${currentScore}/${QUIZ_QUESTIONS.length}</span>
                </div>
                <div class="questions-left">
                    <span class="badge bg-primary fs-6">Question ${index + 1} of ${QUIZ_QUESTIONS.length}</span>
                </div>
            </div>
            <div class="progress" style="height: 8px;">
                <div class="progress-bar progress-bar-striped progress-bar-animated" 
                     role="progressbar" 
                     style="width: ${progress}%" 
                     aria-valuenow="${progress}" 
                     aria-valuemin="0" 
                     aria-valuemax="100">
                </div>
            </div>
        </div>
        <h2 class="h4 fw-bold mb-4">${index + 1}. ${questionData.question}</h2>
        <div class="d-grid gap-3" id="options-container">
            ${questionData.options.map(option => `
                <label class="quiz-option-label text-start" data-option="${option}">
                    <input type="radio" name="quiz-option-${index}" value="${option}" class="me-2" 
                           ${userAnswers[index] === option ? 'checked' : ''} 
                           onchange="updateAnswer(${index}, this.value)">
                    ${option}
                </label>
            `).join('')}
        </div>
    `;
    
    // Navigation buttons
    const navButtons = `
        <div class="d-flex justify-content-between mt-4">
            <button class="btn btn-secondary" onclick="prevQuestion()" ${index === 0 ? 'disabled' : ''}>
                <i class="bi bi-arrow-left"></i> Previous
            </button>
            ${index < QUIZ_QUESTIONS.length - 1 ? `
                <button class="btn btn-primary" onclick="nextQuestion()">
                    Next <i class="bi bi-arrow-right"></i>
                </button>
            ` : `
                <button class="btn btn-success" onclick="submitQuiz()">
                    Submit Quiz <i class="bi bi-patch-check-fill"></i>
                </button>
            `}
        </div>
    `;
    
    quizContent.innerHTML = questionHtml + navButtons;
    if (quizStatus) quizStatus.textContent = `Question ${index + 1} of ${QUIZ_QUESTIONS.length}`;
}

window.updateAnswer = function(index, answer) {
    const previousAnswer = userAnswers[index];
    userAnswers[index] = answer;
    
    // Check if the answer is correct and update score
    const isCorrect = answer === QUIZ_QUESTIONS[index].answer;
    
    // If this is a new answer (not just revisiting)
    if (!previousAnswer) {
        if (isCorrect) {
            currentScore++;
            playSound(true);
        } else {
            playSound(false);
        }
    } 
    // If changing a previous answer
    else if (previousAnswer !== answer) {
        if (isCorrect && previousAnswer !== QUIZ_QUESTIONS[index].answer) {
            currentScore++;
            playSound(true);
        } else if (!isCorrect && previousAnswer === QUIZ_QUESTIONS[index].answer) {
            currentScore--;
            playSound(false);
        }
    }
    
    // Re-render the question to update the score display
    renderQuestion(index);
}

window.prevQuestion = function() {
    if (currentQuizQuestion > 0) {
        currentQuizQuestion--;
        renderQuestion(currentQuizQuestion);
    }
}

window.nextQuestion = function() {
    if (currentQuizQuestion < QUIZ_QUESTIONS.length - 1) {
        currentQuizQuestion++;
        renderQuestion(currentQuizQuestion);
    }
}

window.submitQuiz = function() {
    // Final score is already tracked in currentScore
    const score = currentScore;
    const percentage = Math.round((score / QUIZ_QUESTIONS.length) * 100);
    
    // Play final sound based on overall performance
    if (percentage >= 70) {
        playSound(true);
    } else {
        playSound(false);
    }

    const scoreText = score >= QUIZ_QUESTIONS.length * 0.7 ? 'Excellent! 🎉' :
                      score >= QUIZ_QUESTIONS.length * 0.4 ? 'Good Effort! 👍' :
                      'Keep Exploring! 🧭';

    quizContent.innerHTML = `
        <div class="text-center py-4">
            <h2 class="display-4 fw-bolder text-primary mb-3">${scoreText}</h2>
            <p class="card-text fs-5 mb-2">You scored: <span class="fw-bolder display-5">${score} / ${QUIZ_QUESTIONS.length}</span></p>
            <p class="card-text fs-5 mb-4">Percentage: <span class="fw-bolder text-secondary">${percentage}%</span></p>
            <button class="btn btn-primary btn-lg" onclick="window.location.reload()">Try Again</button>
        </div>
        <button class="btn btn-link mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#result-details-key" aria-expanded="false" aria-controls="result-details-key">
            Show Answer Key
        </button>
    `;

    if (quizStatus) quizStatus.textContent = '';
    
    // Detailed Answer Key (collapsed by default)
    const detailHtml = QUIZ_QUESTIONS.map((q, index) => `
        <div class="card mb-3 p-3 ${userAnswers[index] === q.answer ? 'border-success' : 'border-danger'}">
            <p class="fw-bold mb-1">${index + 1}. ${q.question}</p>
            <p class="mb-1">Your Answer: <span class="fw-semibold">${userAnswers[index] || 'No Answer'}</span> ${userAnswers[index] === q.answer ? '<i class="bi bi-check-circle-fill text-success"></i>' : '<i class="bi bi-x-circle-fill text-danger"></i>'}</p>
            <p class="mb-0">Correct Answer: <span class="fw-semibold text-success">${q.answer}</span></p>
        </div>
    `).join('');

    if (resultDetails) resultDetails.innerHTML = `<div class="collapse" id="result-details-key">${detailHtml}</div>`;
}


// --- DESTINATION LOGIC (for destination.html) ---

const destinationCardsContainer = document.getElementById('destinationCards');
const stateFilterSelect = document.getElementById('stateFilter');
const searchInput = document.getElementById('destinationSearch');
const noResultsDiv = document.getElementById('noResults');
const galleryContainer = document.getElementById('galleryContainer');

function renderStateFilters() {
    const allStates = new Set();
    INDIA_DESTINATIONS.forEach(dest => allStates.add(dest.state));

    const stateOptions = Array.from(allStates).sort().map(state => 
        `<option value="${state}">${state}</option>`
    ).join('');

    stateFilterSelect.innerHTML = `<option value="all">Filter by State/Region</option>` + stateOptions;
}

function renderDestinationCards(destinations) {
    const cardHtml = destinations.map((dest, index) => `
        <div class="col reveal" style="animation-delay: ${index * 0.1}s">
            <div class="card h-100 border-0 destination-card" role="button" onclick="openDetailModal(${dest.id})">
                <img src="${dest.image}" class="card-img-top card-image" alt="${dest.name}">
                <div class="card-body p-4">
                    <h5 class="card-title fw-bold">${dest.name}</h5>
                    <p class="card-text mb-2"><i class="bi bi-geo-alt-fill text-secondary me-2"></i>${dest.state}</p>
                    <p class="card-text small">${dest.description}</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-sm btn-outline-secondary w-100">View Details</button>
                </div>
            </div>
        </div>
    `).join('');

    if (destinationCardsContainer) {
        destinationCardsContainer.innerHTML = cardHtml;
        noResultsDiv.style.display = destinations.length === 0 ? 'block' : 'none';
        document.getElementById('loadingIndicator').style.display = 'none';
        
        // Re-initialize scroll animations
        setTimeout(() => initScrollAnimations(), 100);
    }
}

window.applyFilters = function() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedState = stateFilterSelect.value;

    const filteredDestinations = INDIA_DESTINATIONS.filter(dest => {
        const matchesSearch = dest.name.toLowerCase().includes(searchTerm) || 
                              dest.state.toLowerCase().includes(searchTerm);
        const matchesState = selectedState === 'all' || dest.state === selectedState;
        
        return matchesSearch && matchesState;
    });

    renderDestinationCards(filteredDestinations);
}

window.resetFilters = function() {
    searchInput.value = '';
    stateFilterSelect.value = 'all';
    applyFilters();
}

window.openDetailModal = function(destinationId) {
    const dest = INDIA_DESTINATIONS.find(d => d.id === destinationId);
    if (!dest) return;

    const modalBody = document.getElementById('modal-body-content');
    document.getElementById('detailModalLabel').textContent = dest.name;

    modalBody.innerHTML = `
        <img src="${dest.image}" class="img-fluid rounded mb-3" alt="${dest.name}">
        <p class="fw-bold text-secondary mb-1">${dest.state}</p>
        <p class="lead">${dest.description}</p>
        <div class="row mt-4">
            <div class="col-md-6">
                <h6 class="fw-bold text-primary">Top Attractions</h6>
                <ul class="list-group list-group-flush small">
                    ${dest.attractions.map(att => `<li class="list-group-item"><i class="bi bi-star-fill text-accent me-2"></i>${att}</li>`).join('')}
                </ul>
            </div>
            <div class="col-md-6">
                <h6 class="fw-bold text-primary">Activities</h6>
                <ul class="list-group list-group-flush small">
                    ${dest.activities.map(act => `<li class="list-group-item"><i class="bi bi-activity text-accent me-2"></i>${act}</li>`).join('')}
                </ul>
            </div>
        </div>
        <p class="mt-3 small text-muted">Best Time to Visit: <span class="fw-semibold">${dest.best_time}</span></p>
    `;

    const detailModal = new bootstrap.Modal(document.getElementById('detailModal'));
    detailModal.show();
}

function renderImageGallery(images) {
    const galleryHtml = images.map((img, index) => `
        <div class="col reveal" style="animation-delay: ${index * 0.05}s">
            <div class="card bg-dark text-white border-0 overflow-hidden gallery-item" role="button" onclick="openImageModal('${img.url}', '${img.caption}')">
                <img src="${img.url}" class="img-fluid object-fit-cover w-100" style="height: 220px;" alt="${img.caption}">
                <div class="card-img-overlay d-flex align-items-end p-3">
                    <p class="card-text small mb-0 fw-semibold">${img.caption}</p>
                </div>
            </div>
        </div>
    `).join('');

    if (galleryContainer) {
        galleryContainer.innerHTML = galleryHtml;
        setTimeout(() => initScrollAnimations(), 100);
    }
}

window.openImageModal = function(url, caption) {
    document.getElementById('modal-image-bs').src = url;
    document.getElementById('modal-caption-bs').textContent = caption;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
}

// Helper functions for destination page
function displayAllDestinations() {
    if (typeof renderDestinationCards === 'function') {
        renderDestinationCards(INDIA_DESTINATIONS);
    }
}

function renderGallery() {
    if (typeof renderImageGallery === 'function' && typeof GALLERY_IMAGES !== 'undefined') {
        renderImageGallery(GALLERY_IMAGES);
    }
}

function enableDestinationSearchFilters() {
    const searchInput = document.getElementById('destinationSearch');
    const stateFilter = document.getElementById('stateFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }
    if (stateFilter) {
        stateFilter.addEventListener('change', applyFilters);
    }
}