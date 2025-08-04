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