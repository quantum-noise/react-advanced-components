import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './FormContext';

export class SmartForm extends Component {
    static propTypes = {
        children: PropTypes.element,
        onSubmit: PropTypes.func,
    };

    state = {
        values: {},
    };

    handleInputChange = name => ev => {
        ev.persist();
        this.setState(prevState => ({
            ...prevState,
            values: {
                ...prevState.values,
                [name]: ev.target.value,
            },
        }));
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.onSubmit(this.state.values);
    };

    render() {
        const { children } = this.props;
        const { values } = this.state;
        return (
            <FormContext.Provider
                value={{
                    values,
                    handleChangeCreator: this.handleInputChange,
                }}
            >
                <form onSubmit={this.handleSubmit}>
                    { children }
                </form>
            </FormContext.Provider>
        );
    }
}

