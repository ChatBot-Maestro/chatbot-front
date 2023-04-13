const Anchor = (props) => {
    return(
        <a class={props.class} href={props.href}><p class={props.class}>{props.text}</p></a>
    );
}

export default Anchor;