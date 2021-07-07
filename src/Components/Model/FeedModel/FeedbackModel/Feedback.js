import React,{useState} from 'react'
import "./Feedback.css";
import { Form,FormControl,FormGroup,Button,FormLabel,FormText,InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import SearchIcon from '@material-ui/icons/Search';

export default function Feedback() {
    const [value, setValue] = useState()
    return (
        <div className="feedbackModelContainer">
            <div className="feedbackModelHeading">
                <h4>Thankyou so much for taking the time!</h4>
                <small>Please provide the following details</small>
            </div>
            <Form>
                <FormGroup className="formElement">
                    <FormLabel className="formLabel">First Name</FormLabel>
                    <FormControl className="formInputs" type="text" placeholder="Enter first name" />
                </FormGroup>

                <FormGroup className="formElement">
                    <FormLabel className="formLabel">Last Name</FormLabel>
                    <FormControl className="formInputs" type="text" placeholder="Enter last name" />
                </FormGroup>

                <Form.Group controlId="exampleForm.ControlTextarea1" className="formElement">
                    <Form.Label className="formLabel">Enter Feedback</Form.Label>
                    <Form.Control className="formInputs" as="textarea" rows={3} />
                </Form.Group>

                <FormGroup className="formElement">
                    <FormLabel className="formLabel">Country</FormLabel>
                    {/* <FormControl className="formInputs" type="text" placeholder="Enter Country" /> */}

                    <InputGroup>
                        <FormControl
                        className="formInputs"
                            type="text"
                            placeholder="Search..."
                        />
                        <div className="search-icon">
                            <SearchIcon />
                        </div>
                    </InputGroup>
                </FormGroup>

                <Form.Group controlId="formBasicEmail" className="formElement">
                    <Form.Label className="formLabel">Email address</Form.Label>
                    <Form.Control className="formInputs" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="formElement">
                    <Form.Label className="formLabel">Enter Phone number</Form.Label>
                    <PhoneInput
                    className="formInputs"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                />
                </Form.Group>
                
                <Button 
                    type="submit"
                    className="formElement submitBtn"
                >
                        Submit Feedback
                </Button>
            </Form>
        </div>
    )
}
