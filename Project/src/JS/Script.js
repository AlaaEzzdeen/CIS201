var GPU = [
    {header: "RTX 3090", img: "../src/imgs/nvidia-rtx-3090-gpu.jpg", description: "The most Powerful GPU of all time till now", Price: "1200$", Cart: "Add To Cart"},
    {header: "RTX 3090", img: "../src/imgs/nvidia-rtx-3090-gpu.jpg", description: "The most Powerful GPU of all time till now", Price: "1200$", Cart: "Add To Cart"},
    {header: "RTX 3090", img: "../src/imgs/nvidia-rtx-3090-gpu.jpg", description: "The most Powerful GPU of all time till now", Price: "1200$", Cart: "Add To Cart"},
    {header: "RTX 3090", img: "../src/imgs/nvidia-rtx-3090-gpu.jpg", description: "The most Powerful GPU of all time till now", Price: "1200$", Cart: "Add To Cart"},
    {header: "RTX 3090", img: "../src/imgs/nvidia-rtx-3090-gpu.jpg", description: "The most Powerful GPU of all time till now", Price: "1200$", Cart: "Add To Cart"},
    {header: "RTX 3090", img: "../src/imgs/nvidia-rtx-3090-gpu.jpg", description: "The most Powerful GPU of all time till now", Price: "1200$", Cart: "Add To Cart"},
    {header: "RTX 3090", img: "../src/imgs/nvidia-rtx-3090-gpu.jpg", description: "The most Powerful GPU of all time till now", Price: "1200$", Cart: "Add To Cart"},
    {header: "RTX 3090", img: "../src/imgs/nvidia-rtx-3090-gpu.jpg", description: "The most Powerful GPU of all time till now", Price: "1200$", Cart: "Add To Cart"},
    {header: "RTX 3090", img: "../src/imgs/nvidia-rtx-3090-gpu.jpg", description: "The most Powerful GPU of all time till now", Price: "1200$", Cart: "Add To Cart"}
];

var CPU =[

    {header: "i9 3090", img: "../src/imgs/nvidia-rtx-3090-gpu.jpg", description: "The most Powerful GPU of all time till now", Price: "1200$", Cart: "Add To Cart"},
    {header: "i7 3090", img: "../src/imgs/nvidia-rtx-3090-gpu.jpg", description: "The most Powerful GPU of all time till now", Price: "1200$", Cart: "Add To Cart"},
    {header: "i5 3090", img: "../src/imgs/nvidia-rtx-3090-gpu.jpg", description: "The most Powerful GPU of all time till now", Price: "1200$", Cart: "Add To Cart"}
];

var Mobo =[

    {header: "B Item One", img: "01.png", description: "Blah blah"}, 
    {header: "B Item two", img: "01.png", description: "Blah blah"}
];

var PSU =[

    {header: "B Item One", img: "01.png", description: "Blah blah"}, 
    {header: "B Item two", img: "01.png", description: "Blah blah"}
];


function DisplayList(x){
    document.getElementById("display").innerHTML = "";
    for(var i = 0; i < x.length; i++){
        document.getElementById("display").innerHTML += "<div class= productCard><h1>"+x[i].header+"</h1><img src="+x[i].img+" alt=L/><p class=productDetails>" +x[i].description+ "</p><p>"+ x[i].Price+"</p><button>"+x[i].Cart+"</button>";
    }
}