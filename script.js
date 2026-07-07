// ============ MENU MOBILE ============
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !expanded);
});

// Fechar menu ao clicar em link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// ============ HEADER SCROLL EFFECT ============
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
});

// ============ BOTÃO VOLTAR AO TOPO ============
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============ FAQ ACCORDION ============
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
    });
});

// ============ QUIZ ============
document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', () => {
        const feedback = document.getElementById('quizFeedback');
        const isCorrect = option.dataset.correct === 'true';
        
        document.querySelectorAll('.quiz-option').forEach(opt => {
            opt.disabled = true;
            opt.style.pointerEvents = 'none';
        });
        
        if (isCorrect) {
            option.classList.add('correct');
            feedback.textContent = '✓ Parabéns! Resposta correta. O plantio direto protege o solo contra erosão e mantém a umidade.';
            feedback.className = 'quiz-feedback success show';
        } else {
            option.classList.add('wrong');
            feedback.textContent = '✗ Ops! Resposta incorreta. O plantio direto é a prática correta para conservação do solo.';
            feedback.className = 'quiz-feedback error show';
            // Mostra a correta
            document.querySelector('.quiz-option[data-correct="true"]').classList.add('correct');
        }
        
        // Reset após 5 segundos
        setTimeout(() => {
            document.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('correct', 'wrong');
                opt.disabled = false;
                opt.style.pointerEvents = 'auto';
            });
            feedback.classList.remove('show');
        }, 5000);
    });
});

// ============ ANIMAÇÃO DE NÚMEROS ============
function animateNumber(el) {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const start = performance.now();
    
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = value + (target === 98 ? '%' : '+');
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// ============ INTERSECTION OBSERVER (ANIMAÇÕES AO SCROLL) ============
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Anima números quando visíveis
            if (entry.target.classList.contains('sobre-texto')) {
                document.querySelectorAll('.stat-number').forEach(animateNumber);
            }
            
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ============ FORMULÁRIO DE CONTATO ============
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const message = document.getElementById('formMessage');
    message.classList.add('show');
    e.target.reset();
    setTimeout(() => message.classList.remove('show'), 5000);
});
