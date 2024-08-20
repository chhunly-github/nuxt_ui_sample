export default defineEventHandler((event) => {
    // place to add headers
    //@ts-ignore
    event.node.req.headers = {
        ...getHeaders(event),
        'my-custom-header': 'add-headers'
    }
    // place to response headers
    setResponseHeader(event, 'my-header', 'my response header');
})
