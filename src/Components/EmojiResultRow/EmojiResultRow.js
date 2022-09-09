import React from "react";
import Clipboard from "clipboard";
import "./EmojiResultRow.css";


function EmojiResultRow({ symbol, title }) {
  const codePointHex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  const ClipboardEmoji = new Clipboard(".copy-to-clipboard");

  function copyEmoji() {

    ClipboardEmoji.on('success', function (e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);

      e.clearSelection();
    });

  }

  return (
    <div onClick={() => copyEmoji()}
      id="div"
      className="component-emoji-result-row copy-to-clipboard"
      data-clipboard-text={symbol}
    >
      <img alt={title} src={src} />
      <span className="title">{title}</span>
      <span className="info">Click to copy emoji</span>
    </div>
  );
}

export default EmojiResultRow
