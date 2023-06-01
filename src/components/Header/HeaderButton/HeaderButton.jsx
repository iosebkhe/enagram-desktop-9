import PropTypes from "prop-types";
import ChromeIcon from "../../../assets/icons/icon-chrome.svg";

import styles from "./HeaderButton.module.css";

function HeaderButton({ text, isCTA, hasIcon }) {
  return (
    <button
      className={`${styles.btn}  ${
        isCTA ? styles.btn_CTA : styles.btn_primary
      }`}
    >
      {hasIcon && (
        <img src={ChromeIcon} alt="Chrome Icon" className={styles.btn_icon} />
      )}
      {text}
    </button>
  );
}

HeaderButton.propTypes = {
  text: PropTypes.string,
  isCTA: PropTypes.bool,
  hasIcon: PropTypes.bool,
};

export default HeaderButton;
