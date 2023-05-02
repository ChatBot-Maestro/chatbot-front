import PropTypes from 'prop-types';
import "../../styles/base/base.scss"
// import './WidgetAtom.css';

export default function WidgetAtom({ image, title, size, cursor }) {
  return (
    <div className="widget-atom" style={{ cursor: cursor }}>
      <div className={`widget-title`}>
        <h2>{title}</h2>
      </div>
      <div className={`widget-image`}>
        <img src={image} alt="widget" style={{ width: size }} />
      </div>
    </div>
  );
}

WidgetAtom.propTypes = {
  image: PropTypes.string.isRequired, // image source URL
  title: PropTypes.string.isRequired, // widget title text
  size: PropTypes.string, // width of the image
  cursor: PropTypes.string // cursor type
};