interface AppConfig {
  graphQlUrl: string;
  wsUrl: string;
}

export const config: AppConfig = {
  graphQlUrl:
    process.env.REACT_APP_API_ENDPOINT ?? "https://api.picktheodds.app/graphql",
  wsUrl:
    process.env.REACT_APP_WS_ENDPOINT ?? "wss://api.picktheodds.app/graphql",
};
