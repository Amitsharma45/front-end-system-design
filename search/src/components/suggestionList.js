import React from "react";

export default function SuggestionList({ suggestions = [], error, loading }) {
  const dataKey = "name";
  return (
    <React.Fragment>
      {suggestions.length > 0 &&
        suggestions?.map((suggestion, index) => {
          const currSuggestion = dataKey ? suggestion[dataKey] : suggestion;
          return (
            <li
              key={index}
              // onClick={() => onSuggestionClick(suggestion)}
              className="suggestion-item"
              id={`suggestion-${index}`}
            >
              {/* {getHighlightedText(currSuggestion, highlight)} */}
              {currSuggestion}
            </li>
          );
        })}
    </React.Fragment>
  );
}
