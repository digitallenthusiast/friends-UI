import React from 'react';

class AddFriend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFriend: ''
    }
    this.updateNewFriend = this.updateNewFriend.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
  }

  updateNewFriend(e) {
    this.setState({
      newFriend:e.target.value
    })
  }
  handleAddNew(){
    this.props.addNew(this.state.newFriend)
    this.setState({
      newFriend: ''
    })
  }
render() {
  return (
    <div>
      <input 
        type="text"
        value={this.state.newFriend}
        onChange={this.updateNewFriend}
      />
      <button onClick={this.handleAddNew}> Add </button>

    </div>
    )
}

}

export default AddFriend;