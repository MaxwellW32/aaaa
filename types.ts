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
// Input Type Schema
const inputTypeSchema = z.object({
    label: z.string().optional(),
    placeHolder: z.string().optional(),
    required: z.boolean().optional(),
    fieldType: z.literal("input"),
    value: z.string(),
});
export type inputType = z.infer<typeof inputTypeSchema>

// Textarea Type Schema
const textareaTypeSchema = z.object({
    label: z.string().optional(),
    placeHolder: z.string().optional(),
    required: z.boolean().optional(),
    fieldType: z.literal("textarea"),
    value: z.string(),
});
export type textareaType = z.infer<typeof textareaTypeSchema>

// Image Type Schema
const imageTypeSchema = z.object({
    label: z.string().optional(),
    required: z.boolean().optional(),
    fieldType: z.literal("image"),
    alt: z.string(),
    value: z.string(),
});
export type imageType = z.infer<typeof imageTypeSchema>

// Video Type Schema
const videoTypeSchema = z.object({
    label: z.string().optional(),
    required: z.boolean().optional(),
    fieldType: z.literal("video"),
    value: z.string(),
});
export type videoType = z.infer<typeof videoTypeSchema>

// Link Type Schema
const linkTypeSchema = z.object({
    label: z.string().optional(),
    required: z.boolean().optional(),
    fieldType: z.literal("link"),
    value: z.string(),
});
export type linkType = z.infer<typeof linkTypeSchema>

// Number Type Schema
const numberTypeSchema = z.object({
    label: z.string().optional(),
    placeHolder: z.string().optional(),
    required: z.boolean().optional(),
    fieldType: z.literal("number"),
    value: z.number(),
});
export type numberType = z.infer<typeof numberTypeSchema>

// Svg Type Schema
const svgTypeSchema = z.object({
    label: z.string().optional(),
    required: z.boolean().optional(),
    fieldType: z.literal("svg"),
    value: z.string(),
});
export type svgType = z.infer<typeof svgTypeSchema>

// Form Input Type (Discriminated Union)
const formInputTypeSchema = z.union([
    inputTypeSchema,
    textareaTypeSchema,
    imageTypeSchema,
    videoTypeSchema,
    linkTypeSchema,
    numberTypeSchema,
    svgTypeSchema
]);
export type formInputType = z.infer<typeof formInputTypeSchema>

//section type 
const sectionTypeSchema = z.object({
    label: z.string(),

    inputs: z.record(
        z.string(), // key for each input
        formInputTypeSchema
    ),

    using: z.boolean(),
    fieldType: z.literal("section").optional(),
})
export type sectionType = z.infer<typeof sectionTypeSchema>

//only for contact component
const contactComponentTypeSchema = z.object({ //section 
    label: z.string(),

    component: z.array(z.object({
        svg: formInputTypeSchema,
        title: formInputTypeSchema,
        texts: z.array(formInputTypeSchema)
    })),

    using: z.boolean(),
    fieldType: z.literal("contactComponent"),
})
export type contactComponentType = z.infer<typeof contactComponentTypeSchema>

const pageSectionUnionSchema = z.union([
    sectionTypeSchema,
    contactComponentTypeSchema
]);


export const specificDataSchema = z.object({
    pages: z.record(
        z.string(), // key for each page
        z.record(
            z.string(), // key for each section or component
            pageSectionUnionSchema
        )
    ),
    navLinks: z.object({
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
    templateId: z.literal("aaaa"),
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