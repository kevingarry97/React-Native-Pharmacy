import React from 'react';
import {useFormikContext} from 'formik';
import AppButton from '../button';

const SubmitButton = ({title}) => {
    const { handleSubmit } = useFormikContext();
    return <AppButton text={title} bgColor="primary" textColor="light" onPress={handleSubmit} />;
}

export default SubmitButton;