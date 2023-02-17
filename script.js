let menuitems = {
    "mac & cheese" : {
        label: "mac & cheese",
        img: "mac.jpg",
        price: 5,
        quantity: 0
    },
    "pasta" : {
        label: "pasta",
        img: "pasta.jpg",
        price: 8,
        quantity: 0
    },
    "tacos" : {
        label: "tacos",
        img: "taco.png",
        price: 8,
        quantity: 0,
    },
    "enchilada" : {
        label: "enchilada",
        img: "enchilada.jpg",
        price: 10,
        quantity: 0,
    }
}
let total = 0

function updateQuant() {
    console.log(this)
}

function createQuantButton(item, type) {
    var button = document.createElement("button")
    button.classList.add("adjustbutton")
    console.log(item)
    button.setAttribute("id", item + "_" + type)
    var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    var path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

    if(type === "add") {
        path1.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");
        path2.setAttribute("d", "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z");
        button.addEventListener('click', updateQuant)
    }
    else {
        path1.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");
        path2.setAttribute("d", "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z");
        button.addEventListener('click', updateQuant)
    }

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('viewBox', '0 0 16 16');
    svg.classList.add("bi")
    svg.classList.add("bi-plus-circle")
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.appendChild(path1)
    svg.appendChild(path2)
    button.appendChild(svg)
    return button
}

function createMenuItem(label, details) {
    var outercontainer = document.createElement("div")
    outercontainer.classList.add("container")
    outercontainer.classList.add("p-2")

    var row1 = document.createElement('div')
    row1.classList.add("row")
    row1.classList.add("p-2")
    row1.classList.add("pb-4")
    row1.classList.add("menuitem")
    outercontainer.appendChild(row1)

    // menu img
    var col1 = document.createElement("div")
    col1.classList.add("col-3")
    col1.classList.add("p-1")
    row1.appendChild(col1)
    var img = document.createElement("img")
    img.src = details.img
    img.classList.add("menuimg")
    col1.appendChild(img)


    var col2 = document.createElement("div") 
    col2.classList.add("col-9")
    row1.appendChild(col2)
    var row2 = document.createElement('div')
    row2.classList.add("row")
    row2.classList.add("h-50")
    col2.appendChild(row2)

    // label and price
    var col3 = document.createElement("div") 
    col3.classList.add("col-10")
    col3.classList.add("menulabel")
    var label = document.createTextNode(label);
    col3.appendChild(label)
    var col4 = document.createElement("div") 
    col4.classList.add("col-2")
    col4.classList.add("price")
    col4.classList.add("p-0")
    var price = document.createTextNode("$" + details.price);
    col4.appendChild(price)
    row2.appendChild(col3)
    row2.appendChild(col4)

    // buttons
    var row3 = document.createElement("div")
    row3.classList.add("row")
    row3.classList.add("h-50")
    row3.classList.add("align-items-end")
    row3.classList.add("pb-1")
    col2.append(row3)

    var col5 = document.createElement("div")
    col5.classList.add("col")
    col5.classList.add("text-end")
    col5.classList.add("p-0")
    row3.append(col5)
    var addbutton = createQuantButton(details.label, "add")
    var minusbutton = createQuantButton(details.label, "minus")
    var quantity = document.createElement("span")
    quantity.classList.add("p-1")
    var t = document.createTextNode(details.quantity);
    quantity.appendChild(t)
    col5.appendChild(addbutton)
    col5.appendChild(quantity)
    col5.appendChild(minusbutton)

    document.body.appendChild(outercontainer)
}

for(item in menuitems) {
    createMenuItem(item, menuitems[item]);
}
// let adjustbuttons = document.querySelectorAll(".adjustbutton")
// for (let i = 0; i < adjustbuttons.length; i++) {
//     console.log(i)
//     color_buttons[i].addEventListener("click", updateQuant);
// }



