import WebApp from "@twa-dev/sdk";

export type UserT = typeof WebApp.initDataUnsafe.user;

export type GiftT = {
  id: string;
  name: string;
  price: string;
  imgPath?: string;
};
