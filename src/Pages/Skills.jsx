import React from "react";
import SectionsHeader from "../Components/SectionsHeader/SectionsHeader";
import Progress from "../Components/SkillsProgressBar/Progress";

const progressData = [
  {
    title: "Photoshop",
    color: "#2C98F0",
    progress: "75%",
  },
  {
    title: "HTML5",
    color: "#F9BF3F",
    progress: "85%",
  },
  {
    title: "Wordpress",
    color: "#2FA499",
    progress: "70%",
  },
  {
    title: "jQuery",
    color: "#EC5453",
    progress: "60%",
  },
  {
    title: "CSS3",
    color: "#A84CB8",
    progress: "90%",
  },
  {
    title: "SEO",
    color: "#4054B2",
    progress: "80%",
  },
];

const Skills = () => {
  return (
    <section className="lg:h-full lg:flex lg:items-center lg:justify-center">
      <div className="myContainer">
        <div className="">
          <SectionsHeader h2Content="MY SPECIALTY" h3Content="MY SKILLS" />
          <p className="text-[14.5px] text-[#4c4c4c] leading-[27px] mt-10">
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli, but the
            Little Blind Text didn’t listen. She packed her seven versalia, put
            her initial into the belt and made herself on the way.
          </p>

          <footer>
            <Progress progress={progressData} />
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Skills;
