import { globalFormDataType } from "@/types";

//woo more values above

export const globalFormData: globalFormDataType = {
    linkedData: {
        siteInfo: {
            phone: "(876)123-4567",
            address: "123 Flavor Street, Culinary City, Foodland",
            websiteName: "YourRestaurant",
            websiteTitle: "YourRestaurant - Savor Every Bite",
            websiteDescription: "Discover mouth-watering dishes and exceptional dining experiences.",
            logo: "/localImages/logo.png",
            opengraphLogo: "",
            email: "info@YourRestaurant.com",
            workingHours: ["Mon-Sun: 10am - 10pm"],
            favicon: "",
            copyrightInformation: "© 2024 yourRestaurant. All rights reserved.",
        },
        testimonials: [
            {
                name: "John Doe",
                position: "CEO",
                photo: "https://example.com/photo.jpg",
                text: "Amazing service, highly recommend!",
                rating: 5,
                date: "2024-01-01",
                links: ["https://example.com/testimonial1"],
                company: "Example Corp",
            },
        ],
        team: [
            {
                name: "Jane Smith",
                position: "Developer",
                photo: "https://example.com/team1.jpg",
                bio: "Passionate about coding and technology.",
                links: ["https://example.com/jane", "https://linkedin.com/in/janesmith"],
                email: "jane@example.com",
                phone: "+123456789",
                skills: ["JavaScript", "React", "Node.js"],
                achievements: ["Built scalable apps", "Lead development team for 2 years"],
            },
        ],
        products: [
            {
                name: "Product A",
                description: "A great product for everyday use.",
                price: 99.99,
                images: ["https://example.com/productA1.jpg", "https://example.com/productA2.jpg"],
                sku: "PA12345",
                categories: ["Electronics", "Gadgets"],
                tags: ["New", "Popular"],
                available: true,
                featured: true,
                discounts: "10% off",
                ratings: 4.5,
                productTestimonials: [
                    {
                        name: "Alice Johnson",
                        position: "Customer",
                        photo: "https://example.com/photoA1.jpg",
                        text: "I love this product, it's a game-changer!",
                        rating: 5,
                        date: "2024-02-01",
                        links: ["https://example.com/testimonialA1"],
                        company: "Alice's Reviews",
                    },
                ],
            },
        ],
        gallery: [
            {
                title: "Beautiful Sunset",
                description: "A breathtaking view of the sunset over the ocean.",
                image: "https://example.com/sunset.jpg",
                categories: ["Nature", "Sunsets"],
                tags: ["Scenic", "Relaxing"],
                featured: true,
                date: "2024-03-01",
                author: "John Doe",
            },
        ],
        services: [
            {
                title: "Web Development",
                description: "We create beautiful and functional websites.",
                price: 1999.99,
                icon: "https://example.com/web-icon.png",
                duration: "4 weeks",
                tags: ["Web Design", "Development"],
                callToAction: "Contact us to start your project today!",
                availability: "Available now",
                serviceTestimonials: [
                    {
                        name: "Sarah Lee",
                        position: "Business Owner",
                        photo: "https://example.com/photoS1.jpg",
                        text: "Fantastic service! My website looks amazing.",
                        rating: 5,
                        date: "2024-04-01",
                        links: ["https://example.com/testimonialS1"],
                        company: "Sarah's Shop",
                    },
                ],
            },
        ],
        socials: [
            {
                platform: "Facebook",
                url: "https://facebook.com/yourpage",
                icon: "https://example.com/facebook-icon.png",
                description: "Follow us on Facebook for updates and offers.",
            },
            {
                platform: "Instagram",
                url: "https://instagram.com/yourprofile",
                icon: "https://example.com/instagram-icon.png",
                description: "Check out our Instagram for more photos.",
            },
        ],
    },
    specificData: {
        pages: {
            home: {
                firstSection: {
                    inputs: {
                        heading1: {
                            type: "html",
                            props: {},
                            value: "hey heading 1"
                        },
                        paragraph1: {
                            type: "html",
                            inputType: "textarea",
                            props: {
                            },
                            value: "hey paragprah 1"
                        },
                        image1: {
                            type: "img",
                            props: {
                                src: "/localImages/old lady.png",
                                alt: "lady image",
                                priority: true,
                                fill: true,
                                sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw",
                                style: {
                                    objectFit: "cover", objectPosition: "bottom"
                                }
                            },
                            value: "",
                        },
                    },
                    fieldType: "section",
                    using: true,
                },
                secondSection: {
                    component: [
                        {
                            svg: {
                                type: "img",
                                props: {
                                    src: "/localImages/old lady.png",
                                    alt: "contact svg",
                                    width: 20,
                                    height: 20,
                                    style: {
                                        objectFit: "contain"
                                    }
                                },
                                value: "",
                            },
                            title: {
                                type: "html",
                                value: 'cool contact title',
                                props: {}
                            },
                            texts: [
                                {
                                    type: "html",
                                    value: 'cool text',
                                    props: {}
                                },
                            ],
                        },
                    ],
                    fieldType: "contactComponent",
                    using: true,
                },
                thirdSection: {
                    inputs: {
                        image1: {
                            type: "img",
                            props: {
                                src: "/localImages/support.jpg",
                                alt: "lady image",
                                priority: true,
                                fill: true,
                                sizes: "(max-width: 200px) 100vw, (max-width: 600px) 50vw, 33vw",
                                style: {
                                    objectFit: "cover", borderRadius: "var(--radiusAmountLarge)",
                                }
                            },
                            value: "",
                        },
                    },
                    fieldType: "section",
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
    }
}

//woo more values below

