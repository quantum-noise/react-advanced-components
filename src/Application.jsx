import React, { Component, Fragment } from 'react';
import { SmartForm } from './form';
import { SmartInput } from './input';

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
