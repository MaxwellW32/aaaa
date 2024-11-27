"use client"
import Image from "next/image";
import WhatAwaits from "@/components/whatAwaits/WhatAwaits";
import Services from "@/components/services/Services";
import ContactUs from "@/components/contact/ContactUs";
import { useAtom } from "jotai";
import { globalFormDataJotaiGlobal } from "@/jotai";
export default function Home() {
  const [globalFormDataJotai,] = useAtom(globalFormDataJotaiGlobal)

  return (
    <main>
      <img src={globalFormDataJotai.linkedData.siteInfo.logo} />

      <div style={{ backgroundColor: "var(--color6)", zIndex: 0, position: "relative", display: "flex", flexWrap: "wrap", overflow: "clip", color: "var(--textColor2)", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 300px", zIndex: 1, padding: "var(--paddingLarge)", display: "grid", gap: "var(--gapSmall)" }}>
          <h1>Welcome</h1>

          <div>
            <p>to EverYoung Retirement Village</p>
            <b>&mdash; Where Every Day is a New Beginning!</b>
          </div>

          <p>At EverYoung Retirement Village, we believe life is meant to be cherished at every stage. Our vibrant, community-focused environment is designed to help you live your golden years to the fullest.</p>
        </div>

        {globalFormDataJotai.specificData.pages.home.section1.fieldType === "section" && globalFormDataJotai.specificData.pages.home.section1.inputs.image1.fieldType === "image" && (
          <div style={{ flex: "1 1 600px", zIndex: 1, minHeight: "400px", position: "relative" }}>
            <Image alt={globalFormDataJotai.specificData.pages.home.section1.inputs.image1.alt} src={globalFormDataJotai.specificData.pages.home.section1.inputs.image1.value} priority={true} fill={true} style={{ objectFit: "cover", objectPosition: "bottom" }} />
          </div>
        )}

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

      <section>
        <div style={{ display: "flex", flexWrap: "wrap", width: "min(900px, 100%)", justifySelf: "center", gap: "var(--gapSmall)" }}>
          <div style={{ flex: "1 1 300px", display: "grid", alignContent: "flex-start", gap: "1rem" }}>
            <h2>our services</h2>

            <p style={{ color: "var(--color1)" }}>Relaxation, new friendships, or exciting activities—at EverYoung Retirement Village, we offer a diverse range of services to ensure your retirement years are enriching, stress-free, and full of joy. Whether you prefer a peaceful morning in the garden or an active day with friends, there&apos;s something here for everyone.</p>
          </div>

          <Services style={{ flex: "0 1 700px", marginLeft: "auto" }} calledFromHomePage={true}
            services={[
              {
                title: "Comfortable Living Spaces",
                text: "Enjoy thoughtfully designed homes and apartments tailored to your comfort. With modern amenities, safety features, and maintenance-free living, you can focus on what matters most—enjoying life.",
                list: [
                  "Housekeeping and laundry services",
                  "24/7 maintenance support",
                  "Personalized décor and furnishing options",
                ],
                images: [
                  "https://images.pexels.com/photos/18946626/pexels-photo-18946626/free-photo-of-chairs-and-table-on-terrace-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  "https://images.pexels.com/photos/279652/pexels-photo-279652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/7587884/pexels-photo-7587884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]
              },
              {
                title: "Health & Wellness Programs",
                text: "Your well-being is our priority. We provide comprehensive health services and promote a culture of fitness and self-care to help you stay vibrant.",
                list: [
                  "On-site medical support and wellness checks",
                  "Fitness classes: yoga, aqua aerobics, and strength training",
                  "Nutritional advice and meal planning",
                ],
                images: ["https://www.shutterstock.com/image-photo/senior-fitness-exercise-black-man-600nw-2226973601.jpg",
                  "https://media.istockphoto.com/id/1308292203/photo/multiracial-women-doing-yoga-exercise-with-social-distance-for-coronavirus-outbreak-at-park.jpg?s=612x612&w=0&k=20&c=XpzMUDZQkHhKcz6x4HPItZpQvaTRP8WeilBqL9z5q_0=", "https://media.istockphoto.com/id/1980166648/photo/two-women-friends-doing-exercises-together-senior-and-mature.jpg?s=612x612&w=0&k=20&c=LEZlb8x-MMPlSoLkOyC6WwncdThxUSkTeir5hgAxHRc="]
              },
              {
                title: "Social Activities, Day Trips & Events",
                text: "Stay active and social with our variety of recreational programs designed to engage your mind and spirit. There's always something exciting to look forward to!",
                list: [
                  "Movie nights, book clubs, and cultural excursions",
                  "Holiday celebrations, themed dinners, and live entertainment",
                  "Craft workshops, gardening clubs, and group hobbies",
                ],
                images: ["https://media.gettyimages.com/id/1146820755/photo/cheerful-multi-ethnic-spectators-watching-movie-in-cinema-hall-at-theater.jpg?s=612x612&w=0&k=20&c=xZKdQk4iJQDmZadUSJERa4zKC3wNaSrdTezX8zhBHO0=", "https://thumbs.dreamstime.com/b/senior-african-american-woman-biracial-share-moment-over-smartphone-home-indoors-engaged-joyful-interaction-309471820.jpg", "https://tailoredhomecareinc.com/wp-content/uploads/2021/02/2-1.webp"]
              },
              {
                title: "Dining & Culinary Experiences",
                text: "Our chefs prepare fresh, nutritious meals with options to meet all dietary needs. Enjoy gourmet dining in the community restaurant or savor your meals in the comfort of your home.",
                list: [
                  "Rotating seasonal menus",
                  "Farm-to-table ingredients and dietary customization",
                  "Coffee lounges and snack bars for casual meetups"
                ],
                images: ["https://media.istockphoto.com/id/144229726/photo/vegetable-dumpling-with-saltfish.jpg?s=612x612&w=0&k=20&c=FAd7A4FfUFhjJM5-Ue70ONW9Zcc6Tsrwk-sVi-dItLw=", "https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
              },
              {
                title: "Outdoor & Leisure Amenities",
                text: "Soak up the beauty of our lush surroundings, designed for peaceful reflection or invigorating activities.  Our facilities include landscaped gardens, walking paths, and outdoor seating areas; Swimming pool, tennis courts, and putting green.",
                list: [],
                images: ["https://media.istockphoto.com/id/473954724/photo/a-footpath-through-a-forest-with-sunshine.jpg?s=612x612&w=0&k=20&c=8qwS_lHOZx-IlXf_uwjkye8B5OwLJHyJ_SgSx4ERcrc=", "https://images.pexels.com/photos/235721/pexels-photo-235721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://media.istockphoto.com/id/514317838/photo/senior-african-american-man-fishing-by-lake.jpg?s=612x612&w=0&k=20&c=bwOlBtfQCg_jzbOh_Hv2FQ9Ytkr9ZSVwPvAkTZ-2dT4="]
              },
              {
                title: "24/7 Safety & Security",
                text: "Your safety and peace of mind are essential to us. Our team is dedicated to ensuring a secure, worry-free environment.",
                list: [],
                images: ["https://media.istockphoto.com/id/1385099952/photo/portrait-of-a-daughter-holding-her-elderly-father.jpg?s=612x612&w=0&k=20&c=-oMhX1htNbES4LOPK55GdAITyGKLXNxTDz6X2Si49nU=", "https://media.istockphoto.com/id/1353791388/photo/portrait-of-mature-businessman-wearing-phone-headset-talking-to-caller-in-customer-services.jpg?s=612x612&w=0&k=20&c=rHLQEhh8GSbreAkSd4DNliUMWCuyZMcAZgOw3gwofKs=", "https://media.istockphoto.com/id/847846826/photo/security-guard-standing-arms-crossed.jpg?s=612x612&w=0&k=20&c=LU2KMXRpHMM6zhyHR3MKfPQaGBvJyxfigpR0S4JNFo0="]
              },
              {
                title: "Concierge & Transportation Services",
                text: "We make daily life easier by taking care of the details so you can enjoy the things you love.",
                list: [
                  "Scheduled transportation for shopping, medical appointments, and outings",
                  "Personal concierge services for errands and reservations",
                  "Assistance with technology and personal devices",
                ],
                images: ["https://media.istockphoto.com/id/1227276520/photo/close-up-of-someone-hand-trying-to-call-hotel-reception-by-ringing-front-desk-bell.jpg?s=612x612&w=0&k=20&c=bZrd3DCat33ggTebrzVCiag2LZ64GUQOFW0aRtwPE0o=", "https://media.istockphoto.com/id/1197014116/photo/travel-company-bus.jpg?s=612x612&w=0&k=20&c=IuJZJW5QbNpzToIOnZ0rY4hLQ-F4GIc-iechEQlf_Wc=", "https://media.istockphoto.com/id/1060253386/photo/seniors-reading-medicine-bottle-labels-in-pharmacy-or-supermarket.jpg?s=612x612&w=0&k=20&c=Xu5FJaE2KdQueni6dHmIqsRcJMQEV7UYHwaBfQ60C2A="]
              },
            ]}
          />
        </div>
      </section>

      {globalFormDataJotai.specificData.pages.home.section2.fieldType === "contactComponent" && globalFormDataJotai.specificData.pages.home.section2.using && (
        <section style={{ backgroundColor: "var(--color5)" }}>
          <ContactUs contacts={globalFormDataJotai.specificData.pages.home.section2.component} />
        </section>
      )}
    </main>
  );
}
