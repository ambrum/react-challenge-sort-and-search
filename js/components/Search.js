import React, { Component } from 'react';

class Searchbar extends Component {
	constructor(props){
		super(props);
	};
	onInputSearch(inputValue){
		const filtered = [];
		this.props.UserList.map((prop) => {
			if(prop.name.match(inputValue)){
				return filtered.push(prop);
			}
		});
		return this.props.onSearch(filtered);
	};
	render(){		
		return(
			<div className = "row">
			<div className = "col-sm-12">
			<input type = "text" placeholder = "Search people by name..."
			className = "col-lg-12 form-control"
			onChange = {event => this.onInputSearch(event.target.value)} />
			</div>
			</div>
			)
		}		

	}

	export default Searchbar;