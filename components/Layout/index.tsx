import Head from 'next/head'
import Link from "next/link";
import Headers from '../Header/header'
import * as React from 'react';
import Sidebar from '../Sidebar/Sidebar';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div id="layout-wrapper">
        <Headers />
        <Sidebar open={true}/>
        <div className="main-content">{children}</div>
      </div>
    </>
  )
}