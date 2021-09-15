export interface Database {
  connect(url?: string): void;
}

export interface DiscordClient {
  login(token: string): void;
}

export interface Logger {
  log(msg: string): void;
  error(msg: string): void;
}
