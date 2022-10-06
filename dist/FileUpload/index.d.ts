/// <reference types="react" />
interface Props {
    value: string | object;
    name: string;
    handleChange: (name: string, value: any) => void;
    type: string;
    grid: object;
    id: any;
    error: boolean;
    label: string;
    required: boolean;
    allowURL: boolean;
    disabled: boolean;
    lang: string;
    uploadType: string;
    Get: (url: string, lang: string) => Promise<{
        signedUrl: string;
    }>;
    onRestrictionError?: (File: any, error: any) => void;
}
export default function FileUpload({ value, name, handleChange, type, grid, id, error, label, required, allowURL, disabled, lang, Get, uploadType, onRestrictionError, }: Props): JSX.Element;
export {};
