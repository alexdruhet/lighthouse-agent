import "dotenv/config";
import { getApp } from "@spotify/lighthouse-audit-service";
import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import { findUserByToken } from "./users.js";

let pgConf = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  host: process.env.PGHOST,
};
// Alter db config for Heroku env
if (process.env.DATABASE_URL) {
  pgConf = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const lasApp = await getApp({ postgresConfig: pgConf });

// @TODO: fix authentication strategy
//        as it is not working on LAS routes...
passport.use(
  new BearerStrategy(function (token, done) {
    findUserByToken(token, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      return done(null, user, { scope: "all" });
    });
  })
);
lasApp.use(passport.authenticate("bearer", { session: false }));

// Use Heroku port if available
const PORT = process.env.PORT || process.env.LAS_PORT;

lasApp.listen(PORT, () => {
  console.log(`Lightouse agent listening on port ${PORT}`);
});
