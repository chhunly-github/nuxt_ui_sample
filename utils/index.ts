export const formatNumber = (
    value: number,
    notation: "standard" | "scientific" | "engineering" | "compact" | undefined = "standard",
    fractionDigits: number = 2
) => {
    return Intl.NumberFormat('en-GB', {
        notation: notation,
        maximumFractionDigits: fractionDigits
    }).format(value)
}
