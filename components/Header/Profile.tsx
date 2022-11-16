import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// //i18n
// import { withTranslation } from "react-i18next"
// // Redux
// import { connect } from "react-redux"
// import { Link } from "react-router-dom"

// users
import user1 from "../../../assets/images/users/avatar-1.jpg"

export function ProfileMenu(){
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false)

  const [username, setusername] = useState("Admin")

//   useEffect(() => {
//     if (localStorage.getItem("authUser")) {
//       if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
//         const obj = JSON.parse(localStorage.getItem("authUser"))
//         setusername(obj.displayName)
//       } else if (
//         process.env.REACT_APP_DEFAULTAUTH === "fake" ||
//         process.env.REACT_APP_DEFAULTAUTH === "jwt"
//       ) {
//         const obj = JSON.parse(localStorage.getItem("authUser"))
//         setusername(obj.username)
//       }
//     }
//   }, [props.success])

  return (
    <>
      <Dropdown
        // isOpen={menu}
        // toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <Dropdown.Toggle
    
        
      
        >
          <img
style={{marginLeft:50}}
className="avatar"
            src="./img_avatar.png"
            alt="Header Avatar"
          />
     
            </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-end">
       
          <Dropdown.Item tag="a" href="/profile">
            {" "}
            <i className="bx bx-user font-size-16 align-middle me-1"/>
            {/* {props.t("Profile")}{" "} */}
          </Dropdown.Item>
          <Dropdown.Item tag="a" href="/crypto-wallet">
            <i className="bx bx-wallet font-size-16 align-middle me-1"/>
            {/* {props.t("My Wallet")} */}
          </Dropdown.Item>
          <Dropdown.Item tag="a" href="#">
            <span className="badge bg-success float-end">11</span>
            <i className="bx bx-wrench font-size-16 align-middle me-1"/>
            {/* {props.t("Settings")} */}
          </Dropdown.Item>
          <Dropdown.Item tag="a" href="auth-lock-screen">
            <i className="bx bx-lock-open font-size-16 align-middle me-1"/>
            {/* {props.t("Lock screen")} */}
          </Dropdown.Item>
          <div className="dropdown-divider"/>
          {/* <Link to="/logout" className="dropdown-item">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"/>
            <span>{props.t("Logout")}</span>
          </Link> */}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

// ProfileMenu.propTypes = {
//   success: PropTypes.any,
//   t: PropTypes.any
// }

// const mapStatetoProps = state => {
//   const { error, success } = state.Profile
//   return { error, success }
// }

// export default withRouter(
//   connect(mapStatetoProps, {})(withTranslation()(ProfileMenu))
// )
