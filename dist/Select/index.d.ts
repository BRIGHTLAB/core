/// <reference types="react" />
interface FilmOptionType {
    value: string;
    title: string;
    attr?: object;
}
interface Props {
    id: string;
    value: FilmOptionType | null;
    handleChange: (name: string, value: any) => void;
    label: string;
    data: FilmOptionType[];
    multi: boolean;
    disabled: boolean;
    error: boolean;
    helperText: string;
    required: boolean;
    name: string;
}
export default function Select({ id, value, handleChange, label, data, multi, disabled, error, helperText, required, name, }: Props): JSX.Element;
export {};
