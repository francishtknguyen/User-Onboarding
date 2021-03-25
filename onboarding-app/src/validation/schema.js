import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().min(3, 'name must be atleast 3 chars long').required('name is required'),
    email: yup.string().email('must be a valid email').required('email is required'),
    password: yup.string().min(6, 'password must be atleast 6 chars long').required('password required'),
    termsAgreed: yup.boolean().oneOf([true], 'please accept terms of service').required('terms must be accepted'),
})

