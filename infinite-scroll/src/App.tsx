import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<any>([]);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setCount(data);
  };

  useEffect(() => {
    window.addEventListener("load", getData);
    return () => {
      window.removeEventListener("load", getData);
    };
    // getData();
  }, []);

  return (
    <>
      {count.length > 0 ? (
        <div>
          <h1>Count: {count.length}</h1>
          <ul>
            {count.map((item: any) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default App;
