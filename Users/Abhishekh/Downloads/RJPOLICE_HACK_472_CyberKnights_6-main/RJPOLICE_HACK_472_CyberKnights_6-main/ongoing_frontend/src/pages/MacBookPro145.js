import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookPro145.module.css";

const MacBookPro145 = () => {
  const navigate = useNavigate();

  const onMacBookPro145Click = useCallback(() => {
    navigate("/macbook-pro-14-6");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSIGNINTextClick = useCallback(() => {
    navigate("/macbook-pro-14-6");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/macbook-pro-14-4");
  }, [navigate]);

  return (
    <div className={styles.macbookPro145} onClick={onMacBookPro145Click}>
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.forUser}>FOR USER</div>
        <div className={styles.forPolice}>FOR POLICE</div>
      </div>
      <div className={styles.macbookPro145Child} />
      <div className={styles.macbookPro145Item} />
      <div className={styles.macbookPro145Inner} />
      <i className={styles.policeId}>POLICE ID</i>
      <i className={styles.password}>PASSWORD</i>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-4@2x.png" />
      <div className={styles.signIn} onClick={onSIGNINTextClick}>
        SIGN IN
      </div>
      <div className={styles.policeDetals}>POLICE DETALS</div>
      <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon1} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon2} alt="" src="/vector@2x.png" />
      <div className={styles.ellipseDiv} />
      <div className={styles.alreadyRegister}>ALREADY REGISTER</div>
      <div className={styles.clickHere}>CLICK HERE</div>
      <img
        className={styles.macbookPro145Child1}
        alt=""
        src="/rectangle-4@2x.png"
        onClick={onRectangle5Click}
      />
      <div className={styles.logIn}>LOG IN</div>
      <div className={styles.addressBook} />
      <div className={styles.addressBook} />
      <div className={styles.addressBook} />
      <div className={styles.addressBook} />
      <img className={styles.vectorIcon3} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon4} alt="" src="/vector@2x.png" />
    </div>
  );
};

export default MacBookPro145;
