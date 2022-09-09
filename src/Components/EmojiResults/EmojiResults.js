import React from "react";

import EmojiResultRow from "../EmojiResultRow/EmojiResultRow";
import "./EmojiResults.css";

export default function EmojiResults({emojiData}){
  
    return (
      <div className="component-emoji-results">
        {emojiData.map(emojiData => (
          <EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        ))}
      </div>
    )
}
