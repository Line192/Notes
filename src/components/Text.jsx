import React from "react";
import MarkdownView from "react-showdown";
import { useState } from "react/cjs/react.development";
import TextareaMarkdown from "textarea-markdown";
import Ajouter from "./Ajouter";

export default function Text() {
  return (
    <div>
      <div>
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <MarkdownView markdown={text} />
        <Ajouter />
      </div>
    </div>
  );
}
