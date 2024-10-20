"use client"
//replace
import React from 'react'
import { useAtom } from 'jotai'
import { globalFormDataJotaiGlobal } from '@/jotai'

export default function Page() {
    const [globalFormDataJotai,] = useAtom(globalFormDataJotaiGlobal)

    return (
        <div>
            <h1>About</h1>
            <p>{globalFormDataJotai.pages.about.section1.inputs.text1.value}</p>
            <p>{globalFormDataJotai.pages.about.section1.inputs.text2.value}</p>
            <p>{globalFormDataJotai.pages.about.section1.inputs.text3.value}</p>
        </div>
    )
}
