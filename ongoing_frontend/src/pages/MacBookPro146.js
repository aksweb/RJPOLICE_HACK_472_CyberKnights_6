import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookPro146.module.css";

const MacBookPro146 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/macbook-pro-14-5");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/macbook-pro-14-7");
  }, [navigate]);

  const onOpenVideoText1Click = useCallback(() => {
    navigate("/macbook-pro-14-7");
  }, [navigate]);

  return (
    <div className={styles.macbookPro146}>
      <img className={styles.r1Icon} alt="" src="/r-1@2x.png" />
      <div className={styles.macbookPro146Child} />
      <div className={styles.macbookPro146Item} />
      <div className={styles.macbookPro146Inner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.macbookPro146Child1} />
      <div className={styles.macbookPro146Child2} />
      <div className={styles.macbookPro146Child3} />
      <div className={styles.macbookPro146Child4} />
      <div className={styles.rectangleDiv} onClick={onRectangleClick} />
      <div className={styles.macbookPro146Child5} />
      <div className={styles.macbookPro146Child6} />
      <div className={styles.macbookPro146Child7} />
      <div className={styles.alerts}>ALERTS</div>
      <div className={styles.bikaner1120pm}>Bikaner-11:20P.M</div>
      <div className={styles.barmer130pm}>Barmer-1:30P.M</div>
      <div className={styles.macbookPro146Child8} onClick={onRectangle4Click} />
      <div className={styles.macbookPro146Child9} />
      <b className={styles.openVideo}>open video</b>
      <b className={styles.openVideo1} onClick={onOpenVideoText1Click}>
        open video
      </b>
    </div>
  );
};

export default MacBookPro146;
