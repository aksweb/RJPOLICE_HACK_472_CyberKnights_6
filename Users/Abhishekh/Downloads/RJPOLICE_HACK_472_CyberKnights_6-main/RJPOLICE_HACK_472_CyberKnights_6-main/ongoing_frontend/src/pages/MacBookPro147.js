import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookPro147.module.css";

const MacBookPro147 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/macbook-pro-14-6");
  }, [navigate]);

  const onFaceMatchTextClick = useCallback(() => {
    navigate("/macbook-pro-14-6");
  }, [navigate]);

  return (
    <div className={styles.macbookPro147}>
      <img className={styles.d1Icon} alt="" src="/d-1@2x.png" />
      <div className={styles.macbookPro147Child} onClick={onRectangleClick} />
      <div className={styles.macbookPro147Item} />
      <div className={styles.macbookPro147Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.macbookPro147Child1} />
      <b className={styles.faceMatch} onClick={onFaceMatchTextClick}>
        Face match
      </b>
      <b className={styles.luggageDetect}>Luggage detect</b>
      <b className={styles.vehiclesWithNumber}>Vehicles with Number plate</b>
      <b className={styles.movingStandingContainer}>
        <span className={styles.movingStandingContainer1}>
          <p className={styles.movingStanding}>{`Moving & standing peoples`}</p>
        </span>
      </b>
      <b className={styles.animalDetect}>Animal Detect</b>
    </div>
  );
};

export default MacBookPro147;
