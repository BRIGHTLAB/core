import * as React from 'react';
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
    spacing: number;
}
export default function ContainerList({ dataP, renderItem, GridStyleItem, totalP, loadMoreP, loadingP, id, spacing, }: Props): JSX.Element;
export {};
