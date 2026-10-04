import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  note?: string;
  titleId: string;
};

export function SectionHeading({ eyebrow, title, note, titleId }: SectionHeadingProps) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading__main">
        <h2 id={titleId}>{title}</h2>
        {note && <p className="section-heading__note">{note}</p>}
      </div>
    </Reveal>
  );
}
