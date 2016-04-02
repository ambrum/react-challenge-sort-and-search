import React, { Component } from 'react';

const Buttons = ({userData, onSorting}) => {
	function sortByName(data){
		var sortedUserData = _.sortBy(data, function(el){ return el.name});
		if(sortedUserData[0].name == data[0].name){
			sortedUserData = _.reverse(data);
		}
		return onSorting(sortedUserData, sortedUserData[0]);		
	}
	function sortByAge(data){
		var sortedUserData = _.sortBy(data, function(el){ return el.age});
		if(sortedUserData[0].age == data[0].age){
			sortedUserData = _.reverse(data);
		}
		return onSorting(sortedUserData, sortedUserData[0]);		
	}
	return (
		<div className="row">
		<div className="col-sm-12">
		<div className="toolbar">
		<button className="btn btn-default" onClick = {() => sortByName(userData)}>
		<i className="icon fa fa-sort-alpha-asc"></i>
		<span>Sort by name</span>
		</button>
		<button className="btn btn-default" onClick = {() => sortByAge(userData)}>
		<i className="icon fa fa-sort-numeric-desc"></i>
		<span>Sort by age</span>
		</button>
		</div>
		</div>
		</div>
		);
	}


	export default Buttons;
