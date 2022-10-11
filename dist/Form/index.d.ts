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
 * @property {[fieldsType]} fields -Array of fields to render specific
 *  components
 * @property {object} defaultValues -Old values if exists
 * @property  {object} errorValues -Errors of each field if exists with
 *  special message
 * @property {function} onChange -Returns values of all the fields
 * @property {array} customComponents -Array of custom components that are
 *  defined as custom type in fields props have type as string and
 *  renderItem that have data row as params
 *
 * @returns -A Smart form of React Special Elements Based
 *  on MUI and covered in MUI Grid item
 */
export default function Form({ defaultValues, errorValues, onChange, fields, customComponents }: Props): JSX.Element;
export {};
