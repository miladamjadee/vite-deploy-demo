/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chart from 'react-apexcharts';
import ripple from '/assets/ripple.png';
import bitcoin from '/assets/bitcoin.png';
import ethereum from '/assets/ethereum.png';
import stellar from '/assets/stellar.png';
import { Table } from '../../components';
import { columns, data } from './mock';
import { Balance } from './components';
import { Payment } from './type';

export const Home = () => {
  const [payments, setPayments] = React.useState<Payment[]>(data);
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
        offsetX: 520,
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
  const [donut, setDonut] = React.useState({
    series: [45, 55, 35, 33],
    options: {
      dataLabels: {
        enabled: false,
      },
      labels: ['Bitcoin', 'Ripple', 'Ethereum', 'Stellar'],
      colors: ['#FFB82A', '#11296A', '#6A87F8', '#000'],
      // responsive: [
      //   {
      //     breakpoint: 480,
      //     options: {
      //       chart: {
      //         width: 200,
      //       },
      //       legend: {
      //         show: false,
      //       },
      //     },
      //   },
      // ],
      // plotOptions: {
      //   pie: {
      //     startAngle: -110,
      //     endAngle: 250,
      //     offsetY: 10,
      //   },
      // },
      fill: {
        type: 'gradient',
      },
      legend: {
        position: 'bottom' as const,
        offsetY: 0,
        offsetX: -50,
        height: 50,
        borderRadius: 0,
        formatter: function (val, opts) {
          return opts.w.globals.series[opts.seriesIndex] + ' % ' + ' - ' + val;
        },
      },
    },
  });

  return (
    <Stack direction="row" gap={1}>
      <Stack gap={1} height="100%" flex={3}>
        <Container
          maxWidth="xl"
          style={{ padding: 15 }}
          sx={(theme) => ({
            height: '399px',
            m: 0,
            backgroundColor: theme.palette.background.default,
            borderRadius: theme.spacing(2),
            boxShadow: '0px 4px 4px 0px #C7D3D680',
            padding: theme.spacing(1),
          })}
        >
          <Typography color="#1E1E56" style={{ fontWeight: 700, fontSize: 18 }}>
            Payments
          </Typography>

          <Typography color="#2C2738" style={{ fontWeight: 400, fontSize: 25 }}>
            $100,852,223.68
          </Typography>
          <Typography color="#728191" style={{ fontWeight: 400, fontSize: 14 }}>
            Description
          </Typography>

          <Chart options={chart.options} series={chart.series} type="bar" width="100%" height={290} />
        </Container>
        <Container
          maxWidth="xl"
          style={{ padding: 15 }}
          sx={(theme) => ({
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
            <Typography color="#1E1E56" style={{ fontWeight: 700, fontSize: 18 }}>
              Transactions
            </Typography>
            <Table data={payments} columns={columns} />
          </Stack>
        </Container>
      </Stack>

      <Stack gap={1} flex={1.2}>
        <Container
          style={{ padding: 15 }}
          sx={(theme) => ({
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
            <Typography color="#1E1E56" style={{ fontWeight: 700, fontSize: 20 }}>
              $5,544.0
            </Typography>
          </Stack>
        </Container>
        <Container
          style={{ padding: 15 }}
          sx={(theme) => ({
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
            <Typography color="#1E1E56" style={{ fontWeight: 700, fontSize: 20 }}>
              $345
            </Typography>
          </Stack>
        </Container>
        <Container
          style={{ padding: 15 }}
          sx={(theme) => ({
            m: 0,
            backgroundColor: theme.palette.background.default,
            borderRadius: theme.spacing(2),
            boxShadow: '0px 4px 4px 0px #C7D3D680',
            padding: theme.spacing(1),
          })}
        >
          <Typography color="#1E1E56" style={{ fontWeight: 700, fontSize: 18 }}>
            Assets
          </Typography>

          <Chart options={donut.options} series={donut.series} type="donut" width="100%" height={317} />
          <Stack gap={1} mt={2}>
            <Balance title="Ripple" bgColor="#11296A" img={ripple} symbol="XRP" price={1855.522} />
            <Balance title="Bitcoin" bgColor="#FFB82A" img={bitcoin} symbol="BTC" price={9.032} />
            <Balance title="Ethereum" bgColor="#6A87F8" img={ethereum} symbol="ETH" price={52.512} />
            <Balance title="Stellar" bgColor="#11296A" img={stellar} symbol="XLM" price={184.236} />
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};
