import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import * as React from 'react';
import logo from '../../assets/logo/whitelogo.png'
import darklogo from '../../assets/logo/dark_logo.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import SidebarMenu from '../Sidebar/SidebarMenu';
import { Bell } from 'react-bootstrap-icons';
import { ProfileMenu } from './Profile';
//import ProfileMenu from './Profile';

export default function Header() {

  return (
    <header id="page-topbar">
       <div className="navbar-header">
         <div className="d-flex text">
           <div className="navbar-brand-box">
             <Link href="/" className="logo logo-dark">
               <span className="logo-lg">
               <Image
                src={darklogo}
                 alt="Field Konnect"
               />
               </span>
             </Link>
           </div>
           <div className="navbar-brand-box">
             <Link href="/dashboard" className="amit">
               <span className="amit">
               Hello,Amit<br/>
               <p className="more">  Looking for more redeemption and more</p>
               </span>
             </Link>
           </div>
           <div className="navbar-brand-box"><span className=" bell" style={{marginTop:50}}>  <Bell/></span>
         
           </div>

<div className="navbar-brand-box ">
  <p className='kul'>  Kudapali Giza 
</p>
</div>
           <div className="navbar-brand-box">

<span >
    <img src="./img_avatar.png" alt="Avatar" className="avatar"/>
    
    
</span>
  


</div>





        </div>
        
      </div>
    </header>

     
     


    );
}













