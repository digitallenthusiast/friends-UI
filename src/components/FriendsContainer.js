import React from 'react'
import AddFriend from './AddFriend.js'
import ShowList from './ShowList'

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
      <div>
      <img />
        <h4> {this.state.nickname} <br />

        {this.state.name}</h4>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>

      )

  }
}

export default FriendsContainer;