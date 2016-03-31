import React, { Component } from 'react';
import ListItem from './UserListItem';

class Table extends Component{
	render(){
		return(
			<ul className="col-lg-10 col-md-9 col-sm-8">
			<li className="row">
			<div className="col-sm-2">
			<p>Image</p>
			</div>
			<div className="col-sm-4">
			<p>Name</p>
			</div>
			<div className="col-sm-3">
			<p>Age</p>
			</div>
			<div className="col-sm-3">
			<p>Phone</p>
			</div>
			</li>
			<ListItem />			
			</ul>
			)
		}
	}
export default Table;