import React from "react";
import HeroSlider, { Overlay, Slide, MenuNav, Nav, SideNav } from "hero-slider";
import Highlights from "../Components/Highlights";
import Events from "../Components/Events";

function HomeComp() {
  const slides = [
    {
      src: "https://drive.google.com/uc?id=1HmFUd5KsXJZis4Cmhc_jh1QaEPuXhmx2",
      title: "Applications Invited",
    },
    {
      src: "https://drive.google.com/uc?id=1BEsdwflzloDjagMzc565B-oquDYOgupo",
      title: "Institute Information",
    },
    {
      src: "https://drive.google.com/uc?id=1HyCBFH0ihiwXmyS4aZ9TvjXX3NL_5saN",
      title: "Mtech Admissions",
    },
    {
      src: "https://drive.google.com/uc?id=1TFfieDndiYffDq8mI6aoEyCXC1e3yGtN",
      title: "Faculty Recruitment",
    },
  ];
  return (
    <div className="mt-12 flex flex-col pb-5 bg-gray-100 px-10 md:px-48 ">
      <HeroSlider
        height={"60vh"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        {/* <Overlay>
        <Wrapper>
          <Title>Basic Setup</Title>
          <Subtitle>
            Check out the documentation for more advanced examples.
          </Subtitle>
        </Wrapper>
      </Overlay> */}
        {slides.map((doc, i) => (
          <Slide
            key={`Home.slide${i}`}
            label={doc.title}
            background={{
              backgroundImageSrc: doc.src,
              shouldLazyLoad: true,
            }}
          />
        ))}
        <SideNav
          position={{
            //bottom: undefined,
            top: "0%",
            right: "0%",
            //transform: "translateY(-50%)",
          }}
        />
        <MenuNav
          mobileThreshold
          color
          activeColor="white"
          style={{ color: "red" }}
        />
      </HeroSlider>
      <h1 className="text-justify my-8 text-gray-600">
        Welcome to Mechanical Engineering at IIT Gandhinagar. We are a dynamic
        and fast-growing community of faculty, staff, and students. Our students
        receive outstanding education in all areas of Mechanical Engineering. We
        aim to produce graduates who not only have the knowledge and skills to
        become successful engineers and scientists of the future, but also
        well-rounded personalities who are uncompromising on ethics, contribute
        to society, are respectful of and can adapt to their surroundings, and
        prove themselves to be great thinkers and problem solvers in all avenues
        of life. Our faculty members are passionate about teaching and have
        experimented with numerous innovations in pedagogy, in particular the
        learning-by-doing approach. We conduct cutting edge research in
        different fields including desalination and water treatment, fuel cell
        systems, combustion and energetic materials, fluid mechanics, robotics,
        advanced manufacturing, solid mechanics, dynamical systems and chaos,
        and biomaterials. Our students are also placed in some of the best
        academic institutes and industries across the world.
        <br />
        <br /> We welcome you to explore our website and learn more about us!
      </h1>
      <Highlights />
      <Events />
    </div>
  );
}

export default HomeComp;
