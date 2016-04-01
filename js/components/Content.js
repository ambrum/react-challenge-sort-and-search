import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Table from './UserList';



const Content = ({users, activeUser}) =>{
	return(
		<div className="row users-table">
		<Sidebar user = { activeUser } />
		<Table userlist = { users } />
		</div>
		);
}


export default Content;