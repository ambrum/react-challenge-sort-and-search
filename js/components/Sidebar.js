import React, { Component } from 'react';

const Sidebar = ({user}) => {
	if(user['id']==null){return <div>Loading...</div>}
	return(
		<div className="col-lg-3 col-sm-4 text-center">
		<div className="thumbnail">
		<img src={`./images/${user.image}.svg`} />

		<div className="thumbnail-caption">
		<h3>{user.name}</h3>
		<div className="row">
		<p className="col-sm-12">
		<span className="col-sm-6">Age</span>
		<span className="col-sm-6">{user.age}</span>
		</p>
		</div>
		<div className="row">
		<p className="col-sm-12">
		<span className="col-sm-6">Favorite animal</span>
		<span className="col-sm-6">{user.image}</span>
		</p>
		</div>
		<div className="row">
		<p className="col-sm-12">
		<span className="col-sm-6">Phone</span>
		<span className="col-sm-6">{user.phone}</span>
		</p>
		</div>
		<div className="row">
		<p className="col-sm-12">
		<b>Favorite phrase</b>
		{user.phrase}
		</p>
		</div>

		</div>
		</div>
		</div>
		)
}
export default Sidebar;