export const getImageUrl = (path: string) => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    return new URL(`${baseUrl}assets/${path}`, import.meta.url).href;
};