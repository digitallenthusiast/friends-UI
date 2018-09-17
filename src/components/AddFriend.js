import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button } from 'reactstrap';
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
    <div className="AddFriend">
    <InputGroup>
        <Input placeholder="Add Friend"
        type="text"
        value={this.state.newFriend}
        onChange={this.updateNewFriend}
         />
         <Button color="success" onClick={this.handleAddNew}>Add</Button>{' '}
      {/*  <button className="AddFriend-button" onClick={this.handleAddNew}> Add </button>
         */}
      </InputGroup>
     {/* <input 
        type="text"
        value={this.state.newFriend}
        onChange={this.updateNewFriend}
      />*/}
      

    </div>
    )
}

}

export default AddFriend;