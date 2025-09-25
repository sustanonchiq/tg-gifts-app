import { useState, type FC, type ReactElement, type ReactNode } from "react";

import styles from "./Tabs.module.scss";

interface TabsProps {
  content: {
    title: string;
    value: ReactElement;
  }[];
}

const Tabs: FC<TabsProps> = ({ content }) => {
  const [activeTab, setActiveTab] = useState<(typeof content)[number]["title"]>(
    content[0].title
  );

  return (
    <>
      <div className={styles.tabs}>
        {content.map((item) => {
          return (
            <button
              onClick={() => setActiveTab(item.title)}
              className={`${styles.tab} ${
                activeTab === item.title ? styles.opened : styles.closed
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div className={styles["tabs-content"]}>
        {
          content.map((item) => (
            <div
              className={`${styles.content} ${
                activeTab === item.title ? styles.opened : styles.closed
              }`}
            >
              {item.value}
            </div>
          )) as ReactNode
        }
      </div>
    </>
  );
};

export default Tabs;
