import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 5173,
		proxy: {
			"/api": {
				target: "http://localhost",
				changeOrigin: true,
				secure: false,
				ws: false,
			},
			"/PluginsAPI": {
				target: "https://localhost:55434/",
				changeOrigin: true,
				secure: false,
				ws: false,
			},
		},
	},
	plugins: [react()],
});
