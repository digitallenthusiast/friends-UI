import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import { ListGroup, ListGroupItem } from 'reactstrap';


class ShowList extends React.Component {
  render() {
    return(
      
        <div className="ShowList">
        <Card>
        
        <CardBody>
          <CardTitle>Friends</CardTitle>
          
          
             <ListGroup>
       {this.props.names.map((friend) => { return  <ListGroupItem>{friend} </ListGroupItem>})}
            </ListGroup>
        </CardBody>
      </Card>
      
        
       </div>    
      
        
      )
  }
}

export default ShowList;