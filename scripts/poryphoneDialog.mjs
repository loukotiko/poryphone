import { Poryphone } from "./utils.mjs";

export default class PoryphoneDialog extends FormApplication {
  static get defaultOptions() {
    const defaults = super.defaultOptions;

    const overrides = {
      height: 500,
      width: 320,
      id: Poryphone.ID + "-dialog",
      template: Poryphone.TEMPLATES.DIALOG,
      title: "PORYPHONE.TITLE",
      userId: game.userId,
    };

    return foundry.utils.mergeObject(defaults, overrides);
  }
  getData(options) {
    const scannerApp = {
      title: "Pokéscan",
      icon: "binoculars",
    };
    const pokedexApp = {
      title: "Pokédex",
      icon: "address-book",
    };
    const teamApp = {
      title: "Ma team",
      icon: "users",
    };
    const meApp = {
      title: "Mes stats",
      icon: "circle-user",
    };
    const bagApp = {
      title: "Mon sac",
      icon: "bag-shopping",
    };
    const settingsApp = {
      title: "Options",
      icon: "cog",
    };
    return {
      apps: [meApp, teamApp, bagApp, scannerApp, pokedexApp, settingsApp],
    };
  }
}
