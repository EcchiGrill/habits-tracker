import { FC } from 'react';
import { StyledIconButton } from './IconButtonStyles';
import { IconButtonProps as MUIIconButtonProps } from '@mui/material/IconButton';

export const IconButton: FC<MUIIconButtonProps> = ({ children, ...props }) => {
    return (
        <StyledIconButton disableRipple {...props}>
            {children}
        </StyledIconButton>
    )
}