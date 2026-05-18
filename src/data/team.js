import { TeamArraySchema, TestimonialsArraySchema, parseOrThrow } from '@/schemas'

const rawTeam = [
  {
    id: 1,
    name: 'Gedeon Ndele',
    role: 'CEO',
    image: '/images/team-gedeon.jpg',
    bio: "Fondateur et dirigeant d'UTS. Visionnaire et stratège, il pilote le développement de l'entreprise et les partenariats clés à Goma.",
    specialties: ['Leadership', 'Stratégie', 'Électrotechnique'],
  },
  {
    id: 2,
    name: 'Elie Uwezo',
    role: 'CTO',
    image: '/images/team-elie.jpg',
    bio: "Architecte technique d'UTS. Expert en systèmes électriques, robotique et énergies renouvelables. Garant de la qualité des solutions.",
    specialties: ['Électronique', 'Robotique', 'Solaire'],
  },
  {
    id: 3,
    name: 'Samuel Irumva',
    role: 'Project Manager',
    image: '/images/team-sammy.jpg',
    bio: "Responsable de la livraison des projets dans les délais et budgets convenus. Interlocuteur privilégié des clients terrain.",
    specialties: ['Gestion de projets', 'Client', 'Planning'],
  },
  {
    id: 4,
    name: 'Dorcas Ndele',
    role: 'Secrétaire & RH',
    image: '/images/team-dorcas.jpg',
    bio: "Coordinatrice administrative et ressources humaines d'UTS. Assure le bon fonctionnement interne et le suivi des équipes.",
    specialties: ['Administration', 'RH', 'Communication'],
    objectPosition: 'center 25%',
  },
]

const rawTestimonials = [
  {
    id: 1,
    name: 'Directeur Technique',
    company: 'Institution Bancaire Locale',
    text: "UTS a transformé notre infrastructure informatique. Leur équipe est professionnelle, réactive et leurs solutions durables. Je recommande sans hésitation.",
    rating: 5,
    avatar: '/images/team-gedeon.jpg',
  },
  {
    id: 2,
    name: 'Responsable Académique',
    company: 'ITIG Goma',
    text: "La formation en robotique dispensée par UTS a ouvert de nouveaux horizons pour nos étudiants. Qualité pédagogique exceptionnelle.",
    rating: 5,
    avatar: '/images/team-elie.jpg',
  },
  {
    id: 3,
    name: 'Propriétaire',
    company: 'Hôtel Gorille, Goma',
    text: "Notre installation solaire fonctionne parfaitement depuis un an. UTS a su comprendre nos besoins et livrer une solution fiable et économique.",
    rating: 5,
    avatar: '/images/team-sammy.jpg',
  },
]

export const team = parseOrThrow(TeamArraySchema, rawTeam, 'team')
export const testimonials = parseOrThrow(TestimonialsArraySchema, rawTestimonials, 'testimonials')
