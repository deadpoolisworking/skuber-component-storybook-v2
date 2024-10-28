import { mergeConfig } from 'vite';
import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react-vite',
  staticDirs: ['../public'],
  // webpackFinal: async (config) => {
  //   return config;
  // },
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
};
export default config;
