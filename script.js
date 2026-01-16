/* ═══════════════════════════════════════════════════════
   CODE ROUTE PRO - JAVASCRIPT APPLICATION
   ═══════════════════════════════════════════════════════ */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// QUESTION DATABASE - French Driving Test
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const QUESTIONS_DB = [
    // SIGNALISATION (15 questions)
    {
        id: 1, category: "Signalisation", difficulty: 1,
        question: "Que signifie ce panneau ?",
        image: "stop_sign_1768569310574.png",
        options: ["Arrêt obligatoire", "Ralentir", "Céder le passage", "Intersection"],
        correctAnswer: 0,
        explanation: "Le panneau STOP impose un arrêt complet avant la ligne.",
        tip: "STOP = Arrêt obligatoire, même si la voie est libre.",
        commonMistake: "Ralentir sans s'arrêter complètement."
    },
    {
        id: 2, category: "Signalisation", difficulty: 2,
        question: "Ce panneau indique :",
        image: "priority_road_1768569329786.png",
        options: ["Route prioritaire", "Attention danger", "Parking autorisé", "Zone résidentielle"],
        correctAnswer: 0,
        explanation: "Le losange jaune signale une route prioritaire.",
        tip: "Vous êtes prioritaire sur les intersections suivantes.",
        commonMistake: "Confondre avec un panneau de danger."
    },
    {
        id: 3, category: "Signalisation", difficulty: 1,
        question: "Quelle est la signification de ce panneau ?",
        image: "yield_sign_1768569343083.png",
        options: ["Cédez le passage", "Stop", "Priorité à droite", "Sens interdit"],
        correctAnswer: 0,
        explanation: "Triangle inversé = céder le passage aux véhicules prioritaires.",
        tip: "Ralentir et céder si nécessaire, mais pas d'arrêt obligatoire.",
        commonMistake: "S'arrêter systématiquement comme au STOP."
    },
    {
        id: 4, category: "Signalisation", difficulty: 1,
        question: "Cette limitation indique :",
        image: "speed_limit_50_1768569356706.png",
        options: ["50 km/h maximum", "50 km/h minimum", "50 mètres", "Poids 50 tonnes"],
        correctAnswer: 0,
        explanation: "Cercle rouge = interdiction. Ici, vitesse maximale 50 km/h.",
        tip: "En agglomération, 50 km/h est la règle générale.",
        commonMistake: "Dépasser légèrement 'juste de 5 km/h'."
    },
    {
        id: 5, category: "Signalisation", difficulty: 2,
        question: "À un rond-point, vous devez :",
        image: "roundabout_sign_1768569370739.png",
        options: ["Tourner à gauche", "Céder le passage aux véhicules déjà engagés", "Être prioritaire", "Klaxonner"],
        correctAnswer: 1,
        explanation: "Priorité aux véhicules circulant dans le rond-point.",
        tip: "Toujours céder le passage à gauche au rond-point.",
        commonMistake: "S'engager sans vérifier à gauche."
    },
    {
        id: 6, category: "Signalisation", difficulty: 1,
        question: "Ce panneau signifie :",
        image: "no_parking_1768569383058.png",
        options: ["Stationnement interdit", "Arrêt interdit", "Sens interdit", "Zone bleue"],
        correctAnswer: 0,
        explanation: "Panneau d'interdiction de stationner (une barre rouge).",
        tip: "Une barre = stationnement interdit. Deux barres = arrêt interdit.",
        commonMistake: "Confondre avec l'arrêt interdit (deux barres)."
    },
    {
        id: 7, category: "Signalisation", difficulty: 2,
        question: "Un feu orange signifie :",
        options: ["Accélérer pour passer", "S'arrêter sauf si dangereux", "Continuer normalement", "Klaxonner"],
        correctAnswer: 1,
        explanation: "Feu orange = arrêt obligatoire sauf si impossible sans danger.",
        tip: "Orange = stop, sauf si vous êtes trop près pour freiner.",
        commonMistake: "Accélérer pour 'griller' le feu orange."
    },
    {
        id: 8, category: "Signalisation", difficulty: 3,
        question: "Un panneau triangulaire pointe vers le haut indique :",
        options: ["Une obligation", "Un danger", "Une interdiction", "Une indication"],
        correctAnswer: 1,
        explanation: "Triangle pointe en haut = signaux de danger (virage, école, etc.).",
        tip: "Forme triangulaire rouge = attention danger à venir.",
        commonMistake: "Confondre avec les panneaux d'obligation (ronds bleus)."
    },

    // PRIORITÉS (10 questions)
    {
        id: 10, category: "Priorités", difficulty: 2,
        question: "À une intersection sans panneau, qui est prioritaire ?",
        options: ["Celui qui vient de droite", "Celui qui vient de gauche", "Le plus gros véhicule", "Celui qui klaxonne"],
        correctAnswer: 0,
        explanation: "Règle de base : priorité à droite en l'absence de signalisation.",
        tip: "Pas de panneau ? Priorité à droite !",
        commonMistake: "Penser être prioritaire sur une grande route."
    },
    {
        id: 11, category: "Priorités", difficulty: 3,
        question: "Qui est prioritaire : piéton sur passage ou véhicule prioritaire en urgence ?",
        options: ["Le piéton toujours", "Véhicule prioritaire", "Dépend de la situation", "Le plus rapide"],
        correctAnswer: 0,
        explanation: "Le piéton engagé sur un passage est TOUJOURS prioritaire.",
        tip: "Piéton > Tout, même ambulance.",
        commonMistake: "Penser que l'ambulance peut forcer le passage."
    },
    {
        id: 12, category: "Priorités", difficulty: 2,
        question: "Vous êtes sur route prioritaire. Un véhicule arrive de droite sans céder :",
        options: ["Vous passez, vous êtes prioritaire", "Vous ralentissez et vérifiez", "Vous klaxonnez fort", "Vous accélérez"],
        correctAnswer: 1,
        explanation: "Priorité ne dispense pas de prudence. Anticiper l'erreur d'autrui.",
        tip: "Avoir la priorité ≠ avoir raison dans l'accident.",
        commonMistake: "Foncer car 'j'ai la priorité'."
    },

    // VITESSE & LIMITATIONS (12 questions)
    {
        id: 20, category: "Vitesse", difficulty: 1,
        question: "Vitesse maximale en agglomération pour un véhicule léger ?",
        options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
        correctAnswer: 0,
        explanation: "50 km/h en ville, sauf indication contraire.",
        tip: "Panneau agglomération = 50 km/h automatique.",
        commonMistake: "Rouler à 60 km/h 'car tout le monde le fait'."
    },
    {
        id: 21, category: "Vitesse", difficulty: 2,
        question: "Sur autoroute par temps de pluie, la vitesse maximale est :",
        options: ["130 km/h", "110 km/h", "90 km/h", "50 km/h"],
        correctAnswer: 1,
        explanation: "Pluie : -20 km/h sur autoroute (130 → 110 km/h).",
        tip: "Pluie = réduire de 20 km/h sur autoroute et voie rapide.",
        commonMistake: "Garder 130 km/h sous la pluie."
    },
    {
        id: 22, category: "Vitesse", difficulty: 3,
        question: "Jeune conducteur (permis < 3 ans) sur autoroute : vitesse max ?",
        options: ["130 km/h", "110 km/h", "100 km/h", "90 km/h"],
        correctAnswer: 1,
        explanation: "Jeune conducteur : 110 km/h max sur autoroute (au lieu de 130).",
        tip: "Disque A obligatoire pendant 3 ans avec limitations réduites.",
        commonMistake: "Rouler à 130 km/h dès le permis obtenu."
    },
    {
        id: 23, category: "Vitesse", difficulty: 2,
        question: "Distance de sécurité minimale sur autoroute à 130 km/h ?",
        options: ["1 seconde", "2 secondes", "3 secondes", "5 secondes"],
        correctAnswer: 1,
        explanation: "Règle des 2 secondes : repère fixe, compter 2 sec avant de passer.",
        tip: "Dire 'un crocodile, deux crocodiles' entre vous et le véhicule devant.",
        commonMistake: "Coller le véhicule devant (< 1 seconde)."
    },

    // ALCOOL, DROGUES, MÉDICAMENTS (8 questions)
    {
        id: 30, category: "Alcool & Drogues", difficulty: 1,
        question: "Taux d'alcoolémie maximum autorisé (conducteur confirmé) ?",
        options: ["0,5 g/L de sang", "0,8 g/L", "0,2 g/L", "0 g/L"],
        correctAnswer: 0,
        explanation: "0,5 g/L max pour conducteur confirmé, 0,2 g/L pour jeune.",
        tip: "≈ 2 verres standard pour 0,5 g/L (mais varie selon personne).",
        commonMistake: "Penser pouvoir boire 3-4 verres sans dépasser."
    },
    {
        id: 31, category: "Alcool & Drogues", difficulty: 2,
        question: "Pour éliminer l'alcool, le plus efficace est :",
        options: ["Boire du café", "Attendre (temps)", "Manger beaucoup", "Prendre une douche froide"],
        correctAnswer: 1,
        explanation: "Seul le temps élimine l'alcool. Rien d'autre ne fonctionne.",
        tip: "0,15 g/L par heure environ. Donc 3h pour 0,5 g/L.",
        commonMistake: "Croire que café ou douche 'dégrisent'."
    },
    {
        id: 32, category: "Alcool & Drogues", difficulty: 3,
        question: "Dépistage de drogue positif, même sans signes d'ivresse :",
        options: ["Amende simple", "Retrait de permis possible + prison", "Avertissement", "Stage obligatoire"],
        correctAnswer: 1,
        explanation: "Conduite sous stupéfiants = délit : 2 ans prison, 4500€, retrait permis.",
        tip: "Cannabis détectable plusieurs jours/semaines après consommation.",
        commonMistake: "Penser que 'ça va, j'ai fumé il y a 2 jours'."
    },

    // SÉCURITÉ ROUTIÈRE (12 questions)
    {
        id: 40, category: "Sécurité", difficulty: 1,
        question: "Le port de la ceinture est obligatoire :",
        options: ["Seulement sur autoroute", "À l'avant uniquement", "À l'avant et à l'arrière", "Seulement hors ville"],
        correctAnswer: 2,
        explanation: "Ceinture obligatoire partout, avant ET arrière.",
        tip: "Ceinture = -50% de mortalité en cas d'accident.",
        commonMistake: "Détacher la ceinture en ville ou sur courtes distances."
    },
    {
        id: 41, category: "Sécurité", difficulty: 2,
        question: "Enfant de 8 ans doit être installé :",
        options: ["Siège auto adapté ou rehausseur", "Ceinture adulte", "À l'avant sans siège", "Debout à l'arrière"],
        correctAnswer: 0,
        explanation: "Jusqu'à 10 ans ou 135 cm : siège auto/rehausseur obligatoire.",
        tip: "Choisir siège homologué selon poids et taille de l'enfant.",
        commonMistake: "Mettre ceinture adulte directement pour un enfant de 8 ans."
    },
    {
        id: 42, category: "Sécurité", difficulty: 2,
        question: "En cas de crevaison sur autoroute, vous devez :",
        options: ["Réparer sur place", "Mettre gilet + triangle, se mettre en sécurité", "Appeler sans sortir", "Continuer doucement"],
        correctAnswer: 1,
        explanation: "Gilet jaune, triangle à 30m, sortir du véhicule côté sécurité.",
        tip: "Se mettre derrière glissière, ne JAMAIS rester dans la voiture.",
        commonMistake: "Rester dans le véhicule en attendant les secours."
    },

    // CONDUCTEUR & USAGERS (8 questions)
    {
        id: 50, category: "Conducteur", difficulty: 2,
        question: "Vision d'un rétroviseur intérieur :",
        options: ["Tout l'arrière du véhicule", "Une partie, avec angle mort", "180° complet", "Seulement la route"],
        correctAnswer: 1,
        explanation: "Rétroviseurs ne montrent pas tout : angles morts existent.",
        tip: "Toujours tourner la tête avant de changer de file.",
        commonMistake: "Se fier uniquement aux rétroviseurs pour déboîter."
    },
    {
        id: 51, category: "Conducteur", difficulty: 1,
        question: "Au téléphone en conduisant (sans kit mains-libres) :",
        options: ["Autorisé si court", "Interdit et sanctionné", "Autorisé en ville", "Autorisé à l'arrêt moteur tournant"],
        correctAnswer: 1,
        explanation: "Téléphone en main = interdit : 135€ + 3 points.",
        tip: "Même à l'arrêt moteur tournant c'est interdit !",
        commonMistake: "Répondre 'vite' en pensant que ça passe."
    },

    // ROUTE & ENVIRONNEMENT (10 questions)
    {
        id: 60, category: "Route", difficulty: 2,
        question: "Par temps de brouillard (visibilité < 50m), vitesse maximum ?",
        options: ["90 km/h", "70 km/h", "50 km/h", "30 km/h"],
        correctAnswer: 2,
        explanation: "Brouillard épais (< 50m) = 50 km/h maximum.",
        tip: "Feux de brouillard + feux de croisement obligatoires.",
        commonMistake: "Rouler à 90 km/h avec brouillard."
    },
    {
        id: 61, category: "Route", difficulty: 3,
        question: "Aquaplaning : que faire ?",
        options: ["Freiner fort", "Accélérer", "Débrayer, ne pas freiner, tenir le volant", "Tourner à gauche"],
        correctAnswer: 2,
        explanation: "Aquaplaning : lever le pied, débrayer, tenir le volant droit, ne PAS freiner.",
        tip: "Laisser le véhicule ralentir naturellement pour retrouver adhérence.",
        commonMistake: "Freiner brusquement = perte totale de contrôle."
    },

    // MÉCANIQUE & ENTRETIEN (8 questions)
    {
        id: 70, category: "Mécanique", difficulty: 2,
        question: "Pression des pneus : à vérifier :",
        options: ["À chaud après trajet", "À froid", "Peu importe", "Seulement en garage"],
        correctAnswer: 1,
        explanation: "Pression pneus se vérifie à froid (avant roulage).",
        tip: "Vérifier pression mensuelle + avant longs trajets.",
        commonMistake: "Vérifier après avoir roulé (pression gonflée par chaleur)."
    },
    {
        id: 71, category: "Mécanique", difficulty: 1,
        question: "Voyant rouge moteur s'allume :",
        options: ["Continue, ce n'est rien", "Arrêter le véhicule rapidement", "Accélérer", "Vérifier dans 100 km"],
        correctAnswer: 1,
        explanation: "Voyant rouge = danger immédiat, arrêt impératif.",
        tip: "Rouge = stop. Orange = surveillance.",
        commonMistake: "Continuer 'jusqu'au garage'."
    },

    // PREMIERS SECOURS (6 questions)
    {
        id: 80, category: "Premiers Secours", difficulty: 1,
        question: "Numéro d'urgence européen ?",
        options: ["15", "17", "18", "112"],
        correctAnswer: 3,
        explanation: "112 = numéro d'urgence unique européen (tous services).",
        tip: "112 fonctionne même sans réseau de votre opérateur.",
        commonMistake: "Oublier le 112 et chercher le bon numéro."
    },
    {
        id: 81, category: "Premiers Secours", difficulty: 2,
        question: "Victime inconsciente qui respire :",
        options: ["Position Latérale de Sécurité (PLS)", "Bouche-à-bouche", "Massage cardiaque", "La laisser sur le dos"],
        correctAnswer: 0,
        explanation: "Inconscient + respire = PLS pour éviter étouffement.",
        tip: "PLS protège les voies aériennes.",
        commonMistake: "Laisser sur le dos = risque d'étouffement par langue ou vomi."
    },
    {
        id: 82, category: "Premiers Secours", difficulty: 3,
        question: "Victime saigne abondamment du bras :",
        options: ["Garrot immédiat", "Compression directe de la plaie", "Attendre les secours", "Nettoyer d'abord"],
        correctAnswer: 1,
        explanation: "Hémorragie : compression directe forte et continue sur la plaie.",
        tip: "Garrot = dernier recours si compression inefficace.",
        commonMistake: "Faire garrot systématiquement = risque amputation."
    },

    // ÉCO-CONDUITE (8 questions)
    {
        id: 90, category: "Éco-conduite", difficulty: 2,
        question: "Pour consommer moins de carburant :",
        options: ["Accélérations brutales", "Conduite souple anticipée", "Fenêtres ouvertes sur autoroute", "Rouler au point mort"],
        correctAnswer: 1,
        explanation: "Conduite souple, anticipation, rapports élevés = -20% consommation.",
        tip: "Anticiper pour éviter freinages/accélérations inutiles.",
        commonMistake: "Penser que vitesse rapide = économie."
    },
    {
        id: 91, category: "Éco-conduite", difficulty: 2,
        question: "Climatisation augmente la consommation de :",
        options: ["5%", "10%", "15-25%", "50%"],
        correctAnswer: 2,
        explanation: "Clim = +15 à 25% de consommation en ville.",
        tip: "Préférer aération en ville, clim sur route.",
        commonMistake: "Laisser clim en permanence."
    }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CATEGORIES & BADGES CONFIGURATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const CATEGORIES = [
    { id: "Signalisation", name: "Signalisation", icon: "🚦" },
    { id: "Priorités", name: "Priorités", icon: "⚠️" },
    { id: "Vitesse", name: "Vitesse", icon: "🏎️" },
    { id: "Alcool & Drogues", name: "Alcool & Drogues", icon: "🚫" },
    { id: "Sécurité", name: "Sécurité", icon: "🦺" },
    { id: "Conducteur", name: "Conducteur", icon: "👤" },
    { id: "Route", name: "Route", icon: "🛣️" },
    { id: "Mécanique", name: "Mécanique", icon: "🔧" },
    { id: "Premiers Secours", name: "Premiers Secours", icon: "🚑" },
    { id: "Éco-conduite", name: "Éco-conduite", icon: "🌱" }
];

const BADGES = [
    { id: "first_step", name: "Premier Pas", icon: "🎯", condition: q => q >= 1 },
    { id: "streak_5", name: "Série 5", icon: "🔥", condition: (q, s) => s >= 5 },
    { id: "streak_10", name: "Série 10", icon: "⚡", condition: (q, s) => s >= 10 },
    { id: "streak_20", name: "Série 20", icon: "💥", condition: (q, s) => s >= 20 },
    { id: "exam_passed", name: "Examen Réussi", icon: "🏆" },
    { id: "perfect_exam", name: "Sans Faute", icon: "💎" },
    { id: "speed_demon", name: "Éclair", icon: "⚡" },
    { id: "level_5", name: "Expert", icon: "🎓", condition: (q, s, l) => l >= 5 },
    { id: "level_10", name: "Maître", icon: "👑", condition: (q, s, l) => l >= 10 }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// APPLICATION STATE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

class AppState {
    constructor() {
        this.loadProgress();
    }

    loadProgress() {
        const saved = localStorage.getItem('codeRouteProgress');
        if (saved) {
            Object.assign(this, JSON.parse(saved));
        } else {
            this.level = 1;
            this.xp = 0;
            this.totalQuestions = 0;
            this.correctAnswers = 0;
            this.streak = 0;
            this.maxStreak = 0;
            this.categoryStats = {};
            this.errorHistory = [];
            this.badges = [];
            this.examResults = [];
            this.settings = {
                darkMode: false,
                sounds: true,
                vibrations: true
            };
        }
    }

    save() {
        localStorage.setItem('codeRouteProgress', JSON.stringify(this));
    }

    addXP(amount) {
        this.xp += amount;
        const oldLevel = this.level;
        this.level = Math.floor(this.xp / 1000) + 1;
        this.save();
        return this.level > oldLevel;
    }

    recordAnswer(questionId, correct, category) {
        this.totalQuestions++;
        if (correct) {
            this.correctAnswers++;
            this.streak++;
            this.maxStreak = Math.max(this.maxStreak, this.streak);
        } else {
            this.streak = 0;
            if (!this.errorHistory.includes(questionId)) {
                this.errorHistory.push(questionId);
            }
        }

        if (!this.categoryStats[category]) {
            this.categoryStats[category] = { total: 0, correct: 0 };
        }
        this.categoryStats[category].total++;
        if (correct) this.categoryStats[category].correct++;

        this.save();
    }

    unlockBadge(badgeId) {
        if (!this.badges.includes(badgeId)) {
            this.badges.push(badgeId);
            this.save();
            return true;
        }
        return false;
    }

    getSuccessRate() {
        return this.totalQuestions > 0
            ? Math.round((this.correctAnswers / this.totalQuestions) * 100)
            : 0;
    }

    getCategoryRate(category) {
        const stats = this.categoryStats[category];
        return stats && stats.total > 0
            ? Math.round((stats.correct / stats.total) * 100)
            : 0;
    }

    reset() {
        localStorage.removeItem('codeRouteProgress');
        window.location.reload();
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// QUIZ ENGINE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

class QuizEngine {
    constructor(mode, category = null) {
        this.mode = mode;
        this.category = category;
        this.questions = [];
        this.currentIndex = 0;
        this.score = 0;
        this.startTime = Date.now();
        this.hintUsed = false;
        this.generateQuestions();
    }

    generateQuestions() {
        let pool = [...QUESTIONS_DB];

        switch (this.mode) {
            case 'exam':
                this.questions = this.shuffle(pool).slice(0, 40);
                break;
            case 'training':
                this.questions = this.adaptiveSelection(pool, 20);
                break;
            case 'theme':
                pool = pool.filter(q => q.category === this.category);
                this.questions = this.shuffle(pool).slice(0, 20);
                break;
            case 'errors':
                pool = pool.filter(q => state.errorHistory.includes(q.id));
                this.questions = this.shuffle(pool);
                break;
            case 'difficult':
                pool = pool.filter(q => q.difficulty >= 3);
                this.questions = this.shuffle(pool).slice(0, 20);
                break;
        }
    }

    adaptiveSelection(pool, count) {
        const weakCategories = this.getWeakCategories();
        const selected = [];

        // 60% from weak categories
        const weakPool = pool.filter(q => weakCategories.includes(q.category));
        selected.push(...this.shuffle(weakPool).slice(0, Math.floor(count * 0.6)));

        // 20% from errors
        const errorPool = pool.filter(q => state.errorHistory.includes(q.id));
        selected.push(...this.shuffle(errorPool).slice(0, Math.floor(count * 0.2)));

        // 20% random
        const remaining = pool.filter(q => !selected.includes(q));
        selected.push(...this.shuffle(remaining).slice(0, Math.floor(count * 0.2)));

        return this.shuffle(selected).slice(0, count);
    }

    getWeakCategories() {
        return CATEGORIES
            .map(cat => ({
                id: cat.id,
                rate: state.getCategoryRate(cat.id)
            }))
            .sort((a, b) => a.rate - b.rate)
            .slice(0, 3)
            .map(c => c.id);
    }

    shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    getCurrentQuestion() {
        return this.questions[this.currentIndex];
    }

    answerQuestion(answerIndex) {
        const q = this.getCurrentQuestion();
        const correct = answerIndex === q.correctAnswer;

        if (correct) this.score++;

        let xpEarned = correct ? 10 : 2;
        if (q.difficulty >= 3) xpEarned *= 1.5;
        if (state.streak > 5) xpEarned *= 2;
        if (this.mode === 'difficult') xpEarned *= 2;
        if (this.hintUsed) xpEarned -= 5;

        xpEarned = Math.max(1, Math.floor(xpEarned));

        const leveledUp = state.addXP(xpEarned);
        state.recordAnswer(q.id, correct, q.category);

        this.hintUsed = false;

        return { correct, xpEarned, leveledUp };
    }

    nextQuestion() {
        this.currentIndex++;
    }

    isFinished() {
        return this.currentIndex >= this.questions.length;
    }

    getResults() {
        const duration = Math.floor((Date.now() - this.startTime) / 1000);
        const passed = this.mode === 'exam' ? this.score >= 35 : this.score >= this.questions.length * 0.7;

        if (this.mode === 'exam') {
            state.examResults.push({
                date: Date.now(),
                score: this.score,
                total: this.questions.length,
                passed,
                duration
            });
            state.save();
        }

        return {
            score: this.score,
            total: this.questions.length,
            percentage: Math.round((this.score / this.questions.length) * 100),
            duration,
            passed
        };
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// UI CONTROLLER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

let state, quiz, timer;

function init() {
    state = new AppState();
    applySettings();
    setupEventListeners();
    updateHomeScreen();

    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('app').classList.remove('hidden');
    }, 2000);
}

function setupEventListeners() {
    // Navigation
    document.getElementById('btn-settings').onclick = () => showScreen('screen-settings');
    document.getElementById('btn-exam-mode').onclick = () => startQuiz('exam');
    document.getElementById('btn-training-mode').onclick = () => startQuiz('training');
    document.getElementById('btn-theme-mode').onclick = () => showScreen('screen-themes');
    document.getElementById('btn-errors-mode').onclick = () => startQuiz('errors');
    document.getElementById('btn-difficult-mode').onclick = () => startQuiz('difficult');

    // Back buttons
    document.getElementById('btn-back-themes').onclick = () => showScreen('screen-home');
    document.getElementById('btn-back-stats').onclick = () => showScreen('screen-home');
    document.getElementById('btn-back-settings').onclick = () => showScreen('screen-home');
    document.getElementById('btn-quit-quiz').onclick = quitQuiz;

    // Results
    document.getElementById('btn-home').onclick = () => showScreen('screen-home');
    document.getElementById('btn-view-stats').onclick = () => showScreen('screen-stats');

    // Settings
    document.getElementById('toggle-dark-mode').onchange = toggleDarkMode;
    document.getElementById('toggle-sounds').onchange = e => {
        state.settings.sounds = e.target.checked;
        state.save();
    };
    document.getElementById('toggle-vibrations').onchange = e => {
        state.settings.vibrations = e.target.checked;
        state.save();
    };
    document.getElementById('btn-reset-progress').onclick = () => {
        showConfirmModal(
            '🗑️ Réinitialiser',
            'Êtes-vous sûr de vouloir réinitialiser toute votre progression ? Cette action est irréversible.',
            () => state.reset()
        );
    };

    renderThemesList();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');

    if (screenId === 'screen-home') updateHomeScreen();
    if (screenId === 'screen-stats') updateStatsScreen();
}

function updateHomeScreen() {
    document.getElementById('user-level').textContent = state.level;
    document.getElementById('level-number').textContent = state.level;

    const xpForNext = state.level * 1000;
    const currentLevelXP = state.xp % 1000;
    document.getElementById('current-xp').textContent = currentLevelXP;
    document.getElementById('next-level-xp').textContent = 1000;
    document.getElementById('xp-fill').style.width = (currentLevelXP / 1000 * 100) + '%';

    document.getElementById('stat-total').textContent = state.totalQuestions;
    document.getElementById('stat-correct').textContent = state.getSuccessRate() + '%';
    document.getElementById('stat-badges').textContent = state.badges.length;

    const streakBadge = document.getElementById('streak-badge');
    if (state.streak > 0) {
        streakBadge.classList.remove('hidden');
        document.getElementById('streak-count').textContent = state.streak;
    } else {
        streakBadge.classList.add('hidden');
    }

    const errorsCount = document.getElementById('errors-count');
    errorsCount.textContent = state.errorHistory.length > 0
        ? `${state.errorHistory.length} erreur(s) à revoir`
        : 'Aucune erreur enregistrée';
}

function renderThemesList() {
    const container = document.getElementById('themes-list');
    container.innerHTML = CATEGORIES.map(cat => {
        const stats = state.categoryStats[cat.id];
        const rate = state.getCategoryRate(cat.id);
        const total = stats ? stats.total : 0;

        return `
            <button class="theme-card" onclick="startQuiz('theme', '${cat.id}')">
                <div class="theme-info">
                    <div class="theme-name">${cat.icon} ${cat.name}</div>
                    <div class="theme-stats">${total} question(s) - ${rate}% réussite</div>
                </div>
                <div class="theme-progress">
                    <svg width="60" height="60">
                        <circle cx="30" cy="30" r="25" fill="none" stroke="var(--bg-secondary)" stroke-width="4"></circle>
                        <circle cx="30" cy="30" r="25" fill="none" stroke="var(--primary)" stroke-width="4"
                            stroke-dasharray="157" stroke-dashoffset="${157 - (157 * rate / 100)}"
                            transform="rotate(-90 30 30)" stroke-linecap="round"></circle>
                    </svg>
                    <div class="theme-progress-text">${rate}%</div>
                </div>
            </button>
        `;
    }).join('');
}

function startQuiz(mode, category = null) {
    if (mode === 'errors' && state.errorHistory.length === 0) {
        showToast('Aucune erreur à réviser !', 'info');
        return;
    }

    quiz = new QuizEngine(mode, category);
    showScreen('screen-quiz');

    if (mode === 'exam') {
        startTimer();
        document.getElementById('quiz-timer').classList.remove('hidden');
    } else {
        document.getElementById('quiz-timer').classList.add('hidden');
    }

    displayQuestion();
}

function displayQuestion() {
    const q = quiz.getCurrentQuestion();

    document.getElementById('question-counter').textContent =
        `${quiz.currentIndex + 1}/${quiz.questions.length}`;
    document.getElementById('progress-fill').style.width =
        ((quiz.currentIndex / quiz.questions.length) * 100) + '%';

    document.getElementById('question-category').textContent =
        CATEGORIES.find(c => c.id === q.category)?.icon + ' ' + q.category;
    document.getElementById('question-text').textContent = q.question;

    const imgContainer = document.getElementById('question-image-container');
    if (q.image) {
        document.getElementById('question-image').src =
            `/Users/haitaieb/.gemini/antigravity/brain/963cbec4-c709-4854-8e0f-7a4073b6ff74/${q.image}`;
        imgContainer.classList.remove('hidden');
    } else {
        imgContainer.classList.add('hidden');
    }

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = q.options.map((opt, i) => `
        <button class="option-btn" onclick="selectAnswer(${i})">
            <div class="option-letter">${String.fromCharCode(65 + i)}</div>
            <div class="option-text">${opt}</div>
        </button>
    `).join('');

    document.getElementById('hint-text').classList.add('hidden');
    document.getElementById('btn-hint').classList.remove('used');
    document.getElementById('btn-hint').onclick = showHint;
    document.getElementById('answer-feedback').classList.add('hidden');
}

function showHint() {
    const q = quiz.getCurrentQuestion();
    document.getElementById('hint-text').textContent = q.tip;
    document.getElementById('hint-text').classList.remove('hidden');
    document.getElementById('btn-hint').classList.add('used');
    quiz.hintUsed = true;
    vibrate();
}

function selectAnswer(index) {
    const q = quiz.getCurrentQuestion();
    const result = quiz.answerQuestion(index);

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        btn.classList.add('disabled');
        if (i === q.correctAnswer) btn.classList.add('correct');
        if (i === index && !result.correct) btn.classList.add('incorrect');
    });

    playSound(result.correct ? 'success' : 'error');
    vibrate();

    setTimeout(() => showFeedback(result), 500);
}

function showFeedback(result) {
    const q = quiz.getCurrentQuestion();

    document.getElementById('feedback-icon').textContent = result.correct ? '🎉' : '😔';
    document.getElementById('feedback-title').textContent = result.correct ? 'Bonne réponse !' : 'Mauvaise réponse';
    document.getElementById('feedback-title').className = 'feedback-title ' + (result.correct ? 'correct' : 'incorrect');
    document.getElementById('feedback-message').textContent = result.correct
        ? 'Continuez comme ça !'
        : 'Ne vous découragez pas, chaque erreur est une leçon.';

    document.getElementById('explanation-text').textContent = q.explanation;
    document.getElementById('tip-text').textContent = q.tip;
    document.getElementById('mistake-text').textContent = q.commonMistake;
    document.getElementById('xp-earned').textContent = `+${result.xpEarned} XP`;

    document.getElementById('answer-feedback').classList.remove('hidden');
    document.getElementById('btn-next-question').onclick = nextQuestion;

    if (result.leveledUp) {
        showToast(`🎉 Niveau ${state.level} atteint !`, 'success');
    }
}

function nextQuestion() {
    quiz.nextQuestion();

    if (quiz.isFinished()) {
        showResults();
    } else {
        displayQuestion();
    }
}

function showResults() {
    if (timer) clearInterval(timer);

    const results = quiz.getResults();
    showScreen('screen-results');

    document.getElementById('results-icon').textContent = results.passed ? '🎉' : '😔';
    document.getElementById('results-title').textContent = results.passed ? 'Félicitations !' : 'Pas encore...';
    document.getElementById('results-subtitle').textContent = results.passed
        ? 'Vous avez réussi !'
        : 'Continuez à vous entraîner';

    document.getElementById('results-score').textContent = `${results.score}/${results.total}`;
    document.querySelector('.score-label').textContent = results.passed ? 'Réussi' : 'Échoué';

    const minutes = Math.floor(results.duration / 60);
    const seconds = results.duration % 60;
    document.getElementById('result-time').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('result-accuracy').textContent = results.percentage + '%';
    document.getElementById('result-xp').textContent = `+${Math.floor(results.score * 10)} XP`;

    // Animate score ring
    const circumference = 2 * Math.PI * 85;
    const offset = circumference - (results.percentage / 100 * circumference);
    document.getElementById('score-ring-progress').style.strokeDashoffset = offset;

    // Check badges
    checkBadges(results);
}

function checkBadges(results) {
    const newBadges = [];

    if (state.totalQuestions === 1) newBadges.push('first_step');
    if (state.streak >= 5) newBadges.push('streak_5');
    if (state.streak >= 10) newBadges.push('streak_10');
    if (state.streak >= 20) newBadges.push('streak_20');
    if (results.passed && quiz.mode === 'exam') newBadges.push('exam_passed');
    if (results.score === results.total && quiz.mode === 'exam') newBadges.push('perfect_exam');
    if (results.duration < 900 && quiz.mode === 'exam') newBadges.push('speed_demon');
    if (state.level >= 5) newBadges.push('level_5');
    if (state.level >= 10) newBadges.push('level_10');

    const unlocked = newBadges.filter(id => state.unlockBadge(id));

    if (unlocked.length > 0) {
        const badgesList = unlocked.map(id => {
            const badge = BADGES.find(b => b.id === id);
            return `<div class="badge-item">${badge.icon}</div>`;
        }).join('');

        document.getElementById('badges-list').innerHTML = badgesList;
        document.getElementById('new-badges').classList.remove('hidden');
    }
}

function updateStatsScreen() {
    document.getElementById('total-questions-stat').textContent = state.totalQuestions;
    document.getElementById('success-rate-stat').textContent = state.getSuccessRate() + '%';

    const categoryList = document.getElementById('category-stats-list');
    categoryList.innerHTML = CATEGORIES.map(cat => {
        const rate = state.getCategoryRate(cat.id);
        const stats = state.categoryStats[cat.id] || { total: 0 };

        return `
            <div class="category-stat-item">
                <div class="category-stat-header">
                    <span class="category-stat-name">${cat.icon} ${cat.name}</span>
                    <span class="category-stat-score">${rate}%</span>
                </div>
                <div class="category-stat-bar">
                    <div class="category-stat-fill" style="width: ${rate}%"></div>
                </div>
            </div>
        `;
    }).join('');

    const badgesGrid = document.getElementById('all-badges-list');
    badgesGrid.innerHTML = BADGES.map(badge => {
        const unlocked = state.badges.includes(badge.id);
        return `
            <div class="badge-card ${unlocked ? 'unlocked' : 'locked'}">
                <div class="badge-icon">${badge.icon}</div>
                <div class="badge-name">${badge.name}</div>
            </div>
        `;
    }).join('');

    const examList = document.getElementById('exam-history-list');
    if (state.examResults.length === 0) {
        examList.innerHTML = '<p style="text-align:center;color:var(--text-secondary)">Aucun examen passé</p>';
    } else {
        examList.innerHTML = state.examResults.slice(-5).reverse().map(exam => {
            const date = new Date(exam.date).toLocaleDateString('fr-FR');
            return `
                <div class="exam-history-item">
                    <div>
                        <div class="exam-date">${date}</div>
                        <div class="exam-result ${exam.passed ? 'passed' : 'failed'}">
                            ${exam.score}/${exam.total} - ${exam.passed ? 'Réussi' : 'Échoué'}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

function quitQuiz() {
    showConfirmModal(
        '⚠️ Quitter le quiz',
        'Voulez-vous vraiment quitter ? Votre progression ne sera pas sauvegardée.',
        () => {
            if (timer) clearInterval(timer);
            showScreen('screen-home');
        }
    );
}

function showConfirmModal(title, message, onConfirm) {
    const modal = document.getElementById('confirm-modal');
    modal.querySelector('.modal-title').textContent = title;
    modal.querySelector('.modal-message').textContent = message;

    modal.classList.remove('hidden');

    document.getElementById('modal-confirm').onclick = () => {
        modal.classList.add('hidden');
        onConfirm();
    };

    document.getElementById('modal-cancel').onclick = () => {
        modal.classList.add('hidden');
    };

    // Close on backdrop click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    };
}

function startTimer() {
    let seconds = 1800; // 30 minutes
    timer = setInterval(() => {
        seconds--;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        document.getElementById('quiz-timer').textContent =
            `⏱️ ${mins}:${secs.toString().padStart(2, '0')}`;

        if (seconds <= 0) {
            clearInterval(timer);
            showResults();
        }
    }, 1000);
}

function toggleDarkMode(e) {
    state.settings.darkMode = e.target.checked;
    state.save();
    applySettings();
}

function applySettings() {
    document.documentElement.setAttribute('data-theme', state.settings.darkMode ? 'dark' : 'light');
    document.getElementById('toggle-dark-mode').checked = state.settings.darkMode;
    document.getElementById('toggle-sounds').checked = state.settings.sounds;
    document.getElementById('toggle-vibrations').checked = state.settings.vibrations;
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.getElementById('toast-container').appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
}

function playSound(type) {
    if (!state.settings.sounds) return;
    // Would play sound in production
}

function vibrate() {
    if (!state.settings.vibrations) return;
    if (navigator.vibrate) navigator.vibrate(50);
}

// Initialize app
document.addEventListener('DOMContentLoaded', init);
