export interface ArticleData {
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
  seoTitle: string;
  seoDescription: string;
  relatedSlugs: string[];
}

export const categories = [
  'Todos',
  'Derecho Comercial',
  'Insolvencia',
  'Derecho Societario',
  'Propiedad Intelectual',
];

export const articles: ArticleData[] = [
  {
    slug: 'ley-2445-2025-insolvencia-colombia',
    title: 'Ley 2445 de 2025: Lo que cambió en el régimen de insolvencia en Colombia',
    summary:
      'Análisis de las principales modificaciones introducidas por la Ley 2445 de 2025 al régimen de insolvencia empresarial colombiano y su impacto para empresarios y acreedores.',
    category: 'Insolvencia',
    date: '2026-02-15',
    readTime: '8 min',
    content: [
      'El 20 de enero de 2025 entró en vigor la Ley 2445, que introduce reformas significativas al régimen de insolvencia empresarial colombiano, anteriormente regulado de manera principal por la Ley 1116 de 2006. Esta nueva normativa responde a la necesidad de modernizar los mecanismos de recuperación empresarial y adaptarlos a las dinámicas económicas actuales.',
      'Entre los cambios más relevantes se encuentra la creación de un procedimiento simplificado de reorganización para micro y pequeñas empresas. Este mecanismo permite a los empresarios acceder a un proceso más ágil y menos costoso, con plazos reducidos y requisitos simplificados. La intención del legislador es clara: facilitar que las pequeñas unidades productivas puedan reestructurar sus deudas sin que los costos del proceso hagan inviable la recuperación.',
      'Otro aspecto importante es el fortalecimiento de la protección de los trabajadores dentro del proceso de insolvencia. La Ley 2445 establece prioridad reforzada para los créditos laborales y amplía las garantías para los empleados de empresas en reorganización, buscando un equilibrio entre la viabilidad de la empresa y los derechos de los trabajadores.',
      'La nueva ley también introduce mejoras en el proceso de negociación entre deudores y acreedores. Se establecen mecanismos de votación más flexibles y se permite la aprobación de acuerdos de reorganización con mayorías calificadas menores en ciertos casos, lo que facilita alcanzar consensos cuando hay gran diversidad de acreedores.',
      'Para los acreedores, la Ley 2445 trae mayor transparencia en el proceso. Se exige información financiera más detallada por parte del deudor, se establecen plazos más cortos para la presentación de proyectos de calificación y graduación de créditos, y se refuerzan los mecanismos de control para evitar el uso fraudulento del proceso de insolvencia.',
      'Un cambio que no puede pasarse por alto es la ampliación de los supuestos para acceder a la reorganización. Ahora no solo se puede solicitar cuando hay cesación de pagos o incapacidad de pago inminente, sino también cuando existen situaciones económicas que, de no atenderse oportunamente, podrían llevar a la empresa a una crisis irreversible.',
      'En mi práctica profesional, he observado que muchos empresarios desconocen estas herramientas o acuden a ellas demasiado tarde. La clave para una reorganización exitosa es actuar con anticipación. Si su empresa enfrenta dificultades financieras, buscar asesoría legal temprana puede ser la diferencia entre la recuperación y la liquidación.',
    ],
    seoTitle: 'Ley 2445 de 2025: Cambios en Insolvencia Colombia | Laura Galvis Abogada',
    seoDescription:
      'Análisis de la Ley 2445 de 2025 y sus cambios al régimen de insolvencia en Colombia. Reorganización empresarial, protección de trabajadores, procedimientos simplificados.',
    relatedSlugs: ['insolvencia-persona-natural-colombia', 'constitucion-sas-colombia'],
  },
  {
    slug: 'constitucion-sas-colombia',
    title: 'Cómo constituir una SAS en Colombia: guía práctica para emprendedores',
    summary:
      'Todo lo que necesita saber para crear una Sociedad por Acciones Simplificada en Colombia: requisitos, pasos, costos y errores comunes que debe evitar.',
    category: 'Derecho Societario',
    date: '2026-02-01',
    readTime: '7 min',
    content: [
      'La Sociedad por Acciones Simplificada (SAS) se ha convertido en el tipo societario más utilizado en Colombia desde su creación con la Ley 1258 de 2008. Su flexibilidad, facilidad de constitución y la limitación de responsabilidad al monto de los aportes la hacen la opción preferida tanto para emprendedores individuales como para grupos empresariales.',
      '¿Por qué elegir una SAS? La principal ventaja es que puede constituirse por documento privado, sin necesidad de escritura pública. Esto reduce significativamente los costos y el tiempo de constitución. Además, no exige un número mínimo de accionistas (puede tener un solo accionista), no requiere junta directiva obligatoria y permite una estructura de gobierno corporativo a la medida del empresario.',
      'Los pasos para constituir una SAS son relativamente sencillos. Primero, se debe elaborar el documento de constitución, que incluye los estatutos sociales. Este documento debe contener: nombre y documento de identidad de los accionistas, razón social (que debe incluir las siglas SAS), domicilio principal, término de duración (puede ser indefinido), objeto social (puede ser indeterminado), capital autorizado, suscrito y pagado, y la forma de administración.',
      'Una vez elaborado el documento de constitución, se debe registrar ante la Cámara de Comercio del domicilio principal. Posteriormente, se tramita el Registro Único Tributario (RUT) ante la DIAN, se habilita la facturación electrónica y se abren las cuentas bancarias de la sociedad.',
      'Sin embargo, en mi experiencia como abogada, he visto errores comunes que pueden generar problemas serios a futuro. El más frecuente es no incluir un acuerdo de socios cuando hay más de un accionista. Los estatutos regulan la vida societaria, pero un acuerdo de socios establece las reglas del juego entre los socios: qué pasa si uno quiere vender, cómo se resuelven los desacuerdos, cómo se manejan las utilidades.',
      'Otro error común es no definir adecuadamente las funciones del representante legal o no establecer límites a sus facultades. He visto casos donde el representante legal compromete a la sociedad en operaciones que los accionistas nunca autorizaron, simplemente porque los estatutos le otorgaban facultades ilimitadas.',
      'Mi recomendación para cualquier emprendedor que esté considerando constituir una SAS es buscar asesoría legal desde el inicio. El costo de una constitución bien hecha es mínimo comparado con el costo de solucionar problemas societarios que pudieron prevenirse con estatutos bien redactados.',
    ],
    seoTitle: 'Cómo Constituir una SAS en Colombia | Laura Galvis Abogada',
    seoDescription:
      'Guía completa para constituir una Sociedad por Acciones Simplificada (SAS) en Colombia. Requisitos, pasos, costos y errores comunes. Asesoría legal para emprendedores.',
    relatedSlugs: ['ley-2445-2025-insolvencia-colombia', 'registro-marca-colombia'],
  },
  {
    slug: 'insolvencia-persona-natural-colombia',
    title: 'Insolvencia de persona natural no comerciante: una salida legal al sobreendeudamiento',
    summary:
      'Conozca el mecanismo legal que permite a personas naturales sobreendeudadas renegociar sus deudas educativas, hipotecarias y bancarias en Colombia.',
    category: 'Insolvencia',
    date: '2026-01-18',
    readTime: '6 min',
    content: [
      'El sobreendeudamiento es una realidad que afecta a miles de colombianos. Créditos educativos con ICETEX, deudas hipotecarias, tarjetas de crédito y préstamos bancarios pueden acumularse hasta el punto de hacer imposible cumplir con las obligaciones financieras. Ante esta situación, la ley colombiana ofrece un mecanismo poco conocido pero muy efectivo: la insolvencia de persona natural no comerciante.',
      'Este procedimiento, regulado por el Código General del Proceso (Ley 1564 de 2012), permite a las personas naturales que no son comerciantes acudir ante un centro de conciliación o un notario para renegociar sus deudas con todos sus acreedores de manera simultánea. El objetivo no es eliminar las deudas, sino establecer condiciones de pago viables que permitan al deudor recuperar su estabilidad financiera.',
      'El proceso inicia con una solicitud ante un centro de conciliación autorizado o una notaría. El deudor debe presentar una relación completa de sus activos, pasivos, ingresos y gastos, junto con una propuesta de pago. Una vez admitida la solicitud, se suspenden todos los procesos ejecutivos en contra del deudor y se convocan a todos los acreedores a una audiencia de negociación.',
      'En la audiencia de negociación, el deudor presenta su propuesta de pago y los acreedores pueden aceptarla, modificarla o rechazarla. Si se llega a un acuerdo, este se convierte en vinculante para todos los acreedores (incluso los que no asistieron). El acuerdo puede incluir períodos de gracia, reducción de intereses, extensión de plazos y condonación parcial de deudas.',
      'Si la negociación fracasa, el deudor tiene la opción de solicitar la convalidación del acuerdo por vía judicial o, en casos extremos, la liquidación patrimonial. En este último escenario, los bienes del deudor se venden para pagar a los acreedores y las deudas restantes quedan extinguidas, permitiendo al deudor un "nuevo comienzo".',
      'Es importante destacar que este mecanismo es exclusivo para personas naturales no comerciantes. Los comerciantes y las empresas deben acudir al régimen de insolvencia de la Ley 1116 de 2006 y la Ley 2445 de 2025. Además, el deudor debe actuar de buena fe y no haber utilizado el mecanismo en los cinco años anteriores.',
      'Si usted se encuentra en una situación de sobreendeudamiento, le recomiendo buscar asesoría legal cuanto antes. Muchas personas viven años con el peso de deudas impagables sin saber que existe una herramienta legal que puede ayudarles a recuperar su tranquilidad financiera.',
    ],
    seoTitle: 'Insolvencia Persona Natural No Comerciante Colombia | Laura Galvis',
    seoDescription:
      'Guía sobre insolvencia de persona natural no comerciante en Colombia. Renegocie deudas educativas, hipotecarias y bancarias legalmente. Asesoría legal especializada.',
    relatedSlugs: ['ley-2445-2025-insolvencia-colombia', 'constitucion-sas-colombia'],
  },
  {
    slug: 'registro-marca-colombia',
    title: 'Por qué registrar su marca en Colombia y cómo hacerlo correctamente',
    summary:
      'La importancia del registro de marca ante la SIC, los pasos del proceso, errores comunes y cómo proteger la identidad de su negocio en Colombia.',
    category: 'Propiedad Intelectual',
    date: '2026-01-05',
    readTime: '6 min',
    content: [
      'En el mundo empresarial actual, la marca es uno de los activos más valiosos de cualquier negocio. Es lo que identifica sus productos o servicios en el mercado, lo diferencia de la competencia y genera confianza en sus clientes. Sin embargo, muchos emprendedores colombianos cometen el error de no registrar su marca, exponiéndose a riesgos significativos.',
      '¿Qué puede pasar si no registra su marca? Cualquier tercero podría registrarla antes que usted y exigirle que deje de utilizarla. He visto casos donde emprendedores han construido una reputación durante años bajo un nombre comercial, solo para descubrir que alguien más lo registró como marca. El resultado: tuvieron que cambiar de nombre, rehacer todo su material de marketing y perder el posicionamiento construido.',
      'El registro de marca en Colombia se realiza ante la Superintendencia de Industria y Comercio (SIC). El proceso comienza con una búsqueda de antecedentes marcarios, que es fundamental para verificar que no exista una marca idéntica o similar ya registrada en la misma clase de productos o servicios. Esta búsqueda puede hacerse en la base de datos de la SIC, pero un análisis profesional es más confiable.',
      'Una vez verificada la viabilidad, se presenta la solicitud de registro ante la SIC con el formulario correspondiente, el comprobante de pago de la tasa oficial y los demás documentos requeridos. La solicitud se publica en la Gaceta de Propiedad Industrial y se abre un período de 30 días para que terceros presenten oposiciones. Si no hay oposiciones o si se resuelven favorablemente, la SIC concede el registro.',
      'El registro de marca tiene una vigencia de 10 años contados desde la fecha de concesión y es renovable indefinidamente por períodos iguales. Es importante recordar que la marca debe registrarse por clases según la Clasificación Internacional de Niza. Si vende productos y también presta servicios, puede necesitar registrar la marca en múltiples clases.',
      'Errores comunes que veo en mi práctica profesional incluyen: no realizar la búsqueda de antecedentes antes de solicitar el registro, no seleccionar correctamente la clase o clases de productos y servicios, y no renovar el registro a tiempo. También es frecuente confundir el registro de nombre comercial con el de marca, cuando son figuras jurídicas diferentes con protecciones distintas.',
      'Mi consejo para cualquier emprendedor es que considere el registro de marca como una inversión en la protección de su negocio, no como un gasto. Una marca registrada le da seguridad jurídica, le permite defender su identidad comercial y aumenta el valor de su empresa.',
    ],
    seoTitle: 'Registro de Marca en Colombia ante la SIC | Laura Galvis Abogada',
    seoDescription:
      'Guía completa para registrar su marca ante la SIC en Colombia. Búsqueda de antecedentes, proceso, costos y errores comunes. Asesoría en propiedad intelectual.',
    relatedSlugs: ['constitucion-sas-colombia', 'ley-2445-2025-insolvencia-colombia'],
  },
];

export const getArticleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
