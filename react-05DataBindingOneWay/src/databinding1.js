var categories = ["All", "Electronics", "Footwear"];
function bodyload() {
    for(var item of categories) {
        var li = document.createElement("li");
        li.innerHTML = item;
        document.querySelector("ol").appendChild(li);
    }
}