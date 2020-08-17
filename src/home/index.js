import React, { Component } from "react";
import { Card, Navbar, Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";


class Home extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({ data: response.data });
    });
  }
  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
  render() {
    console.log("data", this.state.data);
    const items = this.state.data.filter((data1)=>{
      if(this.state.search == null)
          return data1
      else if(data1.title.toLowerCase().includes(this.state.search.toLowerCase()) || data1.body.toLowerCase().includes(this.state.search.toLowerCase())){
          return data1
      }
    }).map(data1=>{
 
      return(
        <Card style={{ width: "18rem" }} className="box">
        <Card.Body>
          <Card.Title>{data1.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Id:- {data1.id}</Card.Subtitle>
          <Card.Text>
          {data1.body}
          </Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link> */}
          {/* <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
      )
  })
    return (
      <>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Assignment</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      
        <Form inline >
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=>this.searchSpace(e)} />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar> 
            <div className="grid">
           {items}
       </div>
         </>  
      
         
      );
    };
      
  
}

export default Home;
