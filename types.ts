import { z } from "zod";

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
// Number Type Schema


const svgTypeSchema = z.object({
    label: z.string().optional(),
    required: z.boolean().optional(),
    fieldType: z.literal("svg"),
    value: z.any(),
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

const sectionTypeSchema = z.object({ //section 
    inputs: z.record(
        z.string(), // key for each input
        formInputTypeSchema
    ),
    using: z.boolean(),
    label: z.string(),
    fieldType: z.literal("section"),
})
export type sectionType = z.infer<typeof sectionTypeSchema>

const contactComponentTypeSchema = z.object({ //section 
    component: z.array(z.object({
        svg: formInputTypeSchema,
        title: formInputTypeSchema,
        texts: z.array(formInputTypeSchema)
    })),
    using: z.boolean(),
    label: z.string(),
    fieldType: z.literal("contactComponent"),
})
export type contactComponentType = z.infer<typeof contactComponentTypeSchema>

const pageSectionSchema = z.union([
    sectionTypeSchema,
    contactComponentTypeSchema
]);


export const globalFormDataSchema = z.object({
    siteInfo: z.object({
        name: z.string().min(1),
        fonts: z.array(z.string()),

        title: z.string().min(1),
        description: z.string().min(1),
        favIcon: z.string(),
        colors: z.record(
            z.string(),//color type key - e.g mainColors
            z.record(
                z.string(), //color key - e.g color1
                z.string()
            ),
        ),
    }),
    pages: z.record(
        z.string(), // key for each page
        z.record(
            z.string(), // key for each section or component
            pageSectionSchema
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
    })
});
export type globalFormDataType = z.infer<typeof globalFormDataSchema>
export type globalFormDataKeys = keyof globalFormDataType

//the data type for all templates globalFormData obj
//ensures the data we get back from the server will work for this template
export const syncFromServerSchema = z.object({
    sentGlobalFormData: globalFormDataSchema.nullable()
})
export type syncFromServerType = z.infer<typeof syncFromServerSchema>






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