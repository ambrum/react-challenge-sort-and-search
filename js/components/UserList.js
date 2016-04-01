import React, { Component } from 'react';
import ListItem from './UserListItem';

const Table = ({userlist}) =>{
	const user = userlist.map((user) => {
		return <ListItem user = { user } key = {user.id} />		
	});
		return(
			<ul className="col-lg-9 col-sm-8">
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
				{ user }	
			</ul>
			)
		}

export default Table;