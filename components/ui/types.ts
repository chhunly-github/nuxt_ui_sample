/**
 * All this Ui components depend on Nuxt UI
 * TO USE THIS EXTERNAL TYPE PROP
 * WE NEED TO INSTALL TYPESCRIPT AS DEV DEPENDENCY
 * npm install typescript --save-dev
 */

export type ButtonProp = {
    size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    variant?: 'soft' | 'link' | 'solid' | 'outline' | 'ghost',
    label?: string,
    icon?: string,
    loading?: boolean,
    disabled?: boolean
}
export const defaultButtonProp = {
    size: 'sm',
    variant: 'solid',
    color: 'primary',
    loading: false,
    disabled: false
}
export type NumberProp = {
    value: number | undefined,
    notation?: "standard" | "scientific" | "engineering" | "compact" | undefined,
    fractionDigits?: number
}
export type ImgProp = {
    src: string | undefined,
    /**
     * size base on height
     */
    size?: 8 | 16 | 24 | 32 | 40 | 48 | 56 | 0,
    ratio?: 0.5 | 1 | 1.5 | 2 | 0,
    transformation?: 'c_thumb,g_face' | 'c_fill' | 'c_auto' | 'c_crop'
}
export type TableColumn = {
    key: string;
    label: string;
    sortable: boolean;
    class: string;
    direction: 'asc' | 'desc';
    rowClass: string;
}
export const pageLimits = [
    {value: 10, title: '10'},
    {value: 25, title: '25'},
    {value: 50, title: '50'},
    {value: 0, title: 'all'},
];
export type ActionItem = {
    label: string;
    avatar: {src: string};
    icon: string;
    click: (row: any) => void;
    disable: (row: any) => boolean;
}