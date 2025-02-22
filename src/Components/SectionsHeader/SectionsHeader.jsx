import H2 from "../Elements/H2";
import H3 from "../Elements/H3";

export default function SectionsHeader({ h2Content, h3Content }) {
  return (
    <header className="flex flex-col gap-5 mt-1">
      <H2 content={h2Content} />
      <H3 content={h3Content} />
    </header>
  );
}
