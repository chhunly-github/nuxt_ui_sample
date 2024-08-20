export default defineEventHandler( (event) => {
    //@ts-ignore
    const assetPath = process.env.CLOUDINARY_IMAGE_URL + event.context.params._;
    setResponseHeader(event, 'Catch-Control', 'public, max-age=2592000');
    setResponseHeader(event, 'Cf-Cache-Status', 'MISS');
    return $fetch(assetPath);
})
