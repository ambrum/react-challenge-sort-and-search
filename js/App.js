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
      FilteredData: [],
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
        FilteredData: data,
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
   console.log(this.state, this.state.FilteredData);
   return (
    <div className="container app">

    <Searchbar UserList = {this.state.UserData} onSearch = {FilteredData => this.setState({FilteredData: FilteredData, ActiveUser: FilteredData[0]})}/>
    <Buttons 
    onSorting = { (sortedData, activeUser) => this.setState({ UserData : sortedData, ActiveUser : activeUser })}
    userData = {this.state.UserData} />
    <Content users = {this.state.FilteredData}  userPickup = {ActiveUser => this.setState({ActiveUser})} activeUser = { this.state.ActiveUser } />
    </div>
    );
  }
}
