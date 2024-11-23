import { globalFormDataType } from "@/types";

// import img_0000 from "@/public/old lady.png"
// console.log(`$img`, img_0000);

//woo more values above

//<<globalFormDataStart>> needed string - dont remove
export const globalFormData: globalFormDataType = {
    specificData: {
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
                    fieldType: "section",
                    using: true,
                },
                section2: {
                    label: "section 2 - contacts",
                    component: [
                        {
                            svg: {
                                fieldType: "svg",
                                value: '<svg style={{ fill: "var(--color1)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>'
                            },
                            title: {
                                fieldType: "input",
                                value: "Location"
                            },
                            texts: [
                                {
                                    fieldType: "input",
                                    value: "34 High Street, Blazfield Ave, FL 95403 - USA"
                                }
                            ],
                        },
                        {
                            svg: {
                                fieldType: "svg",
                                value: '<svg style={{ fill: "var(--color4" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z" /></svg>'
                            },
                            title: {
                                fieldType: "input",
                                value: "Call Us"
                            },
                            texts: [
                                {
                                    fieldType: "input",
                                    value: "Support: + 08 645 280 947"
                                },
                                {
                                    fieldType: "input",
                                    value: "Inquiry: + 08 645 290 948"
                                }
                            ],
                        },
                        {
                            svg: {
                                fieldType: "svg",
                                value: '<svg style={{ fill: "var(--color5)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" /></svg>'
                            },
                            title: {
                                fieldType: "input",
                                value: "Email"
                            },
                            texts: [
                                {
                                    fieldType: "input",
                                    value: "admin@primekidz.org"
                                },
                                {
                                    fieldType: "input",
                                    value: "courses@mydomain.com"
                                },
                            ],
                        },
                    ],
                    fieldType: "contactComponent",
                    using: true,
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
        },
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
                shade3: "#f8f8f8",
            },
            background: {
                bg1: "#fff",
                bg2: "#000",
            },
        },
        templateId: "aaaa",
    },
    linkedData: {
        siteInfo: {
            phone: "(876)123-4567",
            address: "123 Flavor Street, Culinary City, Foodland",
            websiteName: "YourRestaurant",
            websiteTitle: "YourRestaurant - Savor Every Bite",
            websiteDescription: "Discover mouth-watering dishes and exceptional dining experiences.",
            logo: "",
            opengraphLogo: "",
            email: "info@YourRestaurant.com",
            workingHours: "Mon-Sun: 10am - 10pm",
            favicon: "",
            copyrightInformation: "© 2024 yourRestaurant. All rights reserved.",
        },
        gallery: [],
        products: [],
        services: [],
        socials: [],
        team: [],
        testimonials: [],
    },
}
//<<globalFormDataEnd>> needed string - dont remove

//woo more values below

