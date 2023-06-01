import { useState } from "react";
import PropTypes from "prop-types";
import Tooltip from "../Tooltip/Tooltip";
import styles from "./TextStyleOptions.module.css";

function TextStyleIcon({ icon: IconComponent, tooltipText, shortcut }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  return (
    <span
      className={`${styles.text_style} ${
        isHovered ? styles.text_style_active : ""
      }`}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
      onClick={handleHoverEnter}
    >
      <IconComponent size={24} />
      {isHovered && <Tooltip text={tooltipText} shortcut={shortcut} />}
    </span>
  );
}

TextStyleIcon.propTypes = {
  icon: PropTypes.elementType,
  tooltipText: PropTypes.string,
  shortcut: PropTypes.string,
};

export default TextStyleIcon;
