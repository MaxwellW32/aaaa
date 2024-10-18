"use client"
import React from 'react'
import { useAtom } from 'jotai'
import { globalFormDataJotaiGlobal } from '../../globalState'

export default function Page() {
    const [globalFormDataJotai,] = useAtom(globalFormDataJotaiGlobal)

    return (
        <div>
            <h1>About</h1>
            <p>{globalFormDataJotai.pages.about.section1.value}</p>
            <p>{globalFormDataJotai.pages.about.section2.value}</p>
            <p>{globalFormDataJotai.pages.about.section3.value}</p>
        </div>
    )
}
