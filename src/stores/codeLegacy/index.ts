import { createContext } from 'react'
import { connection } from '../connection'
import { CodeLegacy } from 'types/codeLegacy'
export interface CodeLegacyStore {
    getByCode: (code: string) => Promise<CodeLegacy>
    isLoading: boolean
}

const CodeLegacyStore = () =>
    <CodeLegacyStore>{
        isLoading: false,
        async getByCode(code) {
            const data: CodeLegacy = await connection(
                { code },
                'POST',
                '/_PATH'
            )
            return data
        },
    }

export default createContext(CodeLegacyStore())
