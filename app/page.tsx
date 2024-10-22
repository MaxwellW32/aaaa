import Image from "next/image";

export default function Home() {

  return (
    <div>
      <div style={{ backgroundColor: "var(--color6)", zIndex: 0, position: "relative", display: "flex", flexWrap: "wrap", overflow: "clip", color: "var(--textColor2)", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 300px", zIndex: 1, padding: "var(--paddingLarge)", display: "grid", gap: "var(--gapSmall)" }}>
          <h1>Welcome</h1>

          <div>
            <p>to EverYoung Retirement Village</p>
            <b>&mdash; Where Every Day is a New Beginning!</b>
          </div>

          <p>At EverYoung Retirement Village, we believe life is meant to be cherished at every stage. Our vibrant, community-focused environment is designed to help you live your golden years to the fullest.</p>
        </div>

        <div style={{ flex: "1 1 600px", zIndex: 1, minHeight: "400px", position: "relative" }}>
          {/* image */}
          <Image alt="middle image" src={require("@/public/old lady.png").default.src} fill={true} style={{ objectFit: "cover", objectPosition: "bottom" }} />
        </div>

        <div style={{ flex: "1 1 300px", zIndex: 1, padding: "var(--paddingLarge)", display: "grid", gap: "var(--gapSmall)", alignItems: "flex-start" }}>
          <p>Whether you&apos;re seeking relaxation, new friendships, or exciting activities, this is the perfect place to call home.</p>

          <button className="mainButton">click here</button>
        </div>

        {/* middle color diagonal background */}
        <div style={{ position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", width: "300%", height: "100%", maxHeight: "300px", backgroundColor: "var(--color4)", rotate: "-45deg" }}>hi</div>
      </div>
      <div>second box</div>
    </div>
  );
}
