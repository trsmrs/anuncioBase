import {
    IconButton,
    Container,
    InputBase,
    Typography,
    Paper,
    Grid,

} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/search'
import TemplateDefault from '../src/templates/Default'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../src/theme'
import Card from '../src/components/Card'


const useStyles = makeStyles((theme) => ({

    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        marginTop: 20,
    },
    cardGrid:{
        marginTop: 50,
    }


}))


const Home = () => {
    const classes = useStyles()
    return (
        <TemplateDefault>
            <Container maxWidth="md">
                <Typography component="h1" variant="h3" align='center' color='textPrimary'>
                    O que deseja encontrar?
                </Typography>
                <Paper className={classes.searchBox}>
                    <InputBase
                        placeholder='Ex.: Smartphone 5"' fullWidth
                    />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Container>
            <Container maxWidth="lg" className={classes.cardGrid}>
                <Typography component='h2' variant='h4' align='center' color='textPrimary'>
                    Destaques
                </Typography>
                <br />
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card
                            image={'https://source.unsplash.com/random'}
                            title="ProdutoX"
                            subtitle="R$ 60,00"
                         />   
                     </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                    <Card
                            image={'https://source.unsplash.com/random'}
                            title="ProdutoX"
                            subtitle="R$ 60,00"
                         />   
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                    <Card
                            image={'https://source.unsplash.com/random'}
                            title="ProdutoX"
                            subtitle="R$ 60,00"
                         />   
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                    <Card
                            image={'https://source.unsplash.com/random'}
                            title="ProdutoX"
                            subtitle="R$ 60,00"
                         />   
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}


export default Home