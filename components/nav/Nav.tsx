"use client"
import React, { useState } from 'react'
import { menuItem } from '@/types'
import styles from "./style.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../logo/Logo'

const menuItems: menuItem[] = [
    {
        title: "home",
        link: "/",
        using: true
    },
    {
        title: "our services",
        link: "/services",
        using: true,
    },
    {
        title: "contact us",
        link: "/contact",
        using: true
    },
    {
        title: "forms",
        link: "/forms",
        using: true
    },
    {
        title: "gallery",
        link: "/gallery",
        using: true
    }
]

export default function Nav() {

    return (
        <>
            <ShowOnDesktop menuItems={menuItems} />

            <ShowOnMobile menuItems={menuItems} />
        </>
    )
}


function ShowOnDesktop({ menuItems }: { menuItems: menuItem[] }) {
    return (
        <nav className={`${styles.nav} ${styles.desktop}`}>
            <Logo />

            <DisplayMenu menuItems={menuItems} />

            <button className='mainButton'>call us</button>
        </nav>
    )
}

function ShowOnMobile({ menuItems }: { menuItems: menuItem[] }) {
    const [showingNav, showingNavSet] = useState(false)

    function hideNav() {
        showingNavSet(false)
    }

    return (
        <nav className={`${styles.nav} ${styles.mobile}`}>
            <Logo />

            <div>
                {/* bar button svg */}
                <div
                    onClick={() => { showingNavSet(prev => !prev) }}
                >
                    <svg style={{ width: "var(--sizeMedium)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
                </div>

                {showingNav && <DisplayMenu menuItems={menuItems} func={hideNav} />}
            </div>
        </nav>
    )
}

function DisplayMenu({ menuItems, func }: { menuItems: menuItem[], func?: () => void }) {

    return (
        <ul className={styles.menu}>
            {menuItems.map((eachMenuItem, eachMenuItemIndex) => {
                return (
                    <li key={eachMenuItemIndex} className={styles.menuItem}>
                        <div className={styles.chevronCont}>
                            <Link href={eachMenuItem.link}
                                onClick={() => {
                                    if (func !== undefined) func()
                                }}
                            >{eachMenuItem.title}</Link>

                            {eachMenuItem.subMenu !== undefined && (
                                <svg className={styles.chevron} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                            )}
                        </div>

                        {eachMenuItem.subMenu && (
                            <ul className={styles.subMenu}>
                                {eachMenuItem.subMenu.map((eachSubMenuItem, eachSubMenuItemIndex) => {
                                    return (
                                        <li className={styles.subMenuItem} key={eachSubMenuItemIndex}
                                            onClick={() => {
                                                if (func !== undefined) func()
                                            }}
                                        >
                                            <Link href={eachSubMenuItem.link}>{eachSubMenuItem.title}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        )}
                    </li>
                )
            })}
        </ul>
    )

}
