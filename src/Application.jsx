import React, { Component, Fragment } from 'react';
import { SmartForm, SmartInput } from './SmartForm';

export class Application extends Component {
  componentDidMount() {
    console.log('Hello there!');
  }

  render() {
    return (
      <Fragment>
        <SmartForm
          onSubmit={values => console.log(values)}
        >
          <SmartInput.Text name="login" />
          <SmartInput.Password name="password" />
          <button type="submit">
                        MAGIC!
          </button>
        </SmartForm>
      </Fragment>
    );
  }
}
