import _ from 'lodash';
import React, { Component } from 'react';
import Button from './components/Button';
import Searchbar from './components/Search';
import Buttons from './components/Ordering';
import Content from './components/Content';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      UserData: [],
      ActiveUser: {}
    };
  };
  loadJSON(path, success, error){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          if (success)
            success(JSON.parse(xhr.responseText));
        } else {
          if (error)
            error(xhr);
        }
      }
    };
    xhr.open("GET", path, true);
    xhr.send();
  };

  componentDidMount(){
    this.loadJSON('data.json',
    function(data) { 
      this.setState({
        UserData : data,
        ActiveUser : data[0]
      });
      console.log(data);
    }.bind(this),
    function(xhr) { 
      console.error(xhr);
    }
    );
 }
 render() {
   console.log(this.state);
   const search = _.debounce(() => {this.search() }, 200);
   return (
    <div className="container app">

    <Searchbar onSearch = {() => this.setState({UserData})}/>
    <Buttons 
    onSorting = { (UserData) => this.setState({ UserData })}
    userData = {this.state.UserData} />
    <Content users = {this.state.UserData} userPickup = {ActiveUser => this.setState({ActiveUser})} activeUser = {this.state.ActiveUser} />
    </div>
    );
  }
}
