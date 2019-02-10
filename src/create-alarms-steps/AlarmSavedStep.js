'use strict';

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'

export class AlarmSavedStep extends Component {
  constructor(props) {
    super(props);

    this.handleBackToAllAlarmsPage = this.handleBackToAllAlarmsPage.bind(this);

    this.state = {
        backToAllAlarmsPage: false
      }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleBackToAllAlarmsPage(){
      console.log("handleBackToAllAlarmsPage called")
      this.setState(function () {
      return {
        backToAllAlarmsPage: true,
      }
    });
  }

  render() {
    if (this.state.backToAllAlarmsPage) {
        console.log('AlarmSavedStep this.state.backToAllAlarmsPage: ' + this.state.backToAllAlarmsPage)
        return <Redirect to='/'  />
        //
      }else{
        return (
          <div className="step AlarmSavedStep">
            <div className="row">
              <form id="Form" className="form-horizontal">
                <div className="form-group">
                  <label className="col-md-12 control-label">
                    {
                        <div>
                          <h2>Data was successfully saved...</h2>
                          <p><Button id="addAlarmButton" variant="primary" onClick={this.handleBackToAllAlarmsPage} >Done</Button></p>
                        </div> //
                    }
                  </label>
                  </div>
              </form>
            </div>
          </div> //
        )
      }
  }
}

export default AlarmSavedStep;
