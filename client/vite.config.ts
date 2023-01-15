import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/base": {
				target: "http://127.0.0.1:8000",
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/base/, "")
			}
		}
	},
	build: {
		outDir: "build"
	}
});
