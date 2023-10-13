import * as React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, onClick, variant, ...rest } = props;
  const { palette } = useTheme();

  const customSmallCss = { ...(rest.size === 'small' ? { borderRadius: '8px', fontSize: '10px', fontWeight: 500, height: 35, px: 4, gap: 1 } : {}) };
  const customLargeCss = { ...(rest.size === 'large' ? { borderRadius: '12px', height: 52, px: 4, gap: 1 } : {}) };

  return (
    <MuiButton
      ref={ref}
      onClick={onClick}
      variant={variant}
      {...rest}
      sx={{
        '&.Mui-disabled': {
          background: variant === 'outlined' ? 'white' : palette.secondary.main,
          color: variant === 'outlined' ? '#c1c8d8' : 'white',
          border: variant === 'outlined' ? `1px solid ${palette.secondary.main}` : undefined,
        },
        textTransform: 'capitalize',
        color: variant === 'outlined' ? palette.primary.main : 'white',
        backgroundColor: variant === 'outlined' ? 'white' : palette.primary.main,
        border: variant === 'outlined' ? `1px solid ${palette.primary.main}` : undefined,
        ...customSmallCss,
        ...customLargeCss,
        '&:hover': {
          color: variant === 'outlined' ? palette.primary.dark : 'white',
          backgroundColor: variant === 'outlined' ? 'white' : palette.primary.dark,
          border: variant === 'outlined' ? `1px solid ${palette.primary.dark}` : undefined,
        },
        ...rest['sx'],
      }}
    >
      {children}
    </MuiButton>
  );
});
