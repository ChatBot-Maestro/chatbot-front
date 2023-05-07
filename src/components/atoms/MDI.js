import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';

export default function MdiIconAtom({ path, size = 24, color = 'currentColor', spin = false, onClick, cursor }) {
  const iconPath = path || mdiLoading; // Default icon is a loading spinner

  return (
    <Icon 
      path={iconPath}
      size={size}
      color={color}
      spin={spin} 
      onClick={onClick}
      style={{ cursor: cursor }}
      />
  );
}

MdiIconAtom.propTypes = {
  path: PropTypes.string, // The MDI path for the icon
  size: PropTypes.number, // The size of the icon in pixels
  color: PropTypes.string, // The color of the icon
  spin: PropTypes.bool, // Whether the icon should spin or not (for spinners)
  onClick: PropTypes.func, // The function to call when the icon is clicked
  cursor: PropTypes.string // The cursor type
};
