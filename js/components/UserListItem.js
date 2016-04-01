import React, { Component } from 'react';

const ListItem = ({user, userPickup}) =>{
		return(			
			<li className="row" onClick={()=>userPickup(user)}>
				<div className="col-sm-2">
					<img src={`./images/${user.image}.svg`} className="user-image" />
				</div>
				<div className="col-sm-4">
					<p>{user.name}</p>
				</div>
				<div className="col-sm-3">
					<p>{user.age}</p>
				</div>
				<div className="col-sm-3">
					<p>{user.phone}</p>
				</div>
			</li>			
			)
		}
	export default ListItem;
