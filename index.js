const { App } = require("@slack/bolt");
const { exec } = require("child_process");

const slackApp = new App({
  socketMode: true,
  token: "xoxb-20987415365-3279578854597-49OhEG9WaCyI87fetJK8hD7a",
  appToken:
    "xapp-1-A0385M60FUM-3332523572181-ee1b46f4b578e3dbf77902838c56137a46187016bd0b589dc10ca4382caf3863",
});

slackApp.event("message", (e) => {
  const { event, say } = e;
  console.log(event.text);
  exec("rsh 192.168.255.245 ACOP 10010000", (err, stdout, stderr) => {
    if (err) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
});

slackApp.start().then(() => {
  console.log("⚡️ Bolt app started");
});
