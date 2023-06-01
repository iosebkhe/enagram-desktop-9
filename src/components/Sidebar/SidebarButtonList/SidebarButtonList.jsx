import PropTypes from "prop-types";
import styles from "./SidebarButtonList.module.css";

function SidebarButtonList({ children }) {
  return <ul className={styles.sidebar_btn_list}>{children}</ul>;
}

SidebarButtonList.propTypes = {
  children: PropTypes.node,
};

export default SidebarButtonList;
