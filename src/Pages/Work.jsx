import { useState } from "react";
import SectionsHeader from "../Components/SectionsHeader/SectionsHeader";

import image1 from "../assets/imgs/work/image1.jpg";
import image2 from "../assets/imgs/work/image2.jpg";
import image3 from "../assets/imgs/work/image3.jpg";
import image4 from "../assets/imgs/work/image4.jpg";
import image5 from "../assets/imgs/work/image5.jpg";
import image6 from "../assets/imgs/work/image6.jpg";
import WorkCard from "../Components/WorkCard/WorkCard";

const workCards = [
  { category: "Graphic Design", image: image1 },
  { category: "Apps", image: image2 },
  { category: "Software", image: image3 },
  { category: "Graphic Design", image: image4 },
  { category: "Apps", image: image5 },
  { category: "Software", image: image6 },
];

const filterNavLinks = ["All", "Graphic Design", "Apps", "Software"];

const Work = () => {
  const [searchWord, setSearchWord] = useState("");
  const [numberOfWorkCards, setNumberOfWorkCards] = useState(4);
  const handelSearch = (link) => {
    setSearchWord(link.toLowerCase());
  };

  const filetedData = workCards.filter((card) => {
    if (searchWord !== "")
      return card.category.toLowerCase() === searchWord.toLowerCase();

    return card;
  });

  return (
    <section className="lg:mt-32">
      <div className=" px-4">
        <SectionsHeader h2Content="MY WORK" h3Content="RECENT WORK" />

        <FlitterNav handelSearch={handelSearch} searchWord={searchWord} />

        <div className="grid grid-cols-12 gap-x-3 gap-y-2 mt-5">
          {filetedData
            .map((card) => <WorkCard key={card.image} card={card} />)
            .slice(0, numberOfWorkCards)}
        </div>
        {searchWord === "" && (
          <div className="mt-5  text-white ">
            <button
              onClick={() => {
                if (numberOfWorkCards < filetedData.length) {
                  setNumberOfWorkCards(filetedData.length);
                } else {
                  setNumberOfWorkCards(4);
                }
              }}
              className="bg-blue-600 cursor-pointer hover:bg-blue-700 duration-200 p-2 rounded-md px-3"
            >
              {numberOfWorkCards < filetedData.length
                ? "Show More"
                : "Show Less"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;

const FlitterNav = ({ handelSearch, searchWord }) => {
  return (
    <nav className="mt-10">
      <ul className="flex gap-x-5  ">
        {filterNavLinks.map((link, index) => (
          <li
            onClick={() => {
              if (index === 0) {
                handelSearch("");
              } else {
                handelSearch(link);
              }
            }}
            key={index}
          >
            <button
              className={`cursor-pointer duration-200 hover:text-blue-400 ${
                searchWord.toLowerCase() === link.toLowerCase()
                  ? "text-blue-400"
                  : ""
              } ${searchWord == "" && index === 0 ? "text-blue-400" : ""}`}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
