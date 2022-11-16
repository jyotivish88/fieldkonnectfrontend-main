import * as React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

export default function DisplayCreateForm({display, formlabel , children}:{children: React.ReactNode, display:any, formlabel:string}) {
  return (
    <Card>
        {/* <CardContent>
        <Col item xs={12}>
            <Box display="flex" justifyContent="flex-start">
                <Typography variant="h6">{formlabel}</Typography>
            </Box>
            <Box display="flex" justifyContent="flex-end">
                <IconButton color="error" aria-label="Close Form" onClick={display}>
                    <CloseIcon />
                </IconButton>
            </Box>
        </Col>
        {children}
        </CardContent> */}
    </Card>
  )
}