import { Building2, RefreshCw, Gavel, FileText, Lightbulb, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceData {
  slug: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  features: string[];
  heroSubtitle: string;
  fullDescription: string[];
  whatWeOffer: string[];
  commonQuestions: { question: string; answer: string }[];
  relatedSlugs: string[];
  seoTitle: string;
  seoDescription: string;
}

export const services: ServiceData[] = [
  {
    slug: 'derecho-comercial-societario',
    title: 'Derecho Comercial y Societario',
    icon: Building2,
    shortDescription:
      'Constitución de sociedades, acuerdos de socios, control corporativo, reformas estatutarias, gobierno corporativo, fusiones y adquisiciones.',
    features: ['Constitución de sociedades', 'Acuerdos de socios', 'Gobierno corporativo', 'Fusiones y adquisiciones'],
    heroSubtitle: 'Proteja su empresa con asesoría jurídica especializada',
    fullDescription: [
      'El derecho comercial y societario es el pilar fundamental para cualquier empresa que busque operar con seguridad jurídica en Colombia. Desde la constitución de una sociedad hasta la estructuración de operaciones complejas como fusiones y adquisiciones, cada decisión corporativa requiere un acompañamiento legal riguroso.',
      'Brindo asesoría integral a empresarios, socios y juntas directivas en la toma de decisiones estratégicas que impactan la vida societaria. Mi enfoque combina el conocimiento técnico del Código de Comercio colombiano con una visión práctica orientada a proteger los intereses de mis clientes.',
      'Ya sea que esté iniciando un nuevo negocio, reestructurando su empresa o enfrentando conflictos entre socios, cuento con la experiencia necesaria para guiarlo en cada etapa del proceso.',
    ],
    whatWeOffer: [
      'Constitución de sociedades (SAS, S.A., Ltda., comanditarias)',
      'Reformas estatutarias y modificaciones societarias',
      'Acuerdos de socios y pactos parasocietarios',
      'Gobierno corporativo y estructura de juntas directivas',
      'Fusiones, escisiones y adquisiciones empresariales',
      'Transformación y conversión de tipos societarios',
      'Disolución y liquidación voluntaria de sociedades',
      'Actas de asamblea y junta de socios',
      'Registro mercantil y trámites ante Cámara de Comercio',
      'Asesoría en control corporativo y conflictos societarios',
    ],
    commonQuestions: [
      {
        question: '¿Qué tipo de sociedad me conviene constituir en Colombia?',
        answer:
          'Depende de factores como el número de socios, el nivel de responsabilidad que desea asumir, la estructura de gobierno y los planes de crecimiento. La Sociedad por Acciones Simplificada (SAS) es la más común por su flexibilidad, pero cada caso requiere un análisis particular.',
      },
      {
        question: '¿Qué es un acuerdo de socios y por qué es importante?',
        answer:
          'Es un documento privado que regula las relaciones entre los socios más allá de los estatutos. Define cláusulas de salida, restricciones de transferencia de acciones, resolución de conflictos y toma de decisiones. Es fundamental para prevenir disputas futuras.',
      },
      {
        question: '¿Cuánto tarda constituir una sociedad en Colombia?',
        answer:
          'Una SAS puede constituirse en pocos días mediante documento privado. Otros tipos societarios pueden requerir escritura pública y trámites adicionales. El proceso incluye registro en Cámara de Comercio, RUT y habilitación de facturación.',
      },
    ],
    relatedSlugs: ['derecho-contractual', 'insolvencia-reorganizacion'],
    seoTitle: 'Derecho Comercial y Societario | Laura Galvis Abogada Colombia',
    seoDescription:
      'Abogada especialista en derecho comercial y societario en Colombia. Constitución de sociedades SAS, acuerdos de socios, gobierno corporativo, fusiones y adquisiciones. Asesoría virtual.',
  },
  {
    slug: 'insolvencia-reorganizacion',
    title: 'Insolvencia y Reorganización',
    icon: RefreshCw,
    shortDescription:
      'Procesos de reorganización y liquidación bajo Ley 1116 y Ley 2445 de 2025. Insolvencia de persona natural no comerciante.',
    features: ['Ley 1116 de 2006', 'Ley 2445 de 2025', 'Reorganización empresarial', 'Liquidación de activos'],
    heroSubtitle: 'Soluciones legales para empresas en dificultades financieras',
    fullDescription: [
      'Cuando una empresa o persona natural enfrenta dificultades financieras, el régimen de insolvencia colombiano ofrece herramientas legales para reorganizar las deudas o liquidar los activos de forma ordenada. Estos mecanismos, regulados por la Ley 1116 de 2006 y la reciente Ley 2445 de 2025, buscan proteger tanto al deudor como a los acreedores.',
      'Cuento con amplia experiencia en procesos de reorganización empresarial, liquidación judicial y negociación de acuerdos de pago. Mi enfoque se centra en encontrar la mejor ruta para que el empresario pueda superar la crisis financiera o, cuando no es posible, cerrar sus operaciones de la manera más ordenada y con el menor impacto.',
      'También asesoro a personas naturales no comerciantes que enfrentan sobreendeudamiento, guiándolas a través del proceso de insolvencia que les permite renegociar sus obligaciones y recuperar su estabilidad financiera.',
    ],
    whatWeOffer: [
      'Procesos de reorganización empresarial (Ley 1116 de 2006)',
      'Procesos bajo la nueva Ley 2445 de 2025',
      'Liquidación judicial de sociedades',
      'Liquidación patrimonial de persona natural',
      'Insolvencia de persona natural no comerciante',
      'Negociación de acuerdos de reorganización con acreedores',
      'Calificación y graduación de créditos',
      'Acompañamiento ante la Superintendencia de Sociedades',
      'Defensa de acreedores en procesos de insolvencia',
      'Validación judicial de acuerdos extrajudiciales',
    ],
    commonQuestions: [
      {
        question: '¿Qué diferencia hay entre reorganización y liquidación?',
        answer:
          'La reorganización busca salvar la empresa: se negocia un acuerdo de pago con los acreedores para que la empresa siga operando. La liquidación, en cambio, implica vender los activos de la empresa para pagar las deudas y cerrar la operación.',
      },
      {
        question: '¿Qué es la insolvencia de persona natural no comerciante?',
        answer:
          'Es un mecanismo legal que permite a personas naturales que no son comerciantes (empleados, pensionados, independientes) renegociar sus deudas cuando están sobreendeudadas. Puede incluir negociación de deudas, convalidación de acuerdos o liquidación patrimonial.',
      },
      {
        question: '¿Cuándo debo solicitar la reorganización de mi empresa?',
        answer:
          'Cuando la empresa tiene dificultades para pagar sus obligaciones a tiempo, ha cesado pagos o está próxima a hacerlo. Es mejor actuar antes de que la situación sea irreversible, ya que la reorganización permite negociar con los acreedores y mantener la operación.',
      },
      {
        question: '¿Qué cambió con la Ley 2445 de 2025?',
        answer:
          'La Ley 2445 moderniza el régimen de insolvencia colombiano, introduce mecanismos más ágiles de reorganización, fortalece la protección de los trabajadores, y establece procedimientos simplificados para micro y pequeñas empresas.',
      },
    ],
    relatedSlugs: ['defensa-deudores', 'derecho-comercial-societario'],
    seoTitle: 'Insolvencia y Reorganización Empresarial | Laura Galvis Abogada',
    seoDescription:
      'Abogada especialista en insolvencia y reorganización empresarial en Colombia. Ley 1116, Ley 2445, liquidación judicial, insolvencia de persona natural. Asesoría virtual en todo el país.',
  },
  {
    slug: 'litigio-civil-comercial',
    title: 'Litigio Civil y Comercial',
    icon: Gavel,
    shortDescription:
      'Procesos ejecutivos, declarativos, restituciones, servidumbres, responsabilidad contractual y extracontractual, cobro de cartera.',
    features: ['Procesos ejecutivos', 'Responsabilidad civil', 'Cobro de cartera', 'Restituciones'],
    heroSubtitle: 'Representación legal efectiva en procesos judiciales',
    fullDescription: [
      'El litigio civil y comercial requiere una estrategia jurídica sólida, un conocimiento profundo del derecho procesal y la capacidad de anticipar los movimientos de la contraparte. Cada proceso judicial es una batalla que debe librarse con preparación, rigor técnico y visión estratégica.',
      'Represento a personas naturales y empresas en todo tipo de procesos judiciales civiles y comerciales ante los juzgados y tribunales de Colombia. Desde procesos ejecutivos para el cobro de obligaciones hasta demandas declarativas por incumplimiento contractual, mi objetivo es proteger los derechos e intereses de mis clientes con la mayor eficacia posible.',
      'Mi experiencia en litigio abarca tanto la parte demandante como la defensa, lo que me permite evaluar cada caso desde todas las perspectivas y diseñar la estrategia más adecuada.',
    ],
    whatWeOffer: [
      'Procesos ejecutivos (cobro de títulos valores, pagarés, facturas)',
      'Procesos declarativos civiles y comerciales',
      'Responsabilidad contractual y extracontractual',
      'Cobro de cartera y recuperación de créditos',
      'Procesos de restitución de inmuebles',
      'Servidumbres y conflictos de vecindad',
      'Procesos de pertenencia y prescripción adquisitiva',
      'Medidas cautelares y embargos',
      'Recurso de apelación y casación',
      'Conciliación y mecanismos alternativos de resolución de conflictos',
    ],
    commonQuestions: [
      {
        question: '¿Cuánto dura un proceso judicial civil en Colombia?',
        answer:
          'Depende del tipo de proceso y la carga del juzgado. Un proceso ejecutivo de mínima cuantía puede resolverse en meses, mientras que un proceso declarativo de mayor cuantía puede tomar entre 1 y 3 años. Siempre busco la ruta más eficiente para cada caso.',
      },
      {
        question: '¿Qué es un proceso ejecutivo?',
        answer:
          'Es el mecanismo legal para cobrar una deuda que consta en un título ejecutivo (pagaré, factura, contrato, sentencia). Permite solicitar el embargo de bienes del deudor para garantizar el pago de la obligación.',
      },
      {
        question: '¿Puedo cobrar una deuda sin ir a juicio?',
        answer:
          'Sí, antes de iniciar un proceso judicial siempre se evalúa la posibilidad de una conciliación o negociación directa. Esto puede ahorrar tiempo y costos. Si la vía extrajudicial no funciona, se procede con el proceso judicial.',
      },
    ],
    relatedSlugs: ['derecho-contractual', 'defensa-deudores'],
    seoTitle: 'Litigio Civil y Comercial | Laura Galvis Abogada Colombia',
    seoDescription:
      'Abogada litigante especialista en procesos civiles y comerciales en Colombia. Cobro de cartera, procesos ejecutivos, responsabilidad civil, restituciones. Asesoría virtual.',
  },
  {
    slug: 'derecho-contractual',
    title: 'Derecho Contractual',
    icon: FileText,
    shortDescription:
      'Contratos civiles, comerciales y fiduciarios complejos. Protección patrimonial, revisión, negociación y redacción contractual.',
    features: ['Contratos civiles', 'Contratos comerciales', 'Fideicomisos', 'Negociación contractual'],
    heroSubtitle: 'Contratos sólidos que protegen su patrimonio',
    fullDescription: [
      'Un contrato bien redactado es la mejor herramienta para prevenir conflictos legales. El derecho contractual abarca desde la negociación y redacción de contratos hasta la resolución de disputas por incumplimiento. Cada cláusula importa y cada palabra tiene consecuencias jurídicas.',
      'Asesoro a empresarios y particulares en la estructuración de contratos civiles, comerciales y fiduciarios que protejan efectivamente sus intereses. Mi enfoque preventivo busca anticipar posibles escenarios de conflicto y blindar a mis clientes con cláusulas claras y ejecutables.',
      'También brindo asesoría en protección patrimonial, diseñando estructuras contractuales y fiduciarias que salvaguarden el patrimonio de mis clientes frente a riesgos empresariales y personales.',
    ],
    whatWeOffer: [
      'Redacción y revisión de contratos civiles y comerciales',
      'Contratos de compraventa, arrendamiento y suministro',
      'Contratos de prestación de servicios y consultoría',
      'Contratos fiduciarios y encargos fiduciarios',
      'Protección patrimonial mediante estructuras contractuales',
      'Negociación contractual y cláusulas de resolución de conflictos',
      'Contratos de asociación y joint ventures',
      'Contratos de franquicia y distribución',
      'Due diligence contractual',
      'Asesoría en incumplimiento contractual y terminación',
    ],
    commonQuestions: [
      {
        question: '¿Por qué necesito un abogado para revisar un contrato?',
        answer:
          'Un contrato es un documento jurídico vinculante. Cláusulas mal redactadas, ambiguas o desfavorables pueden generar pérdidas económicas significativas. Un abogado identifica riesgos ocultos, negocia mejores condiciones y asegura que el contrato proteja sus intereses.',
      },
      {
        question: '¿Qué es la protección patrimonial?',
        answer:
          'Son estrategias legales para separar y proteger el patrimonio personal del empresarial. Incluye fideicomisos, sociedades patrimoniales y estructuras contractuales que blindan los activos frente a posibles contingencias.',
      },
      {
        question: '¿Qué pasa si la otra parte incumple el contrato?',
        answer:
          'Dependiendo de las cláusulas pactadas, se puede exigir el cumplimiento forzado, la resolución del contrato con indemnización de perjuicios, o activar cláusulas penales. La estrategia depende de cada caso particular.',
      },
    ],
    relatedSlugs: ['derecho-comercial-societario', 'litigio-civil-comercial'],
    seoTitle: 'Derecho Contractual | Laura Galvis Abogada Colombia',
    seoDescription:
      'Abogada especialista en derecho contractual en Colombia. Redacción de contratos, protección patrimonial, fideicomisos, negociación contractual. Asesoría legal virtual.',
  },
  {
    slug: 'propiedad-intelectual',
    title: 'Propiedad Intelectual',
    icon: Lightbulb,
    shortDescription:
      'Registro y protección de marcas, patentes, derechos de autor y secretos empresariales. Asesoría en propiedad industrial.',
    features: ['Registro de marcas', 'Patentes de invención', 'Derechos de autor', 'Secretos empresariales'],
    heroSubtitle: 'Proteja sus ideas, marcas y creaciones',
    fullDescription: [
      'La propiedad intelectual es uno de los activos más valiosos de cualquier empresa o emprendedor. Proteger sus marcas, invenciones, obras y secretos empresariales no es opcional: es una necesidad estratégica en un mercado cada vez más competitivo.',
      'Asesoro a empresas y emprendedores en el registro y protección de todos los activos de propiedad intelectual ante la Superintendencia de Industria y Comercio (SIC) y la Dirección Nacional de Derechos de Autor. Desde el diseño de una estrategia de protección de marca hasta la defensa contra infracciones, brindo un acompañamiento integral.',
      'Mi asesoría incluye la evaluación de la viabilidad del registro, la búsqueda de antecedentes, la presentación de solicitudes y la defensa de los derechos de propiedad intelectual frente a terceros.',
    ],
    whatWeOffer: [
      'Registro de marcas ante la SIC',
      'Búsqueda de antecedentes marcarios',
      'Registro de patentes de invención y modelos de utilidad',
      'Protección de derechos de autor y obras literarias',
      'Asesoría en secretos empresariales y know-how',
      'Licenciamiento y contratos de propiedad intelectual',
      'Oposiciones y cancelaciones de marcas',
      'Vigilancia de marcas y monitoreo de infracciones',
      'Asesoría en nombres comerciales y enseñas',
      'Defensa contra infracciones de propiedad intelectual',
    ],
    commonQuestions: [
      {
        question: '¿Cuánto tarda registrar una marca en Colombia?',
        answer:
          'El proceso ante la SIC toma aproximadamente 6 a 8 meses si no hay oposiciones. Incluye la publicación en la Gaceta de Propiedad Industrial y un período para que terceros presenten oposiciones. El registro tiene una vigencia de 10 años renovables.',
      },
      {
        question: '¿Qué diferencia hay entre una marca y un nombre comercial?',
        answer:
          'La marca identifica productos o servicios en el mercado (ej: el nombre de un producto). El nombre comercial identifica al empresario o establecimiento de comercio (ej: el nombre de la tienda). Ambos pueden y deben protegerse legalmente.',
      },
      {
        question: '¿Necesito registrar mi marca si ya tengo el nombre de dominio?',
        answer:
          'Sí, el dominio web y la marca son registros diferentes con protecciones distintas. Tener el dominio no otorga derechos de marca. Sin el registro marcario, un tercero podría registrar su marca y obligarlo a dejar de usarla.',
      },
    ],
    relatedSlugs: ['derecho-comercial-societario', 'derecho-contractual'],
    seoTitle: 'Propiedad Intelectual | Laura Galvis Abogada Colombia',
    seoDescription:
      'Abogada especialista en propiedad intelectual en Colombia. Registro de marcas, patentes, derechos de autor, secretos empresariales. Asesoría legal virtual ante la SIC.',
  },
  {
    slug: 'defensa-deudores',
    title: 'Defensa de Deudores',
    icon: Shield,
    shortDescription:
      'Defensa de deudores por deudas educativas, hipotecarias o bancarias. Negociación con entidades financieras.',
    features: ['Deudas educativas', 'Deudas hipotecarias', 'Deudas bancarias', 'Negociación con bancos'],
    heroSubtitle: 'Defienda sus derechos frente a cobros abusivos',
    fullDescription: [
      'Estar endeudado no significa estar indefenso. Muchas entidades financieras, cooperativas y fondos educativos incurren en prácticas abusivas de cobro, aplican intereses excesivos o violan los derechos del consumidor financiero. La ley colombiana ofrece mecanismos para proteger al deudor.',
      'Represento a personas naturales y familias que enfrentan deudas educativas (ICETEX, fondos educativos), deudas hipotecarias, créditos bancarios y deudas con cooperativas. Mi enfoque busca primero la negociación directa con la entidad financiera para lograr condiciones de pago justas.',
      'Cuando la negociación no es posible, utilizo las herramientas legales disponibles: procesos de insolvencia de persona natural, demandas por cobros excesivos, quejas ante la Superintendencia Financiera y defensa en procesos ejecutivos iniciados por los acreedores.',
    ],
    whatWeOffer: [
      'Defensa por deudas educativas (ICETEX, fondos, universidades)',
      'Defensa por deudas hipotecarias y créditos de vivienda',
      'Defensa por deudas bancarias y tarjetas de crédito',
      'Negociación directa con entidades financieras',
      'Reestructuración de deudas y acuerdos de pago',
      'Proceso de insolvencia de persona natural no comerciante',
      'Defensa en procesos ejecutivos por cobro de cartera',
      'Quejas y reclamaciones ante la Superintendencia Financiera',
      'Asesoría en derechos del consumidor financiero',
      'Revisión de contratos de crédito y cláusulas abusivas',
    ],
    commonQuestions: [
      {
        question: '¿Me pueden embargar si no pago una deuda?',
        answer:
          'Sí, si el acreedor inicia un proceso ejecutivo y obtiene una orden judicial de embargo. Sin embargo, existen bienes inembargables por ley (salario mínimo, útiles de trabajo, bienes de familia). Un abogado puede defender sus derechos en el proceso.',
      },
      {
        question: '¿Qué hago si no puedo pagar mi crédito educativo?',
        answer:
          'Primero, no ignore la situación. Existen opciones como la reestructuración del crédito, la negociación de condiciones de pago, o en casos extremos, el proceso de insolvencia de persona natural. Cada caso tiene una solución viable.',
      },
      {
        question: '¿Puedo negociar una deuda bancaria directamente?',
        answer:
          'Sí, los bancos suelen preferir negociar antes que iniciar un proceso judicial costoso. Con asesoría legal adecuada, es posible lograr descuentos en intereses, extensión de plazos o acuerdos de pago favorables. Lo importante es negociar con estrategia.',
      },
    ],
    relatedSlugs: ['insolvencia-reorganizacion', 'litigio-civil-comercial'],
    seoTitle: 'Defensa de Deudores | Laura Galvis Abogada Colombia',
    seoDescription:
      'Abogada defensora de deudores en Colombia. Deudas educativas ICETEX, hipotecarias, bancarias. Negociación con bancos, insolvencia persona natural. Asesoría virtual.',
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
