/// <reference types="react" />
interface Props {
    id: string;
    value: string;
    name: string;
    type: string;
    helperText: string;
    error: boolean;
    required: boolean;
    handleChange: (name: string, value: any) => void;
    handleBlur: (name: string, value: any) => void;
    label: string;
    disabled: boolean;
    maxLength: number;
    variant?: 'standard' | 'filled' | 'outlined';
    sx: any;
    InputProps: any;
}
export default function TextInput({ id, value, name, type, helperText, error, required, handleChange, handleBlur, label, disabled, maxLength, variant, sx, InputProps, }: Props): JSX.Element;
export {};
