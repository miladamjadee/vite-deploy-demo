import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link, useMatch, useResolvedPath, useNavigate } from 'react-router-dom';

type NavbarLinkProps = {
  deviceType?: 'mediumDevice';
  onClose?: () => void;
  url: string;
  title: string;
  icon?: string;
};

export const NavbarLink = React.memo((props: NavbarLinkProps) => {
  const resolved = useResolvedPath(props.url);
  const match = useMatch({ path: resolved.pathname, end: true });
  const navigate = useNavigate();

  const activeLinkStyle = {
    ...{ borderRight: '10px solid #864aff', borderTopRightRadius: '5px', borderBottomRightRadius: '5px' },
  };

  const isMediumDevice: boolean = props.deviceType === 'mediumDevice';

  const style = match && !isMediumDevice ? activeLinkStyle : undefined;

  const handlingClick = () => {
    navigate(props.url);
    props.onClose?.();
  };

  if (isMediumDevice) {
    return (
      <ListItem
        component="a"
        onClick={handlingClick}
        sx={{
          gap: 2,
          cursor: 'pointer',
          // transform: 'translateX(10px)',
          textAlign: 'left',
          ...style,
        }}
      >
        <ListItemIcon sx={{ minWidth: '20px', height: '20px' }}>
          <img width="100%" height="100%" style={{ objectFit: 'contain' }} src={props.icon} />
        </ListItemIcon>
        <ListItemText
          primary={props.title}
          primaryTypographyProps={{
            color: match ? '#1E1E56' : 'GrayText',
            fontSize: '14px !important',
            fontWeight: match ? 900 : 'medium',
          }}
        />
      </ListItem>
    );
  }

  return (
    <ListItem
      component={Link}
      to={{ pathname: props.url }}
      state={{ getBy: props.title }}
      sx={{
        py: '4px',
        gap: 2,
        transform: 'translateX(10px)',
        textAlign: 'left',
        ...style,
      }}
    >
      <ListItemIcon sx={{ minWidth: '20px', height: '20px' }}>
        <img width="100%" height="100%" style={{ objectFit: 'contain' }} src={props.icon} />
      </ListItemIcon>
      <ListItemText
        primary={props.title}
        primaryTypographyProps={{
          color: match ? '#1E1E56' : 'GrayText',
          fontSize: '14px !important',
          // fontFamily: match ? 'Poppins-bold' : 'Poppins',
          fontWeight: match ? 700 : 'medium',
        }}
      />
    </ListItem>
  );
});
