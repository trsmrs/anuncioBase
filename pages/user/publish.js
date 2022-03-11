import { IconButton, Button, Select, Container, Typography, Box, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { DeleteForever } from '@material-ui/icons'
import { Flex } from 'theme-ui'

import TemplateDefault from '../../src/templates/Default'
import theme from '../../src/theme'

const useStyles = makeStyles((theme) => ({
    mask: {},
    mainImage:{},
    container: {
        padding: theme.spacing(8, 0, 6)
    },
    boxContainer: {
        paddinBottom: theme.spacing(3)
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3)
    },
    buttonPubli: {
        margin: '30px auto',
        display: 'block',
    },
    thumbsContainer: {
        display: 'flex',
        marginTop: 15,
    },
    dropzone: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
        width: 200,
        height: 150,
        margin: '0 15px 15px 0',
        backgroundColor: theme.palette.background.default,
        border: '2px dashed black',
    },
    thumb: {
        position: 'relative',
        width: 200,
        height: 150,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',

        '& $mainImage':{
            backgroundColor: 'rgba(190, 90, 255, 0.9)',
            padding: '6px 10px',
            position: 'absolute',
            bottom: 0,
            left: 0,
        },

        '&:hover $mask':{
            display:'flex',
        },

        '& $mask': {
            display: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            width: '100%',
            height: '100%',
        }
    }
}))
const Publish = () => {
    const classes = useStyles()
    return (
        <TemplateDefault>
            <Container maxWidth="sm" className={classes.container}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Publicar Anúncio
                </Typography>
                <Typography component="h5" variant="h5" align="center" color="textPrimary">
                    Quanto mais detalhado, melhor!
                </Typography>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Título do Anúncio
                    </Typography>
                    <TextField
                        label="ex.: Celular Marca Modelo"
                        size='small'
                        fullWidth
                    />
                    <br></br>
                    <br></br>
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Categoria
                    </Typography>
                    <Select
                        native
                        value=""
                        fullWidth
                        onChange={() => { }}
                        inputProps={{
                            name: 'age',
                        }}
                    >
                        <option value="">Selecione</option>
                        <option value={1}>Bebê e Criança</option>
                        <option value={2}>Agricultura</option>
                        <option value={3}>Moda</option>
                        <option value={3}>Carros, Motos e Barcos</option>
                        <option value={3}>Serviços</option>
                        <option value={3}>Lazer</option>
                        <option value={3}>Animais</option>
                        <option value={3}>Moveis, Casa e Jardim</option>
                        <option value={3}>Imóveis</option>
                        <option value={3}>Equipamentos e Ferramentas</option>
                        <option value={3}>Celulares e Tablets</option>
                        <option value={3}>Esporte</option>
                        <option value={3}>Tecnologia</option>
                        <option value={3}>Emprego</option>
                        <option value={3}>Outros</option>
                    </Select>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Imagens
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                        A primeira imagem será a foto principal do seu anúncio.
                    </Typography>
                    <Box className={classes.thumbsContainer}>
                        <Box className={classes.dropzone}>
                            <Typography variant='body2' color="textPrimary">
                                Clique para adicionar ou arraste a imagem aqui.
                            </Typography>
                        </Box>
                        <Box
                            className={classes.thumb}
                            style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}
                        >
                            <Box className={classes.mainImage}>
                            <Typography variant="body" color="secondary">
                             Principal
                            </Typography>
                            </Box>
                            <Box className={classes.mask}>
                                <IconButton color="secondary">
                                    <DeleteForever fontSize="large"/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Descrição
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                        Escreva os detalhes de seu produto.
                    </Typography>
                    <TextField
                        multiline rows={6}
                        variant="outlined"
                        fullWidth
                    />
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                        Dados de Contato
                    </Typography>
                    <TextField
                        label="Nome"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                    <TextField
                        label="E-mail"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                    <TextField
                        label="Telefone"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />

                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box textAlign="right">
                    <Button variant="contained" color='primary' className={classes.buttonPubli}>
                        Publicar Anúncio
                    </Button>
                </Box>
            </Container>
        </TemplateDefault>
    )
}

export default Publish