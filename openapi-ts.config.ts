import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "https://ironbear.cloud/openapi/dashboard-api.yaml",
  output: "src/api/generated",
  plugins: [
    "zod",
    {
      name: "@hey-api/sdk",
    },
    {
      name: "@hey-api/client-axios",
    },
  ],
});
