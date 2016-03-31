import React, { Component } from 'react';

class Searchbar extends Component{
	render(){
		return(
			<div className="row">
				<div className="col-sm-12">
					<input type="text" placeholder="Search people by name..." className="col-lg-12 form-control" />
				</div>
			</div>
			)
		}
	} 


export default Searchbar;