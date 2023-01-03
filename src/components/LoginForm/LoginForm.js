import { Formik, Form, Field } from 'formik';
import css from 'components/LoginForm/LoginForm.module.css';
import * as yup from 'yup';

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
            onSubmit={handleSubmit}
        >
        <Form autoComplete="off" >
            <label htmlFor="login">
                Login
                    <Field type="text" name="login" className={css.input} />
                </label>
                
            <label htmlFor="password">
                Password
                <Field type="password" name="password" className={css.input}/>
                </label>
                
            <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};
