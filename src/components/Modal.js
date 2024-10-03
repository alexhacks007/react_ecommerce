import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from '../auth/Authenticate';
import { useNavigate } from 'react-router-dom';

function Modal1() {
  const { user,logoutUpdate} = useAuth();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} style={{backgroundColor:'white',border:'none',color:'black',width:'100%'}} className='profilebtn'>
        Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            user ?
          <><h5>First name: {user.firstName}</h5><h5>Last name: {user.lastName}</h5><h5>gender: {user.gender}</h5><h5>email: {user.email}</h5></> :
          <><Button onClick={()=>{navigate('/login')}}>Login</Button></>
}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={logoutUpdate}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal1;