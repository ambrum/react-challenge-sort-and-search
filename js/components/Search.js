import React, { Component } from 'react';

class Searchbar extends Component {
	constructor(props){
		super(props);
		this.state={
			SearchedUser: ''
		}
	};
	render(){
		const filtered = [];
		function onInputSearch(inputValue){
			console.log(inputValue);
			this.setState({SearchedUser: inputValue});
			this.props.UserList.map((prop) => {
				if(prop.name.match(this.state.SearchedUser)){
					return filtered.push(prop);
				}
			});
			return filtered;
			
		};
		// console.log(filtered);
		return(
			<div className = "row">
			<div className = "col-sm-12">
			<input type = "text" placeholder = "Search people by name..."
			className = "col-lg-12 form-control"
			value = {this.state.SearchedUser}
			onChange = {event => onInputSearch(event.target.value)} />
			</div>
			</div>
			)
		}
	}

	export default Searchbar;