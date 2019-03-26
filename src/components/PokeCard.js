import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { NavLink } from "react-router-dom";

export default class PokeCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "/detail/",
      id: this.props.id,
      attacks: this.props.attacks,
      sprites: this.props.sprites
    };
  }
  render() {
    const id = this.state.url + this.props.id;
    return (
      <div>
        <Card>
          <CardImg top width="" src={this.props.sprites.front_default} />
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardSubtitle>
              {this.props.types.map((type, index) => {
                return <li key={index}> {type.type.name} </li>;
              })}
            </CardSubtitle>
            {/* <CardText>
              <ol>
                {this.props.attacks.map((attack, index) => {
                  return (
                    <li key={index}>
                      {" "}
                      {attack.name}
                      {attack.type}{" "}
                    </li>
                  );
                })}
              </ol>
            </CardText> */}
            {this.props.id ? <NavLink to={id}>See more details</NavLink> : ""}
          </CardBody>
        </Card>
      </div>
    );
  }
}
