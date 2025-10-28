import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  { ignores: ['node_modules', 'dist', 'build', 'android', 'ios'] },

  // Regras recomendadas de JS
  js.configs.recommended,

  // Suporte a TypeScript (parser + regras recomendadas)
  ...tseslint.configs.recommended,

  // Desliga regras de estilo conflitantes em favor do Prettier
  prettierConfig,

  // Camada do projeto (onde ligamos o Prettier “por baixo”)
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: { prettier: prettierPlugin },
    rules: {
      // Prettier dita a aparência; ESLint aplica via --fix
      'prettier/prettier': 'warn',
    },
  },
]
