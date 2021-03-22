import React, { useState } from 'react';
import FilterModal from '../modal';
import axios from 'axios';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  //Form
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({search: ''});
  const toggle = () => setIsOpen(!isOpen);

  const handleSubmit = () => {
    axios.post('http://localhost:9000/getStudentsSearch', formData)
    .then(res => {
      console.log(res) //we have data
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value })
}

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">StudentUI</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <form onSubmit={handleSubmit}>
              <InputGroup className="mb-2">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Student Finder</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="student name, id..."
                  name='search'
                  type='text'
                  onChange={handleChange}
                  value={formData.search}
                  label='email'
                  id='search'
                  required
                />
                <Button type="submit" color="primary" className="ml-2 mr-2">GO</Button>
                <FilterModal buttonLabel="Filter" />
              </InputGroup>
            </form>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;