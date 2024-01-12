function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.getElementById("year").innerHTML = new Date().getFullYear();

const sidebar = document.getElementById("mySidenav");

sidebar.addEventListener("mouseleave", () => {
    closeNav();
});

async function updateContent() {
    const contentDiv = document.getElementById("content");
    const route = window.location.hash.substring(1);

    let content = '';

    try {
        const pageRoute = route.length > 1 ? route : 'home';

        const response = await fetch(`pages/${pageRoute}.html`);

        if (response.ok) {
            content = await response.text();
        } else {
            if (response.status === 404) {
                // Page not found, load custom 404.html
                const notFoundResponse = await fetch('pages/404.html');
                if (notFoundResponse.ok) {
                    content = await notFoundResponse.text();
                } else {
                    content = "Custom 404 page not found.";
                }
            } else {
                content = "Error loading page.";
            }
        }
    } catch (error) {
        content = "Error loading page.";
    }

    contentDiv.innerHTML = content;
}

updateContent();

window.onhashchange = updateContent;

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

function onEmailButtonClick() {
    navigator.clipboard.writeText("keeponcomplaining@gmail.com");
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
}
