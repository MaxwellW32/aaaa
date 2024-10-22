import Image from "next/image";
import oldLady from "@/public/old lady.png"
import WhatAwaits from "@/components/whatAwaits/WhatAwaits";

export default function Home() {

  return (
    <main>
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
          <Image alt="middle image" src={oldLady} fill={true} style={{ objectFit: "cover", objectPosition: "bottom" }} />
        </div>

        <div style={{ flex: "1 1 300px", zIndex: 1, padding: "var(--paddingLarge)", display: "grid", gap: "var(--gapSmall)", alignItems: "flex-start" }}>
          <p>Whether you&apos;re seeking relaxation, new friendships, or exciting activities, this is the perfect place to call home.</p>

          <button className="mainButton">click here</button>
        </div>

        {/* middle color diagonal background */}
        <div style={{ position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", width: "300%", height: "100%", maxHeight: "300px", backgroundColor: "var(--color4)", rotate: "-45deg" }}>hi</div>
      </div>

      <section style={{ textAlign: "center", gap: "2rem" }}>
        <h2 style={{ textAlign: "start" }}>What Awaits You at EverYoung</h2>

        <WhatAwaits features={[
          {
            title: "Modern Living Spaces",
            image: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            text: "Comfortable, stylish residences with all the conveniences you need.",
          },
          {
            title: "Engaging Activities",
            image: "https://media.gettyimages.com/id/1448500581/photo/portrait-of-a-senior-woman-dancing-with-her-friends-on-a-dance-hall.jpg?s=612x612&w=0&k=20&c=u3TVM56ed2ZwLu_B6X2cqDuWsuLkoOH0zJsX0p5U7J8=",
            text: "From fitness classes to art workshops, there's always something fun on the calendar.",
          },
          {
            title: "Lush Surroundings",
            image: "https://images.pexels.com/photos/29029648/pexels-photo-29029648/free-photo-of-peaceful-forest-pathway-with-wooden-benches.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            text: "Enjoy beautifully landscaped gardens, walking paths, and outdoor spaces",
          },
          {
            title: "Health & Wellness",
            image: "https://media.gettyimages.com/id/1464605292/photo/senior-black-couple-walking-off-the-tennis-court.jpg?s=612x612&w=0&k=20&c=2w7W5xfowYDxJ5garwCsJ6wRevBOmnXURyyx8sQTzGI=",
            text: "On-site healthcare professionals and wellness programs to keep you active and healthy.",
          },
        ]} />

        <p style={{ justifySelf: "flex-end", textAlign: "end" }}>At EverYoung, retirement is just the beginning of your next great adventure. Experience a lifestyle of joy, relaxation, and fulfillment—because you&apos;ve earned it!</p>
      </section>

    </main>
  );
}
