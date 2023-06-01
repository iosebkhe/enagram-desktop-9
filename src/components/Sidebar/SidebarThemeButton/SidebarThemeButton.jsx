import PropTypes from "prop-types";
import SunIcon from "../../../assets/icons/icon-sun.svg";
import MoonIcon from "../../../assets/icons/icon-moon.svg";
import styles from "./SidebarThemeButton.module.css";

function SidebarThemeButton({ themeIcon }) {
  function renderIcon() {
    if (themeIcon === "sun") {
      return <img src={SunIcon} alt="Sun Icon" />;
    } else if (themeIcon === "moon") {
      return <img src={MoonIcon} alt="Moon Icon" />;
    }
  }

  return <button className={styles.btn}>{renderIcon()}</button>;
}

SidebarThemeButton.propTypes = {
  themeIcon: PropTypes.string,
};

export default SidebarThemeButton;
