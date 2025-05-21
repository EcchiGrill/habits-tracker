import MUIIconButton, {
  IconButtonProps as MUIIconButtonProps,
} from '@mui/material/IconButton';
import { styled, alpha } from '@mui/material/styles';

export const paddingSizeMapping = {
  small: 5,
  medium: 8,
  large: 12,
} as const;

export const StyledIconButton = styled(MUIIconButton)<MUIIconButtonProps>(({
  size = 'medium',
  theme,
  color = 'default',
}) => {
  let baseColor: string | undefined;

  if (color === 'inherit') {
    baseColor = undefined;
  } else {
    baseColor =
      color === 'default'
        ? theme.palette.secondary.dark
        : theme.palette[color].main;
  }

  return {
    padding: `${paddingSizeMapping[size]}px`,
    borderRadius: '8px',
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: !baseColor
        ? 'rgba(0, 0, 0, 0.04)'
        : alpha(baseColor, 0.08),
    },

    '&:focus-visible': {
      backgroundColor: !baseColor
        ? 'rgba(0, 0, 0, 0.04)'
        : alpha(baseColor, 0.16),
    },

    '&.Mui-disabled': {
      backgroundColor: 'transparent',
      '& svg': {
        color: alpha(theme.palette.action.disabled, 0.4),
      },
    },

    '& svg': {
      width: '24px',
      height: '24px',
    },
  };
});
