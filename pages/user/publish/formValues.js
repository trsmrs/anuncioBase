import * as yup from 'yup'

const initialValues = {
    title: '',
    category: '',
    description: '',
    price: '',
    email: '',
    name: '',
    phone: '',
    files: [],
}

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6, 'Escreva um título maior')
        .max(100, 'Título muito grande')
        .required('Campo obrigatório'),

    category: yup.string().required('Campo obrigatório'),

    description: yup.string()
        .min(50, 'Escreva uma descrição de pelo menos 50 caracteres')
        .required('Campo obrigatório'),

    price: yup.number().required('Campo obrigatório'),
    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
    name: yup.string().required('Campo obrigatório'),
    phone: yup.number().required('Campo obrigatório'),
    files: yup.array().min(1, 'Adicione ao menos uma imagem').required('Campo obrigatório')

})

export {
    initialValues,
    validationSchema,
}