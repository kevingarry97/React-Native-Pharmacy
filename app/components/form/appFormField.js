import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../textInput';
import ErrorMessage from './errorMessage';

const AppFormField = ({name, ...otherProps}) => {
    const {errors, setFieldTouched, setFieldValue, touched, values} = useFormikContext();
    return (
        <>
           <AppTextInput 
                onChangeText={text => setFieldValue(name, text)}
                value={values[name]}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} /> 
        </>
    );
}

export default AppFormField;