import { useState, type FC } from "react";
import MainLayout from "../../layouts/MainLayout";
import Menu from "../../components/Menu/Menu";

import styles from "./Upgrade.module.scss";
import { Icon, TokenName } from "crypto-token-icon";
import Tabs from "../../shared/ui/Tabs/Tabs";
import type { GiftT } from "../../shared/utils/types";
import FortuneWheel from "../../components/FortuneWheel/FortuneWheel";

interface UpgradePageProps {}

const inventoryData: GiftT[] = [
  {
    id: "dadadkapowdk",
    imgPath:
      "https://naked-science.ru/wp-content/uploads/2018/10/field_image_1505196713_1471532829_1.jpg",
    name: "Eternal Rose",
    price: "2.0",
  },
  {
    id: "dadczcad",
    imgPath:
      "https://naked-science.ru/wp-content/uploads/2018/10/field_image_1505196713_1471532829_1.jpg",
    name: "Eternal Rose #2",
    price: "2.0",
  },
  {
    id: "dadadkapowdk2",
    imgPath:
      "https://naked-science.ru/wp-content/uploads/2018/10/field_image_1505196713_1471532829_1.jpg",
    name: "Eternal Rose",
    price: "2.0",
  },
  {
    id: "dadczcad2",
    imgPath:
      "https://naked-science.ru/wp-content/uploads/2018/10/field_image_1505196713_1471532829_1.jpg",
    name: "Eternal Rose #2",
    price: "2.0",
  },
  {
    id: "dadadkapowdk3",
    imgPath:
      "https://naked-science.ru/wp-content/uploads/2018/10/field_image_1505196713_1471532829_1.jpg",
    name: "Eternal Rose",
    price: "2.0",
  },
  {
    id: "dadczcad3",
    imgPath:
      "https://naked-science.ru/wp-content/uploads/2018/10/field_image_1505196713_1471532829_1.jpg",
    name: "Eternal Rose #2",
    price: "2.0",
  },
];

const desiredData: GiftT[] = [
  {
    id: "dadadkapowdk4",
    imgPath:
      "https://naked-science.ru/wp-content/uploads/2018/10/field_image_1505196713_1471532829_1.jpg",
    name: "Eternal Rose #3",
    price: "2.0",
  },
  {
    id: "dadczcad4",
    imgPath:
      "https://naked-science.ru/wp-content/uploads/2018/10/field_image_1505196713_1471532829_1.jpg",
    name: "Eternal Rose #4",
    price: "2.0",
  },
];

const UpgradePage: FC<UpgradePageProps> = () => {
  const [selectedGiftsIds, setSelectedGiftsIds] = useState<{
    selected: string[];
    desired: string;
  }>({
    selected: [],
    desired: "",
  });

  return (
    <MainLayout>
      <FortuneWheel />
      <h1 className={styles.title}>Choose gifts to upgrade</h1>
      <Tabs
        content={[
          {
            title: "Inventory",
            value: (
              <ul className={styles.inventory}>
                {inventoryData.map(({ id, name, price }) => {
                  const isGiftSelected = selectedGiftsIds.selected.includes(id);

                  return (
                    <li
                      key={id}
                      onClick={() =>
                        setSelectedGiftsIds((prev) => ({
                          ...selectedGiftsIds,
                          selected: isGiftSelected
                            ? prev.selected.filter((item) => item !== id)
                            : [...prev.selected, id],
                        }))
                      }
                      className={`${styles.item} ${
                        isGiftSelected ? styles.selected : ""
                      }`}
                    >
                      <img
                        className={styles.pict}
                        src="https://naked-science.ru/wp-content/uploads/2018/10/field_image_1505196713_1471532829_1.jpg"
                        alt=""
                      />
                      <h4 className={styles.name}>{name}</h4>
                      <span className={styles.price}>
                        {price}{" "}
                        <Icon
                          tokenName={TokenName.TON}
                          sx={{
                            width: "25px",
                            height: "25px",
                          }}
                        />
                      </span>
                    </li>
                  );
                })}
              </ul>
            ),
          },
          {
            title: "Desired gifts",
            value: (
              <ul className={styles.inventory}>
                {desiredData.map(({ id, name, price }) => {
                  const isGiftSelected = selectedGiftsIds.selected.includes(id);
                  return (
                    <li
                      key={id}
                      onClick={() =>
                        setSelectedGiftsIds((prev) => ({
                          ...selectedGiftsIds,
                          selected: isGiftSelected
                            ? [...prev.selected, id]
                            : prev.selected.filter((item) => item !== id),
                        }))
                      }
                      className={`${styles.item} ${
                        isGiftSelected ? styles.selected : ""
                      }`}
                    >
                      <img
                        className={styles.pict}
                        src="https://naked-science.ru/wp-content/uploads/2018/10/field_image_1505196713_1471532829_1.jpg"
                        alt=""
                      />
                      <h4 className={styles.name}>{name}</h4>
                      <span className={styles.price}>
                        {price}{" "}
                        <Icon
                          tokenName={TokenName.TON}
                          sx={{
                            width: "25px",
                            height: "25px",
                          }}
                        />
                      </span>
                    </li>
                  );
                })}
              </ul>
            ),
          },
        ]}
      />

      <Menu />
    </MainLayout>
  );
};

export default UpgradePage;
