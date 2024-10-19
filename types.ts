export type globalFormDataType = {
    siteInfo: {
        [key: string]: string | string[],
        name: string,
        title: string,
        description: string,
        favIcon: string,
        colors: string[],
        fonts: string[],
    },
    pages: {
        [key: string]: {//each page
            [key: string]: formInputObj //each section
        }
    },
    navLinks: {
        title: string,
        link: string,
    }[]
}

export type formInputObj = {//each possible type of input
    label?: string,
    placeHolder?: string,
    type?: string,
    using?: boolean,
    inputType?: "input" | "textarea" | "checkbox",
    value: string
}