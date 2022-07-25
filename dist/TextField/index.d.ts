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
    min: string;
    max: string;
}
export default function TextInput({ id, value, name, type, helperText, error, required, handleChange, handleBlur, label, disabled, maxLength, min, max, }: Props): JSX.Element;
export {};
