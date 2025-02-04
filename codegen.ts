import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://beta.pokeapi.co/graphql/v1beta',
  documents: 'src/**/*.ts',
  generates: {
    'generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
}

export default config
