import * as React from 'react';
import SidebarMenu from './SidebarMenu';
import Image from 'next/image'
import darklogo from '../../assets/logo/dark_logo.png'
export default function Sidebar({ open }: { open: boolean }) {
  return (
    <div className="vertical-menu">
      <div className="h-100">
        <SidebarMenu icon={true} />
      </div>
    </div>
  )
}