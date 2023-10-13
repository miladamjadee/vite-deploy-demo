/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Chart from 'react-apexcharts';
import { Table } from '../components';

type Column = {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right';
};

const columns: Column[] = [
  { id: 'id', label: 'ID' },
  { id: 'coinAmount', label: 'Coin Amount' },
  { id: 'fiatAmount', label: 'Fiat Amount' },
  { id: 'date', label: 'Date' },
  { id: 'status', label: 'Status' },
];

type Payment = {
  id: number;
  coinAmount: string;
  fiatAmount: string;
  status: JSX.Element;
  date: string;
};

export const Home = () => {
  const [payments, setPayments] = React.useState<Payment[]>([
    {
      id: 132457,
      coinAmount: '14.3 USDT',
      fiatAmount: '$14.3',
      status: (
        <Stack width={60}>
          <Chip
            label="VERIFIED"
            sx={{
              bgcolor: '#69E381',
              color: '#FFFFFF',
              fontSize: '10px',
              maxWidth: '79px',
              width: '79px',
              height: '21px',
              textTransform: 'lowercase',
            }}
          />
        </Stack>
      ),
      date: '2023-05-21 14:56',
    },
    {
      id: 132458,
      coinAmount: '14.3 USDT',
      fiatAmount: '$14.3',
      status: (
        <Stack width={60}>
          <Chip
            label="Pending"
            sx={{
              bgcolor: '#FFB82A',
              color: '#FFFFFF',
              fontSize: '10px',
              maxWidth: '79px',
              width: '79px',
              height: '21px',
              textTransform: 'lowercase',
            }}
          />
        </Stack>
      ),
      date: '2023-05-21 14:56',
    },
    {
      id: 132459,
      coinAmount: '14.3 USDT',
      fiatAmount: '$14.3',
      status: (
        <Stack width={60}>
          <Chip
            label="Expired"
            sx={{
              bgcolor: '#FF5D5D',
              color: '#FFFFFF',
              fontSize: '10px',
              maxWidth: '79px',
              width: '79px',
              height: '21px',
              textTransform: 'lowercase',
            }}
          />
        </Stack>
      ),
      date: '2023-05-21 14:56',
    },
  ]);
  const [chart, setChart] = React.useState({
    series: [
      {
        name: 'loss',
        data: [44, 55, 57, 56, 61, 58, 63],
      },
      {
        name: 'benefit',
        data: [76, 85, 101, 98, 87, 105, 91],
      },
    ],
    options: {
      chart: {
        id: 'apexchart-example',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
      },
      toolbar: {
        show: false,
      },
      colors: ['#864AFF', '#46E9E0'],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 8,
          columnWidth: '35%',
          endingShape: 'rounded',
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7],
      },
      // yaxis: {
      //   title: {
      //     text: 'Temperature',
      //   },
      //   min: 5,
      //   max: 40,
      // },
      legend: {
        position: 'top' as const,
        offsetY: 0,
        offsetX: 760,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          },
        },
      },
    },
  });
  return (
    <Stack gap={1} height="100%">
      <Stack flexDirection="row" gap={1}>
        <Container
          style={{ padding: 15 }}
          sx={(theme) => ({
            // maxWidth: '337px',
            m: 0,
            backgroundColor: theme.palette.background.default,
            borderRadius: theme.spacing(2),
            boxShadow: '0px 4px 4px 0px #C7D3D680',
            padding: theme.spacing(1),
          })}
        >
          <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
            <Typography color="#777777" style={{ fontWeight: 400, fontSize: 11 }}>
              Today Payments
            </Typography>
            <Typography color="#1E1E56" style={{ fontWeight: 700, fontSize: 20, fontFamily: 'Poppins-bold' }}>
              $5,544.0
            </Typography>
          </Stack>
        </Container>
        <Container
          style={{ padding: 15 }}
          sx={(theme) => ({
            // maxWidth: '337px',
            m: 0,
            backgroundColor: theme.palette.background.default,
            borderRadius: theme.spacing(2),
            boxShadow: '0px 4px 4px 0px #C7D3D680',
            padding: theme.spacing(1),
          })}
        >
          <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
            <Typography color="#777777" style={{ fontWeight: 400, fontSize: 11 }}>
              Total Balance
            </Typography>
            <Typography color="#1E1E56" style={{ fontWeight: 700, fontSize: 20, fontFamily: 'Poppins-bold' }}>
              $5,544.0
            </Typography>
          </Stack>
        </Container>
        <Container
          style={{ padding: 15 }}
          sx={(theme) => ({
            // maxWidth: '337px',
            m: 0,
            backgroundColor: theme.palette.background.default,
            borderRadius: theme.spacing(2),
            boxShadow: '0px 4px 4px 0px #C7D3D680',
            padding: theme.spacing(1),
          })}
        >
          <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
            <Typography color="#777777" style={{ fontWeight: 400, fontSize: 11 }}>
              Total Payments
            </Typography>
            <Typography color="#1E1E56" style={{ fontWeight: 700, fontSize: 20, fontFamily: 'Poppins-bold' }}>
              $345
            </Typography>
          </Stack>
        </Container>
      </Stack>
      <Container
        maxWidth="xl"
        style={{ padding: 15 }}
        sx={(theme) => ({
          // maxWidth: '714px',
          height: '429px',
          m: 0,
          backgroundColor: theme.palette.background.default,
          borderRadius: theme.spacing(2),
          boxShadow: '0px 4px 4px 0px #C7D3D680',
          padding: theme.spacing(1),
        })}
      >
        <Typography color="#1E1E56" style={{ fontWeight: 700, fontSize: 20, fontFamily: 'Poppins-bold' }}>
          Payments
        </Typography>

        <Typography color="#2C2738" style={{ fontWeight: 400, fontSize: 25 }}>
          $100,852,223.68
        </Typography>
        <Typography color="#728191" style={{ fontWeight: 400, fontSize: 14 }}>
          Description
        </Typography>

        <Chart options={chart.options} series={chart.series} type="bar" width="100%" height={300} />
      </Container>
      <Container
        maxWidth="xl"
        style={{ padding: 15 }}
        sx={(theme) => ({
          // maxWidth: '714px',
          m: 0,
          backgroundColor: theme.palette.background.default,
          borderRadius: theme.spacing(2),
          boxShadow: '0px 4px 4px 0px #C7D3D680',
          padding: theme.spacing(1),
          height: '100%',
          overflow: 'auto',
        })}
      >
        <Stack gap={1.2} flex={1}>
          <Typography color="#1E1E56" style={{ fontWeight: 700, fontSize: 20, fontFamily: 'Poppins-bold' }}>
            Transactions
          </Typography>
          <Table data={payments} columns={columns} />
        </Stack>
      </Container>
    </Stack>
  );
};
