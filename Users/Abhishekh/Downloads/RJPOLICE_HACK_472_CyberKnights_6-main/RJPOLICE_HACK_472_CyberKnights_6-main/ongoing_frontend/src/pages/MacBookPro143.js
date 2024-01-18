import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookPro143.module.css";

const MacBookPro143 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.macbookPro143}>
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.cameraRegistraction}>
          <i className={styles.camera}>{`CAMERA `}</i>
          <i className={styles.registraction}>REGISTRACTION</i>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <i className={styles.resolution}>RESOLUTION</i>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupItem} />
        <i className={styles.recordingCapabilities}>RECORDING CAPABILITIES</i>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupItem} />
        <i className={styles.model}>MODEL</i>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupItem} />
        <i className={styles.name}>NAME</i>
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.groupItem} />
        <i className={styles.name}>MOBILE NO</i>
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.groupItem} />
        <i className={styles.name}>LOCATION</i>
      </div>
      <div className={styles.rectangleParent4}>
        <div className={styles.groupItem} />
        <i className={styles.name}>VISIBILITY RANGE</i>
      </div>
      <div className={styles.rectangleParent5}>
        <div className={styles.groupItem} />
        <i className={styles.name}>EMAIL ID</i>
      </div>
      <img
        className={styles.macbookPro143Child}
        alt=""
        src="/rectangle-7@2x.png"
      />
      <div className={styles.register}>REGISTER</div>
      <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon1} alt="" src="/vector@2x.png" />
      <b className={styles.locateMe}>LOCATE ME?</b>
    </div>
  );
};

export default MacBookPro143;
