export const site = {
  name: 'Lawyer Company',
  legalName: 'Lawyer Company Abogados',
  tagline: 'Tu socio legal de confianza',
  url: 'https://lawyer-company.com',
  phoneDisplay: '+57 320 666 2007',
  phoneHref: '+573206662007',
  whatsapp: 'https://wa.me/573206662007',
  email: 'gerencia@lawyer-company.com',
  address: 'Llano Grande, Ciudadela Complex, Edificio 60-61, oficina 201, Rionegro, Antioquia',
  addressShort: 'Rionegro, Antioquia, Colombia',
  // Enlace estable a la ficha exacta del negocio en Google Maps, usando
  // el CID oficial (derivado del ftid de su Google Business Profile) en
  // vez de un enlace copiado con tokens de sesión, que no está
  // garantizado que funcione fuera del navegador donde se copió.
  mapsUrl: 'https://www.google.com/maps?cid=4425632920166587584',
  hoursNote: 'Atención 24/7 para urgencias en derecho penal',
  bankAccount: '41200039490',
  consultationFee: '$180.000 COP',
  platformUrlAbogado: 'https://dashboard.pleglex.com/login',
  platformUrlCliente: 'https://dashboard.pleglex.com/v1/firma/614/login',
  social: {
    facebook: 'https://www.facebook.com/lawyercompanyabogados',
    linkedin: 'https://www.linkedin.com/company/lawyer-company',
    instagram: 'https://www.instagram.com/lawyercompany',
  },
} as const;

export const nav = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros/' },
  { label: 'Asesoría Jurídica Integral', href: '/asesoria-juridica-integral/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contacto y PQRS', href: '/contacto-y-pqrs/' },
] as const;

export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image?: string;
  linkedin?: string;
  /** Tailwind object-position utility for the crop. Defaults to
   * object-center; only needed when the source photo isn't a
   * face-centered environmental portrait (e.g. a full-body shot). */
  imagePosition?: string;
};

export const team: TeamMember[] = [
  {
    name: 'Cristian Sánchez Gil',
    role: 'Abogado Especialista',
    specialty: 'Derecho médico y laboral',
    bio: '18 años de trayectoria en litigios y docencia universitaria en derecho médico y laboral.',
    image: 'cristian-sanchez',
    linkedin: 'https://www.linkedin.com/in/cristian-andres-sanchez-gil-5767622bb/',
  },
  {
    name: 'Patricia López Betancur',
    role: 'Abogada Especialista',
    specialty: 'Derecho de los negocios',
    bio: 'Especialista en derecho de negocios, propiedad intelectual y derecho del entretenimiento.',
    image: 'patricia-lopez',
  },
  {
    name: 'María Antonieta Álvarez',
    role: 'Abogada Especialista',
    specialty: 'Derecho administrativo',
    bio: '8 años asesorando entidades públicas en derecho administrativo.',
    image: 'maria-antonieta-alvarez',
    linkedin: 'https://www.linkedin.com/in/maria-antonieta-alvarez-318269123/',
  },
  {
    name: 'Paola Naranjo Acevedo',
    role: 'Abogada',
    specialty: 'Contratos, familia y administración pública',
    bio: 'Especializada en contratos, derecho de familia y administración pública.',
    image: 'paola-naranjo',
    linkedin: 'https://www.linkedin.com/in/paola-naranjo-acevedo-9b08722b7/',
  },
  {
    name: 'Jorge Gutiérrez',
    role: 'Abogado Especialista',
    specialty: 'Derecho penal y procesal penal',
    bio: 'Litigante con amplia experiencia en estrategias defensivas en materia penal.',
    image: 'jorge-gutierrez',
    imagePosition: 'object-[50%_18%]',
  },
];

export type PracticeArea = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  /** Icon name from lucide-static (src/components/ui/icon). */
  icon: string;
  /** Categoría bajo la que se agrupa en /asesoria-juridica-integral/. Las
   * dos entradas `isCategory: true` son las pestañas mismas, no áreas. */
  category: 'litigio' | 'empresarial';
  isCategory?: boolean;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'litigio-estrategico',
    title: 'Litigio estratégico',
    summary: 'Representación judicial con una estrategia diseñada para cada caso.',
    description:
      'Representación judicial con enfoque estratégico, construida a la medida de cada caso y con seguimiento cercano en cada etapa del proceso.',
    icon: 'gavel',
    category: 'litigio',
    isCategory: true,
  },
  {
    slug: 'asesorias-estrategias-empresariales',
    title: 'Asesorías y estrategias empresariales',
    summary: 'Orientación corporativa integral para empresas en crecimiento.',
    description:
      'Orientación corporativa integral para empresas: desde decisiones de gobierno interno hasta la estrategia legal detrás de cada operación del negocio.',
    icon: 'briefcase',
    category: 'empresarial',
    isCategory: true,
  },
  {
    slug: 'derecho-constitucional',
    title: 'Derecho constitucional',
    summary: 'Acciones constitucionales para proteger tus derechos fundamentales.',
    description:
      'Protegemos y reclamamos los derechos individuales y colectivos que fundamentan el Estado Social de Derecho, mediante acciones constitucionales ante vulneraciones o amenazas a derechos como la vida, la salud, la libertad, el debido proceso, el trabajo y la dignidad.',
    icon: 'landmark',
    category: 'litigio',
  },
  {
    slug: 'derecho-administrativo',
    title: 'Derecho administrativo',
    summary: 'Representación ante entidades públicas y la jurisdicción contenciosa.',
    description:
      'Representación ante la Jurisdicción Contenciosa Administrativa, procesos disciplinarios ante la Procuraduría, responsabilidad fiscal ante la Contraloría, asesoría en contratación pública, demandas de responsabilidad civil del Estado y acciones de tutela.',
    icon: 'scroll-text',
    category: 'litigio',
  },
  {
    slug: 'derecho-civil-y-de-familia',
    title: 'Derecho civil y de familia',
    summary: 'Acompañamiento en procesos civiles y de familia, con cercanía.',
    description:
      'Procesos civiles de pertenencia, responsabilidad civil contractual y extracontractual, liquidación de sociedades conyugales, regulación de alimentos, permisos de salida del país, custodia de menores, divorcios y testamentos.',
    icon: 'scale',
    category: 'litigio',
  },
  {
    slug: 'derecho-penal',
    title: 'Derecho penal',
    summary: 'Defensa penal y representación de víctimas, disponible 24/7.',
    description:
      'Representación como defensores de confianza y representantes de víctimas, con estrategias jurídico-penales diseñadas para cada caso delictivo.',
    icon: 'shield-alert',
    category: 'litigio',
  },
  {
    slug: 'derecho-laboral',
    title: 'Derecho laboral',
    summary: 'Asesoría legal para empleadores y trabajadores.',
    description:
      'Representación de empleadores y trabajadores en litigios laborales, diseño de sistemas de seguridad y salud en el trabajo, liquidación de prestaciones sociales y gestión de conflictos colectivos.',
    icon: 'users',
    category: 'litigio',
  },
  {
    slug: 'derecho-ambiental',
    title: 'Derecho ambiental',
    summary: 'Defensa corporativa y colectiva de la sostenibilidad ambiental.',
    description:
      'Asesoría corporativa y defensa de derechos colectivos e individuales relacionados con sostenibilidad ambiental, mediante litigio estratégico e incidencia administrativa.',
    icon: 'leaf',
    category: 'litigio',
  },
  {
    slug: 'derecho-comercial',
    title: 'Derecho comercial',
    summary: 'Del registro de tu empresa a la protección de tu marca.',
    description:
      'Acompañamiento desde la creación de tu empresa: protección de derechos de autor, registro de marcas, regulación interna, contratos comerciales, reformas estatutarias y disoluciones de sociedades.',
    icon: 'circle-dollar-sign',
    category: 'litigio',
  },
  {
    slug: 'responsabilidad-medica',
    title: 'Responsabilidad médica',
    summary: 'Defensa de profesionales de la salud y de sus pacientes.',
    description:
      'Representación de hospitales, clínicas y odontólogos, y defensa de los derechos de pacientes y familiares en casos de presunta mala praxis.',
    icon: 'stethoscope',
    category: 'litigio',
  },
  {
    slug: 'derecho-medico-veterinario',
    title: 'Derecho médico veterinario',
    summary: 'Protección legal para mascotas, dueños y profesionales veterinarios.',
    description:
      'Protección de los intereses de mascotas y propietarios, y asesoría a profesionales veterinarios para reducir riesgos legales en su práctica.',
    icon: 'paw-print',
    category: 'litigio',
  },
  {
    slug: 'responsabilidad-civil',
    title: 'Responsabilidad civil contractual y extracontractual',
    summary: 'Reclamaciones por accidentes, daños a terceros y aseguradoras.',
    description:
      'Cobertura de accidentes de tránsito, daños a terceros, responsabilidad del constructor, reclamaciones ante aseguradoras y responsabilidad por tenencia de animales.',
    icon: 'file-signature',
    category: 'litigio',
  },
  {
    slug: 'tramites-contravencionales',
    title: 'Trámites contravencionales',
    summary: 'Acompañamiento ante inspecciones de policía y tránsito.',
    description:
      'Representación ante inspecciones de policía y tránsito, con acompañamiento integral después de un accidente.',
    icon: 'shield-check',
    category: 'litigio',
  },
  {
    slug: 'conciliaciones-extrajudiciales',
    title: 'Conciliaciones extrajudiciales',
    summary: 'Soluciones ágiles, sin necesidad de llegar a juicio.',
    description:
      'Alternativas ágiles a los procesos judiciales, con soluciones personalizadas para resolver conflictos fuera de los estrados.',
    icon: 'handshake',
    category: 'litigio',
  },
  {
    slug: 'constitucion-empresarial',
    title: 'Constitución empresarial',
    summary: 'Formaliza tu empresa en Colombia y en el extranjero.',
    description:
      'Formalización de sociedades comerciales y entidades sin ánimo de lucro en Colombia, Estados Unidos, Panamá, Ecuador y México.',
    icon: 'building-2',
    category: 'empresarial',
  },
  {
    slug: 'registro-de-marca-y-propiedad-intelectual',
    title: 'Registro de marca y propiedad intelectual',
    summary: 'Protege tu marca, tus patentes y tu capital intelectual.',
    description:
      'Gestión de marcas, patentes y capital intelectual, con la seguridad jurídica que tu idea o tu negocio necesitan.',
    icon: 'copyright',
    category: 'empresarial',
  },
  {
    slug: 'auditoria-empresarial',
    title: 'Auditoría empresarial',
    summary: 'Diagnóstico legal, cumplimiento normativo y capacitación.',
    description:
      'Calificación y orientación de procesos jurídicos internos, cumplimiento normativo y capacitaciones a la medida de tu empresa.',
    icon: 'clipboard-check',
    category: 'empresarial',
  },
  {
    slug: 'derecho-de-los-negocios',
    title: 'Derecho de los negocios',
    summary: 'Gestión empresarial y derecho comercial, integrados.',
    description:
      'Integración de la gestión empresarial y el derecho comercial para que cada decisión de negocio tenga respaldo jurídico.',
    icon: 'briefcase-business',
    category: 'empresarial',
  },
];
