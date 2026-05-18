import { ProjectsArraySchema, parseOrThrow } from '@/schemas'

const raw = [
  {
    id: 1,
    title: 'Système Solaire – Hôtel Gorille',
    category: 'Installation',
    image: '/images/tech-solar-rooftop.jpg',
    description:
      "Installation d'un système d'énergie solaire hybride 10 kWc avec batteries lithium pour l'Hôtel Gorille à Goma. Autonomie complète en cas de coupure secteur.",
    year: 2024,
    client: 'Hôtel Gorille',
    tags: ['Énergie Solaire', 'Installation'],
  },
  {
    id: 2,
    title: 'Formation Robotique – ESCO Goma',
    category: 'Formation',
    image: '/images/arduino-training.jpg',
    description:
      "Programme de formation intensive en robotique pour 60 étudiants de l'École Supérieure du Congo à Goma. Fabrication et programmation de robots éducatifs.",
    year: 2024,
    client: 'ESCO Goma',
    tags: ['Robotique', 'Formation'],
  },
  {
    id: 3,
    title: 'Câblage Complet – Immeuble de 3 Niveaux',
    category: 'Installation',
    image: '/images/tech-wiring-construction.jpg',
    description:
      "Câblage électrique complet d'un immeuble en construction à Goma, couvrant 3 niveaux. Installation des tableaux, prises, éclairage et systèmes de protection.",
    year: 2024,
    client: 'Promoteur Privé',
    tags: ['Câblage', 'Construction'],
  },
  {
    id: 4,
    title: 'Domotique – Résidence Privée',
    category: 'Domotique',
    image: '/images/smart-home-module.jpg',
    description:
      "Installation d'un système domotique complet (éclairage, climatisation, sécurité) contrôlé via smartphone pour une résidence haut standing à Goma.",
    year: 2023,
    client: 'Client Privé',
    tags: ['Domotique', 'Automatisation'],
  },
  {
    id: 5,
    title: 'Laboratoire Robotique – UTS',
    category: 'Robotique',
    image: '/images/robotics-lab.jpg',
    description:
      "Mise en place du laboratoire de robotique et systèmes embarqués d'UTS. Équipé d'oscilloscopes, kits Arduino, Raspberry Pi et robots programmables.",
    year: 2024,
    client: 'Ultra Tech Solutions',
    tags: ['Robotique', 'Formation'],
  },
  {
    id: 6,
    title: 'Robots Éducatifs – Lycée de Goma',
    category: 'Robotique',
    image: '/images/raspberry-pi.jpg',
    description:
      "Conception, fabrication et livraison de 12 robots éducatifs programmables pour le cours de technologie du Lycée de Goma. Formation des enseignants incluse.",
    year: 2024,
    client: 'Lycée de Goma',
    tags: ['Robotique', 'Éducation'],
  },
  {
    id: 7,
    title: 'Éclairage Intérieur Haut Gamme',
    category: 'Installation',
    image: '/images/interior-stone-lighting.jpg',
    description:
      "Installation d'un éclairage architectural premium avec spots encastrés et mur en pierre naturelle éclairé pour une villa privée à Goma.",
    year: 2024,
    client: 'Client Privé',
    tags: ['Éclairage', 'Installation'],
  },
  {
    id: 8,
    title: 'Luminaires Design – Appartement',
    category: 'Installation',
    image: '/images/pendant-lights.jpg',
    description:
      "Fourniture et pose de luminaires design suspendus en cage pour un appartement haut de gamme. Câblage et mise en service inclus.",
    year: 2024,
    client: 'Client Privé',
    tags: ['Éclairage', 'Design'],
  },
]

export const projects = parseOrThrow(ProjectsArraySchema, raw, 'projects')

export const projectCategories = ['Tous', 'Installation', 'Formation', 'Robotique', 'Domotique', 'Maintenance']
