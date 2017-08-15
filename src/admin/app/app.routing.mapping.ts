
export class AppRouteMappging {

    constructor(private routingFull: string, private routingSimple: string) {}

    public getRoutingFull() : string {
        return this.routingFull;
    }

    public getRoutingSimple() : string {
        return this.routingSimple;
    }
}

export const ADMIN = {routingFull: "admin", routingSimple:"admin"};
export const ADMIN_LOGIN = {routingFull: "admin/login",  routingSimple:"login"};
export const ADMIN_PAGES = {routingFull: "admin/pages",  routingSimple:"pages"};
export const ADMIN_PAGES_ALL = {routingFull: "/admin/pages/all",  routingSimple:"all"};
export const ADMIN_PAGES_HOME = {routingFull: "/admin/pages/home",  routingSimple:"home"};
export const ADMIN_PAGES_REGISTER = {routingFull: "/admin/pages/register",  routingSimple:"register"};
export const ADMIN_PAGES_REGISTER_MODULE = {routingFull: "/admin/pages/register/modules",  routingSimple:"modules"};
export const ADMIN_PAGES_REGISTER_USER = {routingFull: "/admin/pages/register/users",  routingSimple:"users"};
export const ADMIN_PAGES_REGISTER_COSTUMER = {routingFull: "/admin/pages/register/costumers",  routingSimple:"costumers"};
export const ADMIN_PAGES_CONFIGURATION = {routingFull: "/admin/pages/configuration",  routingSimple:"configuration"};
export const ADMIN_NOT_FOUND = {routingFull: "admin/notfound",  routingSimple:"notfound"};