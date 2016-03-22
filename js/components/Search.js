import React, { Component } from 'react';

class Searchbar extends Component{
	render(){
		return(
			<div className="row">
				<input type="text" placeholder="Search people by name..." className="col-lg-12 form-control" />
			</div>
			)
		}
	} 


export default Searchbar;