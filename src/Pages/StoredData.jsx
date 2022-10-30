import React, { useState, createContext } from "react";

export const store = createContext();

const StoredData = (props) => {
    const [data, setData] = useState([
        {
            id: 1,
            title: "Ponniyin Selvan ",
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjm1cCoyIUH9h4_LDDMTbnIKLaOYK8zRWgJraKXN5A9Bxguipw",
            category: "Kollywood",
            descriptionSmall: "The story revolves around Vandiyathevan, a charming, brave and brilliant young man who sets out across the Chola land",
            description: "The story revolves around Vandiyathevan, a charming, brave and brilliant young man who sets out across the Chola land to deliver a message from the Crown Prince Adithya Karikalan to the King and the Princess. The story shuttles between Vandiyathevan's travels in Chola country and the young Prince Arulmozhivarman's (later known as Raja Raja Chola) travels in Sri Lanka. The narrative deals with attempts by his sister Kundavai to bring back Arulmozhivarman to establish political peace in a land seemingly beset with unrest and civil war plotted by vassals and petty chieftains."
        },
        {
            id: 2,
            title: "Thalapathy Vijay's 'Varisu'",
            image: 'https://igimages.gumlet.io/tamil/home/varisu-update2092022m.jpg?w=700&dpr=1.0',
            category: "Kollywood",
            descriptionSmall:"Varisu' is Thalapathy Vijay's upcoming film with Telugu director Vamshi Paidipally. Starring Vijay and Rashmika Mandanna as the lead",
            description: " 'Varisu' is Thalapathy Vijay's upcoming film with Telugu director Vamshi Paidipally. Starring Vijay and Rashmika Mandanna as the lead, the team is shooting for the movie in the locales of Chennai, Hyderabad and Vizag. The film is slated to hit the screens worldwide on Pongal 2023.As per the sources, the latest update is that the makers have planned the 'Varisu' shooting till October 10. A song sequence and a family drama portion are yet to be filmed in Chennai. Reportedly, the entire shooting will be wrapped up after these portions. As we reported earlier, the first single from 'Varisu' will be released on Diwali."
        },
        {
            id: 3,
            title: "'Indian 2' update",
            image: "https://igimages.gumlet.io/tamil/home/kamal200922_2.jpg?w=700&dpr=1.4",
            category: "Kollywood",
            descriptionSmall:"Kamal Haasan's 'Indian 2' directed by Shankar which went on floors several months back was halted midway due to various issues including the pandemic.",
            description: `Kamal Haasan's 'Indian 2' directed by Shankar which went on floors several months back was halted midway due to various issues including the pandemic. There was also creative differences between producer Lyca and the director. However recently Udhayanidhi Stalin boarded the project as a coproducer and all issues were sorted out.Shankar resumed 'Indian 2' a month back and shot portions that did not involve Kamal who was in the US at that time. Today (September 20th) the legendary actor has joined the sets built in the Prasad Lab complex in Chennai. He is in a clean shaven look that is in complete contrast as to the fully bearded 'Vikram' look that fans have been used to for the past year or so. The Ulaganayagan is sporting a thick moustache indicating that the current schedule will be a flash back involving the younger Senapathi as the nonagenarian 'Indian thaathaa' will be without any facial hair. The pic was captured at an event on Monday and is seen along with Y. Gee Mahendraa, Napolean and ARS.`
        },
        {
            id: 4,
            title: "Mani Rathnam reveals !",
            image: "https://igimages.gumlet.io/tamil/home/maniratnam20092022m2.jpg?w=700&dpr=1.0",
            category: "Kollywood",
            descriptionSmall:"We already know that Ponniyin Selvanis Mani Rathnam's dream project. While many veteran actors including, MGR, Rajini and Kamal tried to make it into a movie",
            description: "We already know that Ponniyin Selvanis Mani Rathnam's dream project. While many veteran actors including, MGR, Rajini and Kamal tried to make it into a movie, it is only Mani Rathnam who has now brought this dream to life.Mani Rathnam earlier in the year 2011 planned to make Ponniyin Selvan into a movie and also had his dream cast ready. But the movie did not materialise and was dropped mid-way. In the audio launch function, Rajini also revealed that Mani did not cast him in the movie in spite of him requesting a role for him to play.Mani who just gave a smile at that time has now revealed the real reason for not casting Rajinikanth in the movie. Mani said that 'If Rajinikanth had to be cast, the story has t be modified according to his star status. or I will receive backlash from his fans, If I do so I will be getting counterblast from Kalki fans. Keeping this in mind I decided not to cast Rajinikanth in this movie."
        },
        {
            id: 5,
            title: "Dhanush's 'Captain Miller'",
            image: "https://igimages.gumlet.io/tamil/home/dhanush-captainmiller-2092022.jpg?w=700&dpr=1.0",
            category: "Kollywood",
            descriptionSmall:"Dhanush, hailed as one of the best actors of the current generation is giving his fans a variety fare this year",
            description: "Dhanush, hailed as one of the best actors of the current generation is giving his fans a variety fare this year. Earlier 'Thiruchitrambalam' costarring Nithya Menen released with low expectations but went on to become a monster hit. Next in line are Selvaraghavan's 'Naane Varuven' on September 29th and Venky Atluri's Telugu/Tamil bilingual 'Vaathi' on December 2nd.Dhanush has now moved on to his mega budget period film 'Captain Miller' directed by Arun Matheshwaran with GVP's music and produced by Sathyajyothi Films. Interesting casting is happening in the ambitious project with Sundeep Kishan and Priyanka Arul Mohan on board."
        },
        {
            id: 6,
            title: "‘Suriya 42’ filming!",
            image: "https://igimages.gumlet.io/tamil/home/suriyasiva150922_4.jpg?w=700&dpr=1.0",
            category: "Kollywood",
            descriptionSmall:"Suriya is currently working with director Siruthai Siva on their upcoming project tentatively titled 'Suriya 42'",
            description: "Suriya is currently working with director Siruthai Siva on their upcoming project tentatively titled 'Suriya 42'. The team started the shooting on August 21 and wrapped up the first schedule in Chennai. There were reports that Suriya will be portraying more than 3 roles for the first time.As per sources, the latest information is that the 'Suriya 42' second schedule will begin tomorrow in Goa and go on for around 45 days. The film's female lead Disha Patani will also join Suriya in the filming in this leg. Reportedly, a grand fight sequence involving more than 200 stunt artists will be shot in this new schedule."
        },
        {
            id: 7,
            title: "Thani Oruvan 2 update",
            image: "https://igimages.gumlet.io/tamil/home/ravi190922_1.jpg?w=700&dpr=1.0",
            category: "Kollywood",
            descriptionSmall:"Jayam Ravi is gearing up for the release of his upcoming film Ponniyin Selvan directed by Mani Rathnam.",
            description: "Jayam Ravi is gearing up for the release of his upcoming film Ponniyin Selvan directed by Mani Rathnam. This epic is expected to be one of the greatest movies Jayam Ravi has ever acted. Now as the actor is busy promoting the film, he has also given a huge update on Thani Oruvan 2.Speaking at the promotion Ravi said, My brother, Mohan Raja asked me what next after Ponniyin Selvan. So I asked him to direct Thani Oruvan 2. I asked Mani, sir, about this and he told me I would do something great after PS. However, I don't know if I can make a film like Ponniyin Selvan but I am confident that I will be able to do better in whatever I do next with the experiences I have gained from this film."
        },
        {
            id: 8,
            title: "Vetrimaaran's 'Viduthalai'",
            image: "https://igimages.gumlet.io/tamil/home/viduthalai1992022m.jpg?w=700&dpr=1.0",
            category: "Kollywood",
            descriptionSmall:"Vetrimaaran is one of the most successful directors in Indian cinema. We all know that he is currently busy with Soori and Vijay Sethupathi",
            description: "Vetrimaaran is one of the most successful directors in Indian cinema. We all know that he is currently busy with Soori and Vijay Sethupathi starrer 'Viduthalai'. Today, Vijay Sethupathi took to his social media page to share a massive update on the film's progress.The team was recently shooting an intense stunt sequence in Kodaikanal. The action sequence choreographed by Peter Hein was being shot at Poombarai in Kodaikanal on a grand scale and the latest is that the Kodaikanal schedule of shooting has been wrapped up. VJS shared pictures with the crew from the sets this morning to update the same."
        },
        {
            id: 9,
            title: "Simbu's promise to Cool Suresh",
            image: "https://igimages.gumlet.io/tamil/home/str-coolsuresh1992022m.jpg?w=700&dpr=1.0",
            category: "Kollywood",
            descriptionSmall:"Following the huge success of Venkat Prabhu's 'Maanaadu', Simbu has delivered another blockbuster hit 'Vendhu Thanindhadhu Kaadu' directed by Gautham Vasudev Menon.",
            description: "Following the huge success of Venkat Prabhu's 'Maanaadu', Simbu has delivered another blockbuster hit 'Vendhu Thanindhadhu Kaadu' directed by Gautham Vasudev Menon. The gangster saga written by Jeyamohan with music by A.R. Rahman has collected over rupees fifty crores in its four days run at the box office.Meanwhile comedy actor Cool Suresh a hardcore fan of Simbu has been promoting 'Vendhu Thanindhadhu Kaadu' on the first day first shows of all big star movies ever since the title was announced. Suresh who makes it to important theaters is usually surrounded by microphone wielding journos who ask his opinion and he replies by using the 'VTK' title to rhyme with his one sentence review of that pariticular film."
        },
        {
            id: 10,
            title: "Simbu's Vendu Thanindadhu Kaadu",
            image: "https://igimages.gumlet.io/tamil/home/vtk-review159222m3.jpg?w=700&dpr=1.0",
            category: "Kollywood",
            descriptionSmall:"Simbu’s ‘Vendhu Thanindhathu Kaadu’ was released in theatres on September 15 and the film has been receiving a lot of positive reviews.",
            description: "Simbu’s ‘Vendhu Thanindhathu Kaadu’ was released in theatres on September 15 and the film has been receiving a lot of positive reviews. The film has opened with huge box office numbers and it is expected to increase at the weekends.The film officially made an earning of Rs 10.86 crore on day 1 opening and on day 2, Friday and the film made a box office collection of Rs 8 crore excluding early morning collections..The movie is now strongly entering the weekend and it is expected that the movie will reportedly be making more than Rs 50 crore in the first week of its release."
        },
        {
            id: 11,
            title: "WinZo against Google Play Store policy",
            image: "https://img.etimg.com/thumb/msid-94322321,width-650,imgsize-7134,,resizemode-4,quality-100/google-play-store.jpg",
            category: "Technology",
            descriptionSmall:"egional language social gaming platform WinZo has sought an injunction against Google’s decision to permit daily fantasy sports (DFS)",
            description: "Regional language social gaming platform WinZo has sought an injunction against Google’s decision to permit daily fantasy sports (DFS) and rummy in a pilot project on its Play Store.The policy excludes a large sector of real-money games that have been classified as games of skill, making it unfair and restrictive, Saumya Singh Rathore, co-founder of WinZo, told ET.Real-money games are ones that charge an entry fee from players, unlike casual games that primarily depend on advertising revenue."
        },
        {
            id: 12,
            title: "COVID-19 Breathalyzer Test",
            image: "https://www.makodesign.com/wp-content/uploads/2022/03/Freedom.png",
            category: "Technology",
            descriptionSmall:"As mentioned above, health and safety products lead the new technology invention 2022 trends. A breathalyzer invented by Opteev",
            description: `As mentioned above, health and safety products lead the new technology invention 2022 trends. A breathalyzer invented by Opteev, a Baltimore-based medical company, the ViraWarn Freedom is a medical-grade handheld breath analyzer that detects COVID-19, its variants, and other viruses such as the flu.

            It only takes five seconds for the Freedom to provide an accurate reading as well.
            
            With the ability to get readings on the fly, people have the peace of mind to safely attend events, dine in restaurants, and do other activities.
            
            Portable enough to use easily in classrooms, theaters, and other places, the device will help increase safety measures in indoor settings.
            
            The ViraWarn Freedom also boasts 100 percent accurate readings of COVID-19.
            
            This has been verified by George Mason University, one of 21 21 National Institute of Allergy and Infectious Diseases certified labs. In fact, GMU is only one of the labs in the US that can aerosolize COVID-19 and test it.
            
            They tested the Freedom using different viral loads and found that the device was able to detect COVID-19 with perfect accuracy.`
        },
        {
            id: 13,
            title: "Humanoid Robot",
            image: "https://www.makodesign.com/wp-content/uploads/2022/03/Robot.png",
            category: "Technology",
            descriptionSmall:"If you think the AI robot servers were cool, wait until you see what new technology invention Engineered Arts has to offer.",
            description: `If you think the AI robot servers were cool, wait until you see what new technology invention Engineered Arts has to offer.

            Life-like yet uncanny, the design of their robot, Ameca, was partially inspired by the grey, humanoid machines we see in pop culture such as movies like I, Robot.
            
            Indeed, in an interview with CNET, Ameca’s Director of Operations explained that they purposely designed the robot to look more like a robot than a human.
            
            Pictures don’t really do it justice; you need to see it in action for the full experience.
            
            From the wide deliberate motions of the arms to the human-like facial expressions to the subtle twitches of the eyes, you’ll be blown away by the smooth fluid motions.
            
            But don’t expect them to run and leap like Boston Dynamic’s robots anytime soon though.
            
            Currently, the Ameca is designed to be used to interact with people organically for customer service, information terminals, or even for entertainment.`
        },
        {
            id: 14,
            title: "Foldable Tech Devices",
            image: "https://www.makodesign.com/wp-content/uploads/2022/03/ASUS.png",
            category: "Technology",
            descriptionSmall:"Samsung entered this realm recently with their popular Galaxy smartphone line of folding new technology inventions.",
            description: `Samsung entered this realm recently with their popular Galaxy smartphone line of folding new technology inventions.

            At CES 2022, we witnessed ASUS enter the fray with the introduction of the Zenbook 17 Fold.
            
            Featuring a huge 17.3-inch screen, the versatile screen functions as a laptop, tablet, book or even a PC.
            
            Indeed, users may attach a Bluetooth keyboard and touchpad to the bottom half, and the Zenbook transforms into a fully functional laptop. Or simply fold it in half to use the virtual on-screen keyboard.
            
            Fold it in half, and the size shrinks down to just 12.5 inches. Compact enough to carry easily in your arms, backpack, or messenger bag.
            
            It also comes equipped with all the bells and whistles including an OLED screen, HDR, Dolby Atmos, and much more.`
        },
        {
            id: 15,
            title: "Color Changing Cars",
            image: "https://www.makodesign.com/wp-content/uploads/2022/03/BMW.png",
            category: "Technology",
            descriptionSmall:"BMW recently showcased a concept car dubbed the iX Flow. And this new technology invention is an absolute gamechanger.",
            description: `BMW recently showcased a concept car dubbed the iX Flow. And this new technology invention is an absolute gamechanger.

            For those who can’t stick with just one color for their next car, the iX Flow was made for you.
            
            With a single press of a button, users can switch the color of their car from white to black or vice versa, instantly.
            
            How does it work? On the exterior, you’ll find electrophoretic film all around the body containing tiny microcapsules. Depending on a positive or negative charge, these microcapsules turn white or black. BMW calls this technology E Ink.
            
            For the first time, users have the option to change the color of their car depending on their mood or surroundings for the option to personalize their car effortlessly.`
        },
        {
            id: 16,
            title: "Digital Twins",
            image: "https://www.makodesign.com/wp-content/uploads/2022/03/Digital-Twins.png",
            category: "Technology",
            descriptionSmall:"A digital twin is a virtual model that’s a twin of a physical object in the real world.",
            description: `A digital twin is a virtual model that’s a twin of a physical object in the real world.

            If this sounds familiar, it’s because MAKO Design does a very similar thing using Computer-Aided Design (CAD) technologies. Before MAKO helps build a physical product, whether it’s via product prototyping or manufacturing, we build a digital replica of the product called the CAD to simulate how the product will function in real life.
            
            A digital twin, however, is built for full real-time simulation purposes.
            
            IBM provides a great example. A wind turbine equipped with sensors relays important data about energy output, temperature, weather conditions, and other data to the digital twin. What separates digital twins from other simulations is that users can run multiple simulations with great precision. In addition, this new data and insights from these simulations can be relayed back immediately back to the wind turbine.
            
            As you can imagine, this new technology invention opens up huge opportunities. Using digital twins, we can find improvements for both products and processes alike.`
        },
        {
            id: 17,
            title: "Health Body Scans",
            image: "https://www.makodesign.com/wp-content/uploads/2022/03/Scale.png",
            category: "Technology",
            descriptionSmall:"What if you could learn more about your health simply by stepping on a scale.",
            description: `What if you could learn more about your health simply by stepping on a scale.

            A scale that not only provides precise weight readings, but also muscle mass, heart health, vascular age.
            
            Enter the Withings Body Scan.
            
            Although this new technology invention currently going through clinical and regulatory tests, there’s no doubt this product is a groundbreaking innovation when it’s finally released publicly.
            
            While the Body Scan looks like a typical scale it, in fact, comes with a retractable handle at the front to provide incredibly accurate body composition information.
            
            By using the handle, users can get accurate measurements of the fat and muscle mass of their torso, arms, and legs. And the Body Scan will also tell you if your readings are below or above average.
            
            In addition, users can get insights into their vascular age and cardiovascular health. The scale itself can also provide readings of small nerve activity in the feet. 
            
            Users can track all their health metrics and even receive personalized health plans based on the results through the Withings app.`
        },
        {
            id: 18,
            title: "Smart Bathing",
            image: "https://www.makodesign.com/wp-content/uploads/2022/03/Tub.png",
            category: "Technology",
            descriptionSmall:"New technology inventions and convenience often go hand in hand.",
            description: `New technology inventions and convenience often go hand in hand.

            Our work is a testament to how true that is. Take our client’s Packhopper, for example. The Packhopper combines the typically clunky tennis ball hopper and ball mower into a brilliantly simple tennis bag. The convenience and user experience wowed the design community and, as a result, MAKO took a number of the most prestigious design awards including the Red Dot, Indigo, LICC, and others.
            
            Kohler aims to leverage IoT and smart home technologies to conveniently provide users with the perfect bathing experience. Their PerfectFill is a smart bath where users can control the exact temperature of the water, light, fog, color, how much to fill, and even when to drain.
            
            Control it all with voice commands or a touch of your smartphone – bring the spa experience home.
            
            `
        },
        {
            id: 19,
            title: "Solar Roof Shingles",
            image: "https://www.makodesign.com/wp-content/uploads/2022/03/Solar.png",
            category: "Technology",
            descriptionSmall:"If you’ve ever wanted to install solar panels but were put off by the look of the bulky space-like panels, this new technology invention is for you.",
            description: `If you’ve ever wanted to install solar panels but were put off by the look of the bulky space-like panels, this new technology invention is for you.

            GAF Energy is coming out with a solar shingle called the Timberline Solar that you can install like a normal roof.
            
            Equally beautifully and strong, homeowners will enjoy the benefits of clean energy and the peace of mind of durable and waterproof shingles that withstand harsh weather conditions.
            
            All you need is a nailgun and the Timberline Solar can be installed like any other shingle.
            
            Typically, installing solar panels is a two-step process. First, the roof must be installed. Then the solar panels are installed. GAF Energy hopes to help cut costs for homeowners by combining these two things in a single product.`
        },
        {
            id: 20,
            title: "Flying Vehicles",
            image: "https://www.makodesign.com/wp-content/uploads/2022/03/Drone.png",
            category: "Technology",
            descriptionSmall:"Before you ask about traffic infrastructure and regulations, just imagine how cool it would be to drive a personal flying vehicle.",
            description: `Before you ask about traffic infrastructure and regulations, just imagine how cool it would be to drive a personal flying vehicle.

            Ultra-quiet, safe, emission-free, and compact, SkyDrive’s personal flying vehicle looks like a new technology invention from the future.
            
            Currently in the prototyping phase, the purpose of the SkyDrive is to help transport yourself, others, or goods quickly and efficiently. It can take off, fly and land without a runway autonomously or with a pilot. And with a maximum load of 500 kg, flying altitude of 500 meters, and a speed of 100 km/h, there are an endless number of use cases for a flying vehicle of this size.
            
            From rapid emergency response to day-to-day deliveries, SkyDrive leverages airspace to get goods and people to their destinations faster than ever before.
            
            Plus think of the surge in popularity of ride-sharing apps and on-demand car rental services like Zipcar. SkyDrive is the next evolution of convenient and affordable travel.
            
            At CES 2022, SkyDrive showcased a prototype model, the SD-03, and how they intend to use the SkyDrive as an air taxi. Their goal is to have the next iteration, the SD-05, ready in time to do just that for the 2025 World Expo.`
        },
        {
            id: 21,
            title: `Technology In Avatar`,
            image: "https://c.ndtvimg.com/2022-09/r5cd682g_avatar_625x300_19_September_22.jpg",
            category: "Hollywood",
            descriptionSmall:"Actor Sam Worthington says he was skeptical about surrendering to director James Cameron's vision of Avatar.",
            description: `Actor Sam Worthington says he was skeptical about surrendering to director James Cameron's vision of Avatar, which would rely heavily on the motion capture technology to create characters in the 2009 epic sci-fi film. In Avatar, Worthington starred as Jake Sully, a paraplegic US Marine who is transported to the fictional moon of Pandora on a unique mission but becomes torn between following his orders and protecting the world he feels is his home.
            Besides being a social commentary on the environment, the film also introduced cinephiles to unforgettable visuals through special effects. It also starred Zoe Saldana, Sigourney Weaver, Stephen Lang and Michelle Rodriguez.
            
            Cameron had described the motion capture technology as "the next level of makeup", recalled Worthington.`
        },
        {
            id: 22,
            title: "Sony Announces New Karate Kid Film",
            image: "https://c.ndtvimg.com/2022-09/ct74rifg_cobra_625x300_17_September_22.jpg",
            category: "Hollywood",
            descriptionSmall:"Los Angeles: Hollywood studio Sony has announced a new Karate Kid movie and dated it for June 7, 2024 release in the US.",
            description: `Los Angeles: Hollywood studio Sony has announced a new Karate Kid movie and dated it for June 7, 2024 release in the US. According to entertainment news website The Hollywood Reporter, the new movie is dubbed as "the return to the original Karate Kid franchise". No cast and director is attached to the project, which comes from Sony's Columbia Pictures banner. The film series was launched in 1984 with The Karate Kid, starring Ralph Macchio and William Zabka in the lead roles.
            It was followed by The Karate Kid Part II (1986), The Karate Kid Part III (1989), and The Next Karate Kid (1994).
            
            In 2010, the film series was rebooted with The Karate Kid, starring Jackie Chan and Jaden Smith.`
        },
        {
            id: 23,
            title: "Blake Lively And Ryan Reynolds Are Expecting Fourth Child",
            image: "https://c.ndtvimg.com/2022-09/g1mv45jg_blake_625x300_16_September_22.jpg",
            category: "Hollywood",
            descriptionSmall:"Washington: Ryan Reynolds and Blake Lively, who are doting parents to three daughters, are all set to embrace parenthood for the fourth time.",
            description: `Washington: Ryan Reynolds and Blake Lively, who are doting parents to three daughters, are all set to embrace parenthood for the fourth time. On September 15, Blake debuted her baby bump during an appearance at the Forbes Power Women's Summit, E! News reported. "I just like to create. Whether that's baking or storytelling or businesses or humans, I just really like creating," Blake quipped at the event. The Gossip Girl actress arrived dressed in a golden sequin dress and proudly flaunted her baby bump.
            Ryan and Blake tied the knot in 2012. keep their daughters out of the public eye, but that hasn't stopped them from gushing over their family life together.
            
            "Having children for me made me feel so much more in my skin," Blake told Forbes in May.
            
            "I never felt more myself or at ease in my own body or more confident--not to say that there aren't a bevy of insecurities coming at me a million times a day, but I just feel incredibly settled."`
        },
        {
            id: 24,
            title: "The Crown Producers Resume Shoot Days After Queen's Death",
            image: "https://c.ndtvimg.com/2022-09/5bpnfk58_the-crown_625x300_14_September_22.jpg",
            category: "Hollywood",
            descriptionSmall:"Los Angeles: The Crownteam has resumed shooting after the short break they took post Queen Elizabeth II's death.",
            description: `Los Angeles: The Crownteam has resumed shooting after the short break they took post Queen Elizabeth II's death. The creator of the Netflix series, Peter Morgan, had earlier told Deadline that filming would cease "out of respect" for Her Majesty following the queen's passing on Thursday. However, the team is now back from their short break. CNN quoted the producers of the show earlier who said, "As a mark of respect, filming on 'The Crown' was suspended today. Filming will also be suspended on the day of Her Majesty The Queen's funeral".
            New York Post now reports that the actor who is portraying Princess Diana in the show - Elizabeth Debicki, has returned to the filming sets in Barcelona.
            
            According to New York Post, Debicki was filming the late princess's trip to the Bosnian capital of Sarajevo to support the Landmine Survivors Network, which was one of her last public appearances.
            
            The actress was spotted replicating Princess Di's attire during her trip to Bosnia by donning a light pink button-up shirt and black pants. In keeping with how Diana interacts with those who lost loved ones to land mines in the show, she also carried a bouquet of flowers.`
        },
        {
            id: 25,
            title: `James Cameron On Avatar`,
            image: "https://c.ndtvimg.com/2022-09/i3tguic8_avatar_625x300_13_September_22.jpg",
            category: "Hollywood",
            descriptionSmall:"Visionary filmmaker James Cameron says his popular film Avatar resonated with people across cultures as it combined the themes of nature and environment with the science fiction genre.",
            description: ` Visionary filmmaker James Cameron says his popular film Avatar resonated with people across cultures as it combined the themes of nature and environment with the science fiction genre. The multiple Oscar-winner is bringing back the 2009 blockbuster movie, starring Sam Worthington, Zoe Saldana, Sigourney Weaver and Stephen Lang, to the theatres for another run. According to Cameron, Avatar reminded the audience about their innate love for nature and the beauty around us. "I think people found a universal human experience that they could relate to. And there's one other thing, which is, when we were kids, we just innately loved nature, animals, we loved being out in nature. As our lives progress, we become more and more away from nature," Cameron said during a virtual press conference, also attended by PTI, on Monday night.
            He added, "And society at large anywhere in the world is suffering from nature deficit disorder of some kind. This movie puts us back into that childlike wonder about nature, about nature's grandeur and complexity and beauty."
            
            Set in the year 2154, Avatar explored how humans establish a colony on a fictional moon called Pandora, populated by lush green forests, huge beasts and its native community Na'vi.
            
            The film focuses on Jake, a paraplegic US Marine dispatched who is transported to Pandora on a unique mission but becomes torn between following his orders and protecting the world he feels is his home`
        },
        {
            id: 26,
            title: "Emmys 2022: Zendaya Wins Best Actress For Euphoria - Again",
            image: "https://c.ndtvimg.com/2022-09/2mte0spo_ze_625x300_13_September_22.jpg",
            category: "Hollywood",
            descriptionSmall:"Zendaya has won yet another Emmy for her performance in the celebrated series 'Euphoria'! On Tuesday",
            description: `Zendaya has won yet another Emmy for her performance in the celebrated series 'Euphoria'!
            On Tuesday, Zendaya bagged the Emmy award for 'Lead Actress in a Drama' for her portrayal of Rue Benett in Euphoria. This is Zendaya's second Emmy award. She won her first in 2020 for Euphoria.
            
            Zendaya has a total of four Emmy nominations this year.
            
            Apart from 'Lead Actress in a Drama series', she is nominated for her work as an executive producer on the second season of 'Euphoria' and two Outstanding Original Music and Lyrics nominations for the songs 'Elliot's Song' and 'I'm Tired', both featured on 'Euphoria' season two, which is nominated Outstanding Drama category.`
        },
        {
            id: 27,
            title: "Oscar-Winning Deaf Actor Marlee Matlin Becomes Academy Governor",
            image: "https://c.ndtvimg.com/2022-06/qakr8f5_marlee-matlin_625x300_23_June_22.jpg",
            category: "Hollywood",
            descriptionSmall:"Oscar-winning deaf actor Marlee Matlin, who appeared in this year's Best Picture winner CODA, has been elected to the Academy's board of governors, the organization said Wednesday.",
            description: `Oscar-winning deaf actor Marlee Matlin, who appeared in this year's Best Picture winner CODA, has been elected to the Academy's board of governors, the organization said Wednesday. The Academy of Motion Picture Arts and Sciences, the body that awards the annual Oscars, said Matlin was part of a new slate of governors who will take office for the 2022-23 season. Governors are drawn from 17 branches of filmmakers, including actors such as Matlin, as well as directors, producers, editors and visual effects crew. They oversee the work of the Academy.
            Other notable members of the Academy's board of governors include Steven Spielberg and Selma director Ava Duvernay.
            
            Matlin takes over the vacancy in the actors' branch left by Laura Dern (Marriage Story), joining Whoopi Goldberg (Ghost, The Color Purple) and Rita Wilson (Sleepless In Seattle).
            
            Matlin, who became the first deaf actor to win an Oscar for her turn in Children of a Lesser God, was hailed this year for her role as a slightly eccentric, but vulnerable mother in "CODA.`
        },
        {
            id: 28,
            title: `Brad Pitt Is On The "Last Leg" Of His Career`,
            image: "https://c.ndtvimg.com/2022-06/hmiqosu8_brad-pitt_625x300_23_June_22.jpg",
            category: "Hollywood",
            descriptionSmall:`Washington: Hollywood actor Brad Pitt has said that he is on the "last leg" of his film career.`,
            description: `Washington: Hollywood actor Brad Pitt has said that he is on the "last leg" of his film career.
            According to Variety, the 58-year-old actor is not seeking a career resurgence. Pitt feels like his long career in movies is coming to an end soon.
            
            "I consider myself on my last leg this last semester or trimester. What is this section gonna be? And how do I wanna design that?" said the Troy actor while giving an interview with the GQ magazine.
            
            Director Quentin Tarantino, known for his super-hit film 'Once Upon a Time in Hollywood' starring Pitt has admitted that if Pitt's final stages in his career actually arrive, then the Hollywood film industry would be losing 'one of the last remaining big-screen movie stars', reported Variety.
            
            Showering praises for the Oscar-winning actor, Tarantino said, "It's just a different breed of man. And frankly, I don't think you can describe exactly what that is because it's like describing star shine. I noticed it when we were doing 'Inglourious Basterds'... Just his presence in the four walls of the frame created that impression."`
        },
        {
            id: 29,
            title: `Academy Accepts Will Smith's Resignation.`,
            image: "https://c.ndtvimg.com/2022-04/fop9rj1g_will-smith-_625x300_02_April_22.jpg",
            category: "Hollywood",
            descriptionSmall:"On Friday, Will Smith resigned from the Academy and now, the Academy has accepted his resignation.",
            description: `On Friday, Will Smith resigned from the Academy and now, the Academy has accepted his resignation. In a statement sent to PEOPLE on Friday, the President of the Academy of Motion Picture Arts and Sciences, David Rubin, said, "We have received and accepted Mr. Will Smith's immediate resignation from the Academy of Motion Picture Arts and Sciences. We will continue to move forward with our disciplinary proceedings against Mr. Smith for violations of the Academy's Standards of Conduct, in advance of our next scheduled board meeting on April 18."
            Will Smith, in his resignation, which was carried by multiple outlets, said, "I have directly responded to the Academy's disciplinary hearing notice, and I will fully accept any and all consequences for my conduct. My actions at the 94th Academy Awards presentation were shocking, painful, and inexcusable."
            
            Smith also said that the list of those he has hurt includes Chris Rock, his family, many of his dear friends, and global audiences. He also added that he is "heartbroken" and has "betrayed the trust of the Academy." "So, I am resigning from membership in the Academy of Motion Picture Arts and Sciences, and will accept any further consequences the Board deems appropriate," Will Smith added.`
        },
        {
            id: 30,
            title: "Leonardo DiCaprio Donates $10 Million To Ukraine, His Grandmother's Country",
            image: "https://c.ndtvimg.com/2022-03/5bpug4to_lionardo_625x300_08_March_22.jpg",
            category: "Hollywood",
            descriptionSmall:"Millions of Hollywood dollars have been pledged to Ukraine in its conflict with Russia, reports international media.",
            description: `Millions of Hollywood dollars have been pledged to Ukraine in its conflict with Russia, reports international media. Actor Leonardo DiCaprio has donated $10 million, according to polishnews.co.uk - and it's not just because he's a philanthropist. The 47-year-old star has Ukrainian roots - his grandmother, Helena, was born in Odessa in southern Ukraine, from where she moved to Germany in 1917. Leonardo, raised by his mother, Irmelin, and grandmother, was accompanied by both to the premieres of his films such as Titanic and The Man In The Iron Mask. Leonardo DiCaprio's $10 million donation to Ukraine was revealed by the International Visegrad Fund, which promotes development in Eastern Europe, reports polishnews.co.uk.
            Ukraine-born actress Mila Kunis and husband Ashton Kutcher pledged to match up to $3 million in donations, aiming to raise $30 million in total. In an update shared two days ago, Mila and Ashton revealed they were at $15 million, halfway to the goal. The funds raised will be donated to housing Ukrainian refugees, they said. Mila Kunis was born in Chernivitsi, southern Ukraine, in 1983 and moved to USA in 1991; "I have always considered myself an American, a proud American. ... But today, I have never been more proud to be a Ukrainian," she said in a video shared on Instagram. "I've never been more proud to be married to a Ukrainian," Ashton Kutcher added. The couple, who famously co-starred as Jackie and Kelso on That 70s Show, married in 2015.`
        },
        {
            id: 31,
            title: "Masala dosa",
            image: "https://static.toiimg.com/thumb/54289752.cms?imgsize=495844&width=800&height=800",
            category: "Food",
            descriptionSmall:'Arguably South India’s most renowned culinary export, masala dosas are famous the world over. A sort of Indian pancake, dosas are made from a thin batter consisting of rice, flour and lentils.',
            description: `Arguably South India’s most renowned culinary export, masala dosas are famous the world over. A sort of Indian pancake, dosas are made from a thin batter consisting of rice, flour and lentils. Making dosas is no easy task, with the batter mixture having to soak in water for at least 24 hours before it can be shaped. Once ready, the batter is ladled onto a hot tava (griddle pan) and shaped in a similar way to how the French would shape a crepe. Traditionally, dosas are served folded in half and stuffed with potatoes. Accompaniments like hot sambar give the dish a spicy edge, and whatever you stuff them with, dosas are sure to provide a tasty yet satisfying meal. `
        },
        {
            id: 32,
            title: "Chaat",
            image: "https://www.jacadatravel.com/wp-content/uploads/fly-images/249711/Delhi-street-food-2-552x310-cc.jpg",
            category: "Food",
            descriptionSmall:'Synonymous with Delhi street food vendors, chaat is one of India’s most delicious savoury snacks.',
            description: `Synonymous with Delhi street food vendors, chaat is one of India’s most delicious savoury snacks. The name derives from three Hindi words meaning ‘a delicacy,’ ‘licking one’s fingers’ and ‘to devour with relish’ and this dish truly does live up to its heritage. Although there’s now a plethora of different varieties, the original chaat is a wonderful combination of diced potato pieces, crispy fried bread and chickpeas garnished with fresh coriander leaves, yoghurt and dried ginger and tamarind sauce. Make like a local and seek out a local dhaba, where the city’s specialist chaat variety will be available at nearly all times of day.`
        },
        {
            id: 33,
            title: "Dal makhani",
            image: "https://www.jacadatravel.com/wp-content/uploads/fly-images/316520/iStock-530506394-552x310-cc.jpg",
            category: "Food",
            descriptionSmall:'Most foodies will have heard of or tasted dal, but there’s nothing quite like tasting the original dish in the country where it originated from.',
            description: `Most foodies will have heard of or tasted dal, but there’s nothing quite like tasting the original dish in the country where it originated from. Dal is the Hindi word for lentils, and this soup-like delicacy is made by stewing small black lentils for hours on end. Whilst there are  many different varieties of this lentil dish, dal makhani is in a league of its own. It’s considered the best of the best, and is reserved for big events like wedding celebrations. With makhani meaning ‘buttery’ in Hindi, there’s no prizes for guessing how rich and creamy this Indian classic tastes. Head to Punjab, in India’s north, to taste the real deal. `
        },
        {
            id: 34,
            title: "Vada pav",
            image: "https://www.jacadatravel.com/wp-content/uploads/fly-images/316521/iStock-1157170530-552x310-cc.jpg",
            category: "Food",
            descriptionSmall:'Originating in the traditionally vegetarian state of Maharashtra, vada pav is as close as Indian cuisine gets to veggie burgers.',
            description: `Originating in the traditionally vegetarian state of Maharashtra, vada pav is as close as Indian cuisine gets to veggie burgers. One for carb lovers, vada pav consists of a deep fried potato dumpling placed neatly inside a small bun. The finger food delicacy is generally accompanied by a couple of chutneys and a green chilli, to appeal to the spice loving palettes of Indians up and down the country. Also called a Bombay burger, these mini potato buns can be found in street food stalls across the city of Mumbai. `
        },
        {
            id: 35,
            title: "Stuffed paratha",
            image: "https://www.jacadatravel.com/wp-content/uploads/fly-images/316522/iStock-1084019098-552x310-cc.jpg",
            category: "Food",
            descriptionSmall:'Punjab’s foodie heritage doesn’t stop at dal makhani. Often eaten at the start of the day, stuffed parathas are seen as the breakfast of champions in northern India.',
            description: `Punjab’s foodie heritage doesn’t stop at dal makhani. Often eaten at the start of the day, stuffed parathas are seen as the breakfast of champions in northern India. The word paratha derives from the Sanskrit word atta meaning ‘layers of cooked dough,’ and this dish lives up to its moniker. After leaving the dough (or atta) to rest overnight, parathas are made by cooking the dough on a tava before shallow frying. The most common way to eat parathas is to stuff them with a filling of your choosing. Parathas can be stuffed with any number of fillings, but some of our favourites are aloo paratha (stuffed with potatoes) and methi paratha (stuffed with fenugreek). `
        },
        {
            id: 36,
            title: "Dhokla",
            image: "https://www.jacadatravel.com/wp-content/uploads/fly-images/316523/iStock-887144836-552x310-cc.jpg",
            category: "Food",
            descriptionSmall:'Hailed as the regional dish of northwest India, the Gujarati delicacy dhokla is a savoury vegetarian snack made of rice and split chickpeas.',
            description: `Hailed as the regional dish of northwest India, the Gujarati delicacy dhokla is a savoury vegetarian snack made of rice and split chickpeas. It’s tastier than it sounds – Gujaratis eat it for breakfast or lunch, and sometimes even as a snack or side dish. Another dish that takes hours of preparation, dhokla involves soaking the rice and split chickpeas in equal quantities overnight. Then, chilli, coriander, ginger and baking soda are added to add spice to the dish, and help it rise into delicious bite size morsels. Usually served alongside deep fried chilli and  coriander chutney, this Gujarati delicacy is wonderfully moreish. `
        },
        {
            id: 37,
            title: "Barfi",
            image: "https://www.jacadatravel.com/wp-content/uploads/fly-images/316524/iStock-1156874847-552x310-cc.jpg",
            category: "Food",
            descriptionSmall:'We’ve cheated a little bit here, as the term barfi can be used to describe any number of Indian sweets. The most traditional type though is milk barfi.',
            description: `We’ve cheated a little bit here, as the term barfi can be used to describe any number of Indian sweets. The most traditional type though is milk barfi. Predictably, these milk-based sweets are made from milk powder, condensed milk, ghee and cardamom powder. Barfi is not going to help anyone reach their health-conscious goals, but these indulgent fragrant desserts are sure to bring a smile to the face of anyone who tries them. These sweets are traditionally gifted as good luck offerings at occasions like wedding ceremonies, but there’s nothing to say you can’t pop down to the sweet shop to buy one to accompany your afternoon chai. `
        },
        {
            id: 38,
            title: "Pani puri",
            image: "https://www.jacadatravel.com/wp-content/uploads/fly-images/316525/iStock-1177589252-552x310-cc.jpg",
            category: "Food",
            descriptionSmall:'Pani puri, or gol guppa,  are thought to originate from the northern state of Bihar. A perfect streetside snack, pani puri are hollow deep fried balls made of semolina or wheat.',
            description: `Pani puri, or gol guppa,  are thought to originate from the northern state of Bihar. A perfect streetside snack, pani puri are hollow deep fried balls made of semolina or wheat. They’re served alongside spicy potatoes, chickpeas and a spicy tamarind water. Eating pani puri is an experience in itself, as you traditionally crack open the top of the deep fried shell with a spoon before filling it with the delicious accompaniments. Most Indians eat each pani puri with one swift bite, to save any of the filling spilling out of the delicate case. This infamous street snack unites most of the country – everyone from local college students to city businessmen can be found devouring them. `
        },
        {
            id: 39,
            title: "Misal Pav",
            image: "https://www.outlookindia.com/outlooktraveller/public/uploads/filemanager/images/misal-pav.jpg",
            category: "Food",
            descriptionSmall:'Misal pav is a popular street food in Maharashtra. A great breakfast recipe that includes a curry made of sprouts',
            description: `Misal pav is a popular street food in Maharashtra. A great breakfast recipe that includes a curry made of sprouts, topped with finely chopped onions, tomatoes and ‘farsan’(fried savory mixture) and lime juice served pav, heated on the pan with a hint of butter.`
        },
        {
            id: 40,
            title: "Idli",
            image: "https://www.jacadatravel.com/wp-content/uploads/fly-images/316526/iStock-1024549286-552x310-cc.jpg",
            category: "Food",
            descriptionSmall:'Popular across South India, idli are often thought of as the breakfast versions of dosa. Eaten at the start of the day, idli are a type of light savoury rice cake.',
            description: `Popular across South India, idli are often thought of as the breakfast versions of dosa. Eaten at the start of the day, idli are a type of light savoury rice cake. Made by steaming a batter consisting of fermented black lentils and rice, these rice cakes are dangerously easy to eat. Since idli are pretty bland on their own, these mini pancake-like breakfast staples are served alongside sambar, coconut based chutneys, or spicy fish curries. Over the years, idli has evolved into many different varieties, so you’re sure to find one that satisfies your taste buds. `
        },
        {
            id: 41,
            title: "Rome, Italy",
            image: "https://blog.thomascook.in/wp-content/uploads/2017/11/1.Rome-Italy-e1521254972695.jpg",
            category: "Tourism",
            descriptionSmall:"Travelers from all around the world agree that there’s something dreamy and enigmatic about this city. Be it the art, the culture, or the ruins of The Forum and the Colosseum that evoke the power of the ancient Roman Empire.",
            description: `Travelers from all around the world agree that there’s something dreamy and enigmatic about this city. Be it the art, the culture, or the ruins of The Forum and the Colosseum that evoke the power of the ancient Roman Empire. This city top the list when we talk about the must visit places in the world, for obvious reasons. Rome stands as a city with the perfect blend of modern with ancient. When you walk down its streets, you will find yourself swiftly time traveling.
            The food culture of Rome has given Pasta and Gelato to the world so when you get tired of walking and traveling you can indulge your senses in some amazing culinary treats. Rome effortlessly tops its name among the places to visit before you die.
            
            Type of vacation: Historic, Romantic, Luxury`
        },
        {
            id: 42,
            title: "Vatican City, Among must visit places in the world",
            image: "https://blog.thomascook.in/wp-content/uploads/2017/11/2.-vatican-city--e1521255022971.jpg",
            category: "Tourism",
            descriptionSmall:"The centerpiece of Christianity is unlike what you imagine it to be. Vatican City’s environment is nothing that one can call religiously dull and gloomy.",
            description: `The centerpiece of Christianity is unlike what you imagine it to be. Vatican City’s environment is nothing that one can call religiously dull and gloomy. The vibrant atmosphere of the smallest country in the world is full of surprises for the travelers.
            From beautiful museums to glorious churches, Vatican is a paradise for the lovers of history and architecture. It is said that the Vatican Museums span over 9 miles of exotic art, sculptures and precious artifacts.
            Each and every building of Vatican has beautiful ceilings that look like heaven. The cafes of Vatican are popular for it’s delicious pizza, salads, and sandwiches.`
        },
        {
            id: 43,
            title: "Sydney, Australia",
            image: "https://blog.thomascook.in/wp-content/uploads/2017/11/3.-australia--e1521255079904.jpg",
            category: "Tourism",
            descriptionSmall:"The glorious Opera House and the Sydney Harbour Bridge are not the only charms of this Australian city. Blessed with a mild and warm climate, it is one of the must visit countries in the world, a place that can be visited throughout the year.",
            description: `The glorious Opera House and the Sydney Harbour Bridge are not the only charms of this Australian city. Blessed with a mild and warm climate, it is one of the must visit countries in the world, a place that can be visited throughout the year.
            The magnificent beaches will ensure that your eyes never get bored. The art gallery of New South Wales and The Museum of Contemporary arts are two of the popular destinations for the art lovers while the music aficionados can spend time at Opera house or one of the free concerts.
            Doesn’t matter what part of the world you are from, and your interests are, Sydney will never disappoint you.`
        },
        {
            id: 44,
            title: "Singapore",
            image: "https://blog.thomascook.in/wp-content/uploads/2017/11/4.-singapore-e1521255125338.jpg",
            category: "Tourism",
            descriptionSmall:"Exploring the cleanest place in Asia is a grand experience that one should not miss visiting. This modern island has every comfort and luxury that a traveler would wish for.",
            description: `Exploring the cleanest place in Asia is a grand experience that one should not miss visiting. This modern island has every comfort and luxury that a traveler would wish for. Singapore has an amazing skyline and you could best enjoy that from the Giant Ferris Wheel. The amazing view of the city make it one of the must visit places in the world.
            Singapore offers some wonderful tourist experiences like SuperTree Grove Light Show, Cloud Forest, Wander Light and Water Show, Singapore Botanical Gardens and much more to choose from.`
        },
        {
            id: 45,
            title: "London, England – One of the must visit places",
            image: "https://blog.thomascook.in/wp-content/uploads/2017/11/5.-london--e1521255176865.jpg",
            category: "Tourism",
            descriptionSmall:"The city of London effortlessly mingles the antique and the contemporary, through a dizzying array of sights, smells, and sounds.",
            description: `The city of London effortlessly mingles the antique and the contemporary, through a dizzying array of sights, smells, and sounds. This timeless city has something for everyone, from the Buckingham Palace and Westminster Abbey. It capture the interests of the people who are fascinated by the grandiose of the royal family, to the West End Theatre District and the Portobello Road Market which attract the art and culture appreciators.
            Take a river cruise on the River Thames, enjoy the sights of the city from the top of the Eye of London or just hop around from a pub to another around Soho and London Bridge.`
        },
        {
            id: 46,
            title: "Porto, Portugal",
            image: "https://blog.thomascook.in/wp-content/uploads/2017/11/6.-porto-e1521255226445.jpg",
            category: "Tourism",
            descriptionSmall:"The coastal city of Porto has all the ingredients that make up for a perfect travel destination, a remarkable shoreline, The buzzing nightlife and outstanding tourist amenities make Porto one of the must visit countries.",
            description: `The coastal city of Porto has all the ingredients that make up for a perfect travel destination, a remarkable shoreline, The buzzing nightlife and outstanding tourist amenities make Porto one of the must visit countries. The coastal city of Porto has all the ingredients that make up for a perfect travel destination, a remarkable shoreline, charismatic architecture, and the greatest delight – port wine. Also Known as the City of Bridges. Porto is home to numerous iron bridges, including one designed by a student of Gustave Eiffel, the man who designed the Eiffel Tower.
            Francescinha, a local Porto specialty, is a large sandwich with ample amount of fillings of meat and vegetables is a must try. Exploring Porto is a treat for the music lovers. One can enjoy live music at street corners and even attend a concert a Casa De Musica. Also, watching a football match in Portugal for a fan is like taking part in a religious activity.`
        },
        {
            id: 47,
            title: " New York City, United States of America – One of the must visit places",
            image: "https://blog.thomascook.in/wp-content/uploads/2017/11/7.-new-york-e1521255270361.jpg",
            category: "Tourism",
            descriptionSmall:"Countless artists have tried to capture the spirit of New York City through music, paintings, and photographs, but to realize the true enormity of this concrete jungle, you have to visit it yourself.",
            description: `Countless artists have tried to capture the spirit of New York City through music, paintings, and photographs, but to realize the true enormity of this concrete jungle, you have to visit it yourself. From looking at the Empire State Building, people-watching, to shopping in the Fifth Avenue, this city offers you an exhilarating array of activities to take part in.`
        },
        {
            id: 48,
            title: "Bagan, Myanmar",
            image: "https://blog.thomascook.in/wp-content/uploads/2017/11/8.-bagan--e1521255317729.jpg",
            category: "Tourism",
            descriptionSmall:"Bagan is popular for its more than 2000 Buddhist temples. While most of them are under restoration by UNESCO, it should not stop you from exploring this culturally rich region of Asia. Buledi, Thebeik Hmauk, Oak-Kyaung-Gyi, Shwe-Leik-Too are few of the famous temples of Bagan.",
            description: `Bagan is popular for its more than 2000 Buddhist temples. While most of them are under restoration by UNESCO, it should not stop you from exploring this culturally rich region of Asia. Buledi, Thebeik Hmauk, Oak-Kyaung-Gyi, Shwe-Leik-Too are few of the famous temples of Bagan. These ancient monuments are also popular for their spectacular views during the sunrise and sunset.
            Bagan is a paradise for the foodies who can try the most exotic dishes from the Burmese culinary culture. These popular delicacies range from Nepalese Thali, amazing curries, Fish with Green Chili Curry and Tibetan Mo Mo. Make sure you add this city in your list of must visit places in the world.
            
            Type of Vacation: Cultural, History, Budget`
        },
        {
            id: 49,
            title: "Paris, France – Among the must visit places",
            image: "https://blog.thomascook.in/wp-content/uploads/2017/11/9.-Paris-e1521255361820.jpg",
            category: "Tourism",
            descriptionSmall:"Well any list of must visit places in the world is incomplete with this place not being in the list. Paris is the city of love, of romance, of art. Almost everyone has Paris on their travel bucket list.",
            description: `Well any list of must visit places in the world is incomplete with this place not being in the list. Paris is the city of love, of romance, of art. Almost everyone has Paris on their travel bucket list.

            Even though the city is filled with historical sites. Places like Arc de Triomphe, Château de Versailles and, of course, the Eiffel Tower, and has a delightful cuisine, the best part about Paris is its magical and unforgettable atmosphere. Paris has something to offer to everyone.
            To a honeymoon lover, it offers romantic walks down the beautiful lanes of the city. For the art and history lovers, it offers a never-ending tour of the Louvre. Those who wish to relish the amazing French cuisine can simply spend their time at the classic cafes of the city.
            
            Type of Vacation: Romantic, Luxury`
        },
        {
            id: 50,
            title: "New Zealand",
            image: "https://blog.thomascook.in/wp-content/uploads/2017/11/10.-new-zealand--e1521255406145.jpg",
            category: "Tourism",
            descriptionSmall:"New Zeeland boasts of a landscape unlike nowhere else. Open sightings of Whales, pristine waterfalls and lush green meadows are some of the wonders you’ll encounter during your trip in this country.",
            description: `New Zeeland boasts of a landscape unlike nowhere else. Open sightings of Whales, pristine waterfalls and lush green meadows are some of the wonders you’ll encounter during your trip in this country. New Zealand has been a dream destination for the fans of the epic, ‘The Lord of the Rings,’ as the movie was entirely in this country. This easily makes it one of the places to visit before you die. New Zealand boasts of a landscape unlike nowhere else. Open sightings of Whales, pristine waterfalls and lush green meadows are some of the wonders you’ll encounter during your trip in this country.

            Type of Vacation: Adventure`
        },
    ]);
    return (
        <div>
            <store.Provider value={[data, setData]}>
                {props.children}
            </store.Provider>
        </div>
    )
}

export default StoredData;