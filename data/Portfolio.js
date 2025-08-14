export const PortfolioCards = [
    {
        id: 0,
        name: "Protesis Biónicas",
        img: "/public/images/Portfolio/protesis_card_img.jpg",
        link: "#/portfolio/protesis"
    },{
        id: 1,
        name: "Programacion",
        img: "/public/images/Portfolio/programacion_card_img.jpg",
        link: "#/portfolio/programacion"
    },{
        id: 2,
        name: "Componentes electrónicos",
        img: "/public/images/Portfolio/componentes_electronicos_card_img.jpg",
        link: "#/portfolio/componentes"
    },{
        id: 3,
        name: "Impresiones 3d",
        img: "/public/images/Portfolio/impresiones_3d_card_img.jpg",
        link: "#/portfolio/impresiones"
    },{
        id: 4,
        name: "Videos",
        img: "/public/images/Portfolio/videos_card_img.jpg",
        link: "#/portfolio/videos"
    },{
        id: 5,
        name: "Prototipos",
        img: "/public/images/Portfolio/prototipos_card_img.jpg",
        link: "#/portfolio/prototipos"
    }
]

export const navLinks = {
    protesis: {
        links: [ "#/portfolio/protesis/informacion", "#/portfolio/protesis/videos" ], names: [ "Informacion", "Videos" ] 
    }  ,
    programacion: {
        links: [ "#/portfolio/programacion/informacion", "#/portfolio/programacion/videos" ], names: [ "Informacion", "Videos" ] 
    },
    componentes: {
        links: [ "#/portfolio/componentes/informacion", "#/portfolio/componentes/videos" ], names: [ "Informacion", "Videos" ] 
    },
    impresiones: {
        links: [ "#/portfolio/impresiones/informacion", "#/portfolio/impresiones/videos" ], names: [ "Informacion", "Videos" ] 
    },
    videos: {
        links: [ "#/portfolio/videos/informacion", "#/portfolio/videos/videos" ], names: [ "Informacion", "Videos" ] 
    },
    prototipos: {
        links: [ "#/portfolio/prototipos/informacion", "#/portfolio/prototipos/videos" ], names: [ "Informacion", "Videos" ] 
    },
}

export const InformationData = {
    protesis: [
        { type: "title", data: "Protesis Biónicas"},
        { type: "subtitle", data: "Información clave"},
        { type: "text", data: "Las prótesis biónicas no son solo “brazos o piernas artificiales”: son tecnología que se conecta con tu cuerpo y tu mente. Diseñadas para recuperar movilidad y funcionalidad, estas prótesis avanzadas buscan que cada movimiento sea lo más natural posible y que cada usuario recupere independencia y libertad."},
        { type: "subtitle", data: "Características"},
        { type: "item_title", data: "Control intuitivo"},
        { type: "item_text", data: "Se manejan con señales musculares, nerviosas o incluso cerebrales. Lo que pensás, se mueve."},
        { type: "item_title", data: "Movimientos complejos"},
        { type: "item_text", data: "Flexión de dedos, rotación de muñecas, gestos precisos… todo al alcance."},
        { type: "item_title", data: "Sensibilidad"},
        { type: "item_text", data: "Algunas prótesis permiten sentir texturas, vibraciones y hasta temperatura, como si fueran parte de tu cuerpo."},
        { type: "subtitle", data: "Beneficios"},
        { type: "item_title", data: "Mayor independencia"},
        { type: "item_text", data: "Las prótesis biónicas pueden permitir a los usuarios realizar tareas cotidianas con mayor facilidad y autonomía."},
        { type: "item_title", data: "Mejora de la calidad de vida"},
        { type: "item_text", data: "Estas prótesis pueden mejorar la calidad de vida de los usuarios al proporcionarles una mayor movilidad y funcionalidad."},
        { type: "item_title", data: "Personalización"},
        { type: "item_text", data: "Las prótesis biónicas pueden ser personalizadas para adaptarse a las necesidades específicas de cada usuario."}
    ],
    programacion: [
        { type: "title", data: "Programación" },
        { type: "subtitle", data: "Personalización que se adapta a vos" },
        { type: "text", data: "Detrás de cada prótesis biónica hay un cerebro digital listo para aprender. La programación es el paso donde ajustamos la tecnología para que hable el mismo idioma que tu cuerpo. No se trata solo de encenderla: se trata de calibrarla para que cada movimiento sea preciso, cómodo y natural." },
        { type: "subtitle", data: "Cómo funciona" },
        { type: "item_title", data: "Mapeo de señales" },
        { type: "item_text", data: "Captamos y analizamos las señales musculares, nerviosas o cerebrales que genera tu cuerpo." },
        { type: "item_title", data: "Ajustes finos" },
        { type: "item_text", data: "Configuramos la respuesta de la prótesis para que se sincronice con tu forma de moverte." },
        { type: "item_title", data: "Actualizaciones inteligentes" },
        { type: "item_text", data: "El software puede aprender y mejorar con el tiempo, adaptándose a tus hábitos." },
        { type: "subtitle", data: "Ventajas de la programación personalizada" },
        { type: "item_text", data: "Movimientos más fluidos y naturales." },
        { type: "item_text", data: "Respuesta inmediata, sin retrasos incómodos." },
        { type: "item_text", data: "Adaptación continua a tu estilo de vida y necesidades." },
        { type: "text", data: "La tecnología es increíble, pero cuando está perfectamente programada para vos… deja de ser una máquina y pasa a ser parte de tu cuerpo." },
    ],
    componentes: [
        { type: "title", data: "Componentes Electrónicos" },
        { type: "subtitle", data: "La base que da vida a la prótesis" },
        { type: "text", data: "Cada prótesis biónica está formada por un conjunto de componentes electrónicos que trabajan en armonía para interpretar tus señales y transformarlas en movimiento. Son el puente entre tu cuerpo y la tecnología, y su precisión define la calidad de cada gesto." },
        { type: "subtitle", data: "Elementos clave" },
        { type: "item_title", data: "Sensores" },
        { type: "item_text", data: "Detectan señales musculares, nerviosas o cerebrales para que la prótesis responda en tiempo real." },
        { type: "item_title", data: "Microprocesadores" },
        { type: "item_text", data: "Procesan la información captada y la convierten en acciones precisas y coordinadas." },
        { type: "item_title", data: "Actuadores" },
        { type: "item_text", data: "Son los motores que generan el movimiento, imitando la fuerza y la velocidad natural de tus músculos." },
        { type: "item_title", data: "Baterías" },
        { type: "item_text", data: "Suministran energía constante y segura para un funcionamiento prolongado." },
        { type: "subtitle", data: "Por qué son importantes" },
        { type: "item_text", data: "Garantizan que cada movimiento sea fluido y natural." },
        { type: "item_text", data: "Aseguran la respuesta inmediata de la prótesis." },
        { type: "item_text", data: "Permiten una mayor personalización y adaptación a tu estilo de vida." },
        { type: "text", data: "Los componentes electrónicos son el corazón invisible de la prótesis. No los ves, pero gracias a ellos la tecnología y tu cuerpo se mueven como uno solo." },
    ],
    impresion3d: [
        { type: "title", data: "Impresiones 3D" },
        { type: "subtitle", data: "Fabricación de precisión, pieza por pieza" },
        { type: "text", data: "La impresión 3D nos permite crear componentes de prótesis biónicas con una precisión milimétrica y una personalización total. Cada pieza se diseña para adaptarse perfectamente al cuerpo del usuario, combinando resistencia, ligereza y comodidad." },
        { type: "subtitle", data: "Ventajas de la impresión 3D" },
        { type: "item_title", data: "Personalización total" },
        { type: "item_text", data: "Cada pieza se fabrica a medida para ajustarse a la anatomía y necesidades específicas del usuario." },
        { type: "item_title", data: "Rapidez de producción" },
        { type: "item_text", data: "La fabricación aditiva permite producir componentes en menos tiempo que los métodos tradicionales." },
        { type: "item_title", data: "Materiales avanzados" },
        { type: "item_text", data: "Usamos plásticos y compuestos de alta resistencia que garantizan durabilidad y comodidad." },
        { type: "item_title", data: "Diseños optimizados" },
        { type: "item_text", data: "La impresión 3D permite crear formas y estructuras imposibles de fabricar con técnicas convencionales." },
        { type: "subtitle", data: "Por qué importa" },
        { type: "item_text", data: "Reduce el peso total de la prótesis sin comprometer su resistencia." },
        { type: "item_text", data: "Permite un ajuste ergonómico y cómodo para uso diario." },
        { type: "item_text", data: "Facilita la innovación constante en diseño y funcionalidad." },
        { type: "text", data: "Gracias a la impresión 3D, cada prótesis biónica no solo cumple su función: también se adapta a la persona que la usa, como si hubiera nacido con ella." },
    ],
    prototipos: [
        { type: "title", data: "Prototipos" },
        { type: "subtitle", data: "Del concepto a la realidad" },
        { type: "text", data: "Antes de que una prótesis biónica llegue a tus manos, pasa por una etapa clave: la creación de prototipos. Aquí es donde las ideas, el diseño y la tecnología se unen para dar forma a modelos funcionales que podemos probar, ajustar y perfeccionar." },
        { type: "subtitle", data: "Etapas del prototipado" },
        { type: "item_title", data: "Diseño inicial" },
        { type: "item_text", data: "Creamos el modelo en base a las necesidades del usuario y los objetivos de funcionalidad." },
        { type: "item_title", data: "Fabricación de prueba" },
        { type: "item_text", data: "Construimos una versión preliminar con materiales que permiten ajustes rápidos." },
        { type: "item_title", data: "Evaluación funcional" },
        { type: "item_text", data: "Probamos el prototipo en condiciones reales para analizar su rendimiento y comodidad." },
        { type: "item_title", data: "Mejoras y ajustes" },
        { type: "item_text", data: "Optimizamos el diseño, los componentes y la programación antes de fabricar la versión final." },
        { type: "subtitle", data: "Por qué es importante" },
        { type: "item_text", data: "Permite detectar y corregir errores antes de la producción definitiva." },
        { type: "item_text", data: "Garantiza un ajuste y funcionamiento óptimos para cada usuario." },
        { type: "item_text", data: "Acelera la innovación al probar nuevas ideas rápidamente." },
        { type: "text", data: "El prototipo es el primer paso para transformar una idea en algo que puedas tocar, usar… y hacer parte de tu vida." },
    ],
    videos: [
        { type: "title", data: "Videos" },
        { type: "subtitle", data: "Transparencia en cada paso" },
        { type: "text", data: "Creemos que la mejor forma de mostrar lo que hacemos es dejar que lo veas con tus propios ojos. Nuestros videos documentan cada etapa del proceso, desde el diseño inicial hasta la entrega final de la prótesis biónica." },
        { type: "subtitle", data: "Qué vas a ver" },
        { type: "item_title", data: "Diseño y planificación" },
        { type: "item_text", data: "Cómo transformamos una idea en un plano detallado y funcional." },
        { type: "item_title", data: "Fabricación y ensamblaje" },
        { type: "item_text", data: "El momento en que cada pieza toma forma y se une para dar vida a la prótesis." },
        { type: "item_title", data: "Programación y ajustes" },
        { type: "item_text", data: "El trabajo de calibración que hace que la prótesis responda como si fuera parte del cuerpo." },
        { type: "item_title", data: "Pruebas y mejoras" },
        { type: "item_text", data: "Sesiones reales en las que evaluamos, corregimos y optimizamos el rendimiento." },
        { type: "subtitle", data: "Por qué compartimos nuestro proceso" },
        { type: "item_text", data: "Mostramos el compromiso y la dedicación que ponemos en cada proyecto." },
        { type: "item_text", data: "Damos confianza al usuario al mostrar cómo trabajamos." },
        { type: "item_text", data: "Inspiramos a más personas a conocer y confiar en la tecnología biónica." },
        { type: "text", data: "No solo fabricamos prótesis: construimos historias, y queremos que seas testigo de cada capítulo." },
    ]
}