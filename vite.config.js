import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config:{
        theme:{
          extend:{
            fontFamily:{
              poppins: ['Poppins', 'sans-serif'],
            },
            backgroundImage:{
              'banner':"url('Components/imagenes/banner.png')",
            },
          },
        },
      },
    }),

  ],
  server: {
    open: true,
  },
});