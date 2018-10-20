import { Lucid } from "@adonisjs";

interface Role extends Lucid.Model {
    new(): Role;

    slug: string;
    name: string;
    description: string;

    permissions(): Lucid.Relations.BelongsToMany;
    getPermissions(): Promise<string[]>;
}

interface Permission extends Lucid.Model {
    new(): Permission;

    slug: string;
    name: string;
    description: string;
}

interface HasPermission {
    permissions(): Lucid.Relations.BelongsToMany;
    getPermissions(): Promise<string[]>;
    can(expression: any): Promise<boolean>;
    scope(required: any): Promise<boolean>;
}

interface HasRole {
    roles(): Lucid.Relations.BelongsToMany;
    getRoles(): Promise<string[]>;
    is(expression: any): Promise<boolean>;
}

declare namespace AdonisNamespaces {
    type Role = 'Role' | 'Adonis/Acl/Role';
    type Permission = 'Permission' | 'Adonis/Acl/Permission';
}

declare global {
    function use(namespace: AdonisNamespaces.Role): Role
    function make(namespace: AdonisNamespaces.Role): Role
    function use(namespace: AdonisNamespaces.Permission): Permission
    function make(namespace: AdonisNamespaces.Permission): Permission
}
