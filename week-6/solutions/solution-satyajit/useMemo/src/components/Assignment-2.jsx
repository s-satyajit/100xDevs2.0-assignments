import { useState, useMemo, useRef } from "react";

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];

for (let i = 0; i < TOTAL_LINES; i++) {
  let sentences = "";
  for (let j = 0; j < words.length; j++) {
    sentences += words[Math.floor(Math.random() * words.length)];
    sentences += " ";
  }
  ALL_WORDS.push(sentences);
}

const Assignment2 = () => {
  const [word, setWord] = useState(ALL_WORDS);
  const [filters, setFilters] = useState();
  const [showText, setShowText] = useState(false);
  const inputElement = useRef();

  const findFilteredElements = () => {
    setFilters(inputElement.current.value);
    setShowText(true);
  };

  const filteredSentences = useMemo(() => {
    const sentence = word.filter((x) => x.includes(filters));
    return sentence;
  }, [word, filters]);

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={findFilteredElements}>Find Filters</button>
      {showText && filteredSentences.map((x, index) => <div key={index}>{x}</div>)}
    </>
  );
};

export default Assignment2;
