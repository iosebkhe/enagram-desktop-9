import Avatar from "./Avatar/Avatar";
import HeaderButton from "./HeaderButton/HeaderButton";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_btn_wrapper}>
          <HeaderButton text="Add to Chrome" isCTA={false} hasIcon={true} />
          <HeaderButton text="Upgrade to Pro" isCTA={true} hasIcon={false} />
        </div>
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
