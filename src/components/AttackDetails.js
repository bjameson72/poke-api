import React from 'react';
import axios from 'axios';
import '../css/AttackDetails.css';

/* Takes props:
attackUrl : string
*/

class AttackDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    axios
      .get(this.props.attackUrl)
      .then(Response => {
        console.log(Response.data);
        console.log(Response.data.damage_class.name);
        this.setState({
          accuracy: Response.data.accuracy,
          damageClass: Response.data.damage_class.name,
          power: Response.data.power,
          pp: Response.data.pp,
          target: Response.data.target.name,
          type: Response.data.type.name,
          summary: Response.data.effect_entries[0].effect,
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <p>Accuracy : {this.state.accuracy}</p>
        <p>Damage Class: {this.state.damageClass}</p>
        <p>Power : {this.state.power}</p>
        <p>PP : {this.state.pp}</p>
        <p>Target : {this.state.target}</p>
        <p>Type : {this.state.type}</p>
        <p>Summary : {this.state.summary}</p>
      </div>
    );
  }
}
export default AttackDetails;
