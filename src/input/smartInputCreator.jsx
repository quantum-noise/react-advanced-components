import React from 'react';
import PropTypes from 'prop-types';
import { FormContext } from '../form';

export const smartInputCreator = (WrappedComponent) => {
    const hocComponent = ({ name, ...props }) => (
        <FormContext.Consumer>
            {({ values, handleChangeCreator }) => (
                <WrappedComponent
                    {...props}
                    name={name}
                    value={values[name] || ''}
                    onChange={handleChangeCreator(name)}
                />
            )}
        </FormContext.Consumer>
    );

    hocComponent.propTypes = {
        name: PropTypes.string,
    };

    return hocComponent;
};
