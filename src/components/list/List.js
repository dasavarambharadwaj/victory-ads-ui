import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Row, Col,Container} from 'react-bootstrap'
import ScheduleIcon from '@material-ui/icons/Schedule';
import Popover from '@material-ui/core/Popover';
import WebIcon from '@material-ui/icons/Web';
import { Component } from 'react'
import './List.css';
import services from '../../services/apiServices'


class List extends Component {
    constructor() {
        super();
        this.state = { 
            openEmail : {},
            openPhone : {},
            openPerson : {},
            openLocation : {},
            openTiming:{},
            anchorElPerson:{},
            anchorElEmail : {},
            anchorElPhone : {},
            anchorElLocation : {},
            anchorElTiming:{},
            listOfCustomers : [],
            searchString:""
        };
        this.props = {
            searchString:""
        }
    }
    handleClickPerson(event,index){
        let anchorElPerson = {};
        anchorElPerson[index] = event.currentTarget
        let openPerson = {}
        openPerson[index] = true;
        this.setState({anchorElPerson,openPerson})
    }
    handleClickEmail(event,index){
        let anchorElEmail = {};
        anchorElEmail[index] = event.currentTarget
        let openEmail = {}
        openEmail[index] = true;
        this.setState({anchorElEmail,openEmail});
    }
    handleClickPhone(event,index){
        let anchorElPhone = {};
        anchorElPhone[index] = event.currentTarget
        let openPhone = {}
        openPhone[index] = true;
        this.setState({anchorElPhone,openPhone});
    }
    handleClickLocation(event,index){
        let anchorElLocation = {};
        anchorElLocation[index] = event.currentTarget
        let openLocation = {}
        openLocation[index] = true;
        this.setState({anchorElLocation,openLocation});
    }
    handleClickTiming(event,index){
        let anchorElTiming = {};
        anchorElTiming[index] = event.currentTarget
        let openTiming = {}
        openTiming[index] = true;
        this.setState({anchorElTiming,openTiming});
    }
    handleClosePerson(){
        let anchorElPerson = {};
        let openPerson = {}
        this.setState({anchorElPerson,openPerson})
    }
    handleCloseEmail(){
        let anchorElEmail = {};
        let openEmail = {}
        this.setState({anchorElEmail,openEmail});
    }
    handleClosePhone(){
        let anchorElPhone = {};
        let openPhone = {}
        this.setState({anchorElPhone,openPhone});
    }
    handleCloseLocation(){
        let anchorElLocation = {};
        let openLocation = {}
        this.setState({anchorElLocation,openLocation});
    }
    handleCloseTiming(){
        let anchorElTiming = {};
        let openTiming = {}
        this.setState({anchorElTiming,openTiming});
    }
    async getCustomerData(){
        try {
            let service = new services();
            let data= await service.get(window.appConfig.backendUrl+"/customers",{search:this.props.searchString});
            await this.setState({
                listOfCustomers:data.data,
                anchorElEmail:new Array(data.data.length).fill(null),
                anchorElPerson:new Array(data.data.length).fill(null),
                openEmail : {},
                openPerson : {},
                searchString : this.props.searchString,
            });
        }
        catch(e) {
            this.setState({
                listOfCustomers:[],
                anchorElEmail:[],
                anchorElPerson:[],
                openEmail : {},
                openPerson : {}
            })   
        }
    }
    async componentDidMount() {
        await this.getCustomerData();
    }
    async componentDidUpdate() {
        if(this.state.searchString !== this.props.searchString){
            await this.getCustomerData();
        }
    }
    render() {
        return (
            <Container>
                {this.state.listOfCustomers?.map((element,index)=>(
                    <Row className="justify-content-md-center p-4 mb-2 business-list-items">
                        <Col sm={9}>
                            <p className="business-name">{element.name?element.name:"No Name"}</p>
                        </Col>
                        <Col sm={3}>
                            <Row>
                                <Col sm={2}>
                                    <PersonIcon style={{cursor:"pointer"}} onClick={e=> this.handleClickPerson(e,index)}></PersonIcon>
                                    <Popover 
                                    open={this.state.openPerson[index]}
                                    anchorEl={this.state.anchorElPerson[index]}
                                    onClose={a=>this.handleClosePerson()}
                                    anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                    }}>
                                        <Row className="p-2">
                                            <h6>{element["owner name"] || "Data not available"}</h6>
                                        </Row>
                                    </Popover>
                                </Col>
                                <Col sm={2}>
                                    <MailIcon style={{cursor:"pointer"}} onClick={e=> this.handleClickEmail(e,index)}></MailIcon>
                                    <Popover
                                        open={this.state.openEmail[index]}
                                        anchorEl={this.state.anchorElEmail[index]}
                                        onClose={a=> this.handleCloseEmail()}
                                        anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                        }}>
                                            <Row className="p-2">
                                                <h6>{element.mail || "Email not available"}</h6>
                                            </Row>
                                    </Popover>
                                </Col>
                                <Col sm={2}>
                                    <PhoneIcon style={{cursor:"pointer"}} onClick={e=> this.handleClickPhone(e,index)}></PhoneIcon>
                                    <Popover
                                        open={this.state.openPhone[index]}
                                        anchorEl={this.state.anchorElPhone[index]}
                                        onClose={a=> this.handleClosePhone()}
                                        anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                        }}>
                                            <Row className="p-2">
                                                <h6>{element.mobile || "Mobile number not available"}</h6>
                                            </Row>
                                    </Popover>
                                </Col>
                                <Col sm={2}>
                                    <LocationOnIcon style={{cursor:"pointer"}} onClick={e=> this.handleClickLocation(e,index)}></LocationOnIcon>
                                    <Popover
                                        open={this.state.openLocation[index]}
                                        anchorEl={this.state.anchorElLocation[index]}
                                        onClose={a=> this.handleCloseLocation()}
                                        anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                        }}>
                                            <Row className="p-2">
                                                <h6>{element.address || "Address not available"}</h6>
                                            </Row>
                                    </Popover>
                                </Col>
                                <Col sm={2}>
                                    <ScheduleIcon style={{cursor:"pointer"}} onClick={e=> this.handleClickTiming(e,index)}></ScheduleIcon>
                                    <Popover
                                        open={this.state.openTiming[index]}
                                        anchorEl={this.state.anchorElTiming[index]}
                                        onClose={a=> this.handleCloseTiming()}
                                        anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                        }}>
                                            <Row className="p-2">
                                                <h6>{element.timings || "Timing details not available"}</h6>
                                            </Row>
                                    </Popover>
                                </Col>
                                <Col sm={2}><WebIcon></WebIcon></Col>
                            </Row>
                        </Col>
                    </Row>
                ))}
            </Container>
        );
    }
}

export default List;

