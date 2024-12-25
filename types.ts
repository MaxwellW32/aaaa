import { z } from "zod";

// on template now
// start linked data copy on templates //
export const testimonialSchema = z.array(z.object({
    name: z.string(),
    position: z.string(),
    photo: z.string(),
    text: z.string(),
    rating: z.number(),
    date: z.string(),
    links: z.array(z.string()),
    company: z.string(),
}))

export const linkedDataSchema = z.object({
    siteInfo: z.object({
        phone: z.string(),
        address: z.string(),
        websiteName: z.string().min(1),
        websiteTitle: z.string(),
        websiteDescription: z.string(),
        logo: z.string(),
        opengraphLogo: z.string(),
        email: z.string(),
        workingHours: z.array(z.string()),
        favicon: z.string(),
        copyrightInformation: z.string(),
    }),
    testimonials: testimonialSchema,
    team: z.array(z.object({
        name: z.string(),
        position: z.string(),
        photo: z.string(),
        bio: z.string(),
        links: z.array(z.string()),
        email: z.string(),
        phone: z.string(),
        skills: z.array(z.string()),
        achievements: z.array(z.string()),
    })),
    products: z.array(z.object({
        name: z.string(),
        description: z.string(),
        price: z.number(),
        images: z.array(z.string()),
        sku: z.string(),
        categories: z.array(z.string()),
        tags: z.array(z.string()),
        available: z.boolean(),
        featured: z.boolean(),
        discounts: z.string(),
        ratings: z.number(),
        productTestimonials: testimonialSchema,
    })),
    gallery: z.array(z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        categories: z.array(z.string()),
        tags: z.array(z.string()),
        featured: z.boolean(),
        date: z.string(),
        author: z.string(),
    })),
    services: z.array(z.object({
        title: z.string(),
        description: z.string(),
        price: z.number(),
        icon: z.string(),
        duration: z.string(),
        tags: z.array(z.string()),
        callToAction: z.string(),
        availability: z.string(),
        serviceTestimonials: testimonialSchema,
    })),
    socials: z.array(z.object({
        platform: z.string(),
        url: z.string(),
        icon: z.string(),
        description: z.string(),
    })),
})
export type linkedDataType = z.infer<typeof linkedDataSchema>
// end linked data copy on templates //





//start copy specific data on template//

//components
export const introSchema = z.object({
    using: z.boolean()
})
export type introType = z.infer<typeof introSchema>

export const contactSchema = z.object({
    contacts: z.array(z.object({
        svg: z.string(),
        title: z.string(),
        texts: z.array(z.string()),
    })),
    using: z.boolean()
})
export type contactType = z.infer<typeof contactSchema>
//end components


export const specificDataSchema = z.object({
    templateId: z.literal("aaaa"),
    components: z.object({
        intro: introSchema,
        contact: contactSchema,
    }),
    nav: z.object({
        header: z.array(
            z.object({
                title: z.string(),
                link: z.string()
            })
        ),
        footer: z.array(
            z.object({
                title: z.string(),
                link: z.string()
            })
        )
    }),
    colors: z.record(
        z.string(),
        z.record(
            z.string(),
            z.string()
        )
    ),
})
//end copy specific data on template//





export const globalFormDataSchema = z.object({
    specificData: specificDataSchema,
    linkedData: linkedDataSchema,
})
export type globalFormDataType = z.infer<typeof globalFormDataSchema>
export type globalFormDataSpecificData = keyof globalFormDataType["specificData"]





// rest of types
export type menuItem = {
    title: string,
    link: string
    subMenu?: subMenuItem[],
    using: boolean
}
export type subMenuItem = {
    title: string,
    link: string,
    using: boolean
}