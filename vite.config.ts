import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { resolve } from 'path';
import tailwindcss from "@tailwindcss/vite"
import libInjectCss from 'vite-plugin-css-injected-by-js';
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    libInjectCss({
      topExecutionPriority: true,
    }),
    dts({
      tsconfigPath: './tsconfig.json',
      insertTypesEntry: true,
      outDir: 'dist',
      include: [
        "src/**/*.ts", 
        "src/**/*.tsx"
      ],
      exclude: [
        "node_modules", 
        "**/*.stories.tsx", 
        "**/*.stories.ts",
        "**/*.test.tsx", 
        "**/*.test.ts"
      ],
    })
  ],
  css: {
    modules: {
      scopeBehaviour: 'local',
      // Generates a unique class name for each CSS module
      generateScopedName: 'nimbus-shadcn-[name]__[local]__[hash:base64:5]',
      localsConvention: 'camelCase'
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'umd'],
      name: 'nimbus-shadcn',
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
    sourcemap: true,
    emptyOutDir: true,
  },
})
