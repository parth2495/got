import React from 'react';
import { connect } from "react-redux";
import { Card, Button } from 'react-bootstrap';

class War extends React.Component {
	constructor(props) {
    	super(props);
    
  		console.log(this.props);
  	}

  	goback()
  	{
  		this.props.goBack();
  	}

	render()
	{
		const { war } = this.props;

		return(
			<Card style={{ width: '40em', backgroundColor: '#171717', borderRadius: '3%' }} className="wars">
                <Card.Body  >
                	<Card.Title><h1>{war.name}</h1></Card.Title>
                    <Card.Title><h3>{war.attacker_king} vs. {war.defender_king}</h3></Card.Title>
                    <Card.Text>
                        <p>Attacker Commander : {war.attacker_commander}</p>
                        <p>Defender Commander : {war.defender_commander}</p>
                        <p>Year : {war.year}</p>
                        <p>Battle Number: {war.battle_number}</p>
                        <p>Location: {war.location}</p>
                        <p>Region: {war.region}</p>
                        <p>Attacker Outcome: {war.attacker_outcome}</p>
                        <p>Attacker Size: {war.attacker_size}</p>
                        <p>Note: {!war.note?'NA':war.note}</p>
                        <p>Attackers: {!war.attacker_1?'':war.attacker_1 } {!war.attacker_2?'':", "+ war.attacker_2 } {!war.attacker_3?'':", "+war.attacker_3 } {!war.attacker_4?'':", "+war.attacker_4 }</p>
                    	<p>Defenders: {!war.defender_1?'':war.defender_1 } {!war.defender_2?'':", "+ war.defender_2 } {!war.defender_3?'':", "+war.defender_3 } {!war.defender_4?'':", "+war.defender_4 }</p>
                    </Card.Text>
                    <Button className="gobtn" onClick={this.goback.bind(this)} >Go Back</Button>
                </Card.Body>
            </Card>
		);
	}

}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      war: state.war.selectedWar    
    }
}

export default connect( mapStateToProps,
                        null  )(War);