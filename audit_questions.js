const fs = require('fs');

// Lecture du fichier JSON
const data = fs.readFileSync('./questions_export.json', 'utf8');
const questions = JSON.parse(data);

// Structures pour stocker les erreurs
const errors = {
    duplicateIds: [],
    duplicateQuestions: [],
    missingFields: [],
    badChoices: [],
    badBonneReponse: [],
    malformed: []
};

// Maps pour détecter les doublons
const idMap = new Map();
const questionTextMap = new Map();

console.log('🔍 AUDIT TECHNIQUE DU FICHIER questions_export.json\n');
console.log('═══════════════════════════════════════════════════\n');

// Analyse de chaque question
questions.forEach((q, index) => {
    const questionNumber = index + 1;

    // Vérification des champs obligatoires
    const requiredFields = ['id', 'question', 'choix', 'bonne_reponse', 'explication', 'theme'];
    const missingFieldsForQuestion = [];

    requiredFields.forEach(field => {
        if (!q.hasOwnProperty(field) || q[field] === undefined || q[field] === null || q[field] === '') {
            missingFieldsForQuestion.push(field);
        }
    });

    if (missingFieldsForQuestion.length > 0) {
        errors.missingFields.push({
            id: q.id || `question_${questionNumber}`,
            index: questionNumber,
            missingFields: missingFieldsForQuestion
        });
    }

    // Vérification ID dupliqué
    if (q.id !== undefined) {
        if (idMap.has(q.id)) {
            errors.duplicateIds.push({
                id: q.id,
                positions: [idMap.get(q.id), questionNumber]
            });
        } else {
            idMap.set(q.id, questionNumber);
        }
    }

    // Vérification question dupliquée (texte identique)
    if (q.question) {
        const normalizedQuestion = q.question.trim().toLowerCase();
        if (questionTextMap.has(normalizedQuestion)) {
            const existing = questionTextMap.get(normalizedQuestion);
            errors.duplicateQuestions.push({
                question: q.question,
                ids: [existing.id, q.id],
                positions: [existing.position, questionNumber]
            });
        } else {
            questionTextMap.set(normalizedQuestion, { id: q.id, position: questionNumber });
        }
    }

    // Vérification des choix
    if (q.choix) {
        if (!Array.isArray(q.choix)) {
            errors.badChoices.push({
                id: q.id,
                position: questionNumber,
                issue: 'choix n\'est pas un tableau'
            });
        } else if (q.choix.length === 0) {
            errors.badChoices.push({
                id: q.id,
                position: questionNumber,
                issue: 'tableau choix vide'
            });
        } else if (q.choix.some(c => !c || typeof c !== 'string')) {
            errors.badChoices.push({
                id: q.id,
                position: questionNumber,
                issue: 'choix contient des valeurs invalides'
            });
        }
    }

    // Vérification bonne_reponse
    if (q.bonne_reponse && q.choix && Array.isArray(q.choix)) {
        if (!q.choix.includes(q.bonne_reponse)) {
            errors.badBonneReponse.push({
                id: q.id,
                position: questionNumber,
                bonneReponse: q.bonne_reponse,
                choixDisponibles: q.choix
            });
        }
    }
});

// Affichage du rapport
console.log('📊 RÉSUMÉ DE L\'AUDIT\n');
console.log(`Total de questions : ${questions.length}\n`);

let totalErrors = 0;

// IDs dupliqués
const uniqueDuplicateIds = [...new Set(errors.duplicateIds.map(e => e.id))];
totalErrors += uniqueDuplicateIds.length;
console.log(`❌ IDs dupliqués : ${uniqueDuplicateIds.length}`);
if (uniqueDuplicateIds.length > 0) {
    console.log(`   IDs concernés : ${uniqueDuplicateIds.join(', ')}\n`);
}

// Questions dupliquées
totalErrors += errors.duplicateQuestions.length;
console.log(`❌ Questions dupliquées (texte identique) : ${errors.duplicateQuestions.length}`);

// Champs manquants
totalErrors += errors.missingFields.length;
console.log(`❌ Questions avec champs manquants : ${errors.missingFields.length}`);

// Choix mal formés
totalErrors += errors.badChoices.length;
console.log(`❌ Choix manquants ou mal formés : ${errors.badChoices.length}`);

// Bonne réponse incohérente
totalErrors += errors.badBonneReponse.length;
console.log(`❌ Bonne réponse absente ou incohérente : ${errors.badBonneReponse.length}\n`);

console.log(`🔴 TOTAL D'ERREURS : ${totalErrors}\n`);

// Détails des erreurs
console.log('═══════════════════════════════════════════════════\n');
console.log('📋 DÉTAILS DES ERREURS\n');

if (uniqueDuplicateIds.length > 0) {
    console.log('━━━ 1. IDs DUPLIQUÉS ━━━\n');
    uniqueDuplicateIds.forEach(id => {
        const duplicates = errors.duplicateIds.filter(e => e.id === id);
        const positions = [...new Set(duplicates.flatMap(d => d.positions))];
        console.log(`   ID ${id} : trouvé aux positions ${positions.join(', ')}`);
    });
    console.log('');
}

if (errors.duplicateQuestions.length > 0) {
    console.log('━━━ 2. QUESTIONS DUPLIQUÉES ━━━\n');
    const displayedQuestions = new Set();
    errors.duplicateQuestions.forEach(dup => {
        const key = dup.question.toLowerCase().trim();
        if (!displayedQuestions.has(key)) {
            displayedQuestions.add(key);
            console.log(`   "${dup.question}"`);
            console.log(`   IDs : ${dup.ids.join(', ')} | Positions : ${dup.positions.join(', ')}\n`);
        }
    });
}

if (errors.missingFields.length > 0) {
    console.log('━━━ 3. CHAMPS MANQUANTS ━━━\n');
    errors.missingFields.forEach(err => {
        console.log(`   ID ${err.id} (position ${err.index}) : manque [${err.missingFields.join(', ')}]`);
    });
    console.log('');
}

if (errors.badChoices.length > 0) {
    console.log('━━━ 4. CHOIX MAL FORMÉS ━━━\n');
    errors.badChoices.forEach(err => {
        console.log(`   ID ${err.id} (position ${err.position}) : ${err.issue}`);
    });
    console.log('');
}

if (errors.badBonneReponse.length > 0) {
    console.log('━━━ 5. BONNE RÉPONSE INCOHÉRENTE ━━━\n');
    errors.badBonneReponse.forEach(err => {
        console.log(`   ID ${err.id} (position ${err.position})`);
        console.log(`   Bonne réponse : "${err.bonneReponse}"`);
        console.log(`   Choix disponibles : ${err.choixDisponibles.join(', ')}\n`);
    });
}

console.log('═══════════════════════════════════════════════════\n');

if (totalErrors === 0) {
    console.log('✅ Aucune erreur détectée ! Le fichier est valide.\n');
} else {
    console.log(`⚠️  ${totalErrors} erreur(s) détectée(s) au total.\n`);
}

// Sauvegarde du rapport détaillé dans un fichier JSON
const report = {
    metadata: {
        dateAudit: new Date().toISOString(),
        totalQuestions: questions.length,
        totalErrors: totalErrors
    },
    summary: {
        duplicateIds: uniqueDuplicateIds.length,
        duplicateQuestions: errors.duplicateQuestions.length,
        missingFields: errors.missingFields.length,
        badChoices: errors.badChoices.length,
        badBonneReponse: errors.badBonneReponse.length
    },
    details: {
        duplicateIds: errors.duplicateIds,
        duplicateQuestions: errors.duplicateQuestions,
        missingFields: errors.missingFields,
        badChoices: errors.badChoices,
        badBonneReponse: errors.badBonneReponse
    }
};

fs.writeFileSync('./audit_report.json', JSON.stringify(report, null, 2), 'utf8');
console.log('💾 Rapport détaillé sauvegardé dans : audit_report.json\n');
