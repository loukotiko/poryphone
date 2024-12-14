import { Poryphone } from "./utils.mjs";
import { setupSettings } from "./settings.mjs";
import { updateDateTime } from "./poryphoneBar.mjs";

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
  const $poryphoneBar = await renderTemplate(Poryphone.TEMPLATES.BAR, {});
  html.append($poryphoneBar);
  Poryphone.log("Rendered Poryphone bar", { $poryphoneBar });

  html.on("click", "#poryphone-bar", (event) => {
    Poryphone.dialog.render(true);
  });
  Poryphone.log("Added click listener to bar");

  setInterval(() => {
    updateDateTime(html);
  }, 20000);
  updateDateTime(html);
  Poryphone.log("Added date time updater");
});
