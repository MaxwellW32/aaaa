import { globalFormDataType } from "@/types";

export const globalFormData: globalFormDataType = {
    //must be there
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
            section1: {
                using: true,
                inputs: {
                    text1: {
                        value: "lorem"
                    },
                    text2: {
                        value: "ipsum"
                    },
                    text3: {
                        value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloremque qui laudantium harum explicabo nostrum dolorum, quibusdam totam nulla praesentium nemo ex aperiam ad, sit eum doloribus animi natus tenetur."
                    },
                }
            },
        },
        about: {
            section1: {
                using: true,
                inputs: {
                    text1: {
                        value: "about page lorem"
                    },
                    text2: {
                        value: "ipsum"
                    },
                    text3: {
                        value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloremque qui laudantium harum explicabo nostrum dolorum, quibusdam totam nulla praesentium nemo ex aperiam ad, sit eum doloribus animi natus tenetur."
                    },
                }
            },
        },
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