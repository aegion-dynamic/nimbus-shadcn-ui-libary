import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { resolve } from 'path';
import tailwindcss from "@tailwindcss/vite"
import libInjectCss from 'vite-plugin-css-injected-by-js';
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), libInjectCss(), dts({
    insertTypesEntry: true,
    rollupTypes: true,
    exclude: [
      "node_modules",
      "**/*.stories.tsx",
      "**/*.stories.ts",
    ]
  }
  )
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
      formats: ['es', 'umd'],
      name: 'NimbusShadcn',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    //Generates sourcemaps for the built files,
    //aiding in debugging.
    sourcemap: true,
    //Clears the output directory before building.
    emptyOutDir: true,
  },
})
