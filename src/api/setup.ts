import { client } from "./generated/client.gen";

client.setConfig({
  baseURL: "https://ironbear.cloud/api/v1",
});

export * from "./generated/sdk.gen";
export { client };
