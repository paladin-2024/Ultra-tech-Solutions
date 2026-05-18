import { ServicesArraySchema, parseOrThrow } from '@/schemas'

const raw = [
  {
    id: 1,
    slug: 'formations',
    icon: 'GraduationCap',
    title: 'Formations',
    shortDesc: 'Programmes de formation professionnelle en technologies modernes.',
    description:
      'Nous proposons des formations complètes en électronique, programmation et robotique pour particuliers, étudiants et entreprises. Nos programmes certifiants sont conçus pour répondre aux besoins du marché africain.',
    features: [
      'Formations en électronique et circuits imprimés',
      'Cours de programmation embarquée (Arduino, Raspberry Pi)',
      'Formation en robotique industrielle',
      'Certifications professionnelles reconnues',
      "Formation en énergie solaire et systèmes off-grid",
    ],
  },
  {
    id: 2,
    slug: 'installation-domestique',
    icon: 'Home',
    title: 'Installation Domestique',
    shortDesc: "Solutions d'installation pour résidences et locaux commerciaux.",
    description:
      "De la conception au câblage, nous assurons l'installation complète de vos systèmes électriques, réseaux et équipements domestiques. Chaque installation respecte les normes de sécurité internationales.",
    features: [
      'Câblage électrique basse et haute tension',
      'Installation de systèmes de sécurité (caméras, alarmes)',
      'Domotique et automatisation résidentielle',
      "Systèmes d'énergie solaire off-grid / on-grid",
      'Réseaux informatiques et téléphonie IP',
    ],
  },
  {
    id: 3,
    slug: 'robotique',
    icon: 'Bot',
    title: 'Robotique',
    shortDesc: 'Conception et implémentation de solutions robotiques sur mesure.',
    description:
      "Ultra Tech Solutions conçoit et fabrique des solutions robotiques adaptées aux besoins locaux : robots industriels, bras automatisés, systèmes de contrôle et robots éducatifs pour lycées et universités.",
    features: [
      'Conception de robots industriels sur mesure',
      'Robots éducatifs pour établissements scolaires',
      'Automatisation de processus de production',
      'Systèmes embarqués microcontrôleurs (Arduino/STM32)',
      'Intégration IoT et supervision à distance',
    ],
  },
  {
    id: 4,
    slug: 'etude-projets',
    icon: 'FileText',
    title: 'Étude de Projets',
    shortDesc: 'Analyse, conception et planification de vos projets technologiques.',
    description:
      "Notre équipe d'ingénieurs analyse vos besoins et élabore des solutions techniques complètes. De l'étude de faisabilité à la livraison, nous accompagnons chaque étape de votre projet.",
    features: [
      'Analyse et étude de faisabilité technique',
      'Conception et dimensionnement des systèmes',
      'Planification et budgétisation détaillée',
      "Suivi d'avancement et reporting régulier",
      'Documentation technique complète (plans, schémas)',
    ],
  },
  {
    id: 5,
    slug: 'maintenance',
    icon: 'Wrench',
    title: 'Maintenance',
    shortDesc: 'Maintenance préventive et corrective de tous vos équipements.',
    description:
      'Nos contrats de maintenance garantissent la continuité de vos opérations. Nous assurons l\'entretien régulier, les mises à jour et la surveillance de vos équipements technologiques.',
    features: [
      'Contrats de maintenance préventive annuels',
      'Maintenance corrective prioritaire sous 24h',
      'Entretien de parcs informatiques (PC, serveurs)',
      "Maintenance d'équipements électriques et solaires",
      "Rapports d'intervention détaillés",
    ],
  },
  {
    id: 6,
    slug: 'depannage',
    icon: 'Zap',
    title: 'Dépannage',
    shortDesc: 'Intervention rapide pour résoudre tous vos problèmes techniques.',
    description:
      "Notre équipe de techniciens intervient rapidement sur site ou à distance pour diagnostiquer et résoudre vos pannes. Disponibles 6j/7, nous minimisons vos temps d'arrêt.",
    features: [
      'Diagnostic rapide sur site et à distance',
      "Réparation d'urgence sous 24h",
      'Support technique téléphonique 6j/7',
      'Remplacement de pièces avec stock local',
      "Rapport d'intervention et conseils préventifs",
    ],
  },
]

export const services = parseOrThrow(ServicesArraySchema, raw, 'services')
