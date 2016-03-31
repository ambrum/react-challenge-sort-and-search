import React, { Component } from 'react';
import Button from './components/Button';
import Searchbar from './components/Search';
import Buttons from './components/Ordering';
import Content from './components/Content';

function loadJSON(path, success, error){
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
}
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { UserData: [] };
    //   id: '',
    //   name: '',
    //   age: '',
    //   phone: '',
    //   image: '',
    //   phrase: ''
    // };
  }
  componentDidMount() {
    var users = loadJSON('data.json',
      function(data) { 
        return data;
      },
      function(xhr) { 
        console.error(xhr);
      }
      )
    this.setState({ UserData: users})
    console.log(this.state);
  }
  
  render() {
    return (
      <div className="container app">

      <Searchbar />
      <Buttons />
      <Content />
      </div>
      );
    }
  }
