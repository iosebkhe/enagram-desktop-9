import PropTypes from "prop-types";
import MainButton from "./MainButton/MainButton";
import MainTextarea from "./MainTextarea/MainTextarea";
import TextStyleOptions from "./TextStyleOptions/TextStyleOptions";
import {
  RiFileCopyLine,
  RiDeleteBinLine,
  RiArrowDropDownLine,
} from "react-icons/ri";
import flagUk from "../../assets/icons/icon-uk.svg";
import styles from "./Main.module.css";

function Main({ selectedButton }) {
  return (
    <div className={styles.main}>
      <div className={styles.top_section}>
        <MainButton selectedButton={selectedButton} />
        <div className={styles.feature_btn_box}>
          <span>
            <button
              className={`${styles.btn_feature} ${styles.btn_feature_active}`}
            >
              <RiFileCopyLine size={24} /> Copy
            </button>
            <button className={`${styles.btn_feature}`}>
              <RiDeleteBinLine size={24} /> Delete
            </button>
          </span>
          <div className={styles.lang_dropdown}>
            <img src={flagUk} alt="UK Flag" />
            <span>Language</span>
            <RiArrowDropDownLine size={24} />
          </div>
        </div>
      </div>
      <MainTextarea />
      <TextStyleOptions words={103} characters={628} />
    </div>
  );
}

Main.propTypes = {
  selectedButton: PropTypes.string,
};

export default Main;
