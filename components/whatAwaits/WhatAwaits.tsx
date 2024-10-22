import Image from 'next/image'
import React from 'react'
import styles from "./style.module.css"

type features = {
    image: string,
    title: string,
    text: string
}

export default function WhatAwaits({ features }: { features: features[] }) {
    return (
        <div className={styles.featuresCont}>
            {features.map((eachFeature, eachFeatureIndex) => {
                return (
                    <div key={eachFeatureIndex} className={styles.featureCont} style={{}}>
                        <div style={{ width: "80%", justifySelf: 'center' }}>
                            <Image alt={`${eachFeature.title} image`} src={eachFeature.image} width={300} height={300} style={{ objectFit: "cover", width: "100%", aspectRatio: "1/1", borderRadius: "50%" }} />
                        </div>

                        {/* separator bar */}
                        {eachFeatureIndex !== 0 && (
                            <div style={{ height: "50%", position: "absolute", top: "50%", left: 0, translate: "0 -50%", border: "1px solid var(--shade1)" }}></div>
                        )}

                        <h3>{eachFeature.title}</h3>

                        <p style={{ textAlign: "start" }}>{eachFeature.text}</p>
                    </div>
                )
            })}
        </div>
    )
}
