import { useState, type FC } from "react";

import styles from "./Profile.module.scss";
import { Icon, TokenName } from "crypto-token-icon";
import Button from "../../shared/ui/Button/Button";
import ConnectWalletButton from "../../shared/ui/ConnectWalletButton/ConnectWalletButton";
import MainLayout from "../../layouts/MainLayout";
import GiftsList from "../../components/GiftsList/GiftsList";
import type { GiftT } from "../../shared/utils/types";
import Tabs from "../../shared/ui/Tabs/Tabs";

import { type GiftsListProps } from "../../components/GiftsList/GiftsList";

interface ProfilePageProps {}

const inventoryData: GiftT[] = [
  {
    id: "dadadkapowdk",
    imgPath:
      "https://miniapp-vmne.onrender.com/assets/EternalRose-Dh4ZtzRq.webp",
    name: "Eternal Rose",
    price: "2.0",
  },
  {
    id: "dadczcad",
    imgPath:
      "https://miniapp-vmne.onrender.com/assets/EternalRose-Dh4ZtzRq.webp",
    name: "Eternal Rose #2",
    price: "2.0",
  },
];

const historyData: GiftT[] = [
  {
    id: "dadadkapowdk",
    imgPath:
      "https://miniapp-vmne.onrender.com/assets/EternalRose-Dh4ZtzRq.webp",
    name: "Eternal Rose #3",
    price: "2.0",
  },
  {
    id: "dadczcad",
    imgPath:
      "https://miniapp-vmne.onrender.com/assets/EternalRose-Dh4ZtzRq.webp",
    name: "Eternal Rose #4",
    price: "2.0",
  },
];

const ProfilePage: FC<ProfilePageProps> = () => {
  return (
    <>
      <header className={styles.profile}>
        <div className={styles["user-data"]}>
          <img
            src="https://naked-science.ru/wp-content/uploads/2018/10/field_image_1505196713_1471532829_1.jpg"
            alt=""
            className={styles.avatar}
          />
          <div className={styles.info}>
            <h2 className={styles.username}>sustanonchiq</h2>
            <span className={styles.id}>#6985493252</span>
          </div>
        </div>
        <div className={styles.balance}>
          <span className={styles.amount}>
            0.00
            <Icon
              tokenName={TokenName.TON}
              sx={{
                width: "45px",
                height: "45px",
              }}
            />
          </span>
          <Button className={styles.topup}>Add Funds</Button>
        </div>
      </header>
      <MainLayout>
        <ConnectWalletButton className={styles["connect-btn"]} />
        <Tabs
          content={[
            {
              title: "Inventory",
              value: <GiftsList itemsList={inventoryData} />,
            },
            {
              title: "History",
              value: <GiftsList itemsList={historyData} />,
            },
          ]}
        />

        {/* <div className={styles.tabs}>
          <button
            onClick={() => setActiveTab("inventory")}
            className={`${styles.tab} ${
              activeTab === "inventory" ? styles.opened : styles.closed
            }`}
          >
            Inventory
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`${styles.tab} ${
              activeTab === "history" ? styles.opened : styles.closed
            }`}
          >
            History
          </button>
        </div>
        <div className={styles["tabs-content"]}>
          <GiftsList
            className={`${styles["list"]} ${
              activeTab === "inventory" ? styles.opened : styles.closed
            }`}
            itemsList={inventoryData}
          />
          <GiftsList
            className={`${styles["list"]} ${
              activeTab === "history" ? styles.opened : styles.closed
            }`}
            itemsList={historyData}
          />
        </div> */}
      </MainLayout>
    </>
  );
};

export default ProfilePage;
