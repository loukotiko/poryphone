import PoryphoneDialog from "./poryphoneDialog.mjs";

export class Poryphone {
  static ID = "poryphone";
  static NAME = "Poryphone";
  static SETTINGS = Poryphone.createEnum(
    ["DEBUG"],
    Poryphone.ID + "_SETTINGS_"
  );

  static FLAGS = {
    APPS: "apps",
  };

  static TEMPLATES = {
    BAR: `modules/${Poryphone.ID}/templates/poryphone-bar.hbs`,
    DIALOG: `modules/${Poryphone.ID}/templates/poryphone-dialog.hbs`,
  };

  static log(...args) {
    const shouldLog = game.settings.get(Poryphone.ID, Poryphone.SETTINGS.DEBUG);

    if (shouldLog) {
      console.log(Poryphone.NAME, "|", ...args);
    }
  }

  static dialog;
  static initializeTemplatesAndDialogs() {
    Poryphone.dialog = new PoryphoneDialog();
    loadTemplates([Poryphone.TEMPLATES.BAR]);
  }

  static createEnum(keys, prefix = "") {
    return keys.reduce(
      (theEnum, key) => ({ ...theEnum, [key]: prefix + key }),
      {}
    );
  }
}
