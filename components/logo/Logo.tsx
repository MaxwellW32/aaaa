"use client"
//replace
import { globalFormDataJotaiGlobal } from '@/jotai'
import { useAtom } from 'jotai'
import Image from 'next/image'
import React from 'react'

export default function Logo() {
    const [globalFormDataJotai,] = useAtom(globalFormDataJotaiGlobal)

    return (
        <Image alt='logo' src={globalFormDataJotai.linkedData.siteInfo.logo} height={140} width={140} style={{ objectFit: "contain" }} />
    )
}
