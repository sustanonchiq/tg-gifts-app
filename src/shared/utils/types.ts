export type UserT = {
  balance: number;
  id?: number | undefined;
  is_bot?: boolean | undefined;
  first_name?: string | undefined;
  last_name?: string | undefined;
  username?: string | undefined;
  language_code?: string | undefined;
  is_premium?: boolean | undefined;
  photo_url?: string | undefined;
  added_to_attachment_menu?: boolean | undefined;
  allows_write_to_pm?: boolean | undefined;
};

export type GiftT = {
  id: string;
  name: string;
  price: string;
  imgPath?: string;
};
