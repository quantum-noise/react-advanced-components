import React from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './FormContext';

export const smartInputCreator = (WrappedComponent) => {
    const hocComponent = ({ name, ...props }) => (
        <FormContext.Consumer>
            {({ values, handleChange }) => (
                <WrappedComponent
                    {...props}
                    name={name}
                    value={values[name] || ''}
                    onChange={handleChange}
                />
            )}
        </FormContext.Consumer>
    );

    hocComponent.propTypes = {
        name: PropTypes.string,
    };

    return hocComponent;
};
