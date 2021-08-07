import { Navbar,Container,Row,Col} from "react-bootstrap";
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import './Header.css';
import { Component } from "react";

class Header extends Component {
  constructor(){
    super();
    this.state = {
      searchValue:""
    }
    this.props = {
      searchStringChanged:null
    }
  }
  searchValueChanged(e){
    this.setState({searchValue:e.target.value})
    this.props.searchStringChanged(e.target.value);
  }
  render(){
    return(
      <Navbar className="navbar-styles mb-2">
        <Container>
            <Row className="w-100">
                <Col sm={2}>
                  <Navbar.Brand href="/home"><span style={{fontWeight:"bold"}}>Victory Ads</span></Navbar.Brand>
                </Col>
                <Col sm={5}>
                  <Input
                    fullWidth={true}
                    className="Search-field p-1"
                    disableUnderline={true}
                    value={this.state.searchValue}
                    onChange={(e)=>this.searchValueChanged(e)}
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon className="search-icon"></SearchIcon>
                      </InputAdornment>
                    }/>
                </Col>
                <Col sm={5}>
                <Button variant="contained" placeholder="Search" className="add-business-button" size="large" startIcon={<AddIcon></AddIcon>}>
                  Add Business
                </Button>
                </Col>
            </Row>
        </Container>
      </Navbar>
    )
  }
}

export default Header;
