// Function to set the cookie
const setCookie = (cName, cValue, expdays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + "; path=/";
}

// Function to get the cookie
const getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if(val.indexOf(name) === 0) value = val.substring(name.length);
    });
    return value;
}

// Function to check if the "accepted_cookie_policy" cookie exists
const checkCookieExistence = () => {
    const cookieValue = getCookie("accepted_cookie_policy");
    if (!cookieValue) {
        document.querySelector("#cookies").style.display = "block";
    } else {
        document.querySelector("#cookies").style.display = "none";
    }
}

// Event listener to run the check cookie existence function when the window loads
window.addEventListener("load", checkCookieExistence);

// Event listener to handle clicking on the cookies policy acceptance button
document.querySelector("#cookies-btn").addEventListener("click", () => {
    setCookie("accepted_cookie_policy", true, 30);
    document.querySelector("#cookies").style.display = "none";
});

// Event listener to handle any other click event on the document
document.addEventListener("click", (event) => {
    // Check if the click event occurred outside of the cookies message
    const cookiesContainer = document.querySelector("#cookies");
    if (event.target !== cookiesContainer && !cookiesContainer.contains(event.target)) {
        checkCookieExistence();
    }
});
