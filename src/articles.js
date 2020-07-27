

const articles = [
    {
        id: "0",
        title: "little about us",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        description: "This will be a short description of current article"
    },
    {
        id: "1",
        title: "no more plastic water",
        body: "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        description: "This will be a short description of current article"
    },
    {
        id: "2",
        title: "cooking on the island",
        body: "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        description: "This will be a short description of current article"
    },
    {
        id: "3",
        title: "solar electricity",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        description: "This will be a short description of current article"
    },
    {
        id: "4",
        title: "what is kawayanan?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        description: "This will be a short description of current article"
    },
    {
        id: "5",
        title: "why bamboo?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        description: "This will be a short description of current article"
    },
    {
        id: "6",
        title: "what about the waste?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        description: "This will be a short description of current article"
    },
    {
        id: "7",
        title: "our little garden",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        description: "This will be a short description of current article"
    },
    {
        id: "8",
        title: "why this way?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        description: "This will be a short description of current article"
    },
    {
        id: "9",
        title: "salamat!",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        description: "This will be a short description of current article"
    }
];

const card0 = document.getElementById("card0");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const card7 = document.getElementById("card7");
const card8 = document.getElementById("card8");
const card9 = document.getElementById("card9");

const cards = [card0, card1, card2, card3, card4, card5, card6, card7, card8, card9];

function combine (cardId, id) {
    const cardTitle = cardId.querySelector("h3").innerText = articles[id].title;
    const cardDescription = cardId.querySelector("p").innerText = articles[id].description;
    // const popup = document.getElementById("popup");
    const btnCard = document.getElementById(id);

    btnCard.addEventListener("click", () => {
        popup.style.opacity = "1";
        popup.style.visibility = "initial";

        const popupTitle = popup.querySelector("h3").innerText = articles[btnCard.id].title;
        const popupText = popup.querySelector("p").innerText = articles[btnCard.id].body;

        const btnClose = document.getElementById("btn-close");
        popup.addEventListener("click", () => {
            popup.style.opacity = "0";
            popup.style.visibility = "hidden";
        });
        
        btnClose.addEventListener("click", () => {
            popup.style.opacity = "0";
            popup.style.visibility = "hidden";
        });

        
    })
}

for (let i = 0; i < articles.length; i++) {
    combine(cards[i], i);
}


// const popup = document.getElementById("popup");
// const cardBtn = document.querySelector("button");

// cardBtn.addEventListener("click", () => {
//     console.log(cardBtn.id);
//     popup.style.opacity = "1";
//     popup.style.visibility = "initial";

//     const popupTitle = popup.querySelector("h3").innerText = articles[cardBtn.id].title;
//     const popupText = popup.querySelector("p").innerText = articles[cardBtn.id].body;

//     const closeBtn = popup.querySelector("button");

//     closeBtn.addEventListener("click", () => {
//         popup.style.opacity = "0";
//         popup.style.visibility = "hidden";
//     })
// })
