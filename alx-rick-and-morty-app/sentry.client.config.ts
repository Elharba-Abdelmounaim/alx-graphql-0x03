import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://your-public-dsn@sentry.io/project-id",
  tracesSampleRate: 1.0,
});
