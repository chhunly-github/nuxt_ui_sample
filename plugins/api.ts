export default defineNuxtPlugin((nuxtApp) => {
    // const { session } = useUserSession()

    const api = $fetch.create({
        baseURL: '/api/',
        onRequest({ request, options, error }) {
            console.log('hello world')
            // if (session.value?.token) {
            //     const headers = options.headers ||= {}
            //     if (Array.isArray(headers)) {
            //         headers.push(['Authorization', `Bearer ${session.value?.token}`])
            //     } else if (headers instanceof Headers) {
            //         headers.set('Authorization', `Bearer ${session.value?.token}`)
            //     } else {
            //         headers.Authorization = `Bearer ${session.value?.token}`
            //     }
            // }
        },
        async onResponse({response}) {
            console.log('on response', response.status)
        },
        async onResponseError({ response }) {
            if (response.status === 401) {
                await nuxtApp.runWithContext(() => navigateTo('/login'))
            }
        }
    })

    // Expose to useNuxtApp().$api
    return {
        provide: {
            api
        }
    }
})
