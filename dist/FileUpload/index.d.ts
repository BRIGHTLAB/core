/// <reference types="react" />
interface Props {
    value: string;
    name: string;
    handleChange: (value: any) => void;
    type: string;
    grid: object;
    id: any;
    error: boolean;
    label: string;
    required: boolean;
    allowURL: boolean;
    disabled: boolean;
    lang: string;
    Get: (url: string, lang: string) => Promise<{
        signedUrl: string;
    }>;
}
export default function FileUpload({ value, name, handleChange, type, grid, id, error, label, required, allowURL, disabled, lang, Get, }: Props): JSX.Element;
export {};
