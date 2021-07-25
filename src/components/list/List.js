import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Row, Col,Container} from 'react-bootstrap'
import ScheduleIcon from '@material-ui/icons/Schedule';
import Popover from '@material-ui/core/Popover';
import WebIcon from '@material-ui/icons/Web';
import React from 'react'
import './List.css';
export default function List() {
    var [anchorElPerson, setAnchorElPerson] = React.useState(null);
    var [anchorElEmail, setAnchorElEmail] = React.useState(null);
    var handleClickPerson = (event) => {
        setAnchorElPerson(event.currentTarget);
    };
    var handleClickEmail = (event) => {
        setAnchorElEmail(event.currentTarget);
    };

    var handleClosePerson = () => {
        setAnchorElPerson(null);
    };
    var handleCloseEmail = () => {
        setAnchorElEmail(null);
    };

    var openPerson = Boolean(anchorElPerson);
    var openEmail = Boolean(anchorElEmail);


  return (
    <Container>
    <Row className="justify-content-md-center p-4 business-list-items">
        <Col sm={9}>
            <p className="business-name">Business Name</p>
        </Col>
        <Col sm={3}>
            <Row>
                <Col sm={2}>
                    <PersonIcon style={{cursor:"pointer"}} onClick={e=> handleClickPerson(e)}></PersonIcon>
                    <Popover
                    open={openPerson}
                    anchorEl={anchorElPerson}
                    onClose={handleClosePerson}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}>
                        <Row className="p-2">
                            <h6>Person Name</h6>
                        </Row>
                    </Popover>
                </Col>
                <Col sm={2}>
                    <MailIcon style={{cursor:"pointer"}} onClick={e=> handleClickEmail(e)}></MailIcon>
                    <Popover
                        open={openEmail}
                        anchorEl={anchorElEmail}
                        onClose={handleCloseEmail}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}>
                            <Row className="p-2">
                                <h6>Mail ID</h6>
                            </Row>
                        </Popover>
                </Col>
                <Col sm={2}><PhoneIcon></PhoneIcon></Col>
                <Col sm={2}><LocationOnIcon></LocationOnIcon></Col>
                <Col sm={2}><ScheduleIcon></ScheduleIcon></Col>
                <Col sm={2}><WebIcon></WebIcon></Col>
            </Row>
        </Col>
    </Row>
    </Container>
  );
}
