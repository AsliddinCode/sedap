import React from "react";
import styles from "./StatCal.module.css";
function Calendar() {
  return (
    <div className={styles["select"]}>
      <div className={styles["selct-img"]}>
        <img className={styles["calendar"]} src="/calendar.png" alt="" />
        <select className={styles['selects']} name="Calendar" id="">
          <option value="Today">Today</option>
        </select>
      </div>
    </div>
  );
}

export default Calendar;
