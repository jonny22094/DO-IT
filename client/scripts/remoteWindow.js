const { remote } = require("electron");

document.getElementById("min-btn").addEventListener("click", () => {
     const window = remote.getCurrentWindow();
     window.minimize();
});

document.getElementById("close-btn").addEventListener("click", () =>  {
     const window = remote.getCurrentWindow();
     window.close();
});
