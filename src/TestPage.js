import React, { Component } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:5000';

class TestPage extends Component {

  constructor() {
    super();
    this.state = {
      return_value: 'tulostaako mitään'
    }
  }

  componentDidMount() {
    console.log("Tulostuuko???????????")
    
    var user = {
        name: 'abcd1235',
        email: 'abcd1235@abc.com',
        password: 'abcd1235',
        password_confirm: 'abcd1235'
      }
    
    axios.post(`${apiUrl}/api/user/register`, user)
    .then(response => {
        console.log("success")
        this.setState({ return_value: response.data });
      })
      .catch(error => {
        console.log("error: " + error)
        this.setState({ return_value: error });
      });
      
  }

  render() {
    const { return_value } = this.state;
    console.log('return_value.name: ' + return_value.name + ', return_value.email: ' + return_value.email)
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <p>{ return_value.name }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TestPage;