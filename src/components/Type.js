import React, { Component } from 'react';


export class Type extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		type_name : ""
    	};
    	this.onBlur = this.onBlur.bind(this);
    }

    onInputChange(e){    
    	const keyword = e.target.value;
    	this.setState({type_name:keyword});
	}

	onBlur(){
		const { type_name } = this.state;
		console.log(type_name);
		
		this.props.type(type_name);
	}

  	render()
  	{
  		return(
			<React.Fragment>
		        <div className="search-left">
		        <div className="search-container">
		          <div className="content-half">
		            <input
		              type="text"   
		              className="res_in"           
		              placeholder="Enter Type" 
		              onBlur={this.onBlur} 
		              onChange={this.onInputChange.bind(this)}           
		            />            
		          </div>
		        </div>
		      </div>
		      </React.Fragment>
		)
	}
}		



export default Type