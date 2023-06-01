import PropTypes from "prop-types";
import styles from "./MainTextarea.module.css";
import { useState } from "react";

function MainTextarea() {
  const [content, setContent] = useState(
    "| Type or paste (⌘+V) something here."
  );

  const handleContentChange = (event) => {
    const newContent = event.target.textContent;
    setContent(newContent);
  };

  return (
    <>
      <div className={styles.textarea_container}>
        <div
          contentEditable
          className={styles.textarea}
          onInput={handleContentChange}
          suppressContentEditableWarning={true}
        >
          {content}
        </div>
      </div>
    </>
  );
}

MainTextarea.propTypes = {
  selectedButton: PropTypes.string,
};

export default MainTextarea;
