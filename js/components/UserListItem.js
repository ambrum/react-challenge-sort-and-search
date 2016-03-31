import React, { Component } from 'react';

class ListItem extends Component{
	render(){
		return(			
			<li className="row" key="">
				<div className="col-sm-2">
					<img src="./images/cat.svg" className="user-image" />
				</div>
				<div className="col-sm-4">
					<p> </p>
				</div>
				<div className="col-sm-3">
					<p> </p>
				</div>
				<div className="col-sm-3">
					<p> </p>
				</div>
			</li>
			
			)
		}
	}
	export default ListItem;
