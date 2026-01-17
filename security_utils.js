/**
 * SECURITY UTILITIES - XSS Protection
 * Sécurisation contre les injections XSS
 */

/**
 * Échappe les caractères HTML dangereux
 * @param {string} text - Texte à échapper
 * @returns {string} - Texte sécurisé
 */
function escapeHTML(text) {
    if (typeof text !== 'string') return '';

    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
        '/': '&#x2F;'
    };

    return text.replace(/[&<>"'/]/g, (char) => map[char]);
}

/**
 * Sanitise et crée un élément HTML sécurisé
 * @param {string} tag - Nom de la balise
 * @param {object} attributes - Attributs (sécurisés)
 * @param {string} textContent - Contenu textuel (sécurisé)
 * @returns {HTMLElement}
 */
function createSafeElement(tag, attributes = {}, textContent = '') {
    const el = document.createElement(tag);

    // Ajouter attributs sécurisés
    Object.keys(attributes).forEach(key => {
        if (key === 'class') {
            el.className = attributes[key];
        } else if (key.startsWith('data-')) {
            el.setAttribute(key, String(attributes[key]));
        } else if (key === 'id') {
            el.id = attributes[key];
        } else if (key === 'aria-') {
            el.setAttribute(key, attributes[key]);
        }
    });

    // Contenu textuel sécurisé
    if (textContent) {
        el.textContent = textContent;
    }

    return el;
}

/**
 * Crée un bouton d'option de quiz sécurisé
 * @param {string} letter - Lettre de l'option (A, B, C, D)
 * @param {string} text - Texte de l'option
 * @param {number} index - Index de l'option
 * @returns {HTMLElement}
 */
function createSafeOptionButton(letter, text, index) {
    const btn = createSafeElement('button', {
        class: 'option-btn',
        'data-option': index
    });

    const letterEl = createSafeElement('div', { class: 'option-letter' }, letter);
    const textEl = createSafeElement('div', { class: 'option-text' }, text);

    btn.appendChild(letterEl);
    btn.appendChild(textEl);

    return btn;
}

/**
 * Throttle : limite l'exécution d'une fonction
 * @param {Function} func - Fonction à throttler
 * @param {number} delay - Délai minimum entre exécutions (ms)
 * @returns {Function}
 */
function throttle(func, delay = 300) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            return func.apply(this, args);
        }
    };
}

/**
 * Debounce : retarde l'exécution d'une fonction
 * @param {Function} func - Fonction à debouncer
 * @param {number} delay - Délai d'attente (ms)
 * @returns {Function}
 */
function debounce(func, delay = 300) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Valide une entrée utilisateur (réponse libre)
 * @param {string} input - Texte saisi par l'utilisateur
 * @param {number} maxLength - Longueur maximale autorisée
 * @returns {string} - Texte validé et nettoyé
 */
function validateUserInput(input, maxLength = 500) {
    if (typeof input !== 'string') return '';

    // Tronquer si trop long
    let cleaned = input.slice(0, maxLength);

    // Nettoyer espaces excessifs
    cleaned = cleaned.trim().replace(/\s+/g, ' ');

    return cleaned;
}

/**
 * Compare deux chaînes de manière insensible à la casse et aux accents
 * @param {string} a - Première chaîne
 * @param {string} b - Deuxième chaîne
 * @returns {boolean}
 */
function fuzzyMatch(a, b) {
    if (!a || !b) return false;

    const normalize = (str) => str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Enlever accents
        .replace(/[^\w\s]/g, '') // Enlever ponctuation
        .trim();

    return normalize(a) === normalize(b);
}

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        escapeHTML,
        createSafeElement,
        createSafeOptionButton,
        throttle,
        debounce,
        validateUserInput,
        fuzzyMatch
    };
}
