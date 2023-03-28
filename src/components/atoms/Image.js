

const Image = (props) => {
    return (
        <img src={props.src} alt={props.alt} height={props.height} width={props.width} />
    );
}

export default Image;