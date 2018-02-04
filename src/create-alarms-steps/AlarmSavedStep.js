'use strict';

import React, { Component } from 'react';

export  class AlarmSavedStep extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  // not required as this component has no forms or user entry
  // isValidated() {}

  render() {
    return (
      <div className="step AlarmSavedStep">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                {
                    <div>
                      <h1>Thanks!</h1>
                      <h2>Data was successfully saved to cloud...</h2>
                    </div>
                }
              </label>
              </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AlarmSavedStep;
