function permissionBtn(btntext, permission) {
  const btn = document.createElement("button");
  btn.textContent = btntext;
  btn.addEventListener("click", () => {
      chrome.runtime.sendMessage({event: 'request-permission', permission}, (response) => {});
  });
  document.body.appendChild(btn);
}


permissionBtn("'debugger' permission request", "debugger");
permissionBtn("'scripting' permission request", "scripting");

