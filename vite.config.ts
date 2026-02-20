import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Plugin to resolve figma:asset/ imports
function figmaAssetPlugin() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string, importer: string | undefined) {
      if (id.startsWith('figma:asset/')) {
        const assetName = id.replace('figma:asset/', '')
        // Resolve to the actual file path in src/assets
        const assetPath = path.resolve(__dirname, './src/assets', assetName)
        return assetPath
      }
      return null
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [
    // The React plugin is required for Make
    react(),
    figmaAssetPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  server: {
    port: 3000,
    host: true,
    allowedHosts: ['localhost', 'lyvraconsulting-production.up.railway.app'],
  },
  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
