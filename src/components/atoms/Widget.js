import { Card, CardContent, Typography } from "@mui/material";

const WidgetAtom = (props) => {
  /*
    Props description
        titleH: Is the hierachy of the heading (h1,h2,h3,h4,h5,h6)
        id: Is the id on the complete component
        title: Is the heading title value
        smallDescription: Is the small description of the widget content
    */
const HeadingLevel = props.titleH;
return (
    <div id={props.id}>
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography variant={HeadingLevel}>{props.title}</Typography>
            <Typography variant="body2">
                {props.smallDescription}
            </Typography>
            {/* TO-DO: Atom graph props each report kind */}
        </CardContent>
    </Card>;
</div>
)};