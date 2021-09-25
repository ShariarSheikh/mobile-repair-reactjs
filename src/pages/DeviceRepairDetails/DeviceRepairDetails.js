import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styles from "../../styles/pagesStyles/DeviceRepairDetails.module.css";

const DeviceRepairDetails = () => {
  const [device, setDevice] = useState();
  const { devicename } = useParams();


  return (
    <div id={styles.DeviceRepairDetails} >
      <div id={styles.DeviceRepairDetails_container}>
        <h1>name {devicename}</h1>
      </div>
    </div>
  );
};

export default DeviceRepairDetails;
