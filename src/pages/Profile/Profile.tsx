import { type FC } from "react";

import styles from "./Profile.module.scss";
import ConnectWalletButton from "../../shared/ui/ConnectWalletButton/ConnectWalletButton";
import MainLayout from "../../layouts/MainLayout";
import GiftsList from "../../components/GiftsList/GiftsList";
import type { GiftT } from "../../shared/utils/types";
import Tabs from "../../shared/ui/Tabs/Tabs";

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
