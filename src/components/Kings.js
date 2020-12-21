import React, { Component } from 'react';

export class Kings extends Component {
	
	constructor(props) {
    	super(props);  
    	this.state = {
    		king : ""
    	};
    	this.onBlur = this.onBlur.bind(this); 	 
  	}

  	onInputChange(e){    
    	const keyword = e.target.value;
    	this.setState({king:keyword});

	}

	onBlur(){
		const { king } = this.state;
		console.log(king);
		let name = king.split(" ");
		let k_name = [];
		name.forEach((obj,index) => {			
			obj = obj.slice(0,1).toUpperCase() + obj.slice(1,obj.length);
			k_name[index] = obj;
		})
		let king_name = k_name.join(" ");
		console.log(king_name);
		this.props.king(king_name);
	}

  	render() {
  		return(
			<React.Fragment>
		        <div className="search-left">
		        <div className="search-container">
		          <div className="content-half">
		            <input
		              type="text"
		              onBlur={this.onBlur}
		              onChange={this.onInputChange.bind(this)}
		              placeholder="Enter King's Name"              
		            />            
		          </div>
		        </div>
		      </div>
		      </React.Fragment>
		)
	}	      
}




export default Kings