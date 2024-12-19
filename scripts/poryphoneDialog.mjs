import { Poryphone } from "./utils.mjs";

export default class PoryphoneDialog extends FormApplication {
  static get defaultOptions() {
    const defaults = super.defaultOptions;

    const overrides = {
      height: 580,
      width: 320,
      id: Poryphone.ID + "-dialog",
      template: Poryphone.TEMPLATES.DIALOG,
      title: "PORYPHONE.TITLE",
      userId: game.userId,
      popOut: true, // Render my own container if I want to
    };

    return foundry.utils.mergeObject(defaults, overrides);
  }
  getData(options) {
    const scannerApp = {
      title: "Pokéscan",
      icon: "magnifying-glass",
      id: "scanner",
    };
    const pokedexApp = {
      title: "Pokédex",
      icon: "address-book",
      id: "pokedex",
    };
    const teamApp = {
      title: "Équipe",
      icon: "paw",
      id: "team",
    };
    const meApp = {
      title: "Profil",
      icon: "address-card",
      id: "me",
    };
    const bagApp = {
      title: "Sac",
      icon: "bag-shopping",
      id: "bag",
    };
    const settingsApp = {
      title: "Options",
      icon: "cog",
      id: "settings",
    };
    return {
      apps: [meApp, teamApp, bagApp, scannerApp, pokedexApp, settingsApp],
    };
  }

  activateListeners(html) {
    let currentAppId = "home";
    html.on("click", ".poryapp-navigate", (event) => {
      const target = event.target;
      const id = target.getAttribute("data-appid");
      const $targetContent = html.find(".poryapp-content#content-" + id)[0];
      const $currentContent = html.find(
        ".poryapp-content#content-" + currentAppId
      )[0];
      $currentContent.classList.add("poryapp-hidden");
      $targetContent.classList.remove("poryapp-hidden");

      currentAppId = id;
    });
  }
}
