export type globalFormDataType = {
    siteInfo: {
        name: string;
        title: string;
        description: string;
        favIcon: string;
    };
    pages: {
        [key: string]: {
            [key: string]: formInputObj
        }
    };
    navLinks: {
        title: string;
        link: string;
    }[]
}

export type formInputObj = {
    label?: string;
    placeHolder?: string;
    type?: string;
    using?: boolean;
    inputType?: "input" | "textarea" | "checkbox";
    value: string
}