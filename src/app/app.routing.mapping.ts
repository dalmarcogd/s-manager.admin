

class AppRouteMappging {
    
    constructor(private routingFull: string, private routingSimple: string) {}

    public getRoutingFull() : string {
        return this.routingFull;
    }

    public getRoutingSimple() : string {
        return this.routingSimple;
    }
}

export const ADMIN = new AppRouteMappging("admin", "admin");
export const ADMIN_LOGIN = new AppRouteMappging("admin/login", "login");
export const ADMIN_PAGES = new AppRouteMappging("admin/pages", "pages");
export const ADMIN_PAGES_ALL = new AppRouteMappging("/admin/pages/all", "all");
export const ADMIN_PAGES_HOME = new AppRouteMappging("/admin/pages/home", "home");
export const ADMIN_PAGES_REGISTER = new AppRouteMappging("/admin/pages/register", "register");
export const ADMIN_PAGES_REGISTER_MODULE = new AppRouteMappging("/admin/pages/register/modules", "modules");
export const ADMIN_PAGES_REGISTER_USER = new AppRouteMappging("/admin/pages/register/users", "users");
export const ADMIN_PAGES_REGISTER_COSTUMER = new AppRouteMappging("/admin/pages/register/costumers", "costumers");
export const ADMIN_PAGES_CONFIGURATION = new AppRouteMappging("/admin/pages/configuration", "configuration");
export const ADMIN_NOT_FOUND = new AppRouteMappging("admin/notfound", "notfound");