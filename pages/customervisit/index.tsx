import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from '../../components/Layout'
import { backendGetAllCustomers } from '../../helpers/backend_helper'
export default function CustomerVisit() {
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
  return (
      <Layout>
        
      </Layout>
  )
}