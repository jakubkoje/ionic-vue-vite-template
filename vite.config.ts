/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import VitePluginWindicss from 'vite-plugin-windicss';
import VitePluginComponents from 'vite-plugin-components';
import VitePluginIcons, { ViteIconsResolver } from 'vite-plugin-icons';

function clearAndUpper(text: string) {
  return text.replace(/-/, '').toUpperCase();
}

function toPascalCase(text: string) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, '/src')}/`,
    },
  },
  plugins: [
    vue(),
    VitePluginComponents({
      customComponentResolvers: [
        ViteIconsResolver(),
        // eslint-disable-next-line consistent-return
        (name) => {
          if (name.startsWith('Ion')) {
            return { importName: toPascalCase(name), path: '@ionic/vue' };
          }
        },
      ],
    }),
    VitePluginIcons(),
    VitePluginWindicss(),
  ],
});
