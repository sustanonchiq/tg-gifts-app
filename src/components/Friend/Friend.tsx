import type { FC } from "react";

import styles from "./Friend.module.scss";

interface FriendProps {
  id: string;
  imgPath: string;
  username: string;
}

const Friend: FC<FriendProps> = () => {
  return (
    <div className={styles.friend}>
      <img
        className={styles.avatar}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nicola_Perscheid_-_Hermann_Göring_um_1918.jpg/250px-Nicola_Perscheid_-_Hermann_Göring_um_1918.jpg"
        alt=""
      />
      <h4 className={styles.username}>Herman Hering</h4>
      <span className={styles.id}>#499203901</span>
    </div>
  );
};

export default Friend;
