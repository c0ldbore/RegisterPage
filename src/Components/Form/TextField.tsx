import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FormWrapper';

type TextFieldProps = FieldWrapperPassThroughProps & {
    className?: string;
    registration: Partial<UseFormRegisterReturn>;
};

export const TextField = (props: TextFieldProps) => {
    const { label, className, registration, error } = props;
    return (
      <FieldWrapper label={label} error={error}>
        <textarea
          className={clsx(
            'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
            className
          )}
          {...registration}
        />
      </FieldWrapper>
    );
};