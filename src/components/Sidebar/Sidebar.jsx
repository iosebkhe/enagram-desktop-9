import PropTypes from "prop-types";
import SidebarButton from "./SidebarButton/SidebarButton";
import SidebarButtonList from "./SidebarButtonList/SidebarButtonList";
import SidebarThemeButton from "./SidebarThemeButton/SidebarThemeButton";
import {
  RiCheckLine,
  RiVoiceprintLine,
  RiWebcamLine,
  RiSettings5Line,
  RiFacebookCircleLine,
  RiQuestionLine,
} from "react-icons/ri";
import styles from "./Sidebar.module.css";

// selectedButton, onButtonClick,
function Sidebar({ onActiveBtnHandler, activeButton }) {
  return (
    <div className={styles.sidebar}>
      <SidebarButtonList>
        <SidebarButton
          text="Spellchecker"
          isActive={activeButton === "Spellchecker"}
          onClick={onActiveBtnHandler}
          btnIcon={<RiCheckLine size={28} />}
        />
        <SidebarButton
          text="Text to speech"
          isActive={activeButton === "Text to speech"}
          onClick={onActiveBtnHandler}
          btnIcon={<RiVoiceprintLine size={24} />}
        />
        <SidebarButton
          text="Speech to text"
          isActive={activeButton === "Speech to text"}
          onClick={onActiveBtnHandler}
          btnIcon={<RiWebcamLine size={24} />}
        />
      </SidebarButtonList>

      <div className={styles.divider} />
      <div className={styles.middle_btn_box}>
        <SidebarButtonList>
          <SidebarButton
            text="Settings"
            isActive={activeButton === "Settings"}
            onClick={onActiveBtnHandler}
            btnIcon={<RiSettings5Line size={24} />}
          />
          <SidebarButton
            text="Facebook"
            isActive={activeButton === "Facebook"}
            onClick={onActiveBtnHandler}
            btnIcon={<RiFacebookCircleLine size={24} />}
          />
          <SidebarButton
            text="Contact Support"
            isActive={activeButton === "Contact Support"}
            onClick={onActiveBtnHandler}
            btnIcon={<RiQuestionLine size={24} />}
          />
        </SidebarButtonList>
      </div>
      <div className={styles.divider} />
      <div className={styles.theme_btn_box}>
        <div className={styles.theme_btn_box_inner}>
          <SidebarThemeButton themeIcon="sun" />
          <SidebarThemeButton themeIcon="moon" />
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  onActiveBtnHandler: PropTypes.func,
  activeButton: PropTypes.string,
};

export default Sidebar;
