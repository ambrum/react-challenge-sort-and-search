import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Table from './UserList';



class Content extends Component {
	render(){
		return(
			<div className="row users-table">
			<Sidebar />
			<Table />
			</div>
			);
		}
	}

	export default Content;