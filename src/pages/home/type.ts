export type Column = {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right';
};
export type Payment = {
  id: number;
  coinAmount: string;
  fiatAmount: string;
  status: JSX.Element;
  date: string;
};
export type BalanceProps = {
  title: string;
  price: number;
  img: string;
  bgColor: string;
  symbol: string;
};
