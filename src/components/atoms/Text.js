import PropTypes from 'prop-types';
// import './TextAtom.css';

export default function TextAtom({ text, color = '#000', size = '16px', weight = 'normal', align = 'left' }) {
  return (
    <p className="text-atom" style={{ color, fontSize: size, fontWeight: weight, textAlign: align }}>
      {text}
    </p>
  );
}

TextAtom.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.oneOf(['normal', 'bold', 'bolder', 'lighter', 'initial', 'inherit']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
};
