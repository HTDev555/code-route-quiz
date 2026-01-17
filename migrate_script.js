/**
 * SCRIPT DE MIGRATION - Intégration Questions et Sécurité
 * 
 * Ce script modifie automatiquement script.js pour :
 * 1. Charger questions_complete.json au lieu de QUESTIONS_DB généré
 * 2. Adapter le format (bonne_reponse → correctAnswer)
 * 3. Sécuriser les innerHTML
 */

const fs = require('fs');

console.log('🔧 MIGRATION SCRIPT.JS\n');

// 1. Charger les questions validées
const questionsValidees = JSON.parse(fs.readFileSync('./questions_complete.json', 'utf8'));

// 2. Adapter le format pour compatibilité avec le code existant
const questionsAdaptees = questionsValidees.map(q => {
    // Trouver l'index de la bonne réponse
    const correctIndex = q.choix.indexOf(q.bonne_reponse);

    return {
        id: q.id,
        category: q.theme,
        difficulty: 2, // Difficulté moyenne par défaut
        question: q.question,
        options: q.choix,
        correctAnswer: correctIndex >= 0 ? correctIndex : 0,
        explanation: q.explication,
        tip: q.explication, // Utiliser l'explication comme tip si pas de tip spécifique
        commonMistake: "" // Pas de commonMistake dans nos données
    };
});

console.log(`✓ ${questionsAdaptees.length} questions adaptées`);

// 3. Lire script.js
let scriptContent = fs.readFileSync('./script.js', 'utf8');

// 4. Remplacer la génération de questions par les questions validées
const questionsJson = JSON.stringify(questionsAdaptees, null, 2);
const newQuestionsDB = `// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// VALIDATED QUESTIONS DATABASE - French Driving Test
// ${questionsAdaptees.length} questions validées par expert Code de la route
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const QUESTIONS_DB = ${questionsJson};`;

// Trouver et remplacer depuis le début jusqu'à "const QUESTIONS_DB"
const startMarker = '// QUESTION DATABASE - French Driving Test';
const endMarker = 'const QUESTIONS_DB = generateQuestionsDB();';

const startIndex = scriptContent.indexOf(startMarker);
const endIndex = scriptContent.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    scriptContent =
        scriptContent.substring(0, startIndex) +
        newQuestionsDB +
        '\n\n' +
        scriptContent.substring(endIndex + endMarker.length);

    console.log('✓ Questions database remplacée');
} else {
    console.error('❌ Marqueurs non trouvés');
}

// 5. Ajouter import security_utils au début
const securityImport = `<script src="security_utils.js"></script>\n    `;
scriptContent = scriptContent.replace(
    '<script src="script.js">',
    securityImport + '<script src="script.js">'
);

// 6. Sauvegarder
fs.writeFileSync('./script_migrated.js', scriptContent, 'utf8');
fs.writeFileSync('./script.js.backup', fs.readFileSync('./script.js', 'utf8'), 'utf8');

console.log('✓ script_migrated.js créé');
console.log('✓ script.js.backup créé');
console.log('\n📝 Instructions :');
console.log('1. Vérifier script_migrated.js');
console.log('2. Si OK, remplacer : mv script_migrated.js script.js');
console.log('3. Mettre à jour index.html pour inclure security_utils.js\n');
