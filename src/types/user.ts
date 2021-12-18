export interface LoginCredential {
    username: string
    password: string
}

export interface User {
    _id: string
    username: string
    password: string
    name: string
    group: UserGroup
    isActive: boolean
    lastAccessDate: Date
    lastIpAccess: Date
    created: Date
    updated: Date
    userCreated: User
    userModified: User
}

export interface UserGroup {
    _id: string
    name: string
    level: number
    isActive: boolean
}

