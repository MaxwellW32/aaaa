import { globalFormDataType } from "@/types";

export const globalFormData: globalFormDataType = {
    //must be there
    siteInfo: {
        name: "testWebsite1",
        fonts: [],

        title: "testWebsite1",
        description: "website description for testWebsite1",
        favIcon: "",
        colors: {
            mainColors: {
                color1: "#8ECAE6",
                color2: "#219EBC",
                color3: "#023047",
                color4: "#FFB703",
                color5: "#FB8500",
                color6: "#442E4A",
                color7: "#993955",
            },
            shades: {
                shade1: "#ddd",
                shade2: "#eee",
                shade3: "#eee",
            },
            background: {
                bg1: "#000",
                bg2: "#eee",
            },
        }
    },
    pages: {
        home: {
            section1: {
                label: "section 1",

                inputs: {
                    text1: {
                        value: "lorem",
                        fieldType: "input",
                    },
                    text2: {
                        value: "ipsum",
                        fieldType: "input",

                    },
                    text3: {
                        value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloremque qui laudantium harum explicabo nostrum dolorum, quibusdam totam nulla praesentium nemo ex aperiam ad, sit eum doloribus animi natus tenetur.",
                        fieldType: "textarea",

                    },
                },
                using: true
            },
            section2: {
                label: "section 2",
                inputs: {
                    text1: {
                        value: "lorem",
                        fieldType: "input",
                    },
                    text2: {
                        value: "ipsum",
                        fieldType: "input",

                    },
                    text3: {
                        value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloremque qui laudantium harum explicabo nostrum dolorum, quibusdam totam nulla praesentium nemo ex aperiam ad, sit eum doloribus animi natus tenetur.",
                        fieldType: "textarea",

                    },
                },
                using: true
            },
        },
        about: {
            section1: {
                label: "about section 1",

                inputs: {
                    text1: {
                        value: "about page lorem",
                        fieldType: "textarea",

                    },
                    text2: {
                        value: "ipsum",
                        fieldType: "textarea",

                    },
                    text3: {
                        value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloremque qui laudantium harum explicabo nostrum dolorum, quibusdam totam nulla praesentium nemo ex aperiam ad, sit eum doloribus animi natus tenetur.",
                        fieldType: "textarea",
                    },
                },
                using: true
            },
        },
    },
    navLinks: {
        header: [
            {
                title: "home",
                link: "/",
            },
            {
                title: "about",
                link: "/about",
            }
        ],
        footer: [
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
}