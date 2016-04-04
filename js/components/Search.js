import React, { Component } from 'react';

class Searchbar extends Component {
	constructor(props){
		super(props);
		this.state={
			SearchedUser: ''
		};
	}
	render(){
		const duplicatedUserData = _.clone(this.props.UserList);
		const filtered = [];	
		onSearch(ev) {
			this.setState({SearchedUser});
			const filteredData = duplicatedUserData.map((prop) => {
				if(prop.name.match(this.state.SearchedUser)){
					return filtered.push(prop);
				}
			});

		}
		console.log(filtered);
		return(
			<div className="row">
			<div className="col-sm-12">
			<input type="text" placeholder="Search people by name..."
			className="col-lg-12 form-control"
			value = {this.state.SearchedUser}
			onChange={event => this.onSearch(event.target.value)} />
			</div>
			</div>
			)
		}
		

	}

	export default Searchbar;