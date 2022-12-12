input = prompt("Enter something")
let list = []
let filteredList = []
let deleter = 0;
let count = 0;
while (input.toLowerCase() != "quit") {
    if (input.toLowerCase().startsWith("add")) {
        list.push(input.slice(3).trim());
    } else if (input.toLowerCase().startsWith("list")) {
        console.log("************************");
        count = 0;
        for (let i of list) {
            console.log(`${count}: ${i}`);
            count++
        }
        console.log("************************");
    } else if (input.toLowerCase().startsWith("delete")) {
        deleter = input.slice(6).trim()
        list[parseInt(deleter)] = null
        filteredList = list.filter(l => l != null)
        list = filteredList
    }
    input = prompt("Enter something");
}