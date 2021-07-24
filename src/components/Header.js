import { Navbar,Container,Row,Col} from "react-bootstrap";
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import './Header.css';

function Header() {
  return (
    <Navbar bg="light">
    <Container>
        <Row className="w-100">
            <Col sm={3}>
              <Navbar.Brand href="/home">Victory Ads</Navbar.Brand>
            </Col>
            <Col sm={4}>
              <Input
                fullWidth={true}
                disableUnderline={true}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon></SearchIcon>
                  </InputAdornment>
                }/>
            </Col>
            <Col sm={5}>
            <Button variant="contained" className="add-business-button" size="large" startIcon={<AddIcon></AddIcon>}>
              Add Business
            </Button>
            </Col>
        </Row>
    </Container>
  </Navbar>
  );
}

export default Header;
