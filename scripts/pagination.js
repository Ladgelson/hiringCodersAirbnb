// const listElements = document.getElementById('list')
// const paginatedItems = document.getElementById('pagination')

const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15"
]

let currentPage = 1;
let row = 5;

function displayList(items, wrapper, rowsPerPage, page) {
    // wrapper.innerHTML = "";
    page--;

    let loopStart = rowsPerPage * page;
    let paginatedItems = items.slice(loopStart, loopStart + rowsPerPage)
    console.log(paginatedItems)
    for(let i = loopStart; i < loopStart + rowsPerPage; ++i){

    }
}

let a = 0

displayList(items,a,5,1)