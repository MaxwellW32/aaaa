"use client"
import { globalFormDataJotaiGlobal } from '@/jotai'
import { useAtom } from 'jotai'
import React, { useState, useEffect } from 'react'
import styles from "./style.module.css"
import { globalFormDataType, siteInfoKeys, syncFromServerSchema } from '@/types'

//this handles all form info for the website
//sends a copy of it to the main website

//main sends a sync request - object containing a key called "sentGlobalFormData"
//if its null do nothing - else set global form data
//send back data to server as normal

export default function EditGlobalFormData() {
    const [globalFormDataJotai, globalFormDataJotaiSet] = useAtom(globalFormDataJotaiGlobal)
    const [showingForm, showingFormSet] = useState(false)
    const [currentPage, currentPageSet] = useState("home")

    const [receivedSyncData, receivedSyncDataSet] = useState<boolean>(false)

    //check and load save data
    useEffect(() => {
        function handleMessage(message: MessageEvent<unknown>) {
            try {
                //start reading once we see a sentGlobalFormData
                const seenResponse = message.data
                const seenServerSyncData = syncFromServerSchema.parse(seenResponse)

                //set form data - make it match schema
                if (seenServerSyncData.sentGlobalFormData !== null) {
                    globalFormDataJotaiSet(seenServerSyncData.sentGlobalFormData)
                }

                console.log(`$template got sync request`);

                receivedSyncDataSet(true)

            } catch (error) {
                console.log(`$error reading form from parent`, error);
            }
        }

        window.addEventListener("message", handleMessage)

        return () => {
            window.removeEventListener("message", handleMessage)
        }
    }, [])

    //send current form to main website
    useEffect(() => {
        if (!receivedSyncData) return

        //mirror of whats in globalFormData.tsx
        window.parent.postMessage({
            fromTemplate: "aaaa",
            globalFormData: globalFormDataJotai
        }, "*")
    }, [receivedSyncData, globalFormDataJotai])

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
                    const eachKey = eachEntry[0] as siteInfoKeys
                    const eachValue = eachEntry[1]

                    if (typeof eachValue === "object") return null

                    return (
                        <div key={eachKey}>
                            <label>Customize site {eachKey}</label>

                            <input type={"text"} name={eachKey} value={eachValue} placeholder={eachKey} onChange={(e) => {
                                globalFormDataJotaiSet(prevData => {
                                    const newData = { ...prevData }

                                    let siteInfoObj = newData.siteInfo[eachKey] //just here for typescript

                                    if (typeof siteInfoObj === "string") {
                                        siteInfoObj = e.target.value
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
                            <button key={eachPage} style={{ color: eachPage === currentPage ? "blue" : "" }}
                                onClick={() => {
                                    currentPageSet(eachPage)
                                }}
                            >{eachPage}</button>
                        )
                    })}
                </div>

                {/* form page inputs */}
                {Object.entries(globalFormDataJotai.pages).map(eachEntry => {
                    const eachPageName = eachEntry[0] //e.g Home
                    const pageSections = eachEntry[1]

                    return Object.entries(pageSections).map(eachSectionEntry => {
                        const eachSectionName = eachSectionEntry[0] //e.g section 1
                        const eachSectionObj = eachSectionEntry[1]

                        return (
                            <div key={eachSectionName} style={{ display: currentPage === eachPageName ? "" : "none" }}>
                                <div>
                                    <p>{eachSectionObj.using === true ? `Using ${eachSectionObj.label ?? "section"} ` : `not Using ${eachSectionObj.label ?? "section"} `}</p>

                                    <button
                                        onClick={() => {
                                            globalFormDataJotaiSet(prevData => {
                                                const newData = { ...prevData }
                                                if (newData.pages[eachPageName][eachSectionName].using === undefined) {
                                                    newData.pages[eachPageName][eachSectionName].using = false

                                                } else {
                                                    newData.pages[eachPageName][eachSectionName].using = !newData.pages[eachPageName][eachSectionName].using
                                                }
                                                return newData
                                            })
                                        }}
                                    >Toggle use
                                    </button>
                                </div>

                                {Object.entries(eachSectionObj.inputs).map(eachInputEntry => {
                                    const inputId = eachInputEntry[0] //each input id/name
                                    const inputObj = eachInputEntry[1]

                                    return (
                                        <div key={inputId}>
                                            {inputObj.label !== undefined && <label className={styles.label} htmlFor={inputId}>{inputObj.label}</label>}

                                            {inputObj.inputType === undefined || inputObj.inputType === "input" ? (
                                                <input id={inputId} type={inputObj.type === undefined ? "text" : inputObj.type} name={inputId} value={inputObj.value} placeholder={inputObj.placeHolder ?? ""} onChange={(e) => {
                                                    globalFormDataJotaiSet(prevData => {
                                                        const newData = { ...prevData }
                                                        newData.pages[eachPageName][eachSectionName].inputs[inputId].value = e.target.value
                                                        return newData
                                                    })
                                                }} />
                                            ) : inputObj.inputType === "textarea" ? (
                                                <textarea rows={5} id={inputId} name={inputId} value={inputObj.value} placeholder={inputObj.placeHolder ?? ""} onInput={(e) => {
                                                    globalFormDataJotaiSet(prevData => {
                                                        const newData = { ...prevData }
                                                        //@ts-expect-error value exits on text area
                                                        newData.pages[eachPageName][eachSectionName].inputs[inputId].value = e.target.value
                                                        return newData
                                                    })
                                                }} ></textarea>

                                            ) : null}

                                            {/* {errors !== undefined && <p style={{ color: "red", fontSize: "var(--smallFontSize)" }}>{errors}</p>} */}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                })}
            </form>
        </div>
    )
}
