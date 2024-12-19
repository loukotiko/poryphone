import { Poryphone } from "./utils.mjs";

export class PoryphoneBar {
  async attach(html) {
    await this.renderBar(html);
    this.bindOpenDialog(html);
    this.bindDateTime(html);
    this.bindMouseFollow(html);
  }

  async renderBar(html) {
    const $poryphoneBar = await renderTemplate(Poryphone.TEMPLATES.BAR, {});
    html.append($poryphoneBar);
    Poryphone.log("Rendered Poryphone bar", { $poryphoneBar });
  }

  bindOpenDialog(html) {
    html.on("click", "#poryphone-bar", () => Poryphone.dialog.render(true));
    Poryphone.log("Added click listener to bar");
  }

  bindDateTime(html) {
    setInterval(() => this.updateDateTime(html), 20000);
    this.updateDateTime(html);
    Poryphone.log("Added date time updater");
  }

  updateDateTime(html) {
    const now = new Date();
    const date = now.toLocaleDateString(undefined, {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });
    const time = now.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
    html.find("#poryphone-bar-date")[0].innerHTML = date;
    html.find("#poryphone-bar-time")[0].innerHTML = time;
  }

  bindMouseFollow(html) {
    html.on("mousemove", "#poryphone-bar", (event) => {
      const target = event.target;
      // Move mouse handler
    });
  }
}
