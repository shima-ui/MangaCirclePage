import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    build: {
      outDir: 'dist',
      assetsDir: 'assets'
    },
    server: {
      port: 3000,
      host: true,
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  };

  // プロダクション（GitHub Pages）でのみbaseパスを設定
  if (command === 'build') {
    config.base = "/MangaCirclePage/";
  }

  return config;
});
