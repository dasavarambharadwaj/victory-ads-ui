import { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import List from './components/list/List'
import configuration from './static/configuration.json'
import Home from './components/home/Home'
import About from './components/about/About'
import AddBusiness from './components/add-business/AddBusiness'
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchString:"",
    }
    this.setGlobalVariables();
  }
  setGlobalVariables() {
    window.appConfig = configuration;
    
  }
  searchStringUpdated(string) {
    this.setState({searchString:string})
    this.props.history.push("/search")
    
  }
  componentDidMount(){
    window.globalRouter = this.props.history;
  }
  render() {
    return (
      <div className="App">
        <Header searchStringChanged={this.searchStringUpdated.bind(this)}></Header>
          <Switch>
          <Route exact={true} path='/'><Home></Home></Route>
          <Route path='/about'><About></About></Route>
          <Route path='/add-business'><AddBusiness></AddBusiness></Route>
          <Route path='/search'><List searchString={this.state.searchString}></List></Route>
          </Switch>
        
      </div>
    );
  }
}
export default withRouter(App);
