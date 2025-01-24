import React from 'react'
import {Col, Button} from 'react-bootstrap';

function ButtonsBox() {
  return (
    <>
        <Col className='col-12 mt-5'>
            <div className="btns-box text-center">
                <Button variant="outline-secondary" className='m-2'>Inspire</Button>
                <Button variant="outline-secondary" className='m-2'>Colors</Button>
                <Button variant="outline-secondary" className='m-2'>Secondary</Button>
                <Button variant="outline-secondary" className='m-2'>Secondary</Button>
                <Button variant="outline-secondary" className='m-2'>Secondary</Button>
                <Button variant="outline-secondary" className='m-2'>Secondary</Button>
                <Button variant="outline-secondary" className='m-2'>Secondary</Button>
                <Button variant="outline-secondary" className='m-2'>Secondary</Button>
                <Button variant="outline-secondary" className='m-2'>Secondary</Button>
            </div>
        </Col>
    </>
  )
}

export default ButtonsBox