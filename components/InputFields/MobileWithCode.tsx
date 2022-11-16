import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { Input, Row, Col, Box, MenuItem, Autocomplete, FormControl, FormGroup } from 'react-bootstrap';
import { backendGetAllCountryCodes } from '../../helpers/backend_helper'
export default function MobileWithCode({ handleInputChange, mobile, phonecode }: { handleInputChange: any; mobile: any, phonecode:string }) {
    const [countryData, setCountryData] = useState([])
    const fetchCustomers = async () => {
        await backendGetAllCountryCodes().then((res) => {
            if(!res.isError)
            {
                setCountryData(res.data)
            }
        })
      }
      useEffect(() => {
        fetchCustomers()
      }, [])

    return (
        <>
            <Col container>
                <Col item xs={4}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={countryData}
                        sx={{ width: '100%'}}
                        renderInput={(params) => <Input {...params} label="Code" name='phonecode'  value={phonecode} autoComplete='off' />}
                    />
                </Col>
                <Col item xs={8} >
                    <Input label="Mobile" variant="outlined" name='mobile' onChange={handleInputChange} value={mobile} fullWidth required={true} autoComplete='off'  />
                </Col>
            </Col>
        </>
    )
}
