import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // ...
  generates: {
    "@/generate/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        rawRequest: true,
        extensionsType: "unknown",
      },
    },
  },
};
export default config;
