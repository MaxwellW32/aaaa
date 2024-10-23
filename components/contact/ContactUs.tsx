import Image from "next/image";
import defaultImage from "@/public/defaultImage1.webp"
import Link from "next/link";
import styles from "./styles.module.css"

type contactInfo = {
    icon: JSX.Element,
    title: string,
    texts: string[]
}

type social = {
    icon: JSX.Element,
    link: string,
}

export default function ContactUs({ contactInfoArr, socials }: { contactInfoArr: contactInfo[], socials: social[] }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "vaR(--gapSmall)", justifyContent: "center", alignItems: "flex-start", width: "min(1000px, 100%)", margin: "0 auto" }}>
            <div style={{ flex: "0 0 auto", position: "relative", width: "min(250px, 100%)", aspectRatio: "1/1" }}>
                <Image alt="contactUsImage" src={defaultImage} fill={true} sizes="(max-width: 200px) 100vw, (max-width: 600px) 50vw, 33vw" style={{ objectFit: "cover", borderRadius: "var(--radiusAmountLarge)", }} />
            </div>

            <div style={{ flex: "1 1 300px", backgroundColor: "var(--bg1)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))" }}>
                {contactInfoArr.map((eachContactInfo, eachContactInfoIndex) => {
                    return (
                        <div key={eachContactInfoIndex} className={styles.contact}>
                            <div className={styles.iconCont}>
                                {eachContactInfo.icon}
                            </div>

                            <div className={styles.infoCont}>
                                <h3>{eachContactInfo.title}</h3>

                                {eachContactInfo.texts.length > 0 && (
                                    <ul className={styles.textCont}>
                                        {eachContactInfo.texts.map((eachText, eachTextIndex) => {
                                            return (
                                                <li key={eachTextIndex}>{eachText}</li>
                                            )
                                        })}
                                    </ul>
                                )}
                            </div>
                        </div>
                    )
                })}

                <div className={styles.socialsCont}>
                    {socials.map((eachSocial, eachSocialIndex) => {
                        return (
                            <Link href={eachSocial.link} key={eachSocialIndex} style={{ backgroundColor: eachSocialIndex === 0 ? "var(--color1)" : eachSocialIndex === 1 ? "var(--color3)" : "var(--color5)" }}>
                                {eachSocial.icon}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}