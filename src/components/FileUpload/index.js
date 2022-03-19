import { useDropzone } from 'react-dropzone'
import {
    IconButton,
    Typography,
    Box, 
}from '@material-ui/core'

import { DeleteForever } from '@material-ui/icons'
import useStyles from './styles'

const FileUpload = ({files, errors, touched, setFieldValue}) => {
  const classes = useStyles()
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
            const newFiles = acceptedFile.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file) 
            }))

        setFieldValue('files', [
         ...files,
         ...newFiles,
         ])
        }
    })

    const handleRemoveFile = filePath => {
        const newfileState = files.filter(file => file.path !== filePath)
        setFieldValue('files', newfileState)
    }
    return (
        <>
            <Typography component="h6" variant="h6" color={errors && touched ? 'error' : 'textPrimary'}>
                Imagens
            </Typography>
            <Typography component="div" variant="body2" color={errors && touched ? 'error' : 'textPrimary'}>
                A primeira imagem será a foto principal do seu anúncio.
            </Typography>
            {
                errors && touched
                    ? <Typography variant='body2' color="error" gutterBottom>{errors}</Typography>
                    : null
            }
            <Box className={classes.thumbsContainer}>
                <Box className={classes.dropzone} {...getRootProps()}>
                    <input name="files" {...getInputProps()} />
                    <Typography variant='body2' color={errors && touched ? 'error' : 'textPrimary'}>
                        Clique para adicionar ou arraste a imagem aqui.
                    </Typography>
                </Box>

                {
                    files.map((file, index) => (
                        <Box
                            key={file.name}
                            className={classes.thumb}
                            style={{ backgroundImage: `url(${file.preview})` }}
                        >
                            {
                                index === 0 ?
                                    <Box className={classes.mainImage}>
                                        <Typography variant="body" color="secondary">
                                            Principal
                                        </Typography>
                                    </Box>
                                    : null
                            }

                            <Box className={classes.mask}>
                                <IconButton color="secondary" onClick={() => handleRemoveFile(file.path)}>
                                    <DeleteForever fontSize="large" />
                                </IconButton>
                            </Box>
                        </Box>
                    ))
                }


            </Box>
        </>
    )
}


export default FileUpload