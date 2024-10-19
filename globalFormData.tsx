import { globalFormDataType } from "@/types";

export const globalFormData: globalFormDataType = {
    // always have a site info variable across projects
    siteInfo: {
        name: "testWebsite1",
        fonts: [],

        title: "testWebsite1",
        description: "this is a testWebsite1",
        favIcon: "",
        colors: [],
    },
    pages: {
        home: {
            sectionCont: {
                using: true,
                label: "Section Cont",
                inputType: "checkbox",
                value: "",
            },
            section1: {
                value: "section1"
            },
            section2: {
                value: "section2"
            },
            section3: {
                value: "section3"
            },
        },
        about: {
            section1: {
                value: "about section1"
            },
            section2: {
                value: "about section2"
            },
            section3: {
                value: "about section3"
            },
        }
    },
    navLinks: [
        {
            title: "home",
            link: "/",
        },
        {
            title: "about",
            link: "/about",
        }
    ]
}
