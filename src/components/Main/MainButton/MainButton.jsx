import PropTypes from "prop-types";
import {
  RiCheckFill,
  RiVolumeUpFill,
  RiRecordCircleFill,
} from "react-icons/ri";
import styles from "./MainButton.module.css";

function MainButton({ selectedButton }) {
  let buttonText = "";
  let buttonIcon = null;

  if (selectedButton === "Spellchecker") {
    buttonText = "Check";
    buttonIcon = <RiCheckFill size={24} className={styles.icon} />;
  } else if (selectedButton === "Text to speech") {
    buttonText = "Speech";
    buttonIcon = <RiVolumeUpFill size={24} className={styles.icon} />;
  } else if (selectedButton === "Speech to text") {
    buttonText = "Record";
    buttonIcon = <RiRecordCircleFill size={24} className={styles.icon} />;
  } else {
    buttonText = "Check";
    buttonIcon = <RiCheckFill size={24} className={styles.icon} />;
  }

  return (
    <button className={styles.main_btn}>
      {buttonIcon}
      {buttonText}
    </button>
  );
}

MainButton.propTypes = {
  selectedButton: PropTypes.string,
};

export default MainButton;
