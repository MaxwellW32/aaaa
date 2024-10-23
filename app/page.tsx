import Image from "next/image";
import oldLady from "@/public/old lady.png"
import WhatAwaits from "@/components/whatAwaits/WhatAwaits";
import Services from "@/components/services/Services";
import ContactUs from "@/components/contact/ContactUs";

//build out the contact us page
//get the form working

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
          <Image alt="middle image" src={oldLady} priority={true} fill={true} style={{ objectFit: "cover", objectPosition: "bottom" }} />
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

      <section style={{ backgroundColor: "var(--color5)" }}>
        <ContactUs
          contactInfoArr={[
            {
              title: "Location",
              icon: <svg style={{ fill: "var(--color1)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>,
              texts: ["34 High Street, Blazfield Ave, FL 95403 - USA"],
            },
            {
              title: "Call Us",
              icon: <svg style={{ fill: "var(--color4" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z" /></svg>,
              texts: ["Support: + 08 645 280 947", "Inquiry: + 08 645 290 948"],
            },
            {
              title: "Email",
              icon: <svg style={{ fill: "var(--color5)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" /></svg>,
              texts: ["admin@primekidz.org", "courses@mydomain.com"],
            },
          ]}

          socials={[
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" /></svg>,
              link: ""
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>,
              link: ""
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>,
              link: ""
            },
          ]}
        />
      </section>
    </main>
  );
}
