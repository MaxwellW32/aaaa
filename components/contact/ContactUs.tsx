"use client"
//replace
import Image from "next/image";
import styles from "./styles.module.css"
import Socials from "../socials/Socials";
import { contactComponentType } from "@/types";
import React from "react"
import { useAtom } from "jotai";
import { globalFormDataJotaiGlobal } from "@/jotai";

export default function ContactUs({ contacts }: { contacts: contactComponentType["component"] }) {
    const [globalFormDataJotai,] = useAtom(globalFormDataJotaiGlobal)

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "vaR(--gapSmall)", justifyContent: "center", alignItems: "center", width: "min(1000px, 100%)", margin: "0 auto" }}>
            {globalFormDataJotai.specificData.pages.home[1].fieldType === "section" && globalFormDataJotai.specificData.pages.home[1].inputs.i.fieldType === "image" && (
                <div style={{ flex: "0 0 auto", position: "relative", width: "min(250px, 80vw)", aspectRatio: "1/1" }}>
                    <Image alt={globalFormDataJotai.specificData.pages.home[1].inputs.i.alt} src={globalFormDataJotai.specificData.pages.home[1].inputs.i.value} fill={true} sizes="(max-width: 200px) 100vw, (max-width: 600px) 50vw, 33vw" style={{ objectFit: "cover", borderRadius: "var(--radiusAmountLarge)", }} />
                </div>
            )}


            <div style={{ flex: "1 1 300px", backgroundColor: "var(--bg1)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))" }}>
                {contacts.map((eachContactInfo, eachContactInfoIndex) => {
                    return (
                        <div key={eachContactInfoIndex} className={styles.contact}>
                            <div className={styles.iconCont}>
                                <svg
                                    dangerouslySetInnerHTML={{ __html: eachContactInfo.svg.value }}
                                />
                            </div>

                            <div className={styles.infoCont}>
                                <h3>{eachContactInfo.title.value}</h3>

                                {eachContactInfo.texts.length > 0 && (
                                    <ul className={styles.textCont}>
                                        {eachContactInfo.texts.map((eachText, eachTextIndex) => {
                                            return (
                                                <li key={eachTextIndex}>{eachText.value}</li>
                                            )
                                        })}
                                    </ul>
                                )}
                            </div>
                        </div>
                    )
                })}

                <Socials />
            </div>
        </div>
    )
}