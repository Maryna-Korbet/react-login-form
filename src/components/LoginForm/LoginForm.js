import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from 'components/LoginForm/LoginForm.module.css';
import * as yup from 'yup';

const schema = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().min(6).max(16).required(),
});

const initialValues = {
    login: '',
    password: '',
}

export const LoginForm = () => {

    const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        resetForm()
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
        <Form autoComplete="off" >
            <label htmlFor="login">
                Login
                    <Field type="text" name="login" className={css.input} />
                    <ErrorMessage name="login" component="div"/>
                </label>
                
            <label htmlFor="password">
                Password
                    <Field type="password" name="password" className={css.input} />
                    <ErrorMessage name="password" component="div" />
                </label>
                
            <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};
