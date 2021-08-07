import { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import List from './components/list/List'
class App extends Component {
  constructor(){
    super();
    this.state = {
      searchString:""
    }
  }
  searchStringUpdated(string) {
    this.setState({searchString:string})
  }
  render() {
    return (
      <div className="App">
        <Header searchStringChanged={this.searchStringUpdated.bind(this)}></Header>
        <List searchString={this.state.searchString}></List>
      </div>
    );
  }
}
export default App;
