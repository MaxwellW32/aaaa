import { globalFormData } from '@/globalFormData'
import Link from 'next/link'
import React from 'react'

export default function Nav() {
    return (
        <nav>
            <ul>
                {globalFormData.navLinks.map(eachLink => {
                    return (
                        <Link key={eachLink.link} href={eachLink.link}>{eachLink.title}</Link>
                    )
                })}
            </ul>
        </nav>
    )
}
