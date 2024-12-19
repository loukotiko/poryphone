export function updateDateTime(html) {
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
