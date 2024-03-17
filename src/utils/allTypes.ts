// All Types.

export type ItemType = {
  id: number;
};

export type LoginUserType = {
  username: string;
  password: string;
};

export type DeleteItemType = {
  index: number;
};

export type UpdateItemType = {
  id: number;
  body: {
    title: string;
  };
};

export type CreateItemType = {
  body: {
    title: string;
  };
};
