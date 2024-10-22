"use client"
import { globalFormDataJotaiGlobal } from '@/jotai'
import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import styles from "./style.module.css"

export default function CustomizeColors() {
    const [globalFormDataJotai, globalFormDataJotaiSet] = useAtom(globalFormDataJotaiGlobal)

    //write colors to state
    useEffect(() => {
        Object.entries(globalFormDataJotai.siteInfo.colors).forEach(eachColorTypeEntry => {
            const eachColorTypeObj = eachColorTypeEntry[1]

            Object.entries(eachColorTypeObj).forEach(eachColorEntry => {
                const eachColorKey = eachColorEntry[0]
                const eachColorValue = eachColorEntry[1]

                document.body.style.setProperty(`--${eachColorKey}`, eachColorValue);
            })
        })

    }, [globalFormDataJotai.siteInfo.colors])

    return (
        <div style={{ display: "grid", paddingLeft: "var(--paddingSmall)", gap: "var(--regularGap)" }}>
            {Object.entries(globalFormDataJotai.siteInfo.colors).map(eachColorTypeEntry => {
                const eachColorTypeKey = eachColorTypeEntry[0]
                const eachColorTypeObj = eachColorTypeEntry[1]

                return (
                    <div key={eachColorTypeKey} style={{ display: "grid", gap: "var(--regularGap)" }}>
                        <label>{eachColorTypeKey}</label>

                        {Object.entries(eachColorTypeObj).map(eachColorEntry => {
                            const eachColorKey = eachColorEntry[0]
                            const eachColorValue = eachColorEntry[1]

                            return (
                                <div key={eachColorKey} style={{ paddingLeft: "var(--paddingSmall)", display: "flex", alignItems: "center", gap: "var(--smallGap)", flexWrap: "wrap" }}>
                                    <label>{eachColorKey}</label>

                                    <input className={styles.colorInput} type="color" name={eachColorKey} value={eachColorValue} placeholder={"Enter a color"}
                                        onChange={(e) => {
                                            globalFormDataJotaiSet(prevData => {
                                                const newData = { ...prevData }

                                                //just to refresh for the useEffect
                                                newData.siteInfo.colors = { ...newData.siteInfo.colors }

                                                newData.siteInfo.colors[eachColorTypeKey][eachColorKey] = e.target.value

                                                return newData
                                            })
                                        }}
                                    />
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}
