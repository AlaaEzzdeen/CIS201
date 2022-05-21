
var GPU = [
    {header: "RTX 3090", img: "../src/imgs/3090.jpg", description: "big ferocious GPU (BFGPU) with TITAN class performance. Powered by Ampere—NVIDIA's 2nd gen RTX architecture—double down on ray tracing and AI performance with enhanced Ray Tracing Cores, Tensor Cores, and new streaming multiprocessors.", Price: "1499$", Cart: "Add To Cart"},
    {header: "RTX 3080", img: "../src/imgs/3080.jpg", description: "RTX 3080 graphics cards deliver the ultra performance that gamers crave, powered by Ampere—NVIDIA's 2nd gen RTX architecture. They are built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.", Price: "699$", Cart: "Add To Cart"},
    {header: "RTX 3070", img: "../src/imgs/3070.jpg", description: "The Nvidia GeForce RTX 3070 is a fast desktop graphics card based on the Ampere architecture. It uses the big GA104 chip and offers 5,888 cores and 8 GB GDDR6 graphics memory. The performance in games and 4k resolution is slightly below a RTX 2080 Ti but clearly faster then the old RTX 2080 Super.", Price: "499$", Cart: "Add To Cart"},
    {header: "RTX 3060", img: "../src/imgs/3060.jpg", description: "The Nvidia GeForce RTX 3060 is a fast desktop graphics card. It is based on the GA106 Ampere chip and offers 12 GB GDDR6 graphics memory with a 192 Bit memory bus. It offers 3,584 cores and supports PCIe 4.", Price: "329$", Cart: "Add To Cart"},
    {header: "RTX 3050", img: "../src/imgs/3050.jpg", description: "The GeForce RTX™ 3050 is built with the powerful graphics performance of the NVIDIA Ampere architecture. It offers dedicated 2nd gen RT Cores and 3rd gen Tensor Cores, new streaming multiprocessors.", Price: "250$", Cart: "Add To Cart"}
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
        document.getElementById("display").innerHTML += "<div class= productCard><h1>"+x[i].header+"</h1><img src="+x[i].img+" alt=L><p class=productDetails>" +x[i].description+ "</p><p>"+ x[i].Price+"</p><button>"+x[i].Cart+"</button>";
    }
}
