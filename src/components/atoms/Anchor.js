const Anchor = (props) => {
    return(
        <a className={props.class} href={props.href}><p className={props.class}>{props.text}</p></a>
    );
}

export default Anchor;