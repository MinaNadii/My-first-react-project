import { FaDownload } from "react-icons/fa";

const HomeContent = ({ content }) => {
  const { span, title, description, btn, icon } = content;
  console.log(content);

  return (
    <div className="homeContent w-full  flex flex-col max-lg:items-center justify-center myContainer h-screen text-center lg:text-start ">
      <h2 className="text-7xl font-bold">{span}</h2>

      <h2 className="text-7xl font-bold">{title}</h2>
      <p className="text-[18px] font-light py-7">
        {description}
        <br />
        <a href="#" target="_blank">
          By{" "}
          <span className="text-blue-300 font-light underline">
            Colorlib.com
          </span>
        </a>
      </p>
      <div>
        <button className="border px-4 py-2 flex justify-center items-center gap-2   lg:text-start">
          <a href="#">{btn}</a>
          {icon}
        </button>
      </div>
    </div>
  );
};

export default HomeContent;
