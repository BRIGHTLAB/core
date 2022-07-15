import React from 'react';
interface Props {
    dataP: {
        id: string | number;
    }[];
    renderItem: (row: object, idx: number) => React.ReactNode | null;
    GridStyleItem: object;
    totalP: number;
    loadMoreP: () => void;
    loadingP: boolean;
    id: string | number;
}
export default function ContainerList({ dataP, renderItem, GridStyleItem, totalP, loadMoreP, loadingP, id, }: Props): JSX.Element;
export {};
