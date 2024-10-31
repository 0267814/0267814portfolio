const toggleButton = document.getElementById('colorModeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light');
});

const sidebar = document.getElementById('sidebar');
const toggleSidebarButton = document.getElementById('toggleSidebar');
toggleSidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('d-none');
});
