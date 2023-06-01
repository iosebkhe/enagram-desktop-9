import { RiArrowDropDownLine } from "react-icons/ri";
import userAvatar from "../../../assets/images/avatar.png";
import styles from "./Avatar.module.css";

function Avatar() {
  return (
    <div className={styles.avatar}>
      <img src={userAvatar} alt="" />
      <RiArrowDropDownLine size={24} className={styles.arrowIcon} />
    </div>
  );
}

export default Avatar;
