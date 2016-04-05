import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Table from './UserList';



const Content = ({users, userPickup, activeUser}) =>{
	return(
		<div className="row users-table">
		<Sidebar  activeUser = { activeUser } />
		<Table userlist = { users } userPickup = { userPickup } />
		</div>
		);
}


export default Content;