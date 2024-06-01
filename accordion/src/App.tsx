import "./App.css";
import AccordionItem from "./AccordionItem";
import React, { useState } from "react";
function App() {
  const [selected, setSelected] = useState<number>(1);
  const handleOpen = (id: number) => {
    setSelected(id);
  };
  return (
    <div className="app">
      <div>
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={selected == item.id}
            handleOpen={handleOpen}
          />
        ))}
      </div>
    </div>
  );
}

interface Item {
  id: number;
  title: string;
  content: string;
}

const data: Item[] = [
  {
    id: 1,
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 2,
    title: "Section 2",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 3,
    title: "Section 3",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 4,
    title: "Section 4",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

export default App;
