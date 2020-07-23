import * as yup from 'yup'


const formSchema = yup.object().shape({
    email:yup
    .string()
    .email('Must be a valid Email')
    .required('Email is required'),
    username:yup
    .string()
    .min(3,'Username must contain at least 3 characters')
    .required('Username is required'),
    password:yup
    .string()
    .min(5, 'Password must contain at least 5 characters')
    .required('Password is required'),
    name:yup
    .string()
    .required('Must create a Display Name'),
    status:yup
    .string()
    .oneOf(['yes','no'],'Student status is required'),
    terms:yup
    .boolean()
    .oneOf([true], 'Must agree with the Terms of Use')
})

export default formSchema