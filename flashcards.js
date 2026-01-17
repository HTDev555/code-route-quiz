/**
 * FLASHCARDS SYSTÈME COMPLET
 * Intégré dans la page principale avec animations flip 3D
 */

// État des FlashCards
const flashcardsState = {
    currentIndex: 0,
    cards: [],
    filteredCards: [],
    flipped: false,
    markedForReview: new Set(),
    knownCards: new Set(),
    currentTheme: 'all'
};

// Initialiser FlashCards
function initFlashCards() {
    // Convertir questions en flashcards
    flashcardsState.cards = QUESTIONS_DB.map(q => ({
        id: q.id,
        question: q.question,
        answer: q.options[q.correctAnswer],
        explanation: q.explanation,
        theme: q.category,
        tip: q.tip
    }));

    flashcardsState.filteredCards = [...flashcardsState.cards];
    loadFlashCardsProgress();
}

// Charger progression FlashCards
function loadFlashCardsProgress() {
    const saved = localStorage.getItem('flashcards_progress');
    if (saved) {
        const data = JSON.parse(saved);
        flashcardsState.markedForReview = new Set(data.review || []);
        flashcardsState.knownCards = new Set(data.known || []);
    }
}

// Sauvegarder progression
function saveFlashCardsProgress() {
    localStorage.setItem('flashcards_progress', JSON.stringify({
        review: Array.from(flashcardsState.markedForReview),
        known: Array.from(flashcardsState.knownCards)
    }));
}

// Afficher FlashCard actuelle
function showCurrentFlashCard() {
    const card = flashcardsState.filteredCards[flashcardsState.currentIndex];
    if (!card) return;

    const container = document.getElementById('flashcard-content');
    const counter = document.getElementById('flashcard-counter');
    const progress = document.getElementById('flashcard-progress-fill');

    // Réinitialiser flip
    flashcardsState.flipped = false;
    container.classList.remove('flipped');

    // Contenu
    const front = container.querySelector('.flashcard-front');
    const back = container.querySelector('.flashcard-back');

    front.querySelector('.flashcard-question').textContent = card.question;
    front.querySelector('.flashcard-theme').textContent = card.theme;

    back.querySelector('.flashcard-answer').textContent = card.answer;
    back.querySelector('.flashcard-explanation').textContent = card.explanation;

    // Compteur et progression
    counter.textContent = `${flashcardsState.currentIndex + 1} / ${flashcardsState.filteredCards.length}`;
    const percentage = ((flashcardsState.currentIndex + 1) / flashcardsState.filteredCards.length) * 100;
    progress.style.width = percentage + '%';

    // Marquer états
    updateFlashCardMarkers(card.id);
}

// Mettre à jour marqueurs
function updateFlashCardMarkers(cardId) {
    const reviewBtn = document.getElementById('btn-mark-review');
    const knownBtn = document.getElementById('btn-mark-known');

    reviewBtn.classList.toggle('active', flashcardsState.markedForReview.has(cardId));
    knownBtn.classList.toggle('active', flashcardsState.knownCards.has(cardId));
}

// Flip FlashCard
function flipFlashCard() {
    const container = document.getElementById('flashcard-content');
    flashcardsState.flipped = !flashcardsState.flipped;
    container.classList.toggle('flipped');

    // Son si activé
    playSound('flip');
}

// Navigation FlashCards
function nextFlashCard() {
    if (flashcardsState.currentIndex < flashcardsState.filteredCards.length - 1) {
        flashcardsState.currentIndex++;
        showCurrentFlashCard();
        playSound('swipe');
    }
}

function previousFlashCard() {
    if (flashcardsState.currentIndex > 0) {
        flashcardsState.currentIndex--;
        showCurrentFlashCard();
        playSound('swipe');
    }
}

// Marquer pour révision
function markForReview() {
    const card = flashcardsState.filteredCards[flashcardsState.currentIndex];
    if (flashcardsState.markedForReview.has(card.id)) {
        flashcardsState.markedForReview.delete(card.id);
    } else {
        flashcardsState.markedForReview.add(card.id);
        flashcardsState.knownCards.delete(card.id); // Retirer de "connues"
    }
    saveFlashCardsProgress();
    updateFlashCardMarkers(card.id);
    showToast(flashcardsState.markedForReview.has(card.id) ? '📌 Marquée pour révision' : 'Retirée de la révision');
}

// Marquer comme connue
function markAsKnown() {
    const card = flashcardsState.filteredCards[flashcardsState.currentIndex];
    if (flashcardsState.knownCards.has(card.id)) {
        flashcardsState.knownCards.delete(card.id);
    } else {
        flashcardsState.knownCards.add(card.id);
        flashcardsState.markedForReview.delete(card.id); // Retirer de "révision"
    }
    saveFlashCardsProgress();
    updateFlashCardMarkers(card.id);
    showToast(flashcardsState.knownCards.has(card.id) ? '✓ Marquée comme connue' : 'Retirée des connues');

    // Passer à la suivante automatiquement si marquée connue
    if (flashcardsState.knownCards.has(card.id)) {
        setTimeout(nextFlashCard, 500);
    }
}

// Filtrer par thème
function filterFlashCardsByTheme(theme) {
    flashcardsState.currentTheme = theme;
    flashcardsState.currentIndex = 0;

    if (theme === 'all') {
        flashcardsState.filteredCards = [...flashcardsState.cards];
    } else if (theme === 'review') {
        flashcardsState.filteredCards = flashcardsState.cards.filter(c =>
            flashcardsState.markedForReview.has(c.id)
        );
    } else if (theme === 'unknown') {
        flashcardsState.filteredCards = flashcardsState.cards.filter(c =>
            !flashcardsState.knownCards.has(c.id)
        );
    } else {
        flashcardsState.filteredCards = flashcardsState.cards.filter(c => c.theme === theme);
    }

    if (flashcardsState.filteredCards.length > 0) {
        showCurrentFlashCard();
        updateFlashCardStats();
    } else {
        showToast('Aucune carte dans cette catégorie');
    }
}

// Statistiques FlashCards
function updateFlashCardStats() {
    const totalCards = flashcardsState.cards.length;
    const knownCount = flashcardsState.knownCards.size;
    const reviewCount = flashcardsState.markedForReview.size;
    const unknownCount = totalCards - knownCount;

    document.getElementById('flashcard-known-count').textContent = knownCount;
    document.getElementById('flashcard-review-count').textContent = reviewCount;
    document.getElementById('flashcard-unknown-count').textContent = unknownCount;
    document.getElementById('flashcard-total-count').textContent = totalCards;

    // Mise à jour progress bars
    const knownPercent = (knownCount / totalCards) * 100;
    const reviewPercent = (reviewCount / totalCards) * 100;

    document.getElementById('flashcard-known-bar').style.width = knownPercent + '%';
    document.getElementById('flashcard-review-bar').style.width = reviewPercent + '%';
}

// Navigation clavier FlashCards
function handleFlashCardKeyboard(e) {
    if (document.getElementById('screen-flashcards').classList.contains('active')) {
        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                previousFlashCard();
                break;
            case 'ArrowRight':
                e.preventDefault();
                nextFlashCard();
                break;
            case ' ':
            case 'Enter':
                e.preventDefault();
                flipFlashCard();
                break;
            case 'r':
            case 'R':
                e.preventDefault();
                markForReview();
                break;
            case 'k':
            case 'K':
                e.preventDefault();
                markAsKnown();
                break;
        }
    }
}

// Mélanger cartes
function shuffleFlashCards() {
    flashcardsState.filteredCards.sort(() => Math.random() - 0.5);
    flashcardsState.currentIndex = 0;
    showCurrentFlashCard();
    showToast('🔀 Cartes mélangées !');
}

// Export pour utilisation globale
if (typeof window !== 'undefined') {
    window.flashcards = {
        init: initFlashCards,
        show: showCurrentFlashCard,
        flip: flipFlashCard,
        next: nextFlashCard,
        prev: previousFlashCard,
        markReview: markForReview,
        markKnown: markAsKnown,
        filter: filterFlashCardsByTheme,
        shuffle: shuffleFlashCards
    };
}
