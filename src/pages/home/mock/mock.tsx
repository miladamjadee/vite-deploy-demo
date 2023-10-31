import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { Column } from '../type';

export const data = [
  {
    id: 132457,
    coinAmount: '14.3 USDT',
    fiatAmount: '$14.3',
    status: (
      <Stack>
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
    date: '2023-05-21',
  },
  {
    id: 132458,
    coinAmount: '14.3 USDT',
    fiatAmount: '$14.3',
    status: (
      <Stack>
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
    date: '2023-05-21',
  },
  {
    id: 132459,
    coinAmount: '14.3 USDT',
    fiatAmount: '$14.3',
    status: (
      <Stack>
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
    date: '2023-05-21',
  },
];

export const columns: Column[] = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'coinAmount', label: 'Coin Amount' },
  { id: 'fiatAmount', label: 'Fiat Amount' },
  { id: 'date', label: 'Date', minWidth: 60 },
  { id: 'status', label: 'Status', minWidth: 70 },
];
