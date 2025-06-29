export default defineNuxtRouteMiddleware(async(to, from) => {
    const { fetch: refreshSession, loggedIn } = useUserSession();

    await refreshSession();

    if (!loggedIn.value && to.path !== "/auth") {
        return navigateTo("/auth");
    }

    if(loggedIn.value && to.path === "/auth") {
        return navigateTo("/");
    }
});
