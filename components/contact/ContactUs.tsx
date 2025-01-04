"use client"
//replace
import Image, { ImageProps } from "next/image";
import styles from "./styles.module.css"
import Socials from "../socials/Socials";
import { contactUsComponentType } from "@/types";
import React from "react"
import { useAtom } from "jotai";
import { globalFormDataJotaiGlobal } from "@/jotai";

export default function ContactUs({ contacts }: { contacts: contactUsComponentType["component"] }) {
    const [globalFormDataJotai,] = useAtom(globalFormDataJotaiGlobal)

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "vaR(--gapSmall)", justifyContent: "center", alignItems: "center", width: "min(1000px, 100%)", margin: "0 auto" }}>
            {globalFormDataJotai.specificData.pages.home.thirdSection.fieldType === "section" &&
                globalFormDataJotai.specificData.pages.home.thirdSection.using &&
                globalFormDataJotai.specificData.pages.home.thirdSection.inputs.image1.type === "img" && (
                    <div style={{ flex: "0 0 auto", position: "relative", width: "min(250px, 80vw)", aspectRatio: "1/1" }}>
                        <Image {...globalFormDataJotai.specificData.pages.home.thirdSection.inputs.image1.props as ImageProps} />
                    </div>
                )}

            <div style={{ flex: "1 1 300px", backgroundColor: "var(--bg1)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))" }}>
                {contacts.map((eachContactInfo, eachContactInfoIndex) => {
                    return (
                        <div key={eachContactInfoIndex} className={styles.contact}>
                            {eachContactInfo.svg.type === "img" && (
                                <div className={styles.iconCont}>
                                    <Image {...eachContactInfo.svg.props as ImageProps} />
                                </div>
                            )}

                            <div className={styles.infoCont}>
                                <h3 {...eachContactInfo.title.props}>{eachContactInfo.title.value}</h3>

                                {eachContactInfo.texts.length > 0 && (
                                    <ul className={styles.textCont}>
                                        {eachContactInfo.texts.map((eachText, eachTextIndex) => {
                                            return (
                                                <li {...eachText.props} key={eachTextIndex}>{eachText.value}</li>
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