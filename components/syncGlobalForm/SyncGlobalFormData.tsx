"use client"
import { globalFormDataJotaiGlobal } from '@/jotai'
import { useAtom } from 'jotai'
import { useState, useEffect, useRef } from 'react'
import { globalFormDataSchema } from '@/types'

export default function SyncGlobalFormData() {
    const [globalFormDataJotai, globalFormDataJotaiSet] = useAtom(globalFormDataJotaiGlobal)
    const [heardFromServer, heardFromServerSet] = useState<boolean>(false)
    const syncLoop = useRef<NodeJS.Timeout>()

    //send template data to main website once
    useEffect(() => {
        //cancel loop if heard from main
        if (heardFromServer) {
            clearInterval(syncLoop.current)
            return
        }

        syncLoop.current = setInterval(() => {
            console.log(`$template sent sync request to main`);

            window.parent.postMessage({
                globalFormData: globalFormDataJotai,
                fromTemplate: "aaaa"
            }, "*")
        }, 1000)

        return () => {
            if (syncLoop.current) clearInterval(syncLoop.current)
        }

    }, [heardFromServer])

    //listen and display globalFormData from server
    useEffect(() => {
        function handleMessage(message: MessageEvent<unknown>) {
            try {
                //start reading data from main once data in the correct format
                const seenResponse = message.data
                const seenGlobalFormData = globalFormDataSchema.parse(seenResponse)

                //success - set heard from server
                if (!heardFromServer) {
                    heardFromServerSet(true)
                    console.log(`$template heard back from server`);
                }

                // display given globalFormData from server           
                globalFormDataJotaiSet(seenGlobalFormData)

            } catch (error) {
                console.log(`$error reading data from parent`, error);
            }
        }

        window.addEventListener("message", handleMessage)

        return () => {
            window.removeEventListener("message", handleMessage)
        }
    }, [])

    //write colors to state
    useEffect(() => {
        Object.entries(globalFormDataJotai.specificData.colors).forEach(eachColorTypeEntry => {
            const eachColorTypeObj = eachColorTypeEntry[1]

            Object.entries(eachColorTypeObj).forEach(eachColorEntry => {
                const eachColorKey = eachColorEntry[0]
                const eachColorValue = eachColorEntry[1]

                document.body.style.setProperty(`--${eachColorKey}`, eachColorValue);
            })
        })

    }, [globalFormDataJotai.specificData.colors])

    return null
}