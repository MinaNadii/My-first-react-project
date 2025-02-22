import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../assets/imgs/Home/img_bg_1-PzvG2r05.jpg";
import img2 from "../assets/imgs/Home/img_bg_2-DzCs5o-0.jpg";
import HomeContent from "../Components/Home/HomeContent";
import { FaFolderOpen, FaDownload } from "react-icons/fa";

const slides = [
  {
    url: img1,
    content: {
      span: "Hi!",
      title: "I'm Mina",
      description: "100% HTML5 Bootstrap templates Made",
      btn: "Download CV",
      icon: <FaDownload />,
    },
  },
  {
    url: img2,
    content: {
      span: "I am",
      title: "a Frontend",
      description: "100% HTML5 Bootstrap templates Made",
      btn: "View Portfolio",
      icon: <FaFolderOpen />,
    },
  },
];

const Home = () => {
  return (
    <div className="h-screen w-full lg:z-10 ">
      <div className="slide-container">
        <Fade
          duration={2500}
          transitionDuration={300}
          arrows={false}
          className="slide-container "
          autoplay
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${slide.url})`,
                backgroundSize: "cover",
                backgroundColor: "none",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
              }}
            >
              <HomeContent content={slide.content} />
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Home;
