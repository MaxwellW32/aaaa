import { z } from "zod";

export const formInputObjSchema = z.object({
    label: z.string().min(1).optional(),
    placeHolder: z.string().min(1).optional(),
    type: z.string().min(1).optional(),
    required: z.boolean().optional(),
    inputType: z.enum(["input", "textarea"]).optional(),
    value: z.string()
});
export type formInputObj = z.infer<typeof formInputObjSchema>


export const globalFormDataSchema = z.object({
    siteInfo: z.object({
        name: z.string().min(1),
        title: z.string().min(1),
        description: z.string().min(1),
        favIcon: z.string(),
        colors: z.array(z.string()),
        fonts: z.array(z.string())
    }),
    pages: z.record(
        z.string(), // key for each page
        z.record(
            z.string(), // key for each section
            z.object({
                inputs: z.record(
                    z.string(), // key for each input
                    formInputObjSchema
                ),
                using: z.boolean(),
                label: z.string().optional(),
            })
        )
    ),
    navLinks: z.array(
        z.object({
            title: z.string(),
            link: z.string()
        })
    )
});
export type globalFormDataType = z.infer<typeof globalFormDataSchema>
export type siteInfo = globalFormDataType["siteInfo"]
export type siteInfoKeys = keyof siteInfo

//the data type for all templates globalFormData obj
//ensures the data we get back will work for this template
export const syncFromServerSchema = z.object({
    sentGlobalFormData: globalFormDataSchema.nullable()
})
export type syncFromServerType = z.infer<typeof syncFromServerSchema>

