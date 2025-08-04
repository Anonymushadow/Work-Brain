const base = "/public/images";

export const Imagenes = {
    navbar: {
        logo: `${base}/Generic/navbar_logo.png`
    },
    home: {
        header: `${base}/Home/home_header.jpg`,
        carrousel: [
            {
                src: `${base}/Home/home_firmas.jpg`,
                alt: "Firmas"
            },{
                src: `${base}/Home/a.jpg`,
                alt: "A"
            },{
                src: `${base}/Home/b.jpg`,
                alt: "B"
            },{
                src: "https://picsum.photos/id/1018/800/600",
                alt: "Example"
            },{
                src: "https://picsum.photos/id/1015/800/600",
                alt: "Example 2"
            }
        ]
    },
    about: [
        `${base}/About/w@b_image.png`,
        `${base}/About/dwc_image.jpg`,
    ],
    portfolio: {},
    contacts: {}
}