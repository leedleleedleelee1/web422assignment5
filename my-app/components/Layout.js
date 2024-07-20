import MainNav from './MainNav';
import Container from 'react-bootstrap/Container';

const Layout = (props) => (
  <>
    <MainNav />
    <br />
    <Container>{props.children}</Container>
    <br />
  </>
);

export default Layout;
