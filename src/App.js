import './App.scss';
import React from 'react';
import { connect } from "react-redux";
import { createBrowserHistory } from 'history'
import { Card, Button } from 'react-bootstrap';
import Search from './pages/search';
import War from './pages/war';
import { setWar } from './actions/index';

class App extends React.Component {
  constructor(props){
    super(props);  
    this.state = {
      isWar: false    
    };
    this.knowMore = this.knowMore.bind(this);
    this.loadSearch = this.loadSearch.bind(this);
  }

  knowMore(item)
  {
    console.log(item);
    this.props.setWar(item);
    this.setState({isWar: true});
    //console.log(history);
    
  }

  loadSearch()
  {
    this.setState({isWar: false});
  }

  render(){
  const wars = this.props.wars; 
  const isWar = this.state.isWar;
  const isLoading = this.props.isLoading;
  var namesList = wars.map((index) => {
                        console.log(index); 
                        return (
                              <Card style={{ width: '40em', backgroundColor: '#171717', borderRadius: '3%' }} className="wars">
                                <Card.Body  >
                                  <Card.Title><h3>{index.attacker_king} vs. {index.defender_king}</h3></Card.Title>
                                  <Card.Text>
                                    <p>Attacker Commander : {index.attacker_commander}</p>
                                    <p>Defender Commander : {index.defender_commander}</p>
                                    <p>Year : {index.year}</p>
                                    <p>Location: {index.location}</p>
                                    <p>Region: {index.region}</p>
                                  </Card.Text>
                                  <Button className="gobtn" onClick={this.knowMore.bind(this,index)} >Know More</Button>
                                </Card.Body>
                              </Card>);
                      }) 
  console.log(wars);  
  return (
    <div className="App">
      <div className="header" >Game of thrones Battles</div>
        {!isWar?<Search />:<War goBack={this.loadSearch} />}  
        {!isWar?!wars?'':isLoading?<h3>Loading...</h3>:<div className="card">{namesList}</div>:''}    
      
    </div>
  );
  }
}


const mapDispatchToProps = {
  setWar
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
      isLoading: state.war.isFetching,
      wars: state.war.wars 
    }
}

export default connect( mapStateToProps,
                        mapDispatchToProps)(App);
