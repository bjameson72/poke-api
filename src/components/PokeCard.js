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

export default class PokeCard extends React.Component {
  render() {
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
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
