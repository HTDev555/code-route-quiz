const fs = require("fs");
const vm = require("vm");
const path = require("path");

const projectRoot = __dirname;
const scriptPath = path.join(projectRoot, "script.js");
const scriptContent = fs.readFileSync(scriptPath, "utf8");

const marker = "const QUESTIONS_DB = generateQuestionsDB();";
const markerIndex = scriptContent.indexOf(marker);

if (markerIndex === -1) {
  throw new Error("Impossible de localiser la génération de QUESTIONS_DB dans script.js");
}

const snippet = `${scriptContent.slice(0, markerIndex + marker.length)}\nmodule.exports = { QUESTIONS_DB };`;

const sandbox = { module: {}, exports: {} };

vm.runInNewContext(snippet, sandbox, { filename: "script.js" });

const { QUESTIONS_DB } = sandbox.module.exports;

if (!Array.isArray(QUESTIONS_DB)) {
  throw new Error("QUESTIONS_DB n'est pas un tableau valide");
}

const exportedQuestions = QUESTIONS_DB.map((question) => {
  const { id, question: wording, options, correctAnswer, explanation, category } = question;

  if (!Array.isArray(options) || options.length === 0) {
    throw new Error(`Question ${id} ne possède pas de choix valides`);
  }

  const bonneReponse = options[correctAnswer];

  return {
    id,
    question: wording,
    choix: options,
    bonne_reponse: bonneReponse,
    explication: explanation,
    theme: category,
  };
});

const outputPath = path.join(projectRoot, "questions_export.json");
fs.writeFileSync(outputPath, JSON.stringify(exportedQuestions, null, 2), "utf8");

console.log(`Export terminé : ${exportedQuestions.length} questions écrites dans ${outputPath}`);