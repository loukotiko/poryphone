import { Poryphone } from "./scripts/utils.mjs";
import { setupSettings } from "./scripts/settings.mjs";
import { PoryphoneBar } from "./scripts/poryphoneBar.mjs";

Hooks.once("init", async function () {
  await setupSettings();
  Poryphone.log("Hook.init");
  Poryphone.log("Settings created!");

  Poryphone.initializeTemplatesAndDialogs();
  Poryphone.log("Initialized templates and dialogs!");
});

Hooks.once("ready", async function () {
  Poryphone.log("Hook.ready");
});

Hooks.on("renderSceneControls", async (playerList, html) => {
  Poryphone.log("Hook.renderSceneControls");
  new PoryphoneBar().attach(html);
});
