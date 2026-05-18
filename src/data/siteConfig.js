import { SiteConfigSchema, parseOrThrow } from '@/schemas'

const raw = {
  name: 'Ultra Tech Solutions',
  shortName: 'UTS',
  tagline: "L'Excellence Technologique au Service de Goma",
  address: '226 Avenue Katoyi, Mabanga Nord',
  city: 'Goma, Nord-Kivu',
  country: 'République Démocratique du Congo',
  phones: ['+243 970 838 062', '+243 890 996 216'],
  email: 'contact@ultratech-solutions.cd',
  whatsapp: 'https://wa.me/243970838062',
  workingHours: 'Lun – Sam : 8h00 – 18h00',
}

export const siteConfig = parseOrThrow(SiteConfigSchema, raw, 'siteConfig')
