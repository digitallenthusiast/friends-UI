import React from 'react';
import AddFriend from './AddFriend.js';
import ShowList from './ShowList.js';
import header from '../img/me_rgb.png';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class FriendsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: '@nickname',
        name: 'Tyler McGinnis',
      friends: [
      'Jake Lingwall',
      'Sarah Drasner',
      'Merrick Christensen'
      ],
    }
    this.addFriend = this.addFriend.bind(this);
  }

  addFriend(friend) {
    this.setState((state) => ({
      friends: state.friends.concat([friend])
    }))
  }

  render() {
    return (
      <div className="Friends">
      <Card>
        <CardImg top width="100%" src="" alt="header" />
        <CardBody>
          <CardTitle>{this.state.nickname}</CardTitle>
          <CardSubtitle>{this.state.name}</CardSubtitle>
          <CardText>Inspiration is like the Sunshining</CardText>
          <Button color="primary"><i className="fa fa-twitter-square fa-2x" aria-hidden="true">
</i></Button>
        </CardBody>
      </Card>
      <br />
        <AddFriend  addNew={this.addFriend} />
        <br />
        <ShowList names={this.state.friends} />
        
      </div>

      )

  }
}

export default FriendsContainer;