/* ═══════════════════════════════════════════════════════
   CODE ROUTE PRO - JAVASCRIPT APPLICATION
   ═══════════════════════════════════════════════════════ */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// VALIDATED QUESTIONS DATABASE - French Driving Test
// 64 questions validées par expert Code de la route
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const QUESTIONS_DB = [
  {
    "id": 1,
    "category": "Signalisation",
    "difficulty": 2,
    "question": "Que signifie le panneau STOP (octogone rouge) ?",
    "options": [
      "Arrêt obligatoire à la ligne",
      "Ralentir sans s'arrêter",
      "Céder le passage",
      "Intersection à venir"
    ],
    "correctAnswer": 0,
    "explanation": "Le panneau STOP (AB4) impose un arrêt complet marqué à la ligne d'effet, même en l'absence de danger apparent. Article R415-6 du Code de la route.",
    "tip": "Le panneau STOP (AB4) impose un arrêt complet marqué à la ligne d'effet, même en l'absence de danger apparent. Article R415-6 du Code de la route.",
    "commonMistake": ""
  },
  {
    "id": 2,
    "category": "Signalisation",
    "difficulty": 2,
    "question": "Lorsque le feu tricolore est au rouge fixe, vous devez :",
    "options": [
      "Vous arrêter avant la ligne",
      "Ralentir puis passer",
      "Continuer si aucun véhicule",
      "Klaxonner et passer"
    ],
    "correctAnswer": 0,
    "explanation": "Le feu rouge fixe impose un arrêt obligatoire avant la ligne d'effet (article R412-30). Franchir un feu rouge est sanctionné par une amende de 135€ et un retrait de 4 points.",
    "tip": "Le feu rouge fixe impose un arrêt obligatoire avant la ligne d'effet (article R412-30). Franchir un feu rouge est sanctionné par une amende de 135€ et un retrait de 4 points.",
    "commonMistake": ""
  },
  {
    "id": 3,
    "category": "Signalisation",
    "difficulty": 2,
    "question": "En présence d'une ligne mixte (continue + discontinue), vous pouvez la franchir :",
    "options": [
      "Uniquement du côté discontinu",
      "Jamais dans aucun cas",
      "Des deux côtés",
      "Uniquement de jour"
    ],
    "correctAnswer": 0,
    "explanation": "Avec une ligne mixte, vous pouvez franchir uniquement si la ligne discontinue est de votre côté. La ligne continue interdit le franchissement (article R412-19).",
    "tip": "Avec une ligne mixte, vous pouvez franchir uniquement si la ligne discontinue est de votre côté. La ligne continue interdit le franchissement (article R412-19).",
    "commonMistake": ""
  },
  {
    "id": 4,
    "category": "Priorités",
    "difficulty": 2,
    "question": "À l'approche d'un rond-point sans signalisation, vous devez :",
    "options": [
      "Céder le passage aux véhicules circulant dans l'anneau",
      "Être prioritaire en entrant",
      "Klaxonner avant d'entrer",
      "Accélérer pour vous insérer"
    ],
    "correctAnswer": 0,
    "explanation": "Aux ronds-points, la priorité est donnée aux véhicules déjà engagés dans l'anneau (article R415-10). Vous devez céder le passage en ralentissant ou en vous arrêtant si nécessaire.",
    "tip": "Aux ronds-points, la priorité est donnée aux véhicules déjà engagés dans l'anneau (article R415-10). Vous devez céder le passage en ralentissant ou en vous arrêtant si nécessaire.",
    "commonMistake": ""
  },
  {
    "id": 5,
    "category": "Signalisation",
    "difficulty": 2,
    "question": "Le panneau d'interdiction de poids lourd est :",
    "options": [
      "Cercle rouge avec chiffre (tonnage)",
      "Triangle rouge",
      "Carré bleu",
      "Losange jaune"
    ],
    "correctAnswer": 0,
    "explanation": "Les panneaux d'interdiction sont circulaires à fond blanc et bordure rouge. Le panneau B8 interdit l'accès aux véhicules dont le PTAC dépasse le tonnage indiqué.",
    "tip": "Les panneaux d'interdiction sont circulaires à fond blanc et bordure rouge. Le panneau B8 interdit l'accès aux véhicules dont le PTAC dépasse le tonnage indiqué.",
    "commonMistake": ""
  },
  {
    "id": 6,
    "category": "Signalisation",
    "difficulty": 2,
    "question": "Un panneau rond à fond bleu signifie :",
    "options": [
      "Obligation",
      "Interdiction",
      "Indication",
      "Danger"
    ],
    "correctAnswer": 0,
    "explanation": "Les panneaux d'obligation sont circulaires à fond bleu (série B). Ils imposent un comportement : direction obligatoire, piste cyclable obligatoire, vitesse minimale, etc.",
    "tip": "Les panneaux d'obligation sont circulaires à fond bleu (série B). Ils imposent un comportement : direction obligatoire, piste cyclable obligatoire, vitesse minimale, etc.",
    "commonMistake": ""
  },
  {
    "id": 91,
    "category": "Vitesse",
    "difficulty": 2,
    "question": "Quelle est la vitesse maximale autorisée en agglomération pour un véhicule léger ?",
    "options": [
      "50 km/h",
      "60 km/h",
      "70 km/h",
      "30 km/h"
    ],
    "correctAnswer": 0,
    "explanation": "La vitesse maximale en agglomération est de 50 km/h pour tous les véhicules (article R413-3), sauf signalisation contraire. Depuis 2021, Paris est limité à 30 km/h.",
    "tip": "La vitesse maximale en agglomération est de 50 km/h pour tous les véhicules (article R413-3), sauf signalisation contraire. Depuis 2021, Paris est limité à 30 km/h.",
    "commonMistake": ""
  },
  {
    "id": 92,
    "category": "Sécurité routière",
    "difficulty": 2,
    "question": "Comment mesurer la distance de sécurité avec le véhicule qui vous précède ?",
    "options": [
      "Règle des 2 secondes (repère fixe)",
      "Compter en mètres",
      "Nombre de longueurs de voiture",
      "Estimation visuelle"
    ],
    "correctAnswer": 0,
    "explanation": "La règle des 2 secondes : quand le véhicule devant passe un repère fixe, vous devez mettre au moins 2 secondes avant de le franchir. Cette distance augmente par mauvais temps (article R412-12).",
    "tip": "La règle des 2 secondes : quand le véhicule devant passe un repère fixe, vous devez mettre au moins 2 secondes avant de le franchir. Cette distance augmente par mauvais temps (article R412-12).",
    "commonMistake": ""
  },
  {
    "id": 93,
    "category": "Vitesse",
    "difficulty": 2,
    "question": "En cas de neige ou verglas, vous devez adapter votre vitesse :",
    "options": [
      "Oui, réduire fortement la vitesse",
      "Non, garder la vitesse normale",
      "Réduire légèrement",
      "Ce n'est pas obligatoire"
    ],
    "correctAnswer": 0,
    "explanation": "Par conditions difficiles (neige, verglas, pluie forte), vous devez impérativement réduire votre vitesse pour adapter votre conduite à l'adhérence réduite (article R413-17). La visibilité < 50m impose 50 km/h max.",
    "tip": "Par conditions difficiles (neige, verglas, pluie forte), vous devez impérativement réduire votre vitesse pour adapter votre conduite à l'adhérence réduite (article R413-17). La visibilité < 50m impose 50 km/h max.",
    "commonMistake": ""
  },
  {
    "id": 94,
    "category": "Alcool et stupéfiants",
    "difficulty": 2,
    "question": "Quel est le taux d'alcoolémie maximal autorisé pour un jeune conducteur (permis probatoire) ?",
    "options": [
      "0,2 g/L de sang",
      "0,5 g/L de sang",
      "0 g/L de sang",
      "0,8 g/L de sang"
    ],
    "correctAnswer": 0,
    "explanation": "Les conducteurs en permis probatoire (moins de 3 ans, 2 ans si conduite accompagnée) ne doivent pas dépasser 0,2 g/L dans le sang, soit 0,10 mg/L d'air expiré (article R234-1).",
    "tip": "Les conducteurs en permis probatoire (moins de 3 ans, 2 ans si conduite accompagnée) ne doivent pas dépasser 0,2 g/L dans le sang, soit 0,10 mg/L d'air expiré (article R234-1).",
    "commonMistake": ""
  },
  {
    "id": 95,
    "category": "Vitesse",
    "difficulty": 2,
    "question": "Dans une zone 30, la vitesse maximale autorisée est de :",
    "options": [
      "30 km/h",
      "40 km/h",
      "50 km/h",
      "20 km/h"
    ],
    "correctAnswer": 0,
    "explanation": "La zone 30 impose une vitesse maximale de 30 km/h pour tous les véhicules. Elle vise à sécuriser les zones urbaines avec forte présence piétonne et cycliste.",
    "tip": "La zone 30 impose une vitesse maximale de 30 km/h pour tous les véhicules. Elle vise à sécuriser les zones urbaines avec forte présence piétonne et cycliste.",
    "commonMistake": ""
  },
  {
    "id": 99,
    "category": "Vitesse",
    "difficulty": 2,
    "question": "Sur une voie rapide à 2×2 voies (hors autoroute), la vitesse maximale par temps sec est de :",
    "options": [
      "110 km/h",
      "130 km/h",
      "90 km/h",
      "100 km/h"
    ],
    "correctAnswer": 0,
    "explanation": "Sur les routes à chaussées séparées (2×2 voies) hors autoroute, la limite est de 110 km/h par temps sec (article R413-2). Par temps de pluie, elle passe à 100 km/h.",
    "tip": "Sur les routes à chaussées séparées (2×2 voies) hors autoroute, la limite est de 110 km/h par temps sec (article R413-2). Par temps de pluie, elle passe à 100 km/h.",
    "commonMistake": ""
  },
  {
    "id": 103,
    "category": "Vitesse",
    "difficulty": 2,
    "question": "Sur une route à double sens hors agglomération, la vitesse maximale est de :",
    "options": [
      "80 km/h",
      "90 km/h",
      "70 km/h",
      "110 km/h"
    ],
    "correctAnswer": 0,
    "explanation": "Depuis le 1er juillet 2018, la vitesse sur les routes bidirectionnelles sans séparateur central est limitée à 80 km/h (article R413-3). Les départements peuvent rétablir les 90 km/h sur certains tronçons.",
    "tip": "Depuis le 1er juillet 2018, la vitesse sur les routes bidirectionnelles sans séparateur central est limitée à 80 km/h (article R413-3). Les départements peuvent rétablir les 90 km/h sur certains tronçons.",
    "commonMistake": ""
  },
  {
    "id": 107,
    "category": "Vitesse",
    "difficulty": 2,
    "question": "Sur autoroute par temps sec et bonne visibilité, la vitesse maximale est de :",
    "options": [
      "130 km/h",
      "110 km/h",
      "90 km/h",
      "150 km/h"
    ],
    "correctAnswer": 0,
    "explanation": "La vitesse maximale sur autoroute est de 130 km/h par temps sec (article R413-2). En cas de pluie, elle est réduite à 110 km/h. Les jeunes conducteurs sont limités à 110 km/h même par temps sec.",
    "tip": "La vitesse maximale sur autoroute est de 130 km/h par temps sec (article R413-2). En cas de pluie, elle est réduite à 110 km/h. Les jeunes conducteurs sont limités à 110 km/h même par temps sec.",
    "commonMistake": ""
  },
  {
    "id": 126,
    "category": "Alcool et stupéfiants",
    "difficulty": 2,
    "question": "Quel est le taux d'alcoolémie maximal autorisé pour un conducteur confirmé ?",
    "options": [
      "0,5 g/L de sang (0,25 mg/L air expiré)",
      "0,8 g/L de sang",
      "0,2 g/L de sang",
      "0 g/L de sang"
    ],
    "correctAnswer": 0,
    "explanation": "Pour les conducteurs confirmés, le taux maximal est de 0,5 g/L dans le sang ou 0,25 mg/L dans l'air expiré (article R234-1). Au-delà de 0,8 g/L, c'est un délit pénal.",
    "tip": "Pour les conducteurs confirmés, le taux maximal est de 0,5 g/L dans le sang ou 0,25 mg/L dans l'air expiré (article R234-1). Au-delà de 0,8 g/L, c'est un délit pénal.",
    "commonMistake": ""
  },
  {
    "id": 127,
    "category": "Alcool et stupéfiants",
    "difficulty": 2,
    "question": "À quelle vitesse l'alcool est-il éliminé par l'organisme ?",
    "options": [
      "0,15 g/L par heure",
      "0,5 g/L par heure",
      "0,1 g/L par heure",
      "1 g/L par heure"
    ],
    "correctAnswer": 0,
    "explanation": "L'organisme élimine l'alcool à un rythme moyen de 0,10 à 0,15 g/L par heure. Aucun produit (café, exercice) ne peut accélérer ce processus naturel. Seul le temps permet l'élimination.",
    "tip": "L'organisme élimine l'alcool à un rythme moyen de 0,10 à 0,15 g/L par heure. Aucun produit (café, exercice) ne peut accélérer ce processus naturel. Seul le temps permet l'élimination.",
    "commonMistake": ""
  },
  {
    "id": 128,
    "category": "Alcool et stupéfiants",
    "difficulty": 2,
    "question": "Combien de temps le cannabis reste-t-il détectable dans le sang ?",
    "options": [
      "Plusieurs jours à plusieurs semaines",
      "1 heure maximum",
      "24 heures",
      "1 semaine maximum"
    ],
    "correctAnswer": 0,
    "explanation": "Le THC (principe actif du cannabis) reste détectable dans le sang pendant plusieurs jours à plusieurs semaines selon la consommation. Un seul joint peut être détecté jusqu'à 2-3 jours chez un consommateur occasionnel.",
    "tip": "Le THC (principe actif du cannabis) reste détectable dans le sang pendant plusieurs jours à plusieurs semaines selon la consommation. Un seul joint peut être détecté jusqu'à 2-3 jours chez un consommateur occasionnel.",
    "commonMistake": ""
  },
  {
    "id": 129,
    "category": "Alcool et stupéfiants",
    "difficulty": 2,
    "question": "Une alcoolémie supérieure à 0,8 g/L de sang constitue :",
    "options": [
      "Un délit pénal jugé au tribunal",
      "Une contravention avec amende simple",
      "Un simple avertissement",
      "Obligation de stage uniquement"
    ],
    "correctAnswer": 0,
    "explanation": "Au-delà de 0,8 g/L, c'est un délit pénal (article L234-1) : comparution au tribunal, jusqu'à 2 ans de prison, 4500€ d'amende, suspension ou annulation du permis, 6 points retirés.",
    "tip": "Au-delà de 0,8 g/L, c'est un délit pénal (article L234-1) : comparution au tribunal, jusqu'à 2 ans de prison, 4500€ d'amende, suspension ou annulation du permis, 6 points retirés.",
    "commonMistake": ""
  },
  {
    "id": 132,
    "category": "Alcool et stupéfiants",
    "difficulty": 2,
    "question": "Un dépistage de stupéfiants positif (même sans signe d'ivresse manifeste) entraîne :",
    "options": [
      "Un délit pénal : suspension de permis et risque de prison",
      "Une simple amende forfaitaire",
      "Un avertissement écrit",
      "Obligation de stage de sensibilisation"
    ],
    "correctAnswer": 0,
    "explanation": "Conduire après usage de stupéfiants est un délit (article L235-1) : 2 ans de prison, 4500€ d'amende, suspension/annulation du permis, 6 points retirés. Pas de seuil de tolérance.",
    "tip": "Conduire après usage de stupéfiants est un délit (article L235-1) : 2 ans de prison, 4500€ d'amende, suspension/annulation du permis, 6 points retirés. Pas de seuil de tolérance.",
    "commonMistake": ""
  },
  {
    "id": 133,
    "category": "Alcool et stupéfiants",
    "difficulty": 2,
    "question": "Si vous conduisez sous l'emprise d'alcool ET de stupéfiants, les sanctions sont :",
    "options": [
      "Cumulées et aggravées",
      "Une seule sanction appliquée",
      "Réduites par rapport à une seule substance",
      "Aucune sanction supplémentaire"
    ],
    "correctAnswer": 0,
    "explanation": "Alcool + stupéfiants = cumul des sanctions avec aggravation : 3 ans de prison, 9000€ d'amende maximum (articles L234-1 et L235-1). C'est l'une des infractions les plus graves du Code de la route.",
    "tip": "Alcool + stupéfiants = cumul des sanctions avec aggravation : 3 ans de prison, 9000€ d'amende maximum (articles L234-1 et L235-1). C'est l'une des infractions les plus graves du Code de la route.",
    "commonMistake": ""
  },
  {
    "id": 136,
    "category": "Alcool et stupéfiants",
    "difficulty": 2,
    "question": "Refuser de se soumettre au dépistage d'alcool ou de stupéfiants entraîne :",
    "options": [
      "Les mêmes sanctions qu'un contrôle positif",
      "Une amende légère uniquement",
      "Aucune sanction",
      "Obligation de stage uniquement"
    ],
    "correctAnswer": 0,
    "explanation": "Le refus de dépistage est assimilé à un résultat positif (article L234-8) : délit pénal avec les mêmes sanctions (2 ans de prison, 4500€, suspension permis, 6 points).",
    "tip": "Le refus de dépistage est assimilé à un résultat positif (article L234-8) : délit pénal avec les mêmes sanctions (2 ans de prison, 4500€, suspension permis, 6 points).",
    "commonMistake": ""
  },
  {
    "id": 137,
    "category": "Alcool et stupéfiants",
    "difficulty": 2,
    "question": "La conduite avec un taux d'alcool contraventionnel (0,5 à 0,8 g/L) entraîne un retrait de :",
    "options": [
      "6 points",
      "3 points",
      "1 point",
      "Perte totale des 12 points"
    ],
    "correctAnswer": 0,
    "explanation": "Une alcoolémie entre 0,5 et 0,8 g/L est une contravention de 4e classe : amende de 135€, suspension jusqu'à 3 ans, immobilisation du véhicule et retrait de 6 points (article R234-1).",
    "tip": "Une alcoolémie entre 0,5 et 0,8 g/L est une contravention de 4e classe : amende de 135€, suspension jusqu'à 3 ans, immobilisation du véhicule et retrait de 6 points (article R234-1).",
    "commonMistake": ""
  },
  {
    "id": 156,
    "category": "Sécurité",
    "difficulty": 2,
    "question": "Le port de la ceinture de sécurité est obligatoire :",
    "options": [
      "À l'avant ET à l'arrière du véhicule",
      "Uniquement à l'avant",
      "Uniquement sur autoroute",
      "Uniquement hors agglomération"
    ],
    "correctAnswer": 0,
    "explanation": "La ceinture est obligatoire pour tous les occupants, à l'avant comme à l'arrière, partout (ville, route, autoroute) - article R412-1. Amende de 135€ et retrait de 3 points par personne non attachée.",
    "tip": "La ceinture est obligatoire pour tous les occupants, à l'avant comme à l'arrière, partout (ville, route, autoroute) - article R412-1. Amende de 135€ et retrait de 3 points par personne non attachée.",
    "commonMistake": ""
  },
  {
    "id": 157,
    "category": "Sécurité",
    "difficulty": 2,
    "question": "Un bébé de moins de 1 an doit être installé :",
    "options": [
      "Dos à la route dans un siège adapté",
      "Face à la route",
      "Debout avec une ceinture",
      "Couché sur la banquette"
    ],
    "correctAnswer": 0,
    "explanation": "Les bébés jusqu'à 15 mois minimum doivent être dos à la route dans un siège groupe 0/0+ (nacelle, cosi) homologué. Cette position protège la nuque et la colonne cervicale en cas de choc (article R412-2).",
    "tip": "Les bébés jusqu'à 15 mois minimum doivent être dos à la route dans un siège groupe 0/0+ (nacelle, cosi) homologué. Cette position protège la nuque et la colonne cervicale en cas de choc (article R412-2).",
    "commonMistake": ""
  },
  {
    "id": 158,
    "category": "Sécurité",
    "difficulty": 2,
    "question": "L'éthylotest est-il obligatoire dans le véhicule ?",
    "options": [
      "Non, mais fortement recommandé",
      "Oui, obligatoire sous peine d'amende",
      "Uniquement pour les professionnels",
      "Interdit dans les véhicules"
    ],
    "correctAnswer": 0,
    "explanation": "Depuis 2020, l'éthylotest n'est plus obligatoire dans les véhicules particuliers (le décret n'a jamais été appliqué). Il reste cependant fortement recommandé pour s'auto-contrôler.",
    "tip": "Depuis 2020, l'éthylotest n'est plus obligatoire dans les véhicules particuliers (le décret n'a jamais été appliqué). Il reste cependant fortement recommandé pour s'auto-contrôler.",
    "commonMistake": ""
  },
  {
    "id": 159,
    "category": "Sécurité",
    "difficulty": 2,
    "question": "Panne tunnel : que faire ?",
    "options": [
      "Arrêt, moteur coupé, sortir",
      "Continuer",
      "Rester dedans",
      "Faire demi-tour"
    ],
    "correctAnswer": 0,
    "explanation": "Arrêt immédiat, moteur coupé, évacuation.",
    "tip": "Arrêt immédiat, moteur coupé, évacuation.",
    "commonMistake": ""
  },
  {
    "id": 196,
    "category": "Conducteur",
    "difficulty": 2,
    "question": "Vision rétroviseur intérieur :",
    "options": [
      "Partielle, angle mort",
      "Tout arrière",
      "180°",
      "Route seule"
    ],
    "correctAnswer": 0,
    "explanation": "Rétroviseurs ne montrent pas tout : angles morts.",
    "tip": "Rétroviseurs ne montrent pas tout : angles morts.",
    "commonMistake": ""
  },
  {
    "id": 197,
    "category": "Conducteur",
    "difficulty": 2,
    "question": "Kit mains-libres : autorisé ?",
    "options": [
      "Oui mais déconseillé",
      "Interdit",
      "Obligatoire",
      "Recommandé"
    ],
    "correctAnswer": 0,
    "explanation": "Kit autorisé mais réduit vigilance.",
    "tip": "Kit autorisé mais réduit vigilance.",
    "commonMistake": ""
  },
  {
    "id": 198,
    "category": "Conducteur",
    "difficulty": 2,
    "question": "Conduite nuit : risques ?",
    "options": [
      "Fatigue + visibilité",
      "Aucun",
      "Meilleur",
      "Plus rapide"
    ],
    "correctAnswer": 0,
    "explanation": "Nuit = fatigue accrue + visibilité réduite.",
    "tip": "Nuit = fatigue accrue + visibilité réduite.",
    "commonMistake": ""
  },
  {
    "id": 199,
    "category": "Conducteur",
    "difficulty": 2,
    "question": "Changer de file : vérification ?",
    "options": [
      "Rétro + angle mort",
      "Rétro seul",
      "Rien",
      "Klaxonner"
    ],
    "correctAnswer": 0,
    "explanation": "Rétro + tourner tête obligatoire.",
    "tip": "Rétro + tourner tête obligatoire.",
    "commonMistake": ""
  },
  {
    "id": 203,
    "category": "Conducteur",
    "difficulty": 2,
    "question": "Moto dans angle mort :",
    "options": [
      "Très fréquent",
      "Rare",
      "Impossible",
      "Jamais"
    ],
    "correctAnswer": 0,
    "explanation": "Motos souvent dans angles morts.",
    "tip": "Motos souvent dans angles morts.",
    "commonMistake": ""
  },
  {
    "id": 207,
    "category": "Conducteur",
    "difficulty": 2,
    "question": "Rétroviseurs bien réglés :",
    "options": [
      "Éliminent pas angles morts",
      "Éliminent angles morts",
      "Inutiles",
      "Suffisent"
    ],
    "correctAnswer": 0,
    "explanation": "Même bien réglés, angles morts subsistent.",
    "tip": "Même bien réglés, angles morts subsistent.",
    "commonMistake": ""
  },
  {
    "id": 226,
    "category": "Route",
    "difficulty": 2,
    "question": "Brouillard visibilité < 50m : vitesse max ?",
    "options": [
      "50 km/h",
      "90 km/h",
      "70 km/h",
      "30 km/h"
    ],
    "correctAnswer": 0,
    "explanation": "Brouillard épais (<50m) = 50 km/h maximum.",
    "tip": "Brouillard épais (<50m) = 50 km/h maximum.",
    "commonMistake": ""
  },
  {
    "id": 227,
    "category": "Route",
    "difficulty": 2,
    "question": "Arrêt sur autoroute autorisé :",
    "options": [
      "BAU panne/urgence",
      "N'importe où",
      "Voie circulation",
      "Jamais"
    ],
    "correctAnswer": 0,
    "explanation": "Arrêt uniquement BAU et urgence.",
    "tip": "Arrêt uniquement BAU et urgence.",
    "commonMistake": ""
  },
  {
    "id": 228,
    "category": "Route",
    "difficulty": 2,
    "question": "Feux dans tunnel :",
    "options": [
      "Croisement obligatoire",
      "Route",
      "Rien",
      "Brouillard"
    ],
    "correctAnswer": 0,
    "explanation": "Feux de croisement obligatoires en tunnel.",
    "tip": "Feux de croisement obligatoires en tunnel.",
    "commonMistake": ""
  },
  {
    "id": 229,
    "category": "Route",
    "difficulty": 2,
    "question": "Cause aquaplaning :",
    "options": [
      "Eau + vitesse + pneus",
      "Vitesse seule",
      "Pneus seuls",
      "Hasard"
    ],
    "correctAnswer": 0,
    "explanation": "Aquaplaning = eau sur route + vitesse élevée + pneus usés.",
    "tip": "Aquaplaning = eau sur route + vitesse élevée + pneus usés.",
    "commonMistake": ""
  },
  {
    "id": 233,
    "category": "Route",
    "difficulty": 2,
    "question": "Prévenir aquaplaning :",
    "options": [
      "Ralentir, pneus OK",
      "Accélérer",
      "Freiner",
      "Rien"
    ],
    "correctAnswer": 0,
    "explanation": "Prévention = réduire vitesse + pneus bon état.",
    "tip": "Prévention = réduire vitesse + pneus bon état.",
    "commonMistake": ""
  },
  {
    "id": 237,
    "category": "Route",
    "difficulty": 2,
    "question": "Sensation aquaplaning :",
    "options": [
      "Perte adhérence/direction",
      "Rien",
      "Meilleure tenue",
      "Accélération"
    ],
    "correctAnswer": 0,
    "explanation": "Sensation direction légère, perte contrôle.",
    "tip": "Sensation direction légère, perte contrôle.",
    "commonMistake": ""
  },
  {
    "id": 261,
    "category": "Mécanique",
    "difficulty": 2,
    "question": "Contrôle technique : fréquence ?",
    "options": [
      "Tous les 2 ans (>4 ans)",
      "Annuel",
      "Tous les 5 ans",
      "Jamais"
    ],
    "correctAnswer": 0,
    "explanation": "CT obligatoire tous les 2 ans pour véhicule > 4 ans.",
    "tip": "CT obligatoire tous les 2 ans pour véhicule > 4 ans.",
    "commonMistake": ""
  },
  {
    "id": 262,
    "category": "Mécanique",
    "difficulty": 2,
    "question": "Profondeur sculpture minimale légale :",
    "options": [
      "1,6 mm",
      "3 mm",
      "5 mm",
      "0 mm"
    ],
    "correctAnswer": 0,
    "explanation": "Minimum légal = 1,6 mm (témoin d'usure).",
    "tip": "Minimum légal = 1,6 mm (témoin d'usure).",
    "commonMistake": ""
  },
  {
    "id": 263,
    "category": "Mécanique",
    "difficulty": 2,
    "question": "Liquide de frein : rôle ?",
    "options": [
      "Transmet pression freinage",
      "Refroidir",
      "Nettoyer",
      "Rien"
    ],
    "correctAnswer": 0,
    "explanation": "Liquide transmet pression pédale vers freins.",
    "tip": "Liquide transmet pression pédale vers freins.",
    "commonMistake": ""
  },
  {
    "id": 264,
    "category": "Mécanique",
    "difficulty": 2,
    "question": "Voyant pression pneu :",
    "options": [
      "Vérifier gonflage",
      "Ignorer",
      "Normal",
      "Crevaison"
    ],
    "correctAnswer": 0,
    "explanation": "Voyant pneu = vérifier pression (perte possible).",
    "tip": "Voyant pneu = vérifier pression (perte possible).",
    "commonMistake": ""
  },
  {
    "id": 291,
    "category": "Premiers Secours",
    "difficulty": 2,
    "question": "Numéro urgence européen ?",
    "options": [
      "112",
      "15",
      "17",
      "18"
    ],
    "correctAnswer": 0,
    "explanation": "112 = numéro urgence unique européen.",
    "tip": "112 = numéro urgence unique européen.",
    "commonMistake": ""
  },
  {
    "id": 292,
    "category": "Premiers Secours",
    "difficulty": 2,
    "question": "PLS : pourquoi ?",
    "options": [
      "Éviter étouffement langue/vomi",
      "Confort",
      "Esthétique",
      "Inutile"
    ],
    "correctAnswer": 0,
    "explanation": "PLS empêche langue d'obstruer gorge, vomi d'étouffer.",
    "tip": "PLS empêche langue d'obstruer gorge, vomi d'étouffer.",
    "commonMistake": ""
  },
  {
    "id": 293,
    "category": "Premiers Secours",
    "difficulty": 2,
    "question": "Hémorragie : élever membre ?",
    "options": [
      "Oui si possible",
      "Non",
      "Toujours",
      "Jamais"
    ],
    "correctAnswer": 0,
    "explanation": "Élever membre réduit saignement (si pas fracture).",
    "tip": "Élever membre réduit saignement (si pas fracture).",
    "commonMistake": ""
  },
  {
    "id": 294,
    "category": "Premiers Secours",
    "difficulty": 2,
    "question": "Fracture apparente : action ?",
    "options": [
      "Immobiliser, ne pas bouger",
      "Réduire fracture",
      "Tirer membre",
      "Masser"
    ],
    "correctAnswer": 0,
    "explanation": "Fracture = immobiliser dans position trouvée.",
    "tip": "Fracture = immobiliser dans position trouvée.",
    "commonMistake": ""
  },
  {
    "id": 316,
    "category": "Éco-conduite",
    "difficulty": 2,
    "question": "Pour consommer moins :",
    "options": [
      "Conduite souple anticipée",
      "Accélérations brutales",
      "Fenêtres ouvertes autoroute",
      "Point mort"
    ],
    "correctAnswer": 0,
    "explanation": "Conduite souple, anticipation = -20% consommation.",
    "tip": "Conduite souple, anticipation = -20% consommation.",
    "commonMistake": ""
  },
  {
    "id": 317,
    "category": "Éco-conduite",
    "difficulty": 2,
    "question": "Descente : comment économiser ?",
    "options": [
      "Laisser rouler en vitesse",
      "Point mort",
      "Freiner continu",
      "Accélérer"
    ],
    "correctAnswer": 0,
    "explanation": "Descente en vitesse (frein moteur) = injection coupée.",
    "tip": "Descente en vitesse (frein moteur) = injection coupée.",
    "commonMistake": ""
  },
  {
    "id": 318,
    "category": "Éco-conduite",
    "difficulty": 2,
    "question": "Fenêtres ouvertes autoroute :",
    "options": [
      "Augmente consommation",
      "Réduit consommation",
      "Neutre",
      "Meilleur"
    ],
    "correctAnswer": 0,
    "explanation": "Fenêtres ouvertes haute vitesse = résistance air, surconso.",
    "tip": "Fenêtres ouvertes haute vitesse = résistance air, surconso.",
    "commonMistake": ""
  },
  {
    "id": 319,
    "category": "Éco-conduite",
    "difficulty": 2,
    "question": "Galerie toit inutilisée :",
    "options": [
      "Surconsommation",
      "Neutre",
      "Économie",
      "Recommandé"
    ],
    "correctAnswer": 0,
    "explanation": "Galerie/coffre toit = résistance air, +10-20% conso.",
    "tip": "Galerie/coffre toit = résistance air, +10-20% conso.",
    "commonMistake": ""
  },
  {
    "id": 51,
    "category": "Priorités",
    "difficulty": 2,
    "question": "À une intersection sans panneau, qui est prioritaire ?",
    "options": [
      "Celui qui vient de droite",
      "De gauche",
      "Le plus gros",
      "Qui klaxonne"
    ],
    "correctAnswer": 0,
    "explanation": "Règle de base : priorité à droite en l'absence de signalisation.",
    "tip": "Règle de base : priorité à droite en l'absence de signalisation.",
    "commonMistake": ""
  },
  {
    "id": 52,
    "category": "Priorités",
    "difficulty": 2,
    "question": "Piéton s'engage sur passage :",
    "options": [
      "Arrêt obligatoire",
      "Ralentir",
      "Klaxonner",
      "Continuer"
    ],
    "correctAnswer": 0,
    "explanation": "Piéton engagé = arrêt immédiat obligatoire.",
    "tip": "Piéton engagé = arrêt immédiat obligatoire.",
    "commonMistake": ""
  },
  {
    "id": 53,
    "category": "Priorités",
    "difficulty": 2,
    "question": "Rond-point à 2 voies : quelle voie ?",
    "options": [
      "Intérieure si plus d'1/2 tour",
      "Extérieure toujours",
      "Au choix",
      "Rapide"
    ],
    "correctAnswer": 0,
    "explanation": "Voie intérieure pour dépasser demi-tour.",
    "tip": "Voie intérieure pour dépasser demi-tour.",
    "commonMistake": ""
  },
  {
    "id": 54,
    "category": "Priorités",
    "difficulty": 2,
    "question": "Véhicule prioritaire gyrophare/sirène :",
    "options": [
      "Faciliter passage",
      "Garder trajectoire",
      "Accélérer",
      "Freiner"
    ],
    "correctAnswer": 0,
    "explanation": "Faciliter passage véhicule prioritaire obligatoire.",
    "tip": "Faciliter passage véhicule prioritaire obligatoire.",
    "commonMistake": ""
  },
  {
    "id": 55,
    "category": "Priorités",
    "difficulty": 2,
    "question": "Vous tournez à gauche, véhicule en face :",
    "options": [
      "Céder le passage",
      "Prioritaire",
      "Klaxonner",
      "Accélérer"
    ],
    "correctAnswer": 0,
    "explanation": "Tourner à gauche = céder passage véhicules en face.",
    "tip": "Tourner à gauche = céder passage véhicules en face.",
    "commonMistake": ""
  },
  {
    "id": 56,
    "category": "Priorités",
    "difficulty": 2,
    "question": "Piéton sur passage vs véhicule prioritaire :",
    "options": [
      "Piéton toujours",
      "Véhicule prioritaire",
      "Dépend situation",
      "Plus rapide"
    ],
    "correctAnswer": 0,
    "explanation": "Piéton engagé sur passage = TOUJOURS prioritaire.",
    "tip": "Piéton engagé sur passage = TOUJOURS prioritaire.",
    "commonMistake": ""
  },
  {
    "id": 58,
    "category": "Priorités",
    "difficulty": 2,
    "question": "Ambulance derrière vous :",
    "options": [
      "Se ranger à droite",
      "Accélérer",
      "S'arrêter milieu",
      "Ignorer"
    ],
    "correctAnswer": 0,
    "explanation": "Se ranger à droite pour laisser passer.",
    "tip": "Se ranger à droite pour laisser passer.",
    "commonMistake": ""
  },
  {
    "id": 59,
    "category": "Priorités",
    "difficulty": 2,
    "question": "Deux véhicules face à face tournent :",
    "options": [
      "Priorité à droite",
      "Celui qui va tout droit",
      "À gauche",
      "Plus rapide"
    ],
    "correctAnswer": 1,
    "explanation": "Véhicule allant tout droit prioritaire sur celui qui tourne.",
    "tip": "Véhicule allant tout droit prioritaire sur celui qui tourne.",
    "commonMistake": ""
  },
  {
    "id": 60,
    "category": "Priorités",
    "difficulty": 2,
    "question": "Zone de rencontre : vitesse et piétons ?",
    "options": [
      "20 km/h, piétons prioritaires",
      "50 km/h",
      "30 km/h",
      "Aucune règle"
    ],
    "correctAnswer": 0,
    "explanation": "Zone de rencontre = 20 km/h max, piétons prioritaires.",
    "tip": "Zone de rencontre = 20 km/h max, piétons prioritaires.",
    "commonMistake": ""
  },
  {
    "id": 62,
    "category": "Priorités",
    "difficulty": 2,
    "question": "Convoi exceptionnel : priorité ?",
    "options": [
      "Oui, ne pas couper",
      "Non",
      "Dépend",
      "Si rapide"
    ],
    "correctAnswer": 0,
    "explanation": "Convoi exceptionnel = ne pas s'insérer.",
    "tip": "Convoi exceptionnel = ne pas s'insérer.",
    "commonMistake": ""
  },
  {
    "id": 63,
    "category": "Priorités",
    "difficulty": 2,
    "question": "Intersection en T : qui est prioritaire ?",
    "options": [
      "Route principale",
      "Route perpendiculaire",
      "À droite toujours",
      "Plus rapide"
    ],
    "correctAnswer": 0,
    "explanation": "Route principale prioritaire sauf signalisation contraire.",
    "tip": "Route principale prioritaire sauf signalisation contraire.",
    "commonMistake": ""
  },
  {
    "id": 64,
    "category": "Priorités",
    "difficulty": 2,
    "question": "Piéton traverse hors passage :",
    "options": [
      "Prudence, ralentir",
      "Prioritaire",
      "Klaxonner fort",
      "Accélérer"
    ],
    "correctAnswer": 0,
    "explanation": "Piéton hors passage = prudence mais pas priorité légale.",
    "tip": "Piéton hors passage = prudence mais pas priorité légale.",
    "commonMistake": ""
  },
  {
    "id": 67,
    "category": "Priorités",
    "difficulty": 2,
    "question": "Vous êtes sur route prioritaire. Véhicule de droite ne cède pas :",
    "options": [
      "Ralentir et vérifier",
      "Passer, prioritaire",
      "Klaxonner",
      "Accélérer"
    ],
    "correctAnswer": 0,
    "explanation": "Priorité ne dispense pas de prudence.",
    "tip": "Priorité ne dispense pas de prudence.",
    "commonMistake": ""
  },
  {
    "id": 68,
    "category": "Priorités",
    "difficulty": 2,
    "question": "Passage piéton sans feu : priorité ?",
    "options": [
      "Piéton",
      "Voiture",
      "Dépend",
      "À droite"
    ],
    "correctAnswer": 0,
    "explanation": "Piéton toujours prioritaire sur passage.",
    "tip": "Piéton toujours prioritaire sur passage.",
    "commonMistake": ""
  }
];



// Legacy questions kept for compatibility
const LEGACY_QUESTIONS = [
  // SIGNALISATION (15 questions)
  {
    id: 1,
    category: "Signalisation",
    difficulty: 1,
    question: "Que signifie ce panneau ?",
    image: "assets/panneau_stop.svg",
    options: [
      "Arrêt obligatoire",
      "Ralentir",
      "Céder le passage",
      "Intersection",
    ],
    correctAnswer: 0,
    explanation: "Le panneau STOP impose un arrêt complet avant la ligne.",
    tip: "STOP = Arrêt obligatoire, même si la voie est libre.",
    commonMistake: "Ralentir sans s'arrêter complètement.",
  },
  {
    id: 2,
    category: "Signalisation",
    difficulty: 2,
    question: "Ce panneau indique :",
    image: "assets/panneau_route_prioritaire.svg",
    options: [
      "Route prioritaire",
      "Attention danger",
      "Parking autorisé",
      "Zone résidentielle",
    ],
    correctAnswer: 0,
    explanation: "Le losange jaune signale une route prioritaire.",
    tip: "Vous êtes prioritaire sur les intersections suivantes.",
    commonMistake: "Confondre avec un panneau de danger.",
  },
  {
    id: 3,
    category: "Signalisation",
    difficulty: 1,
    question: "Quelle est la signification de ce panneau ?",
    image: "assets/panneau_cedez_le_passage.svg",
    options: ["Cédez le passage", "Stop", "Priorité à droite", "Sens interdit"],
    correctAnswer: 0,
    explanation:
      "Triangle inversé = céder le passage aux véhicules prioritaires.",
    tip: "Ralentir et céder si nécessaire, mais pas d'arrêt obligatoire.",
    commonMistake: "S'arrêter systématiquement comme au STOP.",
  },
  {
    id: 4,
    category: "Signalisation",
    difficulty: 1,
    question: "Cette limitation indique :",
    image: "assets/panneau_limitation_50.svg",
    options: [
      "50 km/h maximum",
      "50 km/h minimum",
      "50 mètres",
      "Poids 50 tonnes",
    ],
    correctAnswer: 0,
    explanation: "Cercle rouge = interdiction. Ici, vitesse maximale 50 km/h.",
    tip: "En agglomération, 50 km/h est la règle générale.",
    commonMistake: "Dépasser légèrement 'juste de 5 km/h'.",
  },
  {
    id: 5,
    category: "Signalisation",
    difficulty: 2,
    question: "À un rond-point, vous devez :",
    image: "assets/panneau_rond_point.svg",
    options: [
      "Tourner à gauche",
      "Céder le passage aux véhicules déjà engagés",
      "Être prioritaire",
      "Klaxonner",
    ],
    correctAnswer: 1,
    explanation: "Priorité aux véhicules circulant dans le rond-point.",
    tip: "Toujours céder le passage à gauche au rond-point.",
    commonMistake: "S'engager sans vérifier à gauche.",
  },
  {
    id: 6,
    category: "Signalisation",
    difficulty: 1,
    question: "Ce panneau signifie :",
    image: "assets/panneau_stationnement_interdit.svg",
    options: [
      "Stationnement interdit",
      "Arrêt interdit",
      "Sens interdit",
      "Zone bleue",
    ],
    correctAnswer: 0,
    explanation: "Panneau d'interdiction de stationner (une barre rouge).",
    tip: "Une barre = stationnement interdit. Deux barres = arrêt interdit.",
    commonMistake: "Confondre avec l'arrêt interdit (deux barres).",
  },
  {
    id: 7,
    category: "Signalisation",
    difficulty: 2,
    question: "Un feu orange signifie :",
    options: [
      "Accélérer pour passer",
      "S'arrêter sauf si dangereux",
      "Continuer normalement",
      "Klaxonner",
    ],
    correctAnswer: 1,
    explanation:
      "Feu orange = arrêt obligatoire sauf si impossible sans danger.",
    tip: "Orange = stop, sauf si vous êtes trop près pour freiner.",
    commonMistake: "Accélérer pour 'griller' le feu orange.",
  },
  {
    id: 8,
    category: "Signalisation",
    difficulty: 3,
    question: "Un panneau triangulaire pointe vers le haut indique :",
    options: [
      "Une obligation",
      "Un danger",
      "Une interdiction",
      "Une indication",
    ],
    correctAnswer: 1,
    explanation:
      "Triangle pointe en haut = signaux de danger (virage, école, etc.).",
    tip: "Forme triangulaire rouge = attention danger à venir.",
    commonMistake: "Confondre avec les panneaux d'obligation (ronds bleus).",
  },

  // PRIORITÉS (10 questions)
  {
    id: 10,
    category: "Priorités",
    difficulty: 2,
    question: "À une intersection sans panneau, qui est prioritaire ?",
    options: [
      "Celui qui vient de droite",
      "Celui qui vient de gauche",
      "Le plus gros véhicule",
      "Celui qui klaxonne",
    ],
    correctAnswer: 0,
    explanation:
      "Règle de base : priorité à droite en l'absence de signalisation.",
    tip: "Pas de panneau ? Priorité à droite !",
    commonMistake: "Penser être prioritaire sur une grande route.",
  },
  {
    id: 11,
    category: "Priorités",
    difficulty: 3,
    question:
      "Qui est prioritaire : piéton sur passage ou véhicule prioritaire en urgence ?",
    options: [
      "Le piéton toujours",
      "Véhicule prioritaire",
      "Dépend de la situation",
      "Le plus rapide",
    ],
    correctAnswer: 0,
    explanation: "Le piéton engagé sur un passage est TOUJOURS prioritaire.",
    tip: "Piéton > Tout, même ambulance.",
    commonMistake: "Penser que l'ambulance peut forcer le passage.",
  },
  {
    id: 12,
    category: "Priorités",
    difficulty: 2,
    question:
      "Vous êtes sur route prioritaire. Un véhicule arrive de droite sans céder :",
    options: [
      "Vous passez, vous êtes prioritaire",
      "Vous ralentissez et vérifiez",
      "Vous klaxonnez fort",
      "Vous accélérez",
    ],
    correctAnswer: 1,
    explanation:
      "Priorité ne dispense pas de prudence. Anticiper l'erreur d'autrui.",
    tip: "Avoir la priorité ≠ avoir raison dans l'accident.",
    commonMistake: "Foncer car 'j'ai la priorité'.",
  },

  // VITESSE & LIMITATIONS (12 questions)
  {
    id: 20,
    category: "Vitesse",
    difficulty: 1,
    question: "Vitesse maximale en agglomération pour un véhicule léger ?",
    options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
    correctAnswer: 0,
    explanation: "50 km/h en ville, sauf indication contraire.",
    tip: "Panneau agglomération = 50 km/h automatique.",
    commonMistake: "Rouler à 60 km/h 'car tout le monde le fait'.",
  },
  {
    id: 21,
    category: "Vitesse",
    difficulty: 2,
    question: "Sur autoroute par temps de pluie, la vitesse maximale est :",
    options: ["130 km/h", "110 km/h", "90 km/h", "50 km/h"],
    correctAnswer: 1,
    explanation: "Pluie : -20 km/h sur autoroute (130 → 110 km/h).",
    tip: "Pluie = réduire de 20 km/h sur autoroute et voie rapide.",
    commonMistake: "Garder 130 km/h sous la pluie.",
  },
  {
    id: 22,
    category: "Vitesse",
    difficulty: 3,
    question: "Jeune conducteur (permis < 3 ans) sur autoroute : vitesse max ?",
    options: ["130 km/h", "110 km/h", "100 km/h", "90 km/h"],
    correctAnswer: 1,
    explanation:
      "Jeune conducteur : 110 km/h max sur autoroute (au lieu de 130).",
    tip: "Disque A obligatoire pendant 3 ans avec limitations réduites.",
    commonMistake: "Rouler à 130 km/h dès le permis obtenu.",
  },
  {
    id: 23,
    category: "Vitesse",
    difficulty: 2,
    question: "Distance de sécurité minimale sur autoroute à 130 km/h ?",
    options: ["1 seconde", "2 secondes", "3 secondes", "5 secondes"],
    correctAnswer: 1,
    explanation:
      "Règle des 2 secondes : repère fixe, compter 2 sec avant de passer.",
    tip: "Dire 'un crocodile, deux crocodiles' entre vous et le véhicule devant.",
    commonMistake: "Coller le véhicule devant (< 1 seconde).",
  },

  // ALCOOL, DROGUES, MÉDICAMENTS (8 questions)
  {
    id: 30,
    category: "Alcool & Drogues",
    difficulty: 1,
    question: "Taux d'alcoolémie maximum autorisé (conducteur confirmé) ?",
    options: ["0,5 g/L de sang", "0,8 g/L", "0,2 g/L", "0 g/L"],
    correctAnswer: 0,
    explanation: "0,5 g/L max pour conducteur confirmé, 0,2 g/L pour jeune.",
    tip: "≈ 2 verres standard pour 0,5 g/L (mais varie selon personne).",
    commonMistake: "Penser pouvoir boire 3-4 verres sans dépasser.",
  },
  {
    id: 31,
    category: "Alcool & Drogues",
    difficulty: 2,
    question: "Pour éliminer l'alcool, le plus efficace est :",
    options: [
      "Boire du café",
      "Attendre (temps)",
      "Manger beaucoup",
      "Prendre une douche froide",
    ],
    correctAnswer: 1,
    explanation: "Seul le temps élimine l'alcool. Rien d'autre ne fonctionne.",
    tip: "0,15 g/L par heure environ. Donc 3h pour 0,5 g/L.",
    commonMistake: "Croire que café ou douche 'dégrisent'.",
  },
  {
    id: 32,
    category: "Alcool & Drogues",
    difficulty: 3,
    question: "Dépistage de drogue positif, même sans signes d'ivresse :",
    options: [
      "Amende simple",
      "Retrait de permis possible + prison",
      "Avertissement",
      "Stage obligatoire",
    ],
    correctAnswer: 1,
    explanation:
      "Conduite sous stupéfiants = délit : 2 ans prison, 4500€, retrait permis.",
    tip: "Cannabis détectable plusieurs jours/semaines après consommation.",
    commonMistake: "Penser que 'ça va, j'ai fumé il y a 2 jours'.",
  },

  // SÉCURITÉ ROUTIÈRE (12 questions)
  {
    id: 40,
    category: "Sécurité",
    difficulty: 1,
    question: "Le port de la ceinture est obligatoire :",
    options: [
      "Seulement sur autoroute",
      "À l'avant uniquement",
      "À l'avant et à l'arrière",
      "Seulement hors ville",
    ],
    correctAnswer: 2,
    explanation: "Ceinture obligatoire partout, avant ET arrière.",
    tip: "Ceinture = -50% de mortalité en cas d'accident.",
    commonMistake: "Détacher la ceinture en ville ou sur courtes distances.",
  },
  {
    id: 41,
    category: "Sécurité",
    difficulty: 2,
    question: "Enfant de 8 ans doit être installé :",
    options: [
      "Siège auto adapté ou rehausseur",
      "Ceinture adulte",
      "À l'avant sans siège",
      "Debout à l'arrière",
    ],
    correctAnswer: 0,
    explanation:
      "Jusqu'à 10 ans ou 135 cm : siège auto/rehausseur obligatoire.",
    tip: "Choisir siège homologué selon poids et taille de l'enfant.",
    commonMistake:
      "Mettre ceinture adulte directement pour un enfant de 8 ans.",
  },
  {
    id: 42,
    category: "Sécurité",
    difficulty: 2,
    question: "En cas de crevaison sur autoroute, vous devez :",
    options: [
      "Réparer sur place",
      "Mettre gilet + triangle, se mettre en sécurité",
      "Appeler sans sortir",
      "Continuer doucement",
    ],
    correctAnswer: 1,
    explanation:
      "Gilet jaune, triangle à 30m, sortir du véhicule côté sécurité.",
    tip: "Se mettre derrière glissière, ne JAMAIS rester dans la voiture.",
    commonMistake: "Rester dans le véhicule en attendant les secours.",
  },

  // CONDUCTEUR & USAGERS (8 questions)
  {
    id: 50,
    category: "Conducteur",
    difficulty: 2,
    question: "Vision d'un rétroviseur intérieur :",
    options: [
      "Tout l'arrière du véhicule",
      "Une partie, avec angle mort",
      "180° complet",
      "Seulement la route",
    ],
    correctAnswer: 1,
    explanation: "Rétroviseurs ne montrent pas tout : angles morts existent.",
    tip: "Toujours tourner la tête avant de changer de file.",
    commonMistake: "Se fier uniquement aux rétroviseurs pour déboîter.",
  },
  {
    id: 51,
    category: "Conducteur",
    difficulty: 1,
    question: "Au téléphone en conduisant (sans kit mains-libres) :",
    options: [
      "Autorisé si court",
      "Interdit et sanctionné",
      "Autorisé en ville",
      "Autorisé à l'arrêt moteur tournant",
    ],
    correctAnswer: 1,
    explanation: "Téléphone en main = interdit : 135€ + 3 points.",
    tip: "Même à l'arrêt moteur tournant c'est interdit !",
    commonMistake: "Répondre 'vite' en pensant que ça passe.",
  },

  // ROUTE & ENVIRONNEMENT (10 questions)
  {
    id: 60,
    category: "Route",
    difficulty: 2,
    question: "Par temps de brouillard (visibilité < 50m), vitesse maximum ?",
    options: ["90 km/h", "70 km/h", "50 km/h", "30 km/h"],
    correctAnswer: 2,
    explanation: "Brouillard épais (< 50m) = 50 km/h maximum.",
    tip: "Feux de brouillard + feux de croisement obligatoires.",
    commonMistake: "Rouler à 90 km/h avec brouillard.",
  },
  {
    id: 61,
    category: "Route",
    difficulty: 3,
    question: "Aquaplaning : que faire ?",
    options: [
      "Freiner fort",
      "Accélérer",
      "Débrayer, ne pas freiner, tenir le volant",
      "Tourner à gauche",
    ],
    correctAnswer: 2,
    explanation:
      "Aquaplaning : lever le pied, débrayer, tenir le volant droit, ne PAS freiner.",
    tip: "Laisser le véhicule ralentir naturellement pour retrouver adhérence.",
    commonMistake: "Freiner brusquement = perte totale de contrôle.",
  },

  // MÉCANIQUE & ENTRETIEN (8 questions)
  {
    id: 70,
    category: "Mécanique",
    difficulty: 2,
    question: "Pression des pneus : à vérifier :",
    options: [
      "À chaud après trajet",
      "À froid",
      "Peu importe",
      "Seulement en garage",
    ],
    correctAnswer: 1,
    explanation: "Pression pneus se vérifie à froid (avant roulage).",
    tip: "Vérifier pression mensuelle + avant longs trajets.",
    commonMistake: "Vérifier après avoir roulé (pression gonflée par chaleur).",
  },
  {
    id: 71,
    category: "Mécanique",
    difficulty: 1,
    question: "Voyant rouge moteur s'allume :",
    options: [
      "Continue, ce n'est rien",
      "Arrêter le véhicule rapidement",
      "Accélérer",
      "Vérifier dans 100 km",
    ],
    correctAnswer: 1,
    explanation: "Voyant rouge = danger immédiat, arrêt impératif.",
    tip: "Rouge = stop. Orange = surveillance.",
    commonMistake: "Continuer 'jusqu'au garage'.",
  },

  // PREMIERS SECOURS (6 questions)
  {
    id: 80,
    category: "Premiers Secours",
    difficulty: 1,
    question: "Numéro d'urgence européen ?",
    options: ["15", "17", "18", "112"],
    correctAnswer: 3,
    explanation: "112 = numéro d'urgence unique européen (tous services).",
    tip: "112 fonctionne même sans réseau de votre opérateur.",
    commonMistake: "Oublier le 112 et chercher le bon numéro.",
  },
  {
    id: 81,
    category: "Premiers Secours",
    difficulty: 2,
    question: "Victime inconsciente qui respire :",
    options: [
      "Position Latérale de Sécurité (PLS)",
      "Bouche-à-bouche",
      "Massage cardiaque",
      "La laisser sur le dos",
    ],
    correctAnswer: 0,
    explanation: "Inconscient + respire = PLS pour éviter étouffement.",
    tip: "PLS protège les voies aériennes.",
    commonMistake:
      "Laisser sur le dos = risque d'étouffement par langue ou vomi.",
  },
  {
    id: 82,
    category: "Premiers Secours",
    difficulty: 3,
    question: "Victime saigne abondamment du bras :",
    options: [
      "Garrot immédiat",
      "Compression directe de la plaie",
      "Attendre les secours",
      "Nettoyer d'abord",
    ],
    correctAnswer: 1,
    explanation:
      "Hémorragie : compression directe forte et continue sur la plaie.",
    tip: "Garrot = dernier recours si compression inefficace.",
    commonMistake: "Faire garrot systématiquement = risque amputation.",
  },

  // ÉCO-CONDUITE (8 questions)
  {
    id: 90,
    category: "Éco-conduite",
    difficulty: 2,
    question: "Pour consommer moins de carburant :",
    options: [
      "Accélérations brutales",
      "Conduite souple anticipée",
      "Fenêtres ouvertes sur autoroute",
      "Rouler au point mort",
    ],
    correctAnswer: 1,
    explanation:
      "Conduite souple, anticipation, rapports élevés = -20% consommation.",
    tip: "Anticiper pour éviter freinages/accélérations inutiles.",
    commonMistake: "Penser que vitesse rapide = économie.",
  },
  {
    id: 91,
    category: "Éco-conduite",
    difficulty: 2,
    question: "Climatisation augmente la consommation de :",
    options: ["5%", "10%", "15-25%", "50%"],
    correctAnswer: 2,
    explanation: "Clim = +15 à 25% de consommation en ville.",
    tip: "Préférer aération en ville, clim sur route.",
    commonMistake: "Laisser clim en permanence.",
  },
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
  { id: "Éco-conduite", name: "Éco-conduite", icon: "🌱" },
];

const BADGES = [
  {
    id: "first_step",
    name: "Premier Pas",
    icon: "🎯",
    condition: (q) => q >= 1,
  },
  { id: "streak_5", name: "Série 5", icon: "🔥", condition: (q, s) => s >= 5 },
  {
    id: "streak_10",
    name: "Série 10",
    icon: "⚡",
    condition: (q, s) => s >= 10,
  },
  {
    id: "streak_20",
    name: "Série 20",
    icon: "💥",
    condition: (q, s) => s >= 20,
  },
  { id: "exam_passed", name: "Examen Réussi", icon: "🏆" },
  { id: "perfect_exam", name: "Sans Faute", icon: "💎" },
  { id: "speed_demon", name: "Éclair", icon: "⚡" },
  { id: "level_5", name: "Expert", icon: "🎓", condition: (q, s, l) => l >= 5 },
  {
    id: "level_10",
    name: "Maître",
    icon: "👑",
    condition: (q, s, l) => l >= 10,
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// APPLICATION STATE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

class AppState {
  constructor() {
    this.loadProgress();
  }

  loadProgress() {
    const saved = localStorage.getItem("codeRouteProgress");
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
        vibrations: true,
      };
    }
  }

  save() {
    localStorage.setItem("codeRouteProgress", JSON.stringify(this));
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
    localStorage.removeItem("codeRouteProgress");
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
      case "exam":
        this.questions = this.shuffle(pool).slice(0, 40);
        break;
      case "training":
        this.questions = this.adaptiveSelection(pool, 20);
        break;
      case "theme":
        pool = pool.filter((q) => q.category === this.category);
        this.questions = this.shuffle(pool).slice(0, 20);
        break;
      case "errors":
        pool = pool.filter((q) => state.errorHistory.includes(q.id));
        this.questions = this.shuffle(pool);
        break;
      case "difficult":
        pool = pool.filter((q) => q.difficulty >= 3);
        this.questions = this.shuffle(pool).slice(0, 20);
        break;
    }
  }

  adaptiveSelection(pool, count) {
    const weakCategories = this.getWeakCategories();
    const selected = [];

    // 60% from weak categories
    const weakPool = pool.filter((q) => weakCategories.includes(q.category));
    selected.push(...this.shuffle(weakPool).slice(0, Math.floor(count * 0.6)));

    // 20% from errors
    const errorPool = pool.filter((q) => state.errorHistory.includes(q.id));
    selected.push(...this.shuffle(errorPool).slice(0, Math.floor(count * 0.2)));

    // 20% random
    const remaining = pool.filter((q) => !selected.includes(q));
    selected.push(...this.shuffle(remaining).slice(0, Math.floor(count * 0.2)));

    return this.shuffle(selected).slice(0, count);
  }

  getWeakCategories() {
    return CATEGORIES.map((cat) => ({
      id: cat.id,
      rate: state.getCategoryRate(cat.id),
    }))
      .sort((a, b) => a.rate - b.rate)
      .slice(0, 3)
      .map((c) => c.id);
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

  answerQuestion(answerIndex, manualContext = null) {
    const q = this.getCurrentQuestion();
    const isManual = manualContext && manualContext.manual;
    const correct = isManual
      ? manualContext.manualCorrect
      : answerIndex === q.correctAnswer;

    if (correct) this.score++;

    let xpEarned = correct ? 10 : 2;
    if (q.difficulty >= 3) xpEarned *= 1.5;
    if (state.streak > 5) xpEarned *= 2;
    if (this.mode === "difficult") xpEarned *= 2;
    if (this.hintUsed) xpEarned -= 5;

    xpEarned = Math.max(1, Math.floor(xpEarned));

    const leveledUp = state.addXP(xpEarned);
    state.recordAnswer(q.id, correct, q.category);

    this.hintUsed = false;

    return {
      correct,
      xpEarned,
      leveledUp,
      userAnswer: manualContext?.userAnswer || null,
    };
  }

  nextQuestion() {
    this.currentIndex++;
  }

  isFinished() {
    return this.currentIndex >= this.questions.length;
  }

  getResults() {
    const duration = Math.floor((Date.now() - this.startTime) / 1000);
    const passed =
      this.mode === "exam"
        ? this.score >= 35
        : this.score >= this.questions.length * 0.7;

    if (this.mode === "exam") {
      state.examResults.push({
        date: Date.now(),
        score: this.score,
        total: this.questions.length,
        passed,
        duration,
      });
      state.save();
    }

    return {
      score: this.score,
      total: this.questions.length,
      percentage: Math.round((this.score / this.questions.length) * 100),
      duration,
      passed,
    };
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// UI CONTROLLER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

let state, quiz, timer;
let freeAnswerMode = false;
let speechEnabled = false;

function init() {
  state = new AppState();
  applySettings();
  setupEventListeners();
  updateHomeScreen();

  setTimeout(() => {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
  }, 800);
}

function setupEventListeners() {
  // Navigation
  document.getElementById("btn-settings").onclick = () =>
    showScreen("screen-settings");
  document.getElementById("btn-exam-mode").onclick = () => startQuiz("exam");
  document.getElementById("btn-training-mode").onclick = () =>
    startQuiz("training");
  document.getElementById("btn-theme-mode").onclick = () =>
    showScreen("screen-themes");
  document.getElementById("btn-errors-mode").onclick = () =>
    startQuiz("errors");
  document.getElementById("btn-difficult-mode").onclick = () =>
    startQuiz("difficult");

  // Back buttons
  document.getElementById("btn-back-themes").onclick = () =>
    showScreen("screen-home");
  document.getElementById("btn-back-stats").onclick = () =>
    showScreen("screen-home");
  document.getElementById("btn-back-settings").onclick = () =>
    showScreen("screen-home");
  document.getElementById("btn-quit-quiz").onclick = quitQuiz;

  // Results
  document.getElementById("btn-home").onclick = () => showScreen("screen-home");
  document.getElementById("btn-view-stats").onclick = () =>
    showScreen("screen-stats");

  // Settings
  document.getElementById("toggle-dark-mode").onchange = toggleDarkMode;
  document.getElementById("toggle-sounds").onchange = (e) => {
    state.settings.sounds = e.target.checked;
    state.save();
  };
  document.getElementById("toggle-vibrations").onchange = (e) => {
    state.settings.vibrations = e.target.checked;
    state.save();
  };
  document.getElementById("btn-reset-progress").onclick = () => {
    showConfirmModal(
      "🗑️ Réinitialiser",
      "Êtes-vous sûr de vouloir réinitialiser toute votre progression ? Cette action est irréversible.",
      () => state.reset(),
    );
  };

  renderThemesList();
}

function showScreen(screenId) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");

  if (screenId === "screen-home") updateHomeScreen();
  if (screenId === "screen-stats") updateStatsScreen();
}

function updateHomeScreen() {
  document.getElementById("user-level").textContent = state.level;
  document.getElementById("level-number").textContent = state.level;

  const xpForNext = state.level * 1000;
  const currentLevelXP = state.xp % 1000;
  document.getElementById("current-xp").textContent = currentLevelXP;
  document.getElementById("next-level-xp").textContent = 1000;
  document.getElementById("xp-fill").style.width =
    (currentLevelXP / 1000) * 100 + "%";

  document.getElementById("stat-total").textContent = state.totalQuestions;
  document.getElementById("stat-correct").textContent =
    state.getSuccessRate() + "%";
  document.getElementById("stat-badges").textContent = state.badges.length;

  const streakBadge = document.getElementById("streak-badge");
  if (state.streak > 0) {
    streakBadge.classList.remove("hidden");
    document.getElementById("streak-count").textContent = state.streak;
  } else {
    streakBadge.classList.add("hidden");
  }

  const errorsCount = document.getElementById("errors-count");
  errorsCount.textContent =
    state.errorHistory.length > 0
      ? `${state.errorHistory.length} erreur(s) à revoir`
      : "Aucune erreur enregistrée";
}

function renderThemesList() {
  const container = document.getElementById("themes-list");
  container.innerHTML = CATEGORIES.map((cat) => {
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
                            stroke-dasharray="157" stroke-dashoffset="${157 - (157 * rate) / 100}"
                            transform="rotate(-90 30 30)" stroke-linecap="round"></circle>
                    </svg>
                    <div class="theme-progress-text">${rate}%</div>
                </div>
            </button>
        `;
  }).join("");
}

function startQuiz(mode, category = null) {
  if (mode === "errors" && state.errorHistory.length === 0) {
    showToast("Aucune erreur à réviser !", "info");
    return;
  }

  quiz = new QuizEngine(mode, category);
  showScreen("screen-quiz");

  if (mode === "exam") {
    startTimer();
    document.getElementById("quiz-timer").classList.remove("hidden");
  } else {
    document.getElementById("quiz-timer").classList.add("hidden");
  }

  displayQuestion();
}

function displayQuestion() {
  const q = quiz.getCurrentQuestion();

  document.getElementById("question-counter").textContent =
    `${quiz.currentIndex + 1}/${quiz.questions.length}`;
  document.getElementById("progress-fill").style.width =
    (quiz.currentIndex / quiz.questions.length) * 100 + "%";

  document.getElementById("question-category").textContent =
    CATEGORIES.find((c) => c.id === q.category)?.icon + " " + q.category;
  document.getElementById("question-text").textContent = q.question;

  const imgContainer = document.getElementById("question-image-container");
  if (q.image) {
    document.getElementById("question-image").src = q.image;
    imgContainer.classList.remove("hidden");
  } else {
    imgContainer.classList.add("hidden");
  }

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = q.options
    .map(
      (opt, i) => `
        <button class="option-btn" onclick="selectAnswer(${i})">
            <div class="option-letter">${String.fromCharCode(65 + i)}</div>
            <div class="option-text">${opt}</div>
        </button>
    `,
    )
    .join("");

  freeAnswerMode = false;
  const freeContainer = document.getElementById("free-answer-container");
  freeContainer.classList.add("hidden");
  const freeInput = document.getElementById("free-answer-input");
  freeInput.value = "";
  const toggleButton = document.getElementById("btn-toggle-answer-mode");
  toggleButton.setAttribute("aria-pressed", "false");
  toggleButton.classList.remove("active");
  toggleButton.onclick = toggleAnswerMode;
  document.getElementById("btn-submit-free-answer").onclick = submitFreeAnswer;
  const readerButton = document.getElementById("btn-a11y-reader");
  readerButton.setAttribute("aria-pressed", speechEnabled ? "true" : "false");
  readerButton.classList.toggle("active", speechEnabled);
  readerButton.onclick = toggleReaderMode;

  if (speechEnabled) speakQuestion(q);

  document.getElementById("hint-text").classList.add("hidden");
  document.getElementById("btn-hint").classList.remove("used");
  document.getElementById("btn-hint").onclick = showHint;
  document.getElementById("answer-feedback").classList.add("hidden");
}

function showHint() {
  const q = quiz.getCurrentQuestion();
  document.getElementById("hint-text").textContent = q.tip;
  document.getElementById("hint-text").classList.remove("hidden");
  document.getElementById("btn-hint").classList.add("used");
  quiz.hintUsed = true;
  vibrate();
}

function selectAnswer(index) {
  if (freeAnswerMode) return;

  const q = quiz.getCurrentQuestion();
  const result = quiz.answerQuestion(index);

  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn, i) => {
    btn.classList.add("disabled");
    if (i === q.correctAnswer) btn.classList.add("correct");
    if (i === index && !result.correct) btn.classList.add("incorrect");
  });

  playSound(result.correct ? "success" : "error");
  vibrate();

  setTimeout(() => showFeedback(result), 500);
}

function showFeedback(result) {
  const q = quiz.getCurrentQuestion();

  document.getElementById("feedback-icon").textContent = result.correct
    ? "🎉"
    : "😔";
  document.getElementById("feedback-title").textContent = result.correct
    ? "Bonne réponse !"
    : "Mauvaise réponse";
  document.getElementById("feedback-title").className =
    "feedback-title " + (result.correct ? "correct" : "incorrect");
  document.getElementById("feedback-message").textContent = result.correct
    ? "Continuez comme ça !"
    : "Ne vous découragez pas, chaque erreur est une leçon.";

  const userAnswerEl = document.getElementById("feedback-user-answer");
  if (result.userAnswer) {
    userAnswerEl.textContent = `Votre réponse : ${result.userAnswer}`;
    userAnswerEl.classList.remove("hidden");
  } else {
    userAnswerEl.classList.add("hidden");
  }

  if (speechEnabled && window.speechSynthesis) {
    const message = result.correct
      ? "Bonne réponse. Continuez !"
      : `Mauvaise réponse. La bonne réponse était ${q.options[q.correctAnswer]}`;
    speakText(message);
  }

  document.getElementById("explanation-text").textContent = q.explanation;
  document.getElementById("tip-text").textContent = q.tip;
  document.getElementById("mistake-text").textContent = q.commonMistake;
  document.getElementById("xp-earned").textContent = `+${result.xpEarned} XP`;

  document.getElementById("answer-feedback").classList.remove("hidden");
  document.getElementById("btn-next-question").onclick = nextQuestion;

  if (result.leveledUp) {
    showToast(`🎉 Niveau ${state.level} atteint !`, "success");
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
  showScreen("screen-results");

  document.getElementById("results-icon").textContent = results.passed
    ? "🎉"
    : "😔";
  document.getElementById("results-title").textContent = results.passed
    ? "Félicitations !"
    : "Pas encore...";
  document.getElementById("results-subtitle").textContent = results.passed
    ? "Vous avez réussi !"
    : "Continuez à vous entraîner";

  document.getElementById("results-score").textContent =
    `${results.score}/${results.total}`;
  document.querySelector(".score-label").textContent = results.passed
    ? "Réussi"
    : "Échoué";

  const minutes = Math.floor(results.duration / 60);
  const seconds = results.duration % 60;
  document.getElementById("result-time").textContent =
    `${minutes}:${seconds.toString().padStart(2, "0")}`;
  document.getElementById("result-accuracy").textContent =
    results.percentage + "%";
  document.getElementById("result-xp").textContent =
    `+${Math.floor(results.score * 10)} XP`;

  // Animate score ring
  const circumference = 2 * Math.PI * 85;
  const offset = circumference - (results.percentage / 100) * circumference;
  document.getElementById("score-ring-progress").style.strokeDashoffset =
    offset;

  // Check badges
  checkBadges(results);
}

function checkBadges(results) {
  const newBadges = [];

  if (state.totalQuestions === 1) newBadges.push("first_step");
  if (state.streak >= 5) newBadges.push("streak_5");
  if (state.streak >= 10) newBadges.push("streak_10");
  if (state.streak >= 20) newBadges.push("streak_20");
  if (results.passed && quiz.mode === "exam") newBadges.push("exam_passed");
  if (results.score === results.total && quiz.mode === "exam")
    newBadges.push("perfect_exam");
  if (results.duration < 900 && quiz.mode === "exam")
    newBadges.push("speed_demon");
  if (state.level >= 5) newBadges.push("level_5");
  if (state.level >= 10) newBadges.push("level_10");

  const unlocked = newBadges.filter((id) => state.unlockBadge(id));

  if (unlocked.length > 0) {
    const badgesList = unlocked
      .map((id) => {
        const badge = BADGES.find((b) => b.id === id);
        return `<div class="badge-item">${badge.icon}</div>`;
      })
      .join("");

    document.getElementById("badges-list").innerHTML = badgesList;
    document.getElementById("new-badges").classList.remove("hidden");
  }
}

function updateStatsScreen() {
  document.getElementById("total-questions-stat").textContent =
    state.totalQuestions;
  document.getElementById("success-rate-stat").textContent =
    state.getSuccessRate() + "%";

  const categoryList = document.getElementById("category-stats-list");
  categoryList.innerHTML = CATEGORIES.map((cat) => {
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
  }).join("");

  const badgesGrid = document.getElementById("all-badges-list");
  badgesGrid.innerHTML = BADGES.map((badge) => {
    const unlocked = state.badges.includes(badge.id);
    return `
            <div class="badge-card ${unlocked ? "unlocked" : "locked"}">
                <div class="badge-icon">${badge.icon}</div>
                <div class="badge-name">${badge.name}</div>
            </div>
        `;
  }).join("");

  const examList = document.getElementById("exam-history-list");
  if (state.examResults.length === 0) {
    examList.innerHTML =
      '<p style="text-align:center;color:var(--text-secondary)">Aucun examen passé</p>';
  } else {
    examList.innerHTML = state.examResults
      .slice(-5)
      .reverse()
      .map((exam) => {
        const date = new Date(exam.date).toLocaleDateString("fr-FR");
        return `
                <div class="exam-history-item">
                    <div>
                        <div class="exam-date">${date}</div>
                        <div class="exam-result ${exam.passed ? "passed" : "failed"}">
                            ${exam.score}/${exam.total} - ${exam.passed ? "Réussi" : "Échoué"}
                        </div>
                    </div>
                </div>
            `;
      })
      .join("");
  }
}

function quitQuiz() {
  showConfirmModal(
    "⚠️ Quitter le quiz",
    "Voulez-vous vraiment quitter ? Votre progression ne sera pas sauvegardée.",
    () => {
      if (timer) clearInterval(timer);
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      showScreen("screen-home");
    },
  );
}

function showConfirmModal(title, message, onConfirm) {
  const modal = document.getElementById("confirm-modal");
  modal.querySelector(".modal-title").textContent = title;
  modal.querySelector(".modal-message").textContent = message;

  modal.classList.remove("hidden");

  document.getElementById("modal-confirm").onclick = () => {
    modal.classList.add("hidden");
    onConfirm();
  };

  document.getElementById("modal-cancel").onclick = () => {
    modal.classList.add("hidden");
  };

  // Close on backdrop click
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  };
}

function startTimer() {
  let seconds = 1800; // 30 minutes
  timer = setInterval(() => {
    seconds--;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    document.getElementById("quiz-timer").textContent =
      `⏱️ ${mins}:${secs.toString().padStart(2, "0")}`;

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

function toggleAnswerMode() {
  freeAnswerMode = !freeAnswerMode;
  const optionsContainer = document.getElementById("options-container");
  const freeContainer = document.getElementById("free-answer-container");
  const toggleButton = document.getElementById("btn-toggle-answer-mode");

  toggleButton.setAttribute("aria-pressed", freeAnswerMode ? "true" : "false");
  toggleButton.classList.toggle("active", freeAnswerMode);

  if (freeAnswerMode) {
    optionsContainer.classList.add("collapsed");
    freeContainer.classList.remove("hidden");
    document.getElementById("free-answer-input").focus();
  } else {
    optionsContainer.classList.remove("collapsed");
    freeContainer.classList.add("hidden");
  }
}

function toggleReaderMode() {
  speechEnabled = !speechEnabled;
  const readerButton = document.getElementById("btn-a11y-reader");
  readerButton.setAttribute("aria-pressed", speechEnabled ? "true" : "false");
  readerButton.classList.toggle("active", speechEnabled);

  if (speechEnabled) {
    const q = quiz.getCurrentQuestion();
    speakQuestion(q);
  } else if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

function speakQuestion(question) {
  if (!window.speechSynthesis) {
    showToast(
      "La lecture audio n'est pas disponible sur cet appareil.",
      "warning",
    );
    speechEnabled = false;
    const readerButton = document.getElementById("btn-a11y-reader");
    readerButton.setAttribute("aria-pressed", "false");
    readerButton.classList.remove("active");
    return;
  }

  window.speechSynthesis.cancel();

  const toSpeak = [];
  toSpeak.push(`Question : ${question.question}`);
  question.options.forEach((opt, idx) => {
    toSpeak.push(`Réponse ${String.fromCharCode(65 + idx)} : ${opt}`);
  });

  const utterance = new SpeechSynthesisUtterance(toSpeak.join(". "));
  utterance.lang = "fr-FR";
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function submitFreeAnswer() {
  if (!freeAnswerMode) {
    showToast("Activez d'abord le mode réponse libre.", "info");
    return;
  }

  const textarea = document.getElementById("free-answer-input");
  const answer = textarea.value.trim();

  if (!answer) {
    showToast("Veuillez saisir une réponse avant de valider.", "warning");
    textarea.focus();
    return;
  }

  if (speechEnabled && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }

  const q = quiz.getCurrentQuestion();
  const normalized = (text) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9 ]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const correctText = normalized(q.options[q.correctAnswer]);
  const userText = normalized(answer);

  const threshold = 0.75;

  const isCorrect =
    userText &&
    (userText === correctText ||
      correctText.includes(userText) ||
      computeSimilarity(userText, correctText) >= threshold);

  const result = quiz.answerQuestion(q.correctAnswer, {
    manual: true,
    manualCorrect: isCorrect,
    userAnswer: answer,
  });

  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn, i) => {
    btn.classList.add("disabled");
    if (i === q.correctAnswer) btn.classList.add("correct");
    if (!isCorrect && i === q.correctAnswer) btn.classList.add("highlight");
  });

  playSound(result.correct ? "success" : "error");
  vibrate();

  setTimeout(() => showFeedback(result), 500);
}

function applySettings() {
  document.documentElement.setAttribute(
    "data-theme",
    state.settings.darkMode ? "dark" : "light",
  );
  document.getElementById("toggle-dark-mode").checked = state.settings.darkMode;
  document.getElementById("toggle-sounds").checked = state.settings.sounds;
  document.getElementById("toggle-vibrations").checked =
    state.settings.vibrations;
}

function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.getElementById("toast-container").appendChild(toast);

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

function computeSimilarity(a, b) {
  const distance = levenshteinDistance(a, b);
  const maxLen = Math.max(a.length, b.length) || 1;
  return 1 - distance / maxLen;
}

function levenshteinDistance(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0),
  );

  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      );
    }
  }

  return matrix[a.length][b.length];
}

function speakText(text) {
  if (!speechEnabled || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "fr-FR";
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

// Initialize app
document.addEventListener("DOMContentLoaded", init);
