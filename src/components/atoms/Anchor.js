const Anchor = (props) => {
    return(
        <a id={props.id} href={props.href}><p id={props.id}>{props.text}</p></a>
    );
}

export default Anchor;