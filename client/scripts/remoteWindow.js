const { remote } = require("electron");

document.getElementById("min-btn").addEventListener("click", () => {
     const Window = remote.getCurrentWindow();
     Window.minimize();
});

document.getElementById("close-btn").addEventListener("click", () =>  {
     const Window = remote.getCurrentWindow();
     Window.close();
});
