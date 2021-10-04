import  {useState , useEffect} from 'react';

import {Link} from 'react-router-dom';
import {Form, Button,Row,Col} from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import {register} from '../actions/userActions.js';
import {useDispatch, useSelector} from 'react-redux';
import Message from '../components/Message'
import Loader from '../components/Loader';


const RegisterScreen = ({location , history}) => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState('');
    const redirect = location.search ? location.search.split('=')[1]: '/'
const dispatch = useDispatch();
const userRegister = useSelector(state => state.userRegister);
const {loading  ,error , userInfo}  = userRegister;
const submitHandler = (e) => {
    e.preventDefault();
    if(password !== confirmPassword ) {
        setMessage('Password do not match');
    }
else {
    dispatch(register(name,email,password));
    console.log(loading, error, userInfo);
}

}
const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
}
const handleName = (e) => {
    e.preventDefault();

    setName(e.target.value);
}
const handlePassword = (e) => {
    e.preventDefault();

    setPassword(e.target.value);
}
const handleConfirmPassword  = (e) => {
    e.preventDefault();

    setConfirmPassword(e.target.value);
}


useEffect(() => {
    if(userInfo) {
        history.push(redirect);
    }
},[history,userInfo,redirect])
    
    return (
    <FormContainer>
        <h1>Sign Up</h1>
        {message && <Message variant="danger">{message}</Message>}

        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>
        <Form.Group >
                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={handleName} required></Form.Control>
            </Form.Group>
            <Form.Group >
                <Form.Control type="email" placeholder="Enter Email" value={email} onChange={handleEmail} required></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control type="password" placeholder="Enter Password" value={password} onChange={handlePassword} required></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPassword}></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" >
                Sign Up
            </Button>
        </Form>
        <Row className="py-3">
            <Col>
                Already Register? <Link to="/login">Login</Link>
            </Col>
        </Row>
    </FormContainer>
    )
}
export default RegisterScreen;