import React from "react";
import './search.scss';
//import Search from "../components/search";
import { connect } from "react-redux";
import { fetchList } from '../actions/location_actions'
import { fetchWars } from '../actions/war_actions'
import { setLocation, setKingType } from '../actions/index'
import Autocomplete from '../components/autocomplete';
import Kings from '../components/Kings';
import Type from '../components/Type';

class Search extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {     
      isLocation: false,
      isKingName: false,
      kingName: "",
      isLoading: false
    };  
    this.selectLocation = this.selectLocation.bind(this); 
    this.kingName = this.kingName.bind(this);
    this.inputType = this.inputType.bind(this);
  }
  componentDidMount() {
    this.props.fetchList();
    const { isKingName } = this.state;
    console.log(this.state);
    if(isKingName)
    {
      this.props.fetchWars(this.props.king,this.props.type,this.props.selectedLocation);
    }
  }

  selectLocation(item)
  {
    console.log(item);
    this.props.setLocation(item);
    this.setState({isLocation:true});
  }

  kingName(item)
  {
    this.setState({isKingName:true,kingName:item});
  }

  inputType(item)
  {
    this.setState({isWarType:true});
    const { kingName } = this.state;
    if(this.state.isKingName && this.state.isLocation)
    {
      this.props.setKingType({kingName,type:item});
      let loc = this.props.set_loc;
      this.props.fetchWars({loc,kingName,item});
    }
    
  }

  render() {
    const { location } = this.props; 
    const { isLocation } = this.state;
    return (
      <div className="page">
        <div className="page-container">
          <Autocomplete list={location} selectedLocation={this.selectLocation} />
          <div className="sideByside" >  
            {!isLocation?'':
            <span>
              <Kings king={this.kingName} />
            </span>
            }
            {!isLocation?'':
            <span>
              <Type type={this.inputType} />
            </span>
            }
          </div>  
          <div className="container">
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchList,
  setLocation,
  setKingType,
  fetchWars
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
      isLoading: state.location.isFetching,
      location:  state.location.locations,
      king: state.war.king,
      type: state.war.type,
      set_loc: state.war.selectedLocation 
    }
}

export default connect( mapStateToProps,
                        mapDispatchToProps  )(Search);

