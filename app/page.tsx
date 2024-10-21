"use client"
//replace
import { useAtom } from "jotai";
import { globalFormDataJotaiGlobal } from "@/jotai";

//focus on 3 possible types on input
//input text
//textarea text
//image
//video
//link
//number
//inputType

export default function Home() {
  const [globalFormDataJotai,] = useAtom(globalFormDataJotaiGlobal)

  return (
    <div>
      <h1>Welcome</h1>

      <div>
        <p style={{ color: "var(--color1)" }}>hola</p>
        <p style={{ color: "var(--color2)" }}>hola</p>
        <p style={{ color: "var(--color3)" }}>hola</p>
        <p style={{ color: "var(--color4)" }}>hola</p>
        <p style={{ color: "var(--color5)" }}>hola</p>
      </div>

      {globalFormDataJotai.pages.home.section1.using && (
        <>
          <p>{globalFormDataJotai.pages.home.section1.inputs.text1.value}</p>
          <p>{globalFormDataJotai.pages.home.section1.inputs.text2.value}</p>
          <p>{globalFormDataJotai.pages.home.section1.inputs.text3.value}</p>
        </>
      )}

      {globalFormDataJotai.pages.home.section2.using && (
        <>
          <p>{globalFormDataJotai.pages.home.section2.inputs.text1.value}</p>
          <p>{globalFormDataJotai.pages.home.section2.inputs.text2.value}</p>
          <p>{globalFormDataJotai.pages.home.section2.inputs.text3.value}</p>
        </>
      )}
    </div>
  );
}
