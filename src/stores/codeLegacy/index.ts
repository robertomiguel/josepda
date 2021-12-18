import { createContext } from 'react'
import { observable } from 'mobx'
import { connection } from '../connection'
import { CodeLegacy } from 'types/codeLegacy'

export interface CodeLegacyStore {
    getByCode: (code: string) => Promise<CodeLegacy>
    isLoading: boolean
}

const CodeLegacyStore = () =>
    observable<CodeLegacyStore>({
        isLoading: false,
        async getByCode(code) {
            const data: CodeLegacy = await connection.codeLegacy(
                {
                    code
                },
                'POST'
            )
            return data
        },
    })

export default createContext(CodeLegacyStore())
