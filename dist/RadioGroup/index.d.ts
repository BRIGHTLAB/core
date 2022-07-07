/// <reference types="react" />
interface Props {
    value?: string;
    handleChange: (name: string, value: any) => void;
    label?: string;
    data: {
        value: string | number;
        title: string;
        attr?: object;
    }[];
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    required?: boolean;
    name: string;
}
export default function RadioGroupComp({ value, handleChange, label, data, disabled, error, helperText, required, name, }: Props): JSX.Element;
export {};
