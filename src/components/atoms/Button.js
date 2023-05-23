import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import MdiIconAtom from '../atoms/MDI.js';

export default function ButtonAtom({ label, variant = 'contained', color = 'primary', iconPath, onClick, width, textColor, disableShadow, size, disabled}) {
  return (
    <Button
      className="button-atom"
      variant={variant}
      color={color}
      onClick={onClick}
      startIcon={iconPath && <MdiIconAtom path={iconPath} size={size}/>} 
      disabled={disabled}
      style={{width: width, color: textColor, boxShadow: disableShadow ? 'none' : null}}>
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
  width: PropTypes.string, // width of the button (optional)
  textColor: PropTypes.string, // text color of the button (optional)
  disableShadow: PropTypes.bool, // disable button box-shadow (optional)
  size: PropTypes.number, // size of the icon (optional)
  disabled: PropTypes.bool // disable button (optional)
};
