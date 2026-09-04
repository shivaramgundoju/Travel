import { useRef, useState } from "react";
import { ChevronDownIcon } from "./icons";

export interface FaqItem {
  q: string;
  a: string;
}

export function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <FaqRow
          key={item.q}
          item={item}
          index={i}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

function FaqRow({ item, index, open, onToggle }: { item: FaqItem; index: number; open: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="faq-question"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        {item.q}
        <span className="faq-arrow">
          <ChevronDownIcon size={15} />
        </span>
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className="faq-answer-wrap"
        style={{ maxHeight: open ? `${(contentRef.current?.scrollHeight ?? 0) + 24}px` : "0px" }}
      >
        <div ref={contentRef} className="faq-answer">
          {item.a}
        </div>
      </div>
    </div>
  );
}