import https from "https";
import fs from "fs";

module.exports = app => {
  if (process.env.NODE_ENV !== "test") {
    const credentials = {
      key: fs.readFileSync("30787149-ntask.key", "utf8"),
      cert: fs.readFileSync("30787149-ntask.cert", "utf8")
    }
    app.db.sequelize.sync().done(() => {
      https.createServer(credentials, app)
        .listen(app.get("port"), () => {
          console.log(`NTask API - Port ${app.get("port")}`);
      });
    });
  }
};