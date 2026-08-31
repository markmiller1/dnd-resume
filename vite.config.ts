import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, lazyPlugins } from 'vite-plus'
import { htmlPlugin } from './plugins/html-plugin.ts'

// https://vite.dev/config/
export default defineConfig({
  fmt: {
    printWidth: 100,
    semi: false,
    singleQuote: true,
    arrowParens: 'avoid',
    singleAttributePerLine: true,
    sortPackageJson: false,
    ignorePatterns: [
      'dist/**',
      'index.html',
      'src/components/common/svg-icons.tsx',
      'src/components/ui/**',
      '**/*.css',
    ],
  },
  lint: {
    ignorePatterns: ['dist/**', 'src/components/ui/**'],
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    categories: {
      correctness: 'error',
      suspicious: 'warn',
    },
    rules: {
      'vite-plus/prefer-vite-plus-imports': 'error',
      'typescript/consistent-type-imports': 'error',
      'typescript/no-explicit-any': 'off',
    },
  },
  staged: {
    '*.{js,ts,jsx,tsx}': 'vp lint',
    '*': 'vp fmt --no-error-on-unmatched-pattern',
  },
  test: {
    passWithNoTests: true,
  },
  server: {
    open: true,
    allowedHosts: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#tiptap': path.resolve(__dirname, './src/components/tiptap'),
      '#ui': path.resolve(__dirname, './src/components/ui'),
      '#widgets': path.resolve(__dirname, './src/components/widgets'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  plugins: lazyPlugins(() => [react(), tailwindcss(), htmlPlugin()]),
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'vendor-react',
              test: /\/node_modules\/(?:react|react-dom|react-router|use-sync-external-store)\//,
            },
            {
              name: 'vendor-tiptap',
              test: /\/node_modules\/(?:@tiptap|prosemirror-[^/]+)\//,
            },
            {
              name: 'vendor-ui',
              test: /\/node_modules\/(?:@dnd-kit|@radix-ui|radix-ui)\//,
            },
            { name: 'vendor', test: /\/node_modules/ },
          ],
        },
      },
    },
  },
})
