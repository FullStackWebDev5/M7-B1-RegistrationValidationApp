import { useState } from 'react'
import { Button, Row, Col, Form, InputGroup } from "react-bootstrap"
import './index.css'

const RegistrationForm = () => {
	const [userDetails, setUserDetails] = useState({
		firstName: '',
		lastName: '',
		email: '',
		city: '',
		state: '',
		zipCode: '',
		tNCAgreed: false
	})

	const [userDetailErrors, setUserDetailErrors] = useState([])
	
  const handleSubmit = (e) => {
		e.preventDefault();

		const { firstName, lastName, email, city, state, zipCode, tNCAgreed } = userDetails
  };

  return (
    <>
      <h1 className="display-4">Event Registration Form</h1>
      <Form onSubmit={handleSubmit} className="registration-form">
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              value={userDetails.firstName}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  firstName: e.target.value,
                })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a valid first name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              value={userDetails.lastName}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  lastName: e.target.value,
                })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a valid last name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    email: e.target.value,
                  })
                }
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              value={userDetails.city}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  city: e.target.value,
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              value={userDetails.state}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  state: e.target.value,
                })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please select a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip"
              value={userDetails.zipCode}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  zipCode: e.target.value,
                })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" style={{ textAlign: "left" }}>
          <Form.Check
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
						checked={userDetails.tNCAgreed}
						onChange={() =>
							setUserDetails({
								...userDetails,
								tNCAgreed: !userDetails.tNCAgreed,
							})
						}
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </>
  );
};

export default RegistrationForm;
