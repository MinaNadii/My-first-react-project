import AboutCard from "../Components/AboutCard/AboutCard";
import SectionsHeader from "../Components/SectionsHeader/SectionsHeader";
import { FaRegLightbulb } from "react-icons/fa6";
import { TiWorld } from "react-icons/ti";
import { FaDatabase } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";

const aboutCards = [
  {
    title: "Graphic Design",
    color: "#2c98f0",
    icon: <FaRegLightbulb />,
  },
  {
    title: "Web Design",
    color: "#ec5453",
    icon: <TiWorld />,
  },
  {
    title: "Software",
    color: "#f9bf3f",
    icon: <FaDatabase />,
  },
  {
    title: "Application",
    color: "#a84cb8",
    icon: <MdOutlinePhoneIphone />,
  },
];
const About = () => {
  return (
    <section className="lg:h-full lg:flex lg:items-center lg:justify-center">
      <div className="myContainer">
        <div className="">
          <SectionsHeader h2Content="ABOUT US" h3Content="WHO AM I?" />
          <p className="text-[14.5px] text-[#4c4c4c] leading-[27px] mt-10">
            <span className="font-semibold ">Hi Im Jackson Ford</span> On her
            way she met a copy. The copy warned the Little Blind Text, that
            where it came from it would have been rewritten a thousand times and
            everything that was left from its origin would be the word (and) and
            the Little Blind Text should turn around and return to its own, safe
            country.
          </p>
          <p className="text-[14.5px] text-[#4c4c4c] leading-[27px] mt-5">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>

          <footer>
            <div className="grid grid-cols-12 mt-4 gap-y-16 gap-x-7">
              {aboutCards.map((card) => (
                <AboutCard key={card.title} card={card} />
              ))}
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default About;
