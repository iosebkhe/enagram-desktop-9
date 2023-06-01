import PropTypes from "prop-types";
import styles from "./Tooltip.module.css";

function Tooltip({ text, shortcut, children }) {
  return (
    <div className={styles.tooltip}>
      {children}
      <span className={styles.tooltip_arrow}>
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9958 6.31299L5.99792 6.15547L-1.40667e-05 5.99795L6.15544 0.157538L11.9958 6.31299Z"
            fill="#001849"
          />
        </svg>
      </span>
      <span className={styles.tooltip_text}>
        {text} <span>{shortcut}</span>
      </span>
    </div>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string,
  shortcut: PropTypes.string,
  children: PropTypes.node,
};

export default Tooltip;
