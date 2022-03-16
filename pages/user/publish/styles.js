import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
   
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
        flexWrap: 'wrap',
        marginTop: 15,
    },
   
    
    inputLabel: {
        fontWeight: 400,
        color: theme.palette.primary.main,
    }
}))

export default useStyles