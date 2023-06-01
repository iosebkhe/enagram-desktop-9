import { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

import styles from "./App.module.css";

function App() {
  const [activeButton, setActiveButton] = useState("Spellchecker");

  const buttonActiveHandler = (btnText) => {
    setActiveButton(btnText);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar
          onActiveBtnHandler={buttonActiveHandler}
          activeButton={activeButton}
        />
        <Main selectedButton={activeButton} />
      </div>
    </>
  );
}

export default App;
