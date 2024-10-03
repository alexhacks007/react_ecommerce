import React from 'react';
import { Dropdown } from 'react-bootstrap';

const ProfileDropdown = () => {
    return (
        <Dropdown align="end">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                Profile
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/profile">My Profile</Dropdown.Item>
                <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
                <Dropdown.Item href="#/logout">Log Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ProfileDropdown;
