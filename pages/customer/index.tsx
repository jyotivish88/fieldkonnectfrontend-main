import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from '../../components/Layout'
import { backendGetAllCustomers } from '../../helpers/backend_helper'
import { Row, Col, Card, Button } from 'react-bootstrap';
import { PlusCircleFill, XCircleFill } from 'react-bootstrap-icons';
import DisplayCreateForm from "../../components/Common/DisplayCreateForm";
import Breadcrumb from '../../components/Common/BreadcrumbComponent'
import AddCustomerForm from "../../components/Customer/AddCustomerForm";
import {PlusLg} from "react-bootstrap-icons";
export default function Customer() {

  const [showText, setShowText] = useState(false);

  


  const customerList = useSelector((state: any) => state?.customers?.customerList);
  const dispatch = useDispatch();
  const fetchCustomers = async () => {
    await backendGetAllCustomers().then((res) => {
      dispatch({
        type: 'GET_CUSTOMERS',
        payload: res.data
      })
    })
  }
  useEffect(() => {
    fetchCustomers()
  }, [])
  return (<>
      <Layout>
        <div className="layout">
        <Breadcrumb firstItem={{href: '/dashboard', label : 'Home'}} secondItem={{href: '', label : ''}} itemlabel='Customer List' />
        {/* {showCreateForm ? (<DisplayCreateForm display={toggleShowCreateForm} formlabel='Create Customer'> <AddCustomerForm /> </DisplayCreateForm>) : null} */}
        <Card>
          <Card.Body>

          <div className="marginLeft">
          <Button
                                      type="button"
                                      color="success" size="sm"
                                      className="btn-rounded waves-effect waves-light mb-2 me-2"
                                     onClick={() => setShowText(!showText)} >   <PlusLg/>
                                     Add New Order</Button>
      {showText && <div><AddCustomerForm/></div>}
    </div>

        
    
        </Card.Body>
        </Card>
    </div>
      </Layout>
</>
  )
}
