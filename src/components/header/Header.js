import { Navbar,Container,Row,Col} from "react-bootstrap";
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import './Header.css';
import { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(){
    super();
    this.state = {
    }
    this.props = {
      searchStringChanged:null
    }
  }
  searchTimeout=null;
  searchValueChanged(e){
      clearTimeout(this.searchTimeout)
    this.searchTimeout = setTimeout(()=>{this.props.searchStringChanged(e.target.value)},500);
  }
  render(){
    return(
      <Navbar className="navbar-styles mb-2">
        <Container>
            <Row className="w-100">
                <Col sm={2}>
                  <Navbar.Brand ><Link to="/" className="remove-link-styles"><span style={{fontWeight:"bold",fontSize:"1.4em"}}>Victory Ads</span></Link></Navbar.Brand>
                </Col>
                <Col sm={5}>
                  <Input
                    fullWidth={true}
                    className="Search-field p-1"
                    disableUnderline={true}
                    onChange={(e)=>this.searchValueChanged(e)}
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon className="search-icon"></SearchIcon>
                      </InputAdornment>
                    }/>
                </Col>
                <Col sm={5}>
                <Button variant="contained" onClick={()=>{window.globalRouter.push("/add-business")}} placeholder="Search" className="add-business-button" size="large" startIcon={<AddIcon></AddIcon>}>
                  Add Your Business
                </Button>
                </Col>
            </Row>
        </Container>
      </Navbar>
    )
  }
}

export default Header;
