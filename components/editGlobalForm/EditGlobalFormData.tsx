"use client"
import { globalFormDataJotaiGlobal } from '@/jotai'
import { useAtom } from 'jotai'
import React, { useState, useEffect } from 'react'
import styles from "./style.module.css"
import { globalFormDataKeys, globalFormDataType, syncFromServerSchema } from '@/types'
import CustomizeColors from './CustomizeColors'

//this handles all form info for the website
//sends a copy of it to the main website

//main sends a sync request - object containing a key called "sentGlobalFormData"
//if its null do nothing - else set global form data
//send back data to server as normal

export default function EditGlobalFormData() {
    const [globalFormDataJotai, globalFormDataJotaiSet] = useAtom(globalFormDataJotaiGlobal)
    const [showingForm, showingFormSet] = useState<boolean | null>(false) //enusre this is null in production

    const [currentPage, currentPageSet] = useState("home")
    const [formTabSelection, formTabSelectionSet] = useState<globalFormDataKeys>("pages")

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

                showingFormSet(false)

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
            {/* show hide form */}
            {showingForm !== null && (
                <button className={styles.secondaryButton}
                    onClick={() => { showingFormSet(prev => !prev) }}
                >{showingForm ? "Close Form" : "Show Form"}</button>
            )}

            {/* form here */}
            <form style={{ display: showingForm ? "" : "none" }} className={styles.form} action={() => { }}>
                {/* form tab options */}
                <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
                    {Object.entries(globalFormDataJotai).map(eachFormTabEntry => {
                        const eachFormTabKey = eachFormTabEntry[0] as globalFormDataKeys

                        return (
                            <button key={eachFormTabKey} className={styles.secondaryButton} style={{ color: eachFormTabKey === formTabSelection ? "var(--color1)" : "" }}
                                onClick={() => {
                                    formTabSelectionSet(eachFormTabKey)
                                }}
                            >{eachFormTabKey}</button>
                        )
                    })}
                </div>

                {/* different form fields */}
                <div>
                    {Object.entries(globalFormDataJotai).map(eachFormTabEntry => {
                        const eachFormTabKey = eachFormTabEntry[0] as globalFormDataKeys

                        return (
                            <div key={eachFormTabKey} style={{ display: eachFormTabKey === formTabSelection ? "" : "none" }}>
                                {eachFormTabKey === "siteInfo" ? (
                                    <>
                                        {/* site info */}
                                        {Object.entries(globalFormDataJotai.siteInfo).map(siteInfoEntry => {
                                            // will remove later
                                            const siteInfoKey = siteInfoEntry[0] as keyof globalFormDataType["siteInfo"]
                                            const siteInfoValue = siteInfoEntry[1]

                                            return (
                                                <div key={siteInfoKey} className={styles.formInputCont}>
                                                    <label>website {siteInfoKey}</label>

                                                    {typeof siteInfoValue === "object" ? (
                                                        <>
                                                            {/* customize colors */}
                                                            {siteInfoKey === "colors" && <CustomizeColors />}

                                                            {/* customize fonts */}
                                                        </>
                                                    ) : (
                                                        // all string inputs
                                                        <input type={"text"} name={siteInfoKey} value={siteInfoValue} placeholder={siteInfoKey} onChange={(e) => {
                                                            globalFormDataJotaiSet(prevData => {
                                                                const newData = { ...prevData }

                                                                if (typeof newData.siteInfo[siteInfoKey] === "string") {
                                                                    let seenText = e.target.value

                                                                    // ensure website name is hyphenated
                                                                    if (siteInfoKey === "name") {
                                                                        seenText = seenText.replace(/\s+/g, '-')
                                                                    }

                                                                    //@ts-expect-error typescript not seeing difference
                                                                    newData.siteInfo[siteInfoKey] = seenText
                                                                }

                                                                return newData
                                                            })
                                                        }} />
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </>
                                ) : eachFormTabKey === "pages" ? (
                                    <>
                                        {/* form page selection */}
                                        <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
                                            {Object.entries(globalFormDataJotai.pages).map(eachPageEntry => {
                                                const eachPageName = eachPageEntry[0]

                                                return (
                                                    <button key={eachPageName} className={styles.secondaryButton} style={{ color: eachPageName === currentPage ? "var(--color1)" : "" }}
                                                        onClick={() => {
                                                            currentPageSet(eachPageName)
                                                        }}
                                                    >{eachPageName}</button>
                                                )
                                            })}
                                        </div>

                                        {/* form page inputs */}
                                        {Object.entries(globalFormDataJotai.pages).map(eachPageEntry => {
                                            const eachPageKey = eachPageEntry[0] //e.g Home
                                            const eachPageSections = eachPageEntry[1]

                                            return (
                                                // each section 
                                                <div key={eachPageKey} className={styles.formSectionCont}>
                                                    {Object.entries(eachPageSections).map(eachSectionEntry => {
                                                        const eachSectionKey = eachSectionEntry[0] //e.g section 1
                                                        const eachSectionObj = eachSectionEntry[1]

                                                        return (
                                                            <div key={eachSectionKey} style={{ display: currentPage === eachPageKey ? "grid" : "none", border: "1px solid #000", padding: "var(--padSml)" }}>
                                                                <label>{eachSectionObj.using === true ? `Using ${eachSectionObj.label} ` : `not Using ${eachSectionObj.label} `}</label>

                                                                <button className={styles.secondaryButton}
                                                                    onClick={() => {
                                                                        globalFormDataJotaiSet(prevData => {
                                                                            const newData = { ...prevData }
                                                                            if (newData.pages[eachPageKey][eachSectionKey].using === undefined) {
                                                                                newData.pages[eachPageKey][eachSectionKey].using = false

                                                                            } else {
                                                                                newData.pages[eachPageKey][eachSectionKey].using = !newData.pages[eachPageKey][eachSectionKey].using
                                                                            }
                                                                            return newData
                                                                        })
                                                                    }}
                                                                >Toggle use
                                                                </button>

                                                                {Object.entries(eachSectionObj.inputs).map(eachInputEntry => {
                                                                    const inputKey = eachInputEntry[0] //each input id/name
                                                                    const inputObj = eachInputEntry[1]

                                                                    return (
                                                                        <div key={inputKey} className={styles.formInputCont}>
                                                                            {inputObj.label !== undefined && <label className={styles.label} htmlFor={inputKey}>{inputObj.label}</label>}

                                                                            {inputObj.fieldType === "input" ? (
                                                                                <input id={inputKey} type={"text"} name={inputKey} value={inputObj.value} placeholder={inputObj.placeHolder ?? "type your text here"} onChange={(e) => {
                                                                                    globalFormDataJotaiSet(prevData => {
                                                                                        const newData = { ...prevData }
                                                                                        newData.pages[eachPageKey][eachSectionKey].inputs[inputKey].value = e.target.value
                                                                                        return newData
                                                                                    })
                                                                                }} />
                                                                            ) : inputObj.fieldType === "number" ? (
                                                                                <input id={inputKey} type={"text"} name={inputKey} value={`${inputObj.value}`} placeholder={inputObj.placeHolder ?? "type numbers here"} onChange={(e) => {
                                                                                    globalFormDataJotaiSet(prevData => {
                                                                                        const newData = { ...prevData }
                                                                                        let parsedNum = parseFloat(e.target.value)
                                                                                        if (isNaN(parsedNum)) parsedNum = 0

                                                                                        newData.pages[eachPageKey][eachSectionKey].inputs[inputKey].value = parsedNum
                                                                                        return newData
                                                                                    })
                                                                                }} />

                                                                            ) : inputObj.fieldType === "textarea" ? (
                                                                                <textarea rows={5} id={inputKey} name={inputKey} value={inputObj.value} placeholder={inputObj.placeHolder ?? "type your text here"} onInput={(e) => {
                                                                                    globalFormDataJotaiSet(prevData => {
                                                                                        const newData = { ...prevData }
                                                                                        //@ts-expect-error value exits on text area
                                                                                        newData.pages[eachPageKey][eachSectionKey].inputs[inputKey].value = e.target.value
                                                                                        return newData
                                                                                    })
                                                                                }} ></textarea>

                                                                            ) : inputObj.fieldType === "image" ? (
                                                                                <p>image</p>

                                                                            ) : inputObj.fieldType === "video" ? (
                                                                                <p>video</p>

                                                                            ) : inputObj.fieldType === "link" ? (
                                                                                <p>link</p>
                                                                            ) : null}

                                                                            {/* will implement soon */}
                                                                            {/* {errors !== undefined && <p style={{ color: "red", fontSize: "var(--smallFontSize)" }}>{errors}</p>} */}
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            )
                                        })}
                                    </>
                                ) : eachFormTabKey === "navLinks" ? (
                                    <>
                                        {/* form nav links */}
                                        {Object.entries(globalFormDataJotai.navLinks).map(eachNavOptionEntry => {
                                            const eachNavOptionName = eachNavOptionEntry[0] as keyof globalFormDataType["navLinks"]
                                            const eachNavOptionData = eachNavOptionEntry[1]

                                            return (
                                                <div key={eachNavOptionName}>
                                                    <h3>customize {eachNavOptionName} nav</h3>

                                                    {eachNavOptionData.map(eachNav => {
                                                        return (
                                                            <div key={eachNav.link}>{eachNav.title}</div>
                                                        )
                                                    })}
                                                </div>
                                            )
                                        })}
                                    </>
                                ) : (
                                    <p>{eachFormTabKey}</p>
                                )}
                            </div>
                        )
                    })}
                </div>
            </form>
        </div>
    )
}
