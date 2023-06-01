import PropTypes from "prop-types";
import styles from "./SidebarButton.module.css";

function SidebarButton({ text, isActive, onClick, btnIcon }) {
  return (
    <li
      onClick={() => onClick(text)}
      className={`${styles.sidebar_btn_item} ${
        isActive && styles.sidebar_btn_item_active
      }`}
    >
      <button className={`${styles.btn} ${isActive && styles.btn_active}`}>
        {text === "Spellchecker" ? (
          <span className={styles.btn_icon_span}>{btnIcon}</span>
        ) : (
          btnIcon
        )}
        {text}
      </button>
    </li>
  );
}

SidebarButton.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
  btnIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default SidebarButton;
