import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useRef } from 'react'
export default function AddBudget({show,handleClose}) {
    const nameref=useRef()
    const maxref=
    function handlesubmit(e){

    }
  return (
   <Modal show={show} onHide={handleClose}>
    <Form onSubmit={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>new Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' required/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Maximum spending</Form.Label>
                <Form.Control type='number' required min={0} step={0.01}/>
            </Form.Group>
            <div className='d-flex justidy-content-end'>
                <Button variant='primary' type="submit" >Add Budget</Button>
            </div>
        </Modal.Body>
    </Form>
   </Modal>
  )
}