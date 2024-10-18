"use client"
import { useAtom } from "jotai";
import { globalFormDataJotaiGlobal } from "./globalState";

export default function Home() {
  const [globalFormDataJotai,] = useAtom(globalFormDataJotaiGlobal)

  return (
    <div>
      <h1>sections</h1>
      {globalFormDataJotai.pages.home.sectionCont.using && (
        <>
          <p>{globalFormDataJotai.pages.home.section1.value}</p>
          <p>{globalFormDataJotai.pages.home.section2.value}</p>
          <p>{globalFormDataJotai.pages.home.section3.value}</p>
        </>
      )}
    </div>
  );
}
