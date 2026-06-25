import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const ensureReactRefreshPreamble = () => ({
  name: 'ensure-react-refresh-preamble',
  apply: 'serve',
  transformIndexHtml() {
    return [
      {
        tag: 'script',
        attrs: { type: 'module' },
        injectTo: 'head-prepend',
        children: `
          import RefreshRuntime from '/@react-refresh';
          RefreshRuntime.injectIntoGlobalHook(window);
          window.$RefreshReg$ = () => {};
          window.$RefreshSig$ = () => (type) => type;
          window.__vite_plugin_react_preamble_installed__ = true;
        `,
      },
    ]
  },
})

export default defineConfig({
  plugins: [ensureReactRefreshPreamble(), react()],
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
    },
  },
})
