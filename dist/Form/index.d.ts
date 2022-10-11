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
/**
 * @param defaultValues @type {object}
 * @returns -A Smart form of React Special Elements Based
 * on MUI and covered in MUI Grid item
 */
export default function Form({ defaultValues, errorValues, onChange, fields, customComponents }: Props): JSX.Element;
export {};
