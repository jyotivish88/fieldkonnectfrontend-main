import { GetStaticProps, GetStaticPaths } from 'next'
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Admin from "../../layouts/Admin";
import { backendGetCustomerInfo } from '../../helpers/backend_helper'

const CustomerDetail = () => {
    return (
        <>
          <Admin>
            <div className="flex flex-wrap">
              <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
    
              </div>
              <div className="w-full xl:w-4/12 px-4">
    
              </div>
            </div>
            <div className="flex flex-wrap mt-4">
              <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
    
              </div>
              <div className="w-full xl:w-4/12 px-4">
                <h1>Customer list</h1>
              </div>
            </div>
          </Admin>
        </>
      );
}

export default CustomerDetail

