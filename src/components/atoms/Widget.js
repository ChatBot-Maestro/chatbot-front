import PropTypes from 'prop-types';
// import './WidgetAtom.css';

export default function WidgetAtom({ image, title, imagePosition = 'left', titlePosition = 'bottom' }) {
  const isImageLeft = imagePosition === 'left';
  const isTitleTop = titlePosition === 'top';

  return (
    <div className="widget-atom">
      <div className={`widget-image ${isImageLeft ? 'left' : 'right'}`}>
        <img src={image} alt="widget" />
      </div>
      <div className={`widget-title ${isTitleTop ? 'top' : 'bottom'}`}>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

WidgetAtom.propTypes = {
  image: PropTypes.string.isRequired, // image source URL
  title: PropTypes.string.isRequired, // widget title text
  imagePosition: PropTypes.oneOf(['left', 'right']), // position of image relative to title
  titlePosition: PropTypes.oneOf(['top', 'bottom']), // position of title relative to image
};
