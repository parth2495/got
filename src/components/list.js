import React from 'react';
import './style.scss';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  selectLocation(item)
  {
  	this.props.selectedItems(item);
  }

  render() {
    const { items, isOpen } = this.props;
    if (!isOpen) return null;
    return (
      <div className="list">
        <div className="container">
          <div className="content">
            {items &&
              items.map((item, idx) => {
                return (
                  <div className="item" key={idx} onClick={this.selectLocation.bind(this,item)} >
                    {item.location}
                  </div>
                );
              })}
            {!items && <div className="warning">Nothing Found!</div>}
          </div>
          <div className="footer">Type Keyword to search for war locations</div>
        </div>
      </div>
    );
  }
}