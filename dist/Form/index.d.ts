/// <reference types="react" />
interface fieldsType {
    id: string;
    name: string;
    type: string;
    label: string;
    inputType: string;
    helperText: string;
    required: boolean;
    grid: {
        xs: number;
        md: number;
        lg: number;
        xl: number;
    };
    multi: boolean;
    data: any[];
}
interface customComponentsType {
    type: string;
    renderItem: (row: any) => void;
}
interface Props {
    fields: fieldsType[];
    defaultValues: {};
    errorValues: {};
    onChange: (values: any) => void;
    customComponents: customComponentsType[];
}
export default function Form({ defaultValues, errorValues, onChange, fields, customComponents }: Props): JSX.Element;
export {};
