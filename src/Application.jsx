import React, { Component, Fragment } from 'react';
import { SmartForm, SmartInputExamples } from './SmartForm';

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
          <SmartInputExamples.Text name="login" />
          <SmartInputExamples.Password name="password" />
          <button type="submit">
                        MAGIC!
          </button>
        </SmartForm>
      </Fragment>
    );
  }
}
