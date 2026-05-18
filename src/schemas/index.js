import { z } from 'zod'

// ─── Enums ────────────────────────────────────────────────────────────────────

export const ServiceIconEnum = z.enum([
  'GraduationCap',
  'Home',
  'Bot',
  'FileText',
  'Wrench',
  'Zap',
])

export const ServiceSlugEnum = z.enum([
  'formations',
  'installation-domestique',
  'robotique',
  'etude-projets',
  'maintenance',
  'depannage',
])

export const ContactServiceEnum = z.enum([
  'formations',
  'installation',
  'robotique',
  'etude-projets',
  'maintenance',
  'depannage',
])

export const ProjectCategoryEnum = z.enum([
  'Installation',
  'Formation',
  'Robotique',
  'Domotique',
  'Maintenance',
])

export const RatingEnum = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
])

// ─── Data Schemas ─────────────────────────────────────────────────────────────

export const ServiceSchema = z.object({
  id: z.number().int().positive(),
  slug: ServiceSlugEnum,
  icon: ServiceIconEnum,
  title: z.string().min(1),
  shortDesc: z.string().min(1),
  description: z.string().min(1),
  features: z.array(z.string().min(1)).min(1).max(8),
})

export const ProjectSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  category: ProjectCategoryEnum,
  image: z.string().min(1),
  description: z.string().min(1),
  year: z.number().int().min(2010).max(new Date().getFullYear() + 1),
  client: z.string().min(1),
  tags: z.array(z.string().min(1)).min(1).max(6),
})

export const TeamMemberSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(2),
  role: z.string().min(2),
  image: z.string().min(1),
  bio: z.string().min(10),
  specialties: z.array(z.string().min(1)).min(1).max(5),
})

export const TestimonialSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  company: z.string().min(1),
  text: z.string().min(10),
  rating: RatingEnum,
  avatar: z.string().min(1),
})

// ─── Form Schemas ─────────────────────────────────────────────────────────────

const phoneRegex = /^\+?[\d\s()\-]{8,20}$/

export const ContactFormSchema = z.object({
  nom: z
    .string({ required_error: 'Le nom est requis' })
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(80, 'Le nom est trop long')
    .regex(/^[A-Za-zÀ-ÿ\s'-]+$/, 'Le nom ne doit contenir que des lettres'),

  email: z
    .string({ required_error: "L'email est requis" })
    .email('Adresse email invalide')
    .max(120, 'Email trop long')
    .toLowerCase(),

  telephone: z
    .string()
    .regex(phoneRegex, 'Numéro de téléphone invalide')
    .optional()
    .or(z.literal('')),

  service: ContactServiceEnum,

  sujet: z
    .string()
    .min(3, 'Le sujet doit contenir au moins 3 caractères')
    .max(120, 'Le sujet est trop long')
    .optional()
    .or(z.literal('')),

  message: z
    .string({ required_error: 'Le message est requis' })
    .min(20, 'Le message doit contenir au moins 20 caractères')
    .max(2000, 'Le message ne doit pas dépasser 2000 caractères'),

  rgpd: z
    .boolean()
    .refine((v) => v === true, {
      message: 'Vous devez accepter la politique de confidentialité',
    }),
})

// ─── Filter / Search Schemas ──────────────────────────────────────────────────

export const ProjectFilterSchema = z.object({
  category: z.string().default('Tous'),
  search: z.string().max(100).optional(),
  year: z.number().int().optional(),
})

export const NavSearchSchema = z.object({
  q: z.string().max(100).optional(),
})

// ─── Config / Env Schemas ─────────────────────────────────────────────────────

export const SiteConfigSchema = z.object({
  name: z.string().min(1),
  shortName: z.string().min(1),
  tagline: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  country: z.string().min(1),
  phones: z.array(z.string()).min(1),
  email: z.string().email(),
  whatsapp: z.string().url(),
  workingHours: z.string().min(1),
})

// ─── Inferred Types (JS-friendly — usable with JSDoc) ─────────────────────────
// @typedef {z.infer<typeof ServiceSchema>} Service
// @typedef {z.infer<typeof ProjectSchema>} Project
// @typedef {z.infer<typeof TeamMemberSchema>} TeamMember
// @typedef {z.infer<typeof TestimonialSchema>} Testimonial
// @typedef {z.infer<typeof ContactFormSchema>} ContactFormData

// ─── Bulk Array Validators ────────────────────────────────────────────────────

export const ServicesArraySchema = z.array(ServiceSchema)
export const ProjectsArraySchema = z.array(ProjectSchema)
export const TeamArraySchema = z.array(TeamMemberSchema)
export const TestimonialsArraySchema = z.array(TestimonialSchema)

// ─── Runtime parse helper (throws with readable message) ─────────────────────
export function parseOrThrow(schema, data, label = 'data') {
  const result = schema.safeParse(data)
  if (!result.success) {
    const issues = result.error.issues
      .map((i) => `  • ${i.path.join('.')}: ${i.message}`)
      .join('\n')
    throw new Error(`[Schema] Invalid ${label}:\n${issues}`)
  }
  return result.data
}

export function safeParseArray(schema, data) {
  return data.map((item, i) => {
    const result = schema.safeParse(item)
    if (!result.success) {
      console.warn(`[Schema] Item #${i} failed validation:`, result.error.format())
      return null
    }
    return result.data
  }).filter(Boolean)
}
