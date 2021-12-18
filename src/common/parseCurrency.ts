export const parseCurrencyUSD = (number: number): string =>
    number.toLocaleString('us-US', { style: 'currency', currency: 'USD' })

export const parseCurrencyAR = (number: number): string =>
    number.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })
