// index.js
import { APP_CONFIG } from "./config.js";
import { log, add, getCurrentYear } from "./utils.js";

log("Starting application...");
log(`App: ${APP_CONFIG.name}`);
log(`Company: ${APP_CONFIG.company}`);
log(`Version: ${APP_CONFIG.version}`);

const result = add(5, 7);
log(`5 + 7 = ${result}`);

log(`© ${getCurrentYear()} ${APP_CONFIG.company}`);
