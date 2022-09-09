import { defineConfig } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'

export default defineConfig({
  // configDeps: [
  //     './unocss.ts'
  // ],
  transformers: [
    transformerDirective({
      // 为了与 vanilla CSS 兼容
      varStyle: '--w-at-',
    }),
  ],
  theme: {
    // 初始化默认主题
    darkSelector: ".dark-mode",
    colors: {
      primary: {
        '50': 'var(--colors-primary-50)',
        '100': 'var(--colors-primary-100)',
        '200': 'var(--colors-primary-200)',
        '300': 'var(--colors-primary-300)',
        '400': 'var(--colors-primary-400)',
        '500': 'var(--colors-primary-500)',
        '600': 'var(--colors-primary-600)',
        '700': 'var(--colors-primary-700)',
        '800': 'var(--colors-primary-800)',
        '900': 'var(--colors-primary-900)',
      },
    },
    textColor: {
      '50': 'var(--colors-primary-50)',
      '100': 'var(--colors-primary-100)',
      '200': 'var(--colors-primary-200)',
      '300': 'var(--colors-primary-300)',
      '400': 'var(--colors-primary-400)',
      '500': 'var(--colors-primary-500)',
      '600': 'var(--colors-primary-600)',
      '700': 'var(--colors-primary-700)',
      '800': 'var(--colors-primary-800)',
      '900': 'var(--colors-primary-900)',
    },
    borderColor: {
      '50': 'var(--colors-primary-50)',
      '100': 'var(--colors-primary-100)',
      '200': 'var(--colors-primary-200)',
      '300': 'var(--colors-primary-300)',
      '400': 'var(--colors-primary-400)',
      '500': 'var(--colors-primary-500)',
      '600': 'var(--colors-primary-600)',
      '700': 'var(--colors-primary-700)',
      '800': 'var(--colors-primary-800)',
      '900': 'var(--colors-primary-900)',
    },
    divideColor: {
      '50': 'var(--colors-primary-50)',
      '100': 'var(--colors-primary-100)',
      '200': 'var(--colors-primary-200)',
      '300': 'var(--colors-primary-300)',
      '400': 'var(--colors-primary-400)',
      '500': 'var(--colors-primary-500)',
      '600': 'var(--colors-primary-600)',
      '700': 'var(--colors-primary-700)',
      '800': 'var(--colors-primary-800)',
      '900': 'var(--colors-primary-900)',
    },
    screens: {
      'sm': '640px',//	@media (min-width: 640px) { ... }
      'md': '768px',//	@media (min-width: 768px) { ... }
      'lg': '1024px',//	@media (min-width: 1024px) { ... }
      'xl': '1280px',//	@media (min-width: 1280px) { ... }
      '2xl': '1450px',//	@media (min-width: 1536px) { ... }
    },
    fontSize: {
      'fs12': '0.75rem',
      'fs14': '0.875rem',
      'fs16': '1rem',
      'fs18': '1.125rem',
      'fs20': '1.25rem',
      'fs22': '1.375rem',
      'fs24': '1.5rem',
      'fs26': '1.625rem',
      'fs28': '1.75rem',
      'fs30': '1.875rem',
      'fs32': '2rem',
      'fs34': '2.125rem',
      'fs36': '2.25rem',
      'fs38': '2.375rem',
      'fs40': '2.5rem',
      'fs42': '2.625rem',
      'fs44': '2.75rem',
      'fs46': '2.875rem',
      'fs48': '3rem',
      'fs50': '3.125rem',
      'fs52': '3.25rem',
      'fs54': '3.375rem',
      'fs56': '3.5rem',
      'fs58': '3.625rem',
      'fs60': '3.75rem',
      'fs62': '3.875rem',
      'fs64': '4rem',
      'fs66': '4.125rem',
    },
  }
})
