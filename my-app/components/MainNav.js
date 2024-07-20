import { useState } from 'react';
import { useRouter } from 'next/router';
import { Navbar, Nav, Form, NavDropdown, Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAtom } from 'jotai';
import { searchHistoryAtom } from '@/store';

const MainNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);
  const [searchField, setSearchField] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryString = `title=true&q=${searchField}`;
    setSearchHistory(current => [...current, queryString]);
    router.push(`/artwork?${queryString}`);
    setIsExpanded(false);
  };

  const handleInputChange = (event) => {
    setSearchField(event.target.value);
  };

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const closeNavbar = () => {
    setIsExpanded(false);
  };

  return (
    <Navbar expanded={isExpanded} fixed="top" className="navbar-dark bg-primary" expand="lg">
      <Container>
        <Navbar.Brand href="/">Frank Fu</Navbar.Brand>
        <Navbar.Toggle onClick={toggleNavbar} />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link onClick={closeNavbar} active={router.pathname === "/"}>Home</Nav.Link>
            </Link>
            <Link href="/search" passHref legacyBehavior>
              <Nav.Link onClick={closeNavbar} active={router.pathname === "/search"}>Advanced Search</Nav.Link>
            </Link>
          </Nav>
          &nbsp;
          <Form onSubmit={handleSubmit} className="d-flex">
            <Form.Control type="text" placeholder="Search" name="search" value={searchField} onChange={handleInputChange} />
            <Button type="submit" variant="outline-success" className="btn btn-outline-success">Search</Button>
          </Form>
          &nbsp;
          <Nav>
            <NavDropdown title="User Name" id="basic-nav-dropdown">
              <Link href="/favourites" passHref legacyBehavior>
                <NavDropdown.Item onClick={closeNavbar} active={router.pathname === "/favourites"}>Favourites</NavDropdown.Item>
              </Link>
              <Link href="/history" passHref legacyBehavior>
                <NavDropdown.Item onClick={closeNavbar} active={router.pathname === "/history"}>Search History</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
