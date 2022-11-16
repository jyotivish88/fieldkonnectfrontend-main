import React, { useEffect, useState } from "react"
import Breadcrumb from '../../components/Common/BreadcrumbComponent'
import Layout from '../../components/Layout'
import { Row, Col, Card, Button } from 'react-bootstrap';
import { PlusCircleFill, XCircleFill } from 'react-bootstrap-icons';
import DisplayCreateForm from "../../components/Common/DisplayCreateForm";
import Carosal from "../../components/Dashboard/Carosal";
export default function Dashboard() {
  const [showCreateForm, setShowCreateForm] = useState(true)
  const toggleShowCreateForm = () => {
    setShowCreateForm(!showCreateForm)
  }

  return (
      <Layout>
      <Carosal/> 
      </Layout>
  )
}