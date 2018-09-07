import React from 'react'

class ShowList extends React.Component {
  render() {
    return(
      <div>
        <h3> Friends </h3>

       <ul>
       {this.props.names.map((friend) => { return <li>{friend}</li>})}
       </ul>    
      </div>
        
      )
  }
}

export default ShowList;