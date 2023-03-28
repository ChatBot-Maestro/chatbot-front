import PropTypes from 'prop-types';
// import './LoaderAtom.css';

export default function LoaderAtom({ type = 'default', size = 'medium', color = '#0078d4' }) {
  const className = `loader-atom loader-atom-${type} loader-atom-${size}`;
  const style = { borderTopColor: color };

  return <div className={className} style={style}></div>;
}

LoaderAtom.propTypes = {
  type: PropTypes.oneOf(['default', 'spinner', 'dots']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};
