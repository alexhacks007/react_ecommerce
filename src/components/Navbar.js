import './Navbar.css';
import {NavLink} from 'react-router-dom'
import { useAuth } from '../auth/Authenticate';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import ProfileDropdown from './Profile_button';
import { Dropdown } from 'react-bootstrap';
import Modal1 from './Modal';

export function Navbar(){

  const { user, logoutUpdate } = useAuth();
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" style={{flexWrap: 'nowrap'}}>
    <NavLink className="navbar-brand">Navbar</NavLink>
        <Form style={{width:'100%',textAlign:'center',display:'flex',justifyContent:'center'}}>
        <InputGroup style={{width:'50%'}}>
          <InputGroup.Text id="basic-addon1"><i class="bi bi-search"></i></InputGroup.Text>
          <Form.Control
            placeholder="Search for products,Brands and etc.."
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav" style={{color:'black',width:'100%'}}>
      
        <li className="nav-item">
          <NavLink to=""  >Home</NavLink>
        </li>
                <li className="nav-item"><NavLink   to= 'products' > Products</NavLink></li>
                <li className="nav-item"><NavLink   to= 'cart'  > Cart</NavLink></li>
                <li className="nav-item">
                <Dropdown style={{display:'flex'}}>
            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{display:'flex',alignItems: 'center'}}>
            <i class="bi bi-person-circle"></i>{user ? user.firstName : <span>User</span>} 
            </Dropdown.Toggle>
            <Dropdown.Menu style={{textAlign:'center',overflow:'hidden'}}>
                <Dropdown.Item href="#/profile"><Modal1/></Dropdown.Item>
                <Dropdown.Item href="#/settings" align="center">Settings</Dropdown.Item>
                <Dropdown.Item onClick={logoutUpdate}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </li>
      </ul>
    </div>
</nav>
    )
}