import { defineConfig } from 'vite';

export default defineConfig({
    base: '/reimagineheat/',
    plugins: [],
    server: {
        watch: {
            ignored: [
                /\/data\//,
                /\/dist\//,
                /\/scripts\//,
            ],
        },
    },
});
