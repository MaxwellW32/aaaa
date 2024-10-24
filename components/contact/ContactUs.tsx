import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css"
import defaultImage from "@/public/defaultImage1.webp"
import Socials from "../socials/Socials";
import { contactComponentType } from "@/types";

export default function ContactUs({ contacts }: { contacts: contactComponentType["component"] }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "vaR(--gapSmall)", justifyContent: "center", alignItems: "center", width: "min(1000px, 100%)", margin: "0 auto" }}>
            <div style={{ flex: "0 0 auto", position: "relative", width: "min(250px, 80vw)", aspectRatio: "1/1" }}>
                <Image alt="contactUsImage" src={defaultImage} fill={true} sizes="(max-width: 200px) 100vw, (max-width: 600px) 50vw, 33vw" style={{ objectFit: "cover", borderRadius: "var(--radiusAmountLarge)", }} />
                {/* <Image alt="contactUsImage" src={"https://img.freepik.com/free-photo/medium-shot-female-economist-working-laptop_23-2150167276.jpg?semt=ais_hybrid"} fill={true} sizes="(max-width: 200px) 100vw, (max-width: 600px) 50vw, 33vw" style={{ objectFit: "cover", borderRadius: "var(--radiusAmountLarge)", }} /> */}
            </div>

            <div style={{ flex: "1 1 300px", backgroundColor: "var(--bg1)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))" }}>
                {contacts.map((eachContactInfo, eachContactInfoIndex) => {
                    return (
                        <div key={eachContactInfoIndex} className={styles.contact}>
                            <div className={styles.iconCont}>
                                {eachContactInfo.svg.value}
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