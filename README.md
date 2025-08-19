# Painéis Atendimento

Essa aplicação tem o objetivo de **complementar** os [relatórios](https://atendimento.camara.leg.br/omnichannel/reports) e [dashboards](https://atendimento.camara.leg.br/omnichannel/realtime-monitoring) já disponíveis no Rocket.Chat de [atendimento](https://atendimento.camara.leg.br)

## Arquitetura

A aplicação utiliza React (biblioteca UI), Shadcn UI (componentes UI), Typescript (linguagem) e TailwindCSS (framework CSS), gerenciados pelo Vite (toolset).

Para criar o projeto, seguimos a documentação do [Shadcn](https://ui.shadcn.com/docs/installation/vite).

## Colaboração com o projeto

No projeto, utilizamos o VSCode (editor de texto), com os plugins:
- ES7 React/Redux/React-Native snippets
- Prettier

Além disso, é preciso ter o Node.js (v22+) instalado.

Comandos úteis:

- `npm install` instalação das dependências
- `npm run dev` iniciar servidor local com HMR (hot module replacement)
- `npm run build` gerar a build para deploy
- `npx shadcn@latest add <componente>` adiciona componente do shadcnui



### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
