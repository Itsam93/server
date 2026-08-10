import app from "./app.js";

import { env } from "./config/env.js";

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