import app from "./app";

import { env } from "./config/env";

app.listen(env.PORT, () => {
  console.log("");

  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  console.log(`🚀 Relay Server Started`);

  console.log("");

  console.log(`Environment : ${env.NODE_ENV}`);

  console.log(`Listening   : ${env.APP_URL}`);

  console.log("");

  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━");
});