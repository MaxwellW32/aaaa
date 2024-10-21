"use client"
import { globalFormDataJotaiGlobal } from '@/jotai'
import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import styles from "./style.module.css"

export default function CustomizeColors() {
    const [globalFormDataJotai, globalFormDataJotaiSet] = useAtom(globalFormDataJotaiGlobal)

    //write colors to state
    useEffect(() => {
        globalFormDataJotai.siteInfo.colors.forEach((eachColor, eachColorIndex) => {
            document.body.style.setProperty(`--color${eachColorIndex + 1}`, eachColor);
        })

    }, [globalFormDataJotai.siteInfo.colors])

    return (
        <div>
            {globalFormDataJotai.siteInfo.colors.map((eachColor, eachColorIndex) => {

                return (
                    <div key={eachColorIndex} className={styles.formInputCont}>
                        <label>{eachColorIndex === 0 ? "primary" : eachColorIndex === 1 ? "secondary" : eachColorIndex === 2 ? "tertiary" : "highlight"} color</label>

                        <input type={"text"} name={eachColor} value={eachColor} placeholder={eachColor}
                            onChange={(e) => {
                                globalFormDataJotaiSet(prevData => {
                                    const newData = { ...prevData }
                                    const newColorsArr = [...newData.siteInfo.colors] //just to refresh on colors
                                    newColorsArr[eachColorIndex] = e.target.value
                                    newData.siteInfo.colors = newColorsArr

                                    return newData
                                })
                            }}
                        />
                    </div>
                )
            })}
        </div>
    )
}
