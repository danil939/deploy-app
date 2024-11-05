import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import supportsColor from 'supports-color';

console.log(supportsColor);


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
