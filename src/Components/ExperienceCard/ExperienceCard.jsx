export default function ExperienceCard({ card, index }) {
  return (
    <>
      <article
        className={`col-span-11 pt-5 pb-10 px-5 bg-[#f2f3f7] flex flex-col gap-y-5 relative before:absolute before:top-4 before:size-14 before:-z-10 before:left-[-3px] before:rotate-45  before:bg-[#f2f3f7] `}
      >
        <header>
          <h4 className="font-medium text-xl">
            {card.title}
            <span className="text-[#9b9b9e] text-base ms-2">2017-2018</span>
          </h4>
        </header>

        <p>
          Tolerably earnestly middleton extremely distrusts she boy now not. Add
          and offered prepare how cordial two promise. Greatly who affixed
          suppose but enquire compact prepare all put. Added forth chief trees
          but rooms think may.
        </p>

        <div
          className={`absolute left-[-73px] border-[#f2f3f7] border-4 flex items-center justify-center top-4 size-14 rounded-full ${
            index == 0
              ? "bg-[#2c98f0]"
              : index == 1
              ? "bg-[#ec5453]"
              : "bg-[#f9bf3f]"
          }`}
        >
          <span className="text-2xl text-white">{card.icon}</span>
        </div>
      </article>
    </>
  );
}
