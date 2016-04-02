import React, { Component } from 'react';

const Searchbar = () => {
	
		return(
			<div className="row">
				<div className="col-sm-12">
					<input type="text" placeholder="Search people by name..." className="col-lg-12 form-control" onKeyup="{()=>onSearch()}" />
				</div>
			</div>
			)
		}
	


export default Searchbar;