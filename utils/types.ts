export type TableColumn = {
    key: string;
    label: string;
    sortable: boolean;
}
export type PageRequest = {
    page: number;
    limit: number;
    sortColumn: string;
    sortOrder: 'asc' | 'desc';
}
export type PageResponse = {
    total: number;
    skip: number;
    limit: number;
}
export type QueryFilter = Record<string, number | string | undefined | null>;