export default function AboutCard({ card }) {
  return (
    <article
      className="flex flex-col gap-4 border-b-2 px-6 pb-12 pt-7 col-span-12 md:col-span-3 bg-white shadow-2xl "
      style={{ borderColor: card.color }}
    >
      <div
        style={{
          color: card.color,
        }}
        className="text-4xl"
      >
        {card.icon}
      </div>

      <h4 className="font-medium">{card.title}</h4>
    </article>
  );
}
