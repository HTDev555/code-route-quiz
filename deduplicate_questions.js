const fs = require('fs');

console.log('🔧 DÉDUPLICATION DES QUESTIONS\n');
console.log('═══════════════════════════════════════════════════\n');

// Lecture du fichier JSON
const data = fs.readFileSync('./questions_export.json', 'utf8');
const questions = JSON.parse(data);

console.log(`📥 Fichier chargé : ${questions.length} questions\n`);

// Map pour détecter les doublons
// Clé = texte de la question normalisé (minuscules, sans espaces superflus)
// Valeur = première occurrence de la question
const uniqueQuestionsMap = new Map();
const questionsUniques = [];
let duplicatesCount = 0;

// Parcourir toutes les questions
questions.forEach((q, index) => {
    // Normaliser le texte de la question pour la comparaison
    const normalizedQuestion = q.question.trim().toLowerCase();

    // Vérifier si cette question existe déjà
    if (uniqueQuestionsMap.has(normalizedQuestion)) {
        duplicatesCount++;
        console.log(`❌ Doublon trouvé (ID ${q.id}) : "${q.question}"`);
    } else {
        // Nouvelle question unique, on la conserve
        uniqueQuestionsMap.set(normalizedQuestion, q);
        questionsUniques.push(q);
        console.log(`✅ Conservée (ID ${q.id}) : "${q.question}"`);
    }
});

console.log('\n═══════════════════════════════════════════════════\n');
console.log('📊 STATISTIQUES DE DÉDUPLICATION\n');
console.log(`Questions originales    : ${questions.length}`);
console.log(`Questions uniques       : ${questionsUniques.length}`);
console.log(`Questions supprimées    : ${duplicatesCount}`);
console.log(`Taux de déduplication   : ${((duplicatesCount / questions.length) * 100).toFixed(2)}%\n`);

// Sauvegarde du fichier dédupliqué
fs.writeFileSync('./questions_unique.json', JSON.stringify(questionsUniques, null, 2), 'utf8');

console.log('═══════════════════════════════════════════════════\n');
console.log('✅ Fichier dédupliqué sauvegardé : questions_unique.json\n');
console.log(`💾 ${questionsUniques.length} questions uniques conservées avec leurs IDs d'origine\n`);
