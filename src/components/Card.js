import {
    Card as CardMUI,
    CardMedia,
    CardActions,
    CardContent,
    Grid,
    Container,
    Typography,
    
}
    from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"

{/* <Buttom size='small' color="primary">
                     Editar
                     </Buttom>  
                     <Buttom size='small' color="primary">
                     Remover
                     </Buttom> */}

const useStyles = makeStyles(() => ({

    cardMedia: {
        paddingTop: '56%',
        marginRight: 10,

    },
}))

const Card = ({ image, title, subtitle, actions }) => {
    const classes = useStyles()
    return (
        <CardMUI>
            <CardMedia
                className={classes.cardMedia}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography>
                    {subtitle}
                </Typography>
            </CardContent>
            {
                actions ? (
                    <CardActions>
                        {actions}
                    </CardActions>
                )
                    : null
            }

        </CardMUI>
    )
}

export default Card