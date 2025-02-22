import { MdOutlineModeEdit } from "react-icons/md";
import SectionsHeader from "../Components/SectionsHeader/SectionsHeader";
import ExperienceCard from "../Components/ExperienceCard/ExperienceCard";

const experienceCards = [
  {
    title: "Full Stack Developer",
    color: "#2c98f0",
    icon: <MdOutlineModeEdit />,
  },
  {
    title: "Front End Developer at Google Company",
    color: "#ec5453",
    icon: <MdOutlineModeEdit />,
  },
  {
    title: "System Analyst",
    color: "#f9bf3f",
    icon: <MdOutlineModeEdit />,
  },
];

const Experience = () => {
  return (
    <section className="lg:mt-20">
      <SectionsHeader h2Content="Experience" h3Content="WORK EXPERIENCE" />

      <div className="grid grid-cols-12 px-8 py-4 relative gap-x-8 mt-5">
        <div className="col-span-1 me-3 w-[3px] justify-self-end bg-[#f2f3f7] after:absolute after:top-full after:size-0 relative  after:rounded-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-[#f2f3f7] after:p-6"></div>
        <div className="col-span-11 flex flex-col gap-y-5 pb-12 py-10">
          {experienceCards.map((card, index) => (
            <ExperienceCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
