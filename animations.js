/**
 * ANIMATIONS ET EFFETS VISUELS
 * Confetti, shake, micro-animations
 */

// Confetti pour célébrations
function triggerConfetti() {
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        createConfetti(colors[Math.floor(Math.random() * colors.length)]);
    }
}

function createConfetti(color) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.cssText = `
    position: fixed;
    width: 10px;
    height: 10px;
    background: ${color};
    left: ${Math.random() * 100}%;
    top: -10px;
    opacity: ${Math.random() * 0.5 + 0.5};
    transform: rotate(${Math.random() * 360}deg);
    animation: confettiFall ${Math.random() * 2 + 2}s linear forwards;
    pointer-events: none;
    z-index: 10000;
  `;

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
}

// Shake animation pour erreurs
function shakeElement(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;

    el.classList.add('shake-animation');
    setTimeout(() => el.classList.remove('shake-animation'), 600);
}

// Pulse animation pour attirer l'attention
function pulseElement(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;

    el.classList.add('pulse-animation');
    setTimeout(() => el.classList.remove('pulse-animation'), 1000);
}

// Badge notification avec animation
function showBadgeNotification(badgeName, badgeEmoji) {
    const notification = document.createElement('div');
    notification.className = 'badge-notification';
    notification.innerHTML = `
    <div class="badge-notification-content">
      <div class="badge-notification-emoji">${badgeEmoji}</div>
      <div class="badge-notification-text">
        <div class="badge-notification-title">Nouveau badge !</div>
        <div class="badge-notification-name">${badgeName}</div>
      </div>
    </div>
  `;

    document.body.appendChild(notification);

    // Animation entrée
    setTimeout(() => notification.classList.add('show'), 10);

    // Animation sortie
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Micro-animation au survol
function addHoverEffect(element) {
    if (!element) return;

    element.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });

    element.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });
}

// Progress bar animée
function animateProgressBar(elementId, targetPercent, duration = 1000) {
    const el = document.getElementById(elementId);
    if (!el) return;

    const start = parseFloat(el.style.width) || 0;
    const diff = targetPercent - start;
    const startTime = Date.now();

    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = start + (diff * eased);

        el.style.width = current + '%';

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Counter animation (nombre qui monte)
function animateCounter(elementId, targetValue, duration = 1000) {
    const el = document.getElementById(elementId);
    if (!el) return;

    const start = parseInt(el.textContent) || 0;
    const diff = targetValue - start;
    const startTime = Date.now();

    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (diff * eased));

        el.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Ripple effect au clic
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms ease-out;
    pointer-events: none;
  `;

    ripple.className = 'ripple-effect';
    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// Appliquer ripple à tous les boutons
function initRippleEffects() {
    document.querySelectorAll('.btn-primary, .btn-secondary, .mode-card').forEach(btn => {
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.addEventListener('click', createRipple);
    });
}

// Typing effect pour texte
function typeWriter(elementId, text, speed = 50) {
    const el = document.getElementById(elementId);
    if (!el) return;

    let i = 0;
    el.textContent = '';

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Export
if (typeof window !== 'undefined') {
    window.animations = {
        confetti: triggerConfetti,
        shake: shakeElement,
        pulse: pulseElement,
        showBadge: showBadgeNotification,
        progressBar: animateProgressBar,
        counter: animateCounter,
        initRipple: initRippleEffects
    };
}
