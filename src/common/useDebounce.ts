import { useEffect, useState } from 'react'

export function useDebounce(value: any, wait = 0) {
    const [debouncedValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            setDebounceValue(value)
        }, wait)
        return () => {
            window.clearTimeout(timeoutId)
        }
    }, [value, wait])

    return debouncedValue
}
