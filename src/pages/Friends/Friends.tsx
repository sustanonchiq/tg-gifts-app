import type { FC } from "react";
import MainLayout from "../../layouts/MainLayout";

import styles from "./Friends.module.scss";
import { Search } from "lucide-react";
import Input from "../../shared/ui/Input/Input";
import Button from "../../shared/ui/Button/Button";
import Friend from "../../components/Friend/Friend";

interface FriendsPageProps {}

const FriendsPage: FC<FriendsPageProps> = () => {
  return (
    <MainLayout>
      <div className={styles.ref}>
        <h1 className={styles.title}>Invite Friends</h1>
        <span className={styles.subtitle}>
          Get <b>10%</b> from every deposit
        </span>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h3>2</h3>
            friends invited
          </div>
          <div className={styles.stat}>
            <h3>
              256.74{" "}
              {/* <Icon
                tokenName={TokenName.TON}
                sx={{
                  width: "30px",
                  height: "30px",
                }}
              /> */}
            </h3>
            total earned
          </div>
        </div>
      </div>
      <div className={styles.friends}>
        <h2>Your Friends</h2>
        <div className={styles.add}>
          <Input placeholder="Enter ID" />
          <Button>
            <Search stroke="#fff" strokeWidth={4} width={20} height={20} />
          </Button>
        </div>
      </div>
      <ul className={styles.list}>
        <li>
          <Friend id={""} imgPath={""} username={""} />
        </li>
        <li>
          <Friend id={""} imgPath={""} username={""} />
        </li>
        <li>
          <Friend id={""} imgPath={""} username={""} />
        </li>
        <li>
          <Friend id={""} imgPath={""} username={""} />
        </li>
      </ul>
    </MainLayout>
  );
};

export default FriendsPage;
