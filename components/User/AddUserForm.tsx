import React, { useState } from 'react'
import Router from 'next/router'
import Form from 'react-bootstrap/Form';
// import Select, { SelectChangeEvent } from 'reactstrap/Select';
import { useDispatch, useSelector } from "react-redux";
import { } from "../../store/customer/actions"
import AddressForm from '../Common/AddressForm';
import MobileWithCode from '../InputFields/MobileWithCode';

export default function AddUserForm() {
    const dispatch = useDispatch();
    const [errorMsg, setErrorMsg] = useState('')
    var initialFormState = {
        firmName: '',
        contactPerson: '',
        phonecode: '',
        mobile: '',
        email: '',
        customerType: '',
        address: {
            postalCode: '',
            address: '',
            city: '',
            state: '',
            country: '',
        },
        password: '',
    }
    const [requestData, setRequestData] = useState(initialFormState)
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setRequestData({ ...requestData, [name]: value })
    }
    const callback = async (resp: any) => {
        if (resp.id) {
            Router.push('dashboard')
        }
    };

    const setAddresschanges = async (addressvalue: any) => {
        setRequestData({ ...requestData, address : addressvalue })
    };


    const handleFormSubmit = () => {
        try {
            //dispatch(postAuthLogin(requestData,callback));
        }
        catch (e) {
            console.log(e, "Error in the Login");
        }
    };
    console.log(requestData)
    return (
<>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          type="text"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and numbers,
          and must not contain spaces, special characters, or emoji.
        </Form.Text>
  

</>

        // <Col container>
        //     <Col item xs={6} sx={{ mb: 1, p: 1 }} >
        //         <Input label="Firm Name" variant="outlined" name='firmName' onChange={handleInputChange} value={requestData.firmName} required={true} fullWidth autoComplete='off' />
        //     </Col>
        //     <Col item xs={6} sx={{ mb: 1, p: 1 }} >
        //         <Input label="Contact Person" variant="outlined" name='contactPerson' onChange={handleInputChange} value={requestData.contactPerson} required={true} fullWidth autoComplete='off' />
        //     </Col>
        //     <Col item xs={6} sx={{ mb: 1, p: 1 }} >
        //         <MobileWithCode key={"MobileCountryCode"} handleInputChange={setAddresschanges} mobile={requestData.mobile} phonecode={requestData.phonecode} />
        //     </Col>
        //     <Col item xs={6} sx={{ mb: 1, p: 1 }} >
        //         <Input label="Email" variant="outlined" name='email' onChange={handleInputChange} value={requestData.email} required={true} fullWidth autoComplete='off' />
        //     </Col>
        //     <Col item xs={6} sx={{ mb: 1, p: 1 }} >
        //         <Input label="Customer Type" variant="outlined" name='customerType' onChange={handleInputChange} value={requestData.customerType} required={true} fullWidth autoComplete='off' />
        //     </Col>
        //     <Col item xs={6} sx={{ mb: 1, p: 1 }} >
        //         <Input label="Password" variant="outlined" name='password' onChange={handleInputChange} value={requestData.password} required={false} fullWidth autoComplete='off' />
        //     </Col>
        //     <AddressForm key={"AddreeForm"} handleInputChange={setAddresschanges} requestData={requestData} />
        //     <Col item xs={12} sx={{ mb: 1, p: 1 }}>
        //         {/* <Box display="flex" justifyContent="flex-end">
        //             <Button variant="contained" onClick={handleFormSubmit}>Save Change </Button>
        //         </Box> */}
        //     </Col>
        // </Col>
    )
}