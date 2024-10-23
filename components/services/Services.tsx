"use client"
import React, { useMemo, useState } from 'react'
import styles from "./style.module.css"
import Image from 'next/image'

type service = {
    title: string,
    text: string,
    images: [string, string, string],
    list: string[],
}

export default function Services({ services, calledFromHomePage, ...elProps }: { services: service[], calledFromHomePage?: boolean } & React.HtmlHTMLAttributes<HTMLDivElement>) {
    const [currentIndex, currentIndexSet] = useState(0)

    const currentService = useMemo(() => {
        return services[currentIndex]
    }, [currentIndex])

    return (
        <div {...elProps} className={`${calledFromHomePage === true ? `${styles.shiftSlightly}` : ""} ${elProps?.className}`} style={{ display: "grid", gap: "var(--gapSmall)", ...elProps?.style }}>
            {/* showing 4 services at a time */}
            <div className={styles.servicesCont}>
                <div className={styles.firstPetalCont}>
                    <button style={{ justifySelf: "flex-end" }}
                        onClick={() => {
                            currentIndexSet(prev => {
                                let newIndex = prev + 1
                                if (newIndex > services.length - 1) {
                                    newIndex = 0
                                }
                                return newIndex
                            })
                        }}
                    >
                        <svg style={{ width: "var(--sizeMedium)", fill: "var(--color5)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" /></svg>
                    </button>

                    <div className={styles.servicePetal}>
                        <ShowImage currentIndex={currentIndex} position={0} services={services} />
                    </div>
                </div>

                <div className={styles.servicePetal} style={{ backgroundColor: "var(--color5)" }}>
                    <h3>{currentService.title}</h3>

                    <p>{currentService.text}</p>

                    {currentService.list.length > 0 && (
                        <ul className={styles.listCont}>
                            {currentService.list.map((eachList, eachListIndex) => {
                                return (
                                    <li key={eachListIndex}>{eachList}</li>
                                )
                            })}
                        </ul>
                    )}
                </div>

                <div className={styles.servicePetal}>
                    <ShowImage currentIndex={currentIndex} position={1} services={services} />
                </div>

                <div className={styles.servicePetal}>
                    <ShowImage currentIndex={currentIndex} position={2} services={services} />
                </div>
            </div>

            <button style={{ justifySelf: "center" }} className='mainButton'>contact us</button>
        </div>
    )
}


function ShowImage({ services, currentIndex, position }: { services: service[], currentIndex: number, position: number }) {

    return (
        <>
            {services.map((eachService, eachServiceIndex) => {
                const imageSrcInPosition = eachService.images[position]

                return (
                    <Image key={eachServiceIndex} className={`${styles.bgImage} ${eachServiceIndex === currentIndex ? styles.fadeIn : ""}`} alt={`${services[currentIndex].title} image`} src={imageSrcInPosition} fill={true} sizes='(max-width 200px) 100vw,(max-width 400px) 50vw, 30vw' style={{ objectFit: "cover", zIndex: eachServiceIndex === currentIndex ? 2 : eachServiceIndex === currentIndex - 1 ? 1 : "" }} />
                )
            })}

            {/* {services[currentIndex].images.map((eachImageSrc, eachImageSrcIndex) => {
                if (eachImageSrcIndex !== position) return null

                return (
                    <Image key={eachImageSrcIndex} className={`${styles.bgImage} ${styles.fadeIn}`} alt={`${services[currentIndex].title} image`} src={eachImageSrc} fill={true} sizes='(max-width 200px) 100vw,(max-width 400px) 50vw, 30vw' style={{ objectFit: "cover" }} />
                )
            })} */}
        </>
    )
}