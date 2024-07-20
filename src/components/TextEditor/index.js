import React, { useEffect } from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-splitbuttons/styles/material.css";
import "@syncfusion/ej2-react-richtexteditor/styles/material.css";

const TextEditor = ({ content, setContent }) => {
  const toolbarSettings = {
    items: [
      "Bold",
      "Italic",
      "Underline",
      "StrikeThrough",
      "FontName",
      "FontSize",
      "FontColor",
      "BackgroundColor",
      "LowerCase",
      "UpperCase",
      "|",
      "Formats",
      "Alignments",
      "OrderedList",
      "UnorderedList",
      "Outdent",
      "Indent",
      "|",
      "CreateLink",
      "Image",
      "|",
      "ClearFormat",
      "Print",
      "SourceCode",
      "FullScreen",
      "|",
      "Undo",
      "Redo",
    ],
  };

  const quickToolbarSettings = {
    image: [
      "Replace",
      "Align",
      "Caption",
      "Remove",
      "InsertLink",
      "OpenImageLink",
      "-",
      "EditImageLink",
      "RemoveImageLink",
      "Display",
      "AltText",
      "Dimension",
    ],
    link: ["Open", "Edit", "UnLink"],
  };

  useEffect(() => {
    if (content) {
      editorRef.current.value = content;
    }
  }, [content]);

  const editorRef = React.createRef();

  const handleEditorChange = (event) => {
    setContent(event.value);
  };

  return (
    <RichTextEditorComponent
      ref={editorRef}
      height="100%"
      toolbarSettings={toolbarSettings}
      quickToolbarSettings={quickToolbarSettings}
      change={handleEditorChange}
      value={content} 
    >
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
};

export default TextEditor;
