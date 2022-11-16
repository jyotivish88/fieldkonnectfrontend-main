import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from '../../components/Layout'
import { Row, Col, Card, Button } from 'react-bootstrap';
import { PlusCircleFill, XCircleFill } from 'react-bootstrap-icons';
import DisplayCreateForm from "../../components/Common/DisplayCreateForm";
import Breadcrumb from '../../components/Common/BreadcrumbComponent'
import AddUserForm from "../../components/User/AddUserForm";
import { backendGetAllUsers } from '../../helpers/backend_helper'
import {PlusLg} from "react-bootstrap-icons";
export default function Users() {

  const [showText, setShowText] = useState(false);

  


  const userList = useSelector((state: any) => state?.users?.userList);
  const dispatch = useDispatch();
  const fetchUsers = async () => {
    await backendGetAllUsers().then((res) => {
      dispatch({
        type: 'GET_USERS',
        payload: res.data
      })
    })
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
      <Layout>
         <div className="layouts">
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
                                     Add User</Button>
      {showText && <div>    <AddUserForm/></div>}
    </div>

        
    
        </Card.Body>
        </Card>
    </div>
        
      </Layout>
  )
}