/**
 * SONS ET FEEDBACK AUDIO
 * Système de sons désactivables
 */

const soundsEnabled = {
    value: localStorage.getItem('sounds_enabled') !== 'false' // Activé par défaut
};

// Son correcte
const soundCorrect = {
    play() {
        if (!soundsEnabled.value) return;
        const audio = new Audio();
        audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNQcZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDeJ0fPTgjMGHm7A7+OZSA0PVqzn7LJhGgU+ltryxnMpBSh+y/LaizsIGGe56+OdTQ4PWK7p67FgGgc/mdnx';
        audio.volume = 0.3;
        audio.play().catch(() => { });
    }
};

// Son incorrecte
const soundIncorrect = {
    play() {
        if (!soundsEnabled.value) return;
        const audio = new Audio();
        audio.src = 'data:audio/wav;base64,UklGRigBAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQBAAA=';
        audio.volume = 0.2;
        audio.play().catch(() => { });
    }
};

// Son flip
const soundFlip = {
    play() {
        if (!soundsEnabled.value) return;
        const audio = new Audio();
        audio.volume = 0.15;
        // Ultra-court beep
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.value = 400;
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
};

// Son swipe
const soundSwipe = {
    play() {
        if (!soundsEnabled.value) return;
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
};

// Son click
const soundClick = {
    play() {
        if (!soundsEnabled.value) return;
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.value = 800;
        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.05);
    }
};

// Son level up
const soundLevelUp = {
    play() {
        if (!soundsEnabled.value) return;
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.3);
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    }
};

// Fonction générique
function playSound(type) {
    const sounds = {
        correct: soundCorrect,
        incorrect: soundIncorrect,
        flip: soundFlip,
        swipe: soundSwipe,
        click: soundClick,
        levelup: soundLevelUp
    };

    if (sounds[type]) {
        sounds[type].play();
    }
}

// Toggle sons
function toggleSounds() {
    soundsEnabled.value = !soundsEnabled.value;
    localStorage.setItem('sounds_enabled', soundsEnabled.value.toString());

    // Mettre à jour le toggle dans les paramètres
    const toggle = document.getElementById('toggle-sounds');
    if (toggle) {
        toggle.checked = soundsEnabled.value;
    }

    // Feedback
    if (soundsEnabled.value) {
        playSound('click');
    }

    return soundsEnabled.value;
}

// Export
if (typeof window !== 'undefined') {
    window.sounds = {
        play: playSound,
        toggle: toggleSounds,
        isEnabled: () => soundsEnabled.value
    };
}
