import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

function RegistrationScreen(){

    var [formState, setFormState] = useState(null);
    var [errorsState, setErrorsState] = useState([]);

    var firstNameField;
    var lastNameField;
    var emailField;
    var passwordField;
    var avatarField;
     
    var formData = new FormData();

    function attachFile(evt) {

        console.log('file data', evt.target.files)
        var files = Array.from(evt.target.files);

        files.forEach(
            function(fileAttachment, index) {
                formData.append(index, fileAttachment);
            }
        )
    }

    function register() {


        // 2. Validate the fields
        var errors = [];

        if(firstNameField.value.length === 0) {
            errors.push('Please enter your first name');
        }

        if(lastNameField.value.length === 0) {
            errors.push('Please enter your last name');
        }

        if(emailField.value.length === 0) {
            errors.push('Please enter your email');
        }

        if(passwordField.value.length === 0) {
            errors.push('Please enter your password');
        }

        // 3. If any field is not validated, go to "client error"
        if( errors.length > 0 ) {
            setFormState("client error");
            setErrorsState( errors );
        }

        // 4. If all fields are valid
        else {
            // 5. Go to "loading"
            setFormState("loading");
            setErrorsState([]);

            // 6. Send data backend
            formData.append('firstName', firstNameField.value);
            formData.append('lastName', lastNameField.value);
            formData.append('email', emailField.value);
            formData.append('password', passwordField.value);

            fetch(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/users/register`,
                {
                    'method': 'POST',
                    'body': formData
                }
            )
            .then(
                function(backendResponse) {
                    // Convert the HTTP string response to JSON
                    return backendResponse.json();
                }
            )
            .then(
                // 7. If backend sends success, go to "success"
                function(jsonResponse) {
                    if(jsonResponse.status === "ok") {
                        console.log('backend response /users/register', jsonResponse)
                        setFormState("success");
                    }
                    else {
                        setFormState("backend error");
                        setErrorsState([jsonResponse.message]);
                    }
                }
            )
            .catch(
                // 8. If backends sends error, go to "backend error"
                function(backendError) {
                    console.log('backendError at /users/register', backendError)
                    setFormState("backend error");
                }
            )
        }
    }

    function addListItem(str) {
        return <li>{str}</li>
    }

    return(
    
        <section className="mx-auto padding-y-4">

        <form className="col-lg-10 mx-auto px-5 padding-y-5 bg-light" action="/registration" method="post">

            <h1 className="text-center margin-bottom-4">Register Here</h1>

            <div className="row margin-bottom-2">

                <div className="col-lg">
                    <label for="firstName">First Name</label>
                    <input className="input-underline w-100" type="text" name="firstName" id="firstName" inputRef={ (thisElement) => { firstNameField = thisElement} } required={true}/>
                </div>

                <div className="col-lg">
                    <label for="lastName">Last Name</label>
                    <input className="input-underline w-100" type="text" name="lastName" id="lastName" inputRef={ ( thisElement ) => { lastNameField = thisElement } } required={true} />
                </div>

                <div className="col-lg">
                    <label for="email">Email Address</label>
                    <input className="input-underline w-100" type="email" name="email" id="email" inputRef={ ( thisElement ) => { emailField = thisElement;} } required={true}/>
                </div>

            </div>

            <div className="row margin-bottom-2">

                <div className="col-lg-4">
                    <label for="phone">Phone Number</label>
                    <input className="input-underline w-100" type="text" name="phone" id="phone" />
                </div>

                <div className="col-lg-4">
                    <label for="password">Password</label>
                    <input className="input-underline w-100" type="password" name="password" id="password" inputRef={ ( thisElement ) => { passwordField = thisElement;} } required={true}/>
                </div>

            </div>

            <div className="col-lg">
            <Button size="small" variant="contained" component="label">
                Upload
                <input ref={function(thisElement){ avatarField = thisElement }} onClick={attachFile} onChange={attachFile} hidden accept="image/*" multiple type="file" />
            </Button>
            </div>

            <div className="row margin-y-2">

                <div className="col-lg-4">
                    <input type="checkbox" name="firstName" id="firstName" />
                    <label class="ms-3" for="firstName"> I agree to the Terms & Conditions</label>
                </div>

            </div>

            <Box display="flex">      
                { formState !== "loading" && <div className="col-lg-3 row mx-auto"> <button className="btn btn-primary" onClick={register}>Sign Up</button> </div> }
                { formState === "loading" && <CircularProgress /> }
            </Box>

            <Box mt={2}>
                { formState === "client error" && <Alert severity="error">
                        <ul> { errorsState.map(addListItem) } </ul> </Alert>}

                { formState === "backend error" && <Alert severity="error">
                        <ul> { errorsState.map(addListItem) } </ul> </Alert>}

                { formState === "success" && <Alert severity="success"> You have registered successfully! </Alert> }
            </Box>

        </form>
    </section>
    )
}

export default RegistrationScreen