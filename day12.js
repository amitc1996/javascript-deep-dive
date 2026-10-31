fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });


//fetch with async/await
async function fetchUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

fetchUser();    


// These are browser APIs, so running this file with `node day12.js` causes a
// ReferenceError: Node.js does not define `localStorage` or `sessionStorage`.
// In a browser, localStorage persists after closing the browser; sessionStorage
// is cleared when the tab/session ends. Both store string values for this site.
localStorage.setItem("name", "Amit");
console.log(localStorage.getItem("name"));

sessionStorage.setItem("role", "Developer");
console.log(sessionStorage.getItem("role"));