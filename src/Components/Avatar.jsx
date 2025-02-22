import ProfilePic from "../assets/imgs/Home/Profile_pic.jpg";
const Avatar = () => {
  return (
    <>
      <div className="pt-10">
        <div className=" overflow-hidden rounded-full mx-auto w-38 h-38 flex items-center justify-center">
          <img src={ProfilePic} alt="Profile Pic" className="size-full" />
        </div>
      </div>
      <div className="mt-[30px] text-center">
        <h1 className="text-2xl mb-2 font-bold">Mina Nadi</h1>
        <p className="uppercase font-mono mb-6 text-xs font-normal text-gray-400 ">
          <span className="nav-span-color">Frontend Developer</span> in Egypt
        </p>
      </div>
    </>
  );
};

export default Avatar;
