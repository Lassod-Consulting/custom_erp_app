// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
}

// Function to check cookie and handle the display of the privacy banner
function checkPrivacyConsent() {
    const consent = getCookie("privacyConsent");
    const banner = document.querySelector(".cookies-eu-banner");
    if (!consent) {
        banner.style.display = "block";
    } else {
        banner.style.display = "none";
    }
}

// Function to handle the accept button click
function acceptPrivacyPolicy() {
    setCookie("privacyConsent", "accepted", 365); // Set the cookie for 1 year
    document.querySelector(".cookies-eu-banner").style.display = "none";
}

// Hide the banner by default until the DOM is fully loaded and checked
document.addEventListener("DOMContentLoaded", function() {
    const banner = document.querySelector(".cookies-eu-banner");
    banner.style.display = "none"; // Ensure it's hidden by default
    checkPrivacyConsent(); // Then check if it needs to be shown
    document.querySelector(".cookies-eu-banner button").addEventListener("click", acceptPrivacyPolicy);
});
