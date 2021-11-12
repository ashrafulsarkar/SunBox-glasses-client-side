import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';

const Register = () => {
    const { error,  createUser} = useAuth();
    const history = useHistory();

    const [emassage, setEmassage] = useState('');


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const {displayName, email, password, repassword} = data;
        if (password !== repassword) {
            setEmassage('Password Does not match!');
        }else{
            setEmassage('');
            createUser(email, password, displayName, history);
        }
    };

    return (
        <div>
            <section id='loginForm'>
                <Container>
                    <Row>
                        <Col className="offset-md-3 col-md-6">
                            <div className="loginform">
                                <div className="provider-login">
                                    <h3 className="text-center">Registation</h3>
                                    {error?
                                        <div className="error-massage">
                                        <p>{error}</p>
                                        </div>:
                                        ''
                                    }
                                    {emassage?
                                        <div className="error-massage">
                                        <p>{emassage}</p>
                                        </div>:
                                        ''
                                    }
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input type="text" {...register("displayName", { required: true })} placeholder="Enter your name*"/>
                                        <input type="email" {...register("email", { required: true })} placeholder="Enter your email*"/>
                                        <input type="password" {...register("password", { required: true })} placeholder="Password*" />
                                        <input type="password" {...register("repassword", { required: true })} placeholder="ReType Password*" />
                                        <input type="submit" />
                                    </form>
                                    <p className="text-center">Have An Account? <Link to="/login">Log In</Link></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Register;