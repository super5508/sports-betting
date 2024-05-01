module.exports = {
  schema: "./schema.graphql",
  documents: "./src/**/*.graphql",
  extensions: {
    codegen: {
      generates: {
        "./src/@generated/graphql/types-and-hooks.ts": {
          plugins: [
            "typescript",
            "typescript-operations",
            "typescript-react-apollo",
          ],
          config: {
            immutableTypes: true,
            useTypeImports: true,
            nonOptionalTypename: true,
            declarationKind: "interface",
            addDocBlocks: false,
            scalars: {
              DateTime: "Date",
            },
          },
        },
      },
    },
  },
};
