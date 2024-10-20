"use client"
//replace
import { useAtom } from "jotai";
import { globalFormDataJotaiGlobal } from "@/jotai";

export default function Home() {
  const [globalFormDataJotai,] = useAtom(globalFormDataJotaiGlobal)

  return (
    <div>
      <h1>Welcome</h1>

      {globalFormDataJotai.pages.home.section1.using && (
        <>
          <p>{globalFormDataJotai.pages.home.section1.inputs.text1.value}</p>
          <p>{globalFormDataJotai.pages.home.section1.inputs.text2.value}</p>
          <p>{globalFormDataJotai.pages.home.section1.inputs.text3.value}</p>
        </>
      )}
    </div>
  );
}
