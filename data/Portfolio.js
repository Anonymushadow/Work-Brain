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
        { type: "subtitle", data: "Espacio informativo"},
        { type: "text", data: "Las prótesis biónicas son dispositivos avanzados que combinan la ingeniería biomédica y la tecnología para restaurar la función y la movilidad en personas con amputaciones o discapacidades. Estas prótesis están diseñadas para imitar el movimiento natural del cuerpo humano y proporcionar una mayor calidad de vida a los usuarios."},
        { type: "subtitle", data: "Características"},
        { type: "item_title", data: "Intuitivo"},
        { type: "item_text", data: "Las prótesis biónicas pueden ser controladas por señales musculares, nerviosas o cerebrales, lo que permite un movimiento natural y preciso."},
        { type: "item_title", data: "Movimiento avanzado"},
        { type: "item_text", data: "Estas prótesis pueden realizar movimientos complejos, como la flexión de dedos o la rotación de muñecas."},
        { type: "item_title", data: "Sensibilidad"},
        { type: "item_text", data: "Algunas prótesis biónicas pueden proporcionar retroalimentación sensorial, lo que permite a los usuarios sentir texturas, temperaturas y vibraciones."},
        { type: "subtitle", data: "Beneficios"},
        { type: "item_title", data: "Mayor independencia"},
        { type: "item_text", data: "Las prótesis biónicas pueden permitir a los usuarios realizar tareas cotidianas con mayor facilidad y autonomía."},
        { type: "item_title", data: "Mejora de la calidad de vida"},
        { type: "item_text", data: "Estas prótesis pueden mejorar la calidad de vida de los usuarios al proporcionarles una mayor movilidad y funcionalidad."},
        { type: "item_title", data: "Personalización"},
        { type: "item_text", data: "Las prótesis biónicas pueden ser personalizadas para adaptarse a las necesidades específicas de cada usuario."}
    ]
}