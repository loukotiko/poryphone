import { Poryphone } from "./utils.mjs";

export default class PoryphoneDialog extends FormApplication {
  static get defaultOptions() {
    const defaults = super.defaultOptions;

    const overrides = {
      height: "auto",
      id: Poryphone.ID + "-dialog",
      template: Poryphone.TEMPLATES.DIALOG,
      title: "PORYPHONE.TITLE",
      userId: game.userId,
    };

    const mergedOptions = foundry.utils.mergeObject(defaults, overrides);

    return mergedOptions;
  }
  getData(options) {
    return {
      truc: "Bidule",
    };
  }
}
