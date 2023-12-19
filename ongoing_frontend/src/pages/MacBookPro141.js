import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookPro141.module.css";

const MacBookPro141 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/macbook-pro-14-4");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/macbook-pro-14-3");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.macbookPro141}>
      <div className={styles.macbookPro141Child} />
      <div className={styles.macbookPro141Item} />
      <div className={styles.macbookPro141Inner} />
      <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
      <i className={styles.password}>PASSWORD</i>
      <div className={styles.logIn}>LOG IN</div>
      <div className={styles.register}>REGISTER</div>
      <div className={styles.forgetPassword}>FORGET PASSWORD?</div>
      <div className={styles.forUserLog}>FOR USER LOG IN</div>
      <div className={styles.lock} />
      <img className={styles.vectorIcon1} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon2} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon3} alt="" src="/vector@2x.png" />
      <div className={styles.rectangleParent} onClick={onFrameContainerClick}>
        <div className={styles.frameChild} />
        <div className={styles.forUser}>FOR USER</div>
        <div className={styles.forPolice}>FOR POLICE</div>
      </div>
      <div className={styles.gofore} />
      <div className={styles.gofore} />
      <div className={styles.gofore} />
      <div className={styles.newUser}>NEW USER</div>
      <div className={styles.clickHere}>CLICK HERE</div>
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-4@2x.png"
        onClick={onRectangle3Click}
      />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.macbookPro141Child1}
        alt=""
        src="/rectangle-4@2x.png"
        onClick={onRectangle4Click}
      />
      <img className={styles.vectorIcon4} alt="" src="/vector@2x.png" />
      <i className={styles.username}>USERNAME</i>
    </div>
  );
};

export default MacBookPro141;
