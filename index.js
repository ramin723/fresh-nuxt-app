import express from 'express';
import { createNuxt } from 'nuxt';

const app = express();
const port = process.env.PORT || 4000;

(async () => {
    try {
        const nuxt = await createNuxt({
            dev: false,
            rootDir: process.cwd(),
        });

        const handler = nuxt.renderHandler;

        if (!handler) {
            throw new Error('Nuxt render handler is not initialized properly.');
        }

        // اضافه کردن Nuxt به عنوان میدل‌ور
        app.use(handler);

        // راه‌اندازی سرور
        app.listen(port, () => {
            console.log(`✅ Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Error initializing Nuxt server:', error.message);
    }
})();
