import * as React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

interface BreadcrumbItem {
    href: string; 
    label: string;
}

export default function BreadcrumbComponent({firstItem,secondItem, itemlabel}:{firstItem: BreadcrumbItem, secondItem: BreadcrumbItem, itemlabel:string}) {
  return (
    <Breadcrumb>
      {firstItem.href ? (<Breadcrumb.Item href={firstItem.href}>{firstItem.label}</Breadcrumb.Item>) : null}
      {secondItem.href ? (<Breadcrumb.Item href={secondItem.href}>
      {secondItem.label}
      </Breadcrumb.Item>) : null}
      <Breadcrumb.Item active>{itemlabel}</Breadcrumb.Item>
    </Breadcrumb>
  )
}