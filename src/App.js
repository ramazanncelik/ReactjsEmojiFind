import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import SearchInput from "./Components/SearchInput/SearchInput";
import EmojiResults from "./Components/EmojiResults/EmojiResults";
import filterEmoji from "./filterEmoji";

export default function App() {

  const [textInput, setTextInput] = useState("");
  const [emojiData, setEmojiData] = useState([]);

  useEffect(() => {

    setEmojiData(filterEmoji(textInput, 20))

  }, [textInput])


  return (
    <div>
      <Header />
      <SearchInput textInput={textInput} setTextInput={setTextInput} />
      <EmojiResults emojiData={emojiData} />
    </div>
  );
}
