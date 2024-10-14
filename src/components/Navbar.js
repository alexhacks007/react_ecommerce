import './Navbar.css';
import { NavLink,Link } from 'react-router-dom';
import { useAuth } from '../auth/Authenticate';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Dropdown } from 'react-bootstrap';
import Modal1 from './Modal';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
  const { user, logoutUpdate } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to handle sidebar visibility

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the sidebar
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          {/* Navbar Brand */}
          <NavLink className="navbar-brand" to="/"><b>ALEX</b></NavLink>

          {/* Toggler Button for Navbar Collapse */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Search Form */}
          <Form style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }} className="search">
            <InputGroup>
              <InputGroup.Text id="basic-addon1"><i className="bi bi-search"></i></InputGroup.Text>
              <Form.Control
                placeholder="Search for products, Brands, etc."
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>

          {/* Right Side Icons and Collapsible Nav Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-row" style={{ width: '100%' }}>
              <li className="nav-item">
                <NavLink  to="/"><i className="bi bi-house fa-2x"></i></NavLink>
              </li>
              <li className="nav-item"><NavLink  to='/products'><i className="bi bi-bag"></i></NavLink></li>
              <li className="nav-item"><NavLink  to='/cart'><i className="bi bi-cart"></i></NavLink></li>
              <li className="nav-item">
                <Dropdown style={{ display: 'flex' }}>
                  <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="bi bi-person-circle"></i>{user ? <p className='username'>{user.firstName}</p> : <span>User</span>}
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ textAlign: 'center', overflow: 'hidden' }}>
                    <Dropdown.Item href="#/profile"><Modal1 /></Dropdown.Item>
                    <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
                    {user ? <Dropdown.Item onClick={logoutUpdate}>Log Out</Dropdown.Item> :
                      <Dropdown.Item onClick={() => { navigate('/login') }}>Login</Dropdown.Item>}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile View */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeSidebar}>
          <i className="bi bi-x"></i> {/* Bootstrap icon for close */}
        </button>
        <ul>
          <li><NavLink to="/" onClick={closeSidebar}><i className="bi bi-house"></i> Home</NavLink></li>
          <li><NavLink to="/products" onClick={closeSidebar}><i className="bi bi-bag"></i> Products</NavLink></li>
          <li><NavLink to="/cart" onClick={closeSidebar}><i className="bi bi-cart"></i> Cart</NavLink></li>
          <li><div class="dropdown">
  <Link class="btn  dropdown-toggle"to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="bi bi-person-circle"></i>{user ? <p className='username'>{user.firstName}</p> : <span> User</span>}
  </Link> 

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><Link class="dropdown-item"to="#" onClick={closeSidebar}><Modal1 /></Link> </li>
    <li><Link class="dropdown-item" onClick={closeSidebar}>{user ?
          <Button variant="primary" onClick={logoutUpdate}>
            Logout
          </Button> :<Link to='/login'>Login</Link> }</Link> </li>
            </ul>
</div></li>
        </ul>
      </div>
    </>
  );
}
