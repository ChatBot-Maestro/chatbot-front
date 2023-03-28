import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import MdiIconAtom from '../atoms/MDI.js';

export default function ButtonAtom({ label, variant = 'contained', color = 'primary', iconPath, onClick, size }) {
  return (
    <Button className="button-atom" variant={variant} color={color} onClick={onClick} startIcon={iconPath && <MdiIconAtom path={iconPath} size/>}>
      {label}
    </Button>
  );
}

ButtonAtom.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  iconPath: PropTypes.string, // MDI icon path (optional)
  onClick: PropTypes.func,
};