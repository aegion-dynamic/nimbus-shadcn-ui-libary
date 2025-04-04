import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { resolve } from 'path';
import tailwindcss from "@tailwindcss/vite"
import libInjectCss from 'vite-plugin-css-injected-by-js';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), libInjectCss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NimbusShadcnUI',
      formats: ['es', 'umd'],
      fileName: (format) => `nimbus-shadcn-ui.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
