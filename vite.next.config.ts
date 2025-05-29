import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { resolve } from 'path';
import tailwindcss from "@tailwindcss/vite"
import libInjectCss from 'vite-plugin-css-injected-by-js';
import dts from "vite-plugin-dts";

// Configuration for Next.js entry point
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
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: 'nimbus-shadcn-[name]__[local]__[hash:base64:5]',
      localsConvention: 'camelCase'
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/next.ts'),
      formats: ['es', 'umd'],
      name: 'nimbus-shadcn-next',
      fileName: (format) => `next.${format}.js`
    },
    rollupOptions: {
      external: [
        'react', 
        'react-dom', 
        'react/jsx-runtime',
        '@radix-ui/react-accordion',
        '@radix-ui/react-alert-dialog',
        '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-avatar',
        '@radix-ui/react-checkbox',
        '@radix-ui/react-dialog',
        '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-label',
        '@radix-ui/react-popover',
        '@radix-ui/react-select',
        '@radix-ui/react-slot'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        }
      }
    },
    sourcemap: true,
    outDir: 'dist',
  },
})
