/// <reference types="react" />
interface Props {
    value?: {
        [key: string]: boolean;
    };
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
    view?: string;
}
export default function CheckBoxComp({ value, handleChange, label, data, disabled, error, helperText, required, name, view, }: Props): JSX.Element;
export {};
