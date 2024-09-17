export const formatNumber = (
    value: number,
    notation: "standard" | "scientific" | "engineering" | "compact" | undefined = "standard",
    fractionDigits: number = 2
) => {
    return Intl.NumberFormat('en-GB', {
        notation: notation,
        maximumFractionDigits: fractionDigits
    }).format(value)
};
export const removeBlankObj = (obj: any): any => {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
}