export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",

  PORT: Number(process.env.PORT) || 5000,

  APP_URL:
    process.env.APP_URL ??
    "http://localhost:5000",
};