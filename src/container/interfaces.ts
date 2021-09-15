export interface Database {
  connect(url?: string): void;
}

export interface DiscordClient {
  login(token: string): void;
}
