import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookPro142.module.css";

const MacBookPro142 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/macbook-pro-14-5");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/macbook-pro-14-3");
  }, [navigate]);

  const onLOGINTextClick = useCallback(() => {
    navigate("/macbook-pro-14-1");
  }, [navigate]);

  return (
    <div className={styles.macbookPro142}>
      <div className={styles.rectangleParent} onClick={onFrameContainerClick}>
        <div className={styles.frameChild} />
        <div className={styles.forUser}>FOR USER</div>
        <div className={styles.forPolice}>FOR POLICE</div>
      </div>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <div className={styles.rectangleDiv} />
          <i className={styles.emailIdphone}>EMAIL ID/PHONE</i>
          <i className={styles.password}>PASSWORD</i>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-4@2x.png"
            onClick={onRectangle3Click}
          />
          <div className={styles.signIn}>SIGN IN</div>
          <div className={styles.userDetals}>USER DETALS</div>
          <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
          <img className={styles.vectorIcon1} alt="" src="/vector@2x.png" />
          <img className={styles.vectorIcon2} alt="" src="/vector@2x.png" />
          <div className={styles.ellipseDiv} />
          <div className={styles.alreadyRegister}>ALREADY REGISTER</div>
          <div className={styles.clickHere}>CLICK HERE</div>
          <img
            className={styles.frameChild1}
            alt=""
            src="/rectangle-4@2x.png"
          />
          <div className={styles.logIn} onClick={onLOGINTextClick}>
            LOG IN
          </div>
          <div className={styles.addressBook} />
          <div className={styles.addressBook} />
          <div className={styles.addressBook} />
          <div className={styles.addressBook} />
          <img className={styles.vectorIcon3} alt="" src="/vector@2x.png" />
          <img className={styles.vectorIcon4} alt="" src="/vector@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default MacBookPro142;
