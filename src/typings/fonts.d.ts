declare module '*.woff';
declare module '*.woff2';

declare module "*.ttf" {
    const outfit: import("@fontsource/outfit").FontSource;
    const roboto: import("@fontsource/roboto").FontSource;
    export { outfit, roboto };
}