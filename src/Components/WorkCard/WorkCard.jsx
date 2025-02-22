import { FaEye, FaShareAlt } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

export default function WorkCard({ card }) {
  return (
    <article className="col-span-12 group md:col-span-6 py-1 relative ">
      <div>
        <img
          style={{
            aspectRatio: "1/1",
          }}
          src={card.image}
          alt={card.category}
          className="w-full object-cover"
        />
      </div>
      <div className="pt-10 px-4 invisible opacity-0 group-hover:visible  h-full w-full group-hover:opacity-100 flex duration-200 flex-col justify-between  text-white absolute inset-0 bg-[#2c98f0]">
        <header className="space-y-4">
          <h4 className="font-medium text-md underline uppercase">work 02</h4>
          <h5 className="text-sm text-white/60"> Animation </h5>
        </header>

        <footer className="pb-28 text-[#333333]">
          <ul className="flex cursor-pointer items-center gap-x-2 ">
            <li className="bg-white/20 p-1 rounded">
              <FaShareAlt />
            </li>
            <li className="flex cursor-pointer items-center gap-x-1 bg-white/25 p-1 rounded">
              <FaEye />

              <span className="underline ">100</span>
            </li>
            <li className="flex cursor-pointer items-center gap-x-1 bg-white/25 p-1 rounded">
              <MdFavoriteBorder />

              <span className="underline">49</span>
            </li>
          </ul>
        </footer>
      </div>
    </article>
  );
}
