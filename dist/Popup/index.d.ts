/// <reference types="react" />
interface Props {
    open: boolean;
    closeModal: () => void;
    children: any;
    width: string;
}
export default function Popup({ open, closeModal, children, width }: Props): JSX.Element;
export {};
