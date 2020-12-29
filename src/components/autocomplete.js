import './style.scss';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import List from './list';

export class Autocomplete extends Component {
  
  constructor(props) {
    super(props);
    this.state = {     
      showResult: false,
      foundLocations: [],
      inputValue: ""
    };   
    this.handleSelect = this.handleSelect.bind(this); 
  }

  handleSelect(item)
  {
    console.log(item);
    this.setState({inputValue:item,showResult:false});
    this.props.selectedLocation(item);
  }

  onInputChange(e) {
    const { list } = this.props;
    const keyword = e.target.value;
    const foundLocations = list.filter((item, idx) => {
      return item.toLowerCase().includes(keyword);
    });
    this.setState({foundLocations,inputValue:keyword});
  }

  onInput(e) {
    if (e.target.value !== "") this.showList();
    else this.hideList();
  }

  showList() {
    this.setState({ showResult: true });
  }

  hideList() {
    this.setState({ showResult: false });

  }

  

  render() {
    //const { list } = this.props;
    //console.log(list);
    const { showResult,foundLocations,inputValue } = this.state;
    
    return (
      <React.Fragment>
        <div className="search">
        <div className="search-container">
          <div className="content">
            <input
              type="text"
              className="responsive"
              value={inputValue}
              placeholder="Enter location"
              onChange={this.onInputChange.bind(this)}
              onInput={this.onInput.bind(this)}
            />
            <List isOpen={showResult} items={foundLocations} selectedItems={this.handleSelect} />
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}


export default Autocomplete;