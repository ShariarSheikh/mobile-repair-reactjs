import React from "react";
import styles from "../../../styles/components/BrandsWeRepair.module.css";
import personRepairing from "../../../images/personRepairing.webp";

import apple from "../../../images/apple.jpg";
import asus from "../../../images/asus.jpg";
import google from "../../../images/google.jpg";
import honor from "../../../images/honor.jpg";
import huawei from "../../../images/huawei.jpg";
import lenovo from "../../../images/lenovo.jpg";
import mi from "../../../images/mi.jpg";
import motorola from "../../../images/motorola.jpg";
import nokia from "../../../images/nokia.jpg";
import oneplus from "../../../images/oneplus.jpg";
import oppo from "../../../images/oppo.jpg";
import poco from "../../../images/poco.jpg";
import realme from "../../../images/realme.jpg";
import samsung from "../../../images/samsung.jpg";

const allBrands = [
  {
    id: 1,
    photo: apple,
  },
  {
    id: 2,
    photo: samsung,
  },
  {
    id: 3,
    photo: asus,
  },
  {
    id: 4,
    photo: realme,
  },
  {
    id: 5,
    photo: apple,
  },
  {
    id: 6,
    photo: google,
  },
  {
    id: 7,
    photo: honor,
  },
  {
    id: 8,
    photo: huawei,
  },
  {
    id: 9,
    photo: lenovo,
  },
  {
    id: 10,
    photo: mi,
  },
  {
    id: 11,
    photo: motorola,
  },
  {
    id: 12,
    photo: nokia,
  },
  {
    id: 13,
    photo: oneplus,
  },
  {
    id: 14,
    photo: oppo,
  },
  {
    id: 15,
    photo: poco,
  },
];

const BrandsWeRepair = () => {
  return (
    <div>
      <div className={styles.BrandsWeRepair}>
        <div className={styles.BrandsWeRepair_first_div}>
          <h1 className="text-3xl font-bold mb-4 text-gray-500">
            Brands We Repair
          </h1>
          <img src={personRepairing} alt="personRepairing" />
        </div>
        <div className="flex flex-row flex-wrap self-center">
          {allBrands.slice(0, 10).map((brands) => (
            <div key={brands.id} className="bg-white ml-4 mb-4 rounded-sm cursor-pointer">
              <img width="100" src={brands.photo} alt="brands" />
            </div>
          ))}
          <div style={{width:"100px",height:"100px",display:"flex"}} className="justify-center items-center">
            <p className="underline text-gray-700 cursor-pointer">More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsWeRepair;
