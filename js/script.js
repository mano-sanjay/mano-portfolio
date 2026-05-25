
function toggleSidebar() {
    const sidebar =
    document.getElementById("sidebar");
    const mainContent =
    document.getElementById("main-content")
    const sidebar1 =
    document.getElementById("sidebar");

    sidebar.classList.toggle("hide");
    mainContent.classList.toggle("full");
    sidebar1.classList.toggle("full")
}
  