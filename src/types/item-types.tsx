export type ItemProps = {
  id: number;
  name: string;
  description: string;
};

export type ItemsProps = {
  items: ItemProps[];
  handleRemoval?: Function;
};
