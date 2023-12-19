import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookPro144.module.css";

const MacBookPro144 = () => {
  const navigate = useNavigate();

  const onMacBookPro144Click = useCallback(() => {
    navigate("/macbook-pro-14-6");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/macbook-pro-14-1");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/macbook-pro-14-6");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/macbook-pro-14-5");
  }, [navigate]);

  return (
    <div className={styles.macbookPro144} onClick={onMacBookPro144Click}>
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.forUser}>FOR USER</div>
        <div className={styles.forPolice}>FOR POLICE</div>
      </div>
      <div className={styles.macbookPro144Child} />
      <div className={styles.macbookPro144Item} />
      <div className={styles.macbookPro144Inner} />
      <i className={styles.username}>USERNAME</i>
      <i className={styles.password}>PASSWORD</i>
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-4@2x.png"
        onClick={onRectangle4Click}
      />
      <div className={styles.logIn}>LOG IN</div>
      <div className={styles.policeLogin}>POLICE LOGIN</div>
      <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon1} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon2} alt="" src="/vector@2x.png" />
      <div className={styles.ellipseDiv} />
      <div className={styles.alreadyRegister}>ALREADY REGISTER</div>
      <div className={styles.clickHere}>CLICK HERE</div>
      <img
        className={styles.macbookPro144Child1}
        alt=""
        src="/rectangle-4@2x.png"
        onClick={onRectangle5Click}
      />
      <div className={styles.signIn}>SIGN IN</div>
      <div className={styles.addressBook} />
      <div className={styles.addressBook} />
      <div className={styles.addressBook} />
      <div className={styles.addressBook} />
      <img className={styles.vectorIcon3} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon4} alt="" src="/vector@2x.png" />
    </div>
  );
};

export default MacBookPro144;
