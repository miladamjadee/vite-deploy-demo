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