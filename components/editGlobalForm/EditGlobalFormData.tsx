"use client"
import { globalFormDataJotaiGlobal } from '@/jotai'
import { useAtom } from 'jotai'
import React, { useState, useEffect } from 'react'
import styles from "./style.module.css"

//this handles all form info for the website
//sends a copy of it to the main website

export default function EditGlobalFormData() {
    const [globalFormDataJotai, globalFormDataJotaiSet] = useAtom(globalFormDataJotaiGlobal)
    const [showingForm, showingFormSet] = useState(false)
    const [currentPage, currentPageSet] = useState("home")

    useEffect(() => {
        //mirror of whats in globalFormData.tsx
        window.parent.postMessage({
            fromTemplate: "aaaa",
            globalFormData: globalFormDataJotai
        }, "*")
    }, [globalFormDataJotai])

    return (
        <div className={styles.formCont}>
            {showingForm ? (
                <button
                    onClick={() => { showingFormSet(false) }}
                >Close Form</button>
            ) : (
                <button
                    onClick={() => { showingFormSet(true) }}
                >Show Form</button>
            )}

            <form style={{ display: showingForm ? "" : "none" }} className={styles.form} action={() => { }}>
                <h1>Customize your site</h1>

                {/* site info */}
                {Object.entries(globalFormDataJotai.siteInfo).map(eachEntry => {
                    const eachKey = eachEntry[0]
                    const eachValue = eachEntry[1]

                    if (typeof eachValue === "object") return null

                    return (
                        <div key={eachKey}>
                            <label>Customize site {eachKey}</label>

                            <input type={"text"} name={eachKey} value={eachValue} placeholder={eachKey} onChange={(e) => {
                                globalFormDataJotaiSet(prevData => {
                                    const newData = { ...prevData }

                                    if (typeof newData.siteInfo[eachKey] === "string") {
                                        newData.siteInfo[eachKey] = e.target.value
                                    }

                                    return newData
                                })
                            }} />
                        </div>
                    )
                })}

                <h1>Customize page info</h1>

                {/* page selection */}
                <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
                    {Object.entries(globalFormDataJotai.pages).map(eachEntry => {
                        const eachPage = eachEntry[0]

                        return (
                            <button key={eachPage}
                                onClick={() => {
                                    currentPageSet(eachPage)
                                }}
                            >{eachPage}</button>
                        )
                    })}
                </div>

                {/* form page inputs */}
                {Object.entries(globalFormDataJotai.pages).map(eachEntry => {
                    const eachPageName = eachEntry[0]
                    //e.g Home
                    const pageSections = eachEntry[1]

                    return Object.entries(pageSections).map(eachSmallEntry => {
                        const eachSectionId = eachSmallEntry[0]
                        //e.g idA
                        const eachSectionValue = eachSmallEntry[1] //string value

                        return (
                            <div key={eachSectionId} style={{ display: currentPage === eachPageName ? "" : "none" }}>
                                {eachSectionValue.label !== undefined && <label className={styles.label} htmlFor={eachSectionId}>{eachSectionValue.label}</label>}

                                {eachSectionValue.inputType === undefined || eachSectionValue.inputType === "input" ? (
                                    <input id={eachSectionId} type={eachSectionValue.type === undefined ? "text" : eachSectionValue.type} name={eachSectionId} value={eachSectionValue.value} placeholder={eachSectionValue.placeHolder ?? ""} onChange={(e) => {
                                        globalFormDataJotaiSet(prevData => {
                                            const newData = { ...prevData }
                                            newData.pages[eachPageName][eachSectionId].value = e.target.value
                                            return newData
                                        })
                                    }} />
                                ) : eachSectionValue.inputType === "textarea" ? (
                                    <textarea rows={5} id={eachSectionId} name={eachSectionId} value={eachSectionValue.value} placeholder={eachSectionValue.placeHolder ?? ""} onInput={(e) => {
                                        globalFormDataJotaiSet(prevData => {
                                            const newData = { ...prevData }
                                            //@ts-expect-error value exits on text area
                                            newData.pages[eachPageName][eachSectionId].value = e.target.value
                                            return newData
                                        })
                                    }} ></textarea>
                                ) : eachSectionValue.inputType === "checkbox" ? (
                                    <div>
                                        <button
                                            onClick={() => {
                                                globalFormDataJotaiSet(prevData => {
                                                    const newData = { ...prevData }
                                                    if (newData.pages[eachPageName][eachSectionId].using === undefined) {
                                                        newData.pages[eachPageName][eachSectionId].using = false
                                                    } else {
                                                        newData.pages[eachPageName][eachSectionId].using = !newData.pages[eachPageName][eachSectionId].using
                                                    }
                                                    return newData
                                                })
                                            }}
                                        >
                                            <p>{eachSectionValue.using === true ? `Using ${eachSectionValue.label} ` : `not Using ${eachSectionValue.label} `}</p>
                                        </button>
                                    </div>
                                ) : null}

                                {/* {errors !== undefined && <p style={{ color: "red", fontSize: "var(--smallFontSize)" }}>{errors}</p>} */}
                            </div>
                        )
                    })
                })}
            </form>
        </div>
    )
}
