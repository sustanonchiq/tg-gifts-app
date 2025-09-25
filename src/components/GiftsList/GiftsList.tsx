import type { FC } from "react";
import type { GiftT } from "../../shared/utils/types";

import styles from "./GiftsLift.module.scss";

export interface GiftsListProps extends React.HTMLAttributes<HTMLUListElement> {
  itemsList: GiftT[];
}

const GiftsList: FC<GiftsListProps> = ({ itemsList, className }) => {
  return (
    <ul className={`${styles["list"]} ${className ? className : ""}`}>
      {itemsList.map(({ id, name, price, imgPath }) => (
        <li className={styles["list-item"]}>
          <div className={styles["gift"]} key={id}>
            <img src={imgPath} alt={name} className={styles["picture"]} />
            <div className={styles["info"]}>
              <h3 className={styles["name"]}>{name}</h3>
              <span className={styles.price}>
                {price}
                {/* <Icon
                  tokenName={TokenName.TON}
                  sx={{
                    width: "40px",
                    height: "40px",
                  }}
                /> */}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GiftsList;
