import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { Form, Button, Row, Col } from 'react-bootstrap';
export default function AddressForm({ handleInputChange, requestData }: { handleInputChange: any; requestData: any }) {
    const { address } = requestData
    var initialFormState = {
        postalCode: address.postalCode ? address.postalCode : '',
        address: address.address ? address.address : '',
        city: address.city ? address.city : '',
        state: address.state ? address.state : '',
        country: address.country ? address.country : '',
    }
    const [addressData, setAddressData] = useState(initialFormState)
    const handleInput = async(event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        await setAddressData({ ...addressData, [name]: value })
    }
    useEffect(()=> { handleInputChange(addressData) },[addressData])
    return (
        <Col container>
            <Col item xs={6} sx={{ mb: 1, p: 1 }} >
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" onChange={handleInput} value={addressData.address} required={true} autoComplete='off' />
                </Form.Group>
            </Col>
            <Col item xs={6} sx={{ mb: 1, p: 1 }} >
                <Form.Group className="mb-3">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="text" name="postalCode" onChange={handleInput} value={addressData.postalCode} required={true} autoComplete='off' />
                </Form.Group>
            </Col>
            <Col item xs={6} sx={{ mb: 1, p: 1 }} >
                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" name="city" onChange={handleInput} value={addressData.city} required={true} autoComplete='off' />
                </Form.Group>
            </Col>
            <Col item xs={6} sx={{ mb: 1, p: 1 }} >
                <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" name="state" onChange={handleInput} value={addressData.state} required={true} autoComplete='off' />
                </Form.Group>
            </Col>
            <Col item xs={6} sx={{ mb: 1, p: 1 }} >
                <Form.Group className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" name="country" onChange={handleInput} value={addressData.country} required={true} autoComplete='off' />
                </Form.Group>
            </Col>
        </Col>
    )
}
