import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link'
import {Gift ,Cart2,Gear,Person, Repeat, Bag, Award,  Fingerprint, Chat, Basket3, Bootstrap, House, ShopWindow} from 'react-bootstrap-icons';

export default function SidebarMenu({icon}:{icon:boolean}) {
  const manus = [
    { label : 'Dashboard' , href : '/dashboard', icon : <House />},
    { label : 'Customers' , href : '/customer', icon : <ShopWindow  /> },
    { label : 'Users' , href : '/users', icon : <Person/> },
    { label : 'Products' , href : '/products', icon :  <Bag /> },
    { label : 'Sales' , href : '/sales', icon :  <Basket3 /> },
    { label : 'Orders' , href : '/orders', icon :  < Cart2   /> },
    { label : 'Loyalty Scheme' , href : '/loyaltyscheme', icon : <Award  /> },
    { label : 'Beats' , href : '/beat', icon : <Bootstrap /> },
    { label : 'Coupons' , href : '/coupons', icon : < Gift/> },
    { label : 'Attendance' , href : '/attendance', icon : <Fingerprint/> },
    { label : 'Survey Question' , href : '/serveyquestions', icon : <Chat /> },
    { label : 'Transaction' , href : '/transaction', icon : < Repeat  /> },
    { label : 'Settings' , href : '/serveyquestions', icon : <Gear  /> },
  ]
  return (
    <>
    { manus.map((item, index) => (
        <Nav>
        <Nav.Link href={item.href} style={{color:'black'}}>
        {icon ? item.icon : null} {item.label}
        </Nav.Link>
      </Nav>
      ))
    }
    </>
  )
}