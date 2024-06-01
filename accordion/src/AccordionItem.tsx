import React from "react";

interface Item {
  id: number;
  title: string;
  content: string;
}

interface Props {
  item: Item;
  isOpen: boolean;
  handleOpen: (id: number) => void;
}

export default function AccordionItem({ item, isOpen, handleOpen }: Props) {
  return (
    <div onClick={() => handleOpen(item.id)}>
      <div className="accordion">
        <span>{item.title}</span>
        <span
          style={{transform: (isOpen ? 'rotate(180deg)' :''  ) }}
        >
          ⬇️
        </span>
      </div>
      {isOpen && (
        <p className={`accordion-item ${isOpen ? "open" : ""}`}>
          {item.content}
        </p>
      )}
    </div>
  );
}
