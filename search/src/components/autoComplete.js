import React, { useEffect } from "react";
import SuggestionList from "./suggestionList";
export default function AutoComplete({ placeholder = "Search ", fetchData }) {
  const [inputValue, setInputValue] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  const getSuggestions = async () => {
    try {
      setLoading(true);
      const data = await fetchData(inputValue);
      setSuggestions(data);
      console.log({ data });
    } catch {
      setSuggestions([]);
      console.log("error");
      setError("There was an error fetching the data");
    } finally {
      setLoading(false);
    }
  };
  let timer;
  useEffect(() => {
    if (inputValue) {
      //   if (timer) {
      clearTimeout(timer);
      //   }
      timer = setTimeout(() => {
        getSuggestions();
      }, 500);
    } else {
      setSuggestions([]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <input
        className="search-box"
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChangeInput}
      />

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {!loading && (
        <ul style={{ listStyle: "none", textAlign: "center" }}>
          <SuggestionList suggestions={suggestions} />
        </ul>
      )}
    </div>
  );
}
