import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { error, redLocation, handleredLocation, userLogin} = useAuth();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';
    const history = useHistory();

    if(redLocation){
        history.push(redirect_uri);
        handleredLocation();
    }



    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const {email, password} = data;
        userLogin(email, password);
    };

    return (
        <div>
            <section id='loginForm'>
                <Container>
                    <Row>
                        <Col className="offset-md-3 col-md-6">
                            <div className="loginform">
                                {error?
                                    <div className="error-massage">
                                    <p>{error}</p>
                                    </div>:
                                    ''
                                }
                                <div className="provider-login">
                                    <h3 className="text-center">Log In</h3>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input type="email" {...register("email", { required: true })} placeholder="Enter your email"/>
                                        <input type="password" {...register("password", { required: true })} placeholder="Password" />
                                        <input type="submit" />
                                    </form>
                                    <p className="text-center">Don't Have An Account? <Link to="/register">Register Now</Link></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Login;