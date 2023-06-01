import React from "react";
import PropTypes from "prop-types";
import TextStyleIcon from "./TextStyleIcon";
import {
  RiBold,
  RiItalic,
  RiUnderline,
  RiListUnordered,
  RiListOrdered,
  RiH1,
  RiH2,
  RiLinkM,
  RiFormatClear,
} from "react-icons/ri";
import logoFooter from "../../../assets/images/logo-no-bg.svg";
import styles from "./TextStyleOptions.module.css";

const iconConfigurations = [
  {
    icon: RiBold,
    tooltipText: "Bold",
    shortcut: "Ctrl+B",
  },
  {
    icon: RiItalic,
    tooltipText: "Italic",
    shortcut: "Ctrl+I",
  },
  {
    icon: RiUnderline,
    tooltipText: "Underline",
    shortcut: "Ctrl+U",
  },
  {
    icon: RiListUnordered,
    tooltipText: "Bullets",
    shortcut: "Ctrl+Shift+8",
  },
  {
    icon: RiListOrdered,
    tooltipText: "Numbered",
    shortcut: "Ctrl+Shift+7",
  },
  {
    icon: RiH1,
    tooltipText: "Heading 1",
    shortcut: "",
  },
  {
    icon: RiH2,
    tooltipText: "Heading 2",
    shortcut: "",
  },
  {
    icon: RiLinkM,
    tooltipText: "Link",
    shortcut: "",
  },
  {
    icon: RiFormatClear,
    tooltipText: "Clear",
    shortcut: "",
  },
];

function TextStyleOptions({ words, characters }) {
  return (
    <div className={styles.text_style_options}>
      <div className={styles.text_style_options_wrapper}>
        {iconConfigurations.map((config, index) => (
          <React.Fragment key={index}>
            <TextStyleIcon
              icon={config.icon}
              tooltipText={config.tooltipText}
              shortcut={config.shortcut}
            />
            {index === 2 && <div className={styles.text_style_divider}></div>}
            {index === 4 && <div className={styles.text_style_divider}></div>}
            {index === 6 && <div className={styles.text_style_divider}></div>}
            {index === 7 && <div className={styles.text_style_divider}></div>}
          </React.Fragment>
        ))}
        <span className={styles.text_style_count}>
          {characters} characters, {words} words
        </span>
      </div>
      <div className={styles.logo_footer}>
        <a href="">
          <img src={logoFooter} alt="" />
        </a>
      </div>
    </div>
  );
}

TextStyleOptions.propTypes = {
  words: PropTypes.number,
  characters: PropTypes.number,
};

export default TextStyleOptions;
