
var GPU = [
    {header: "RTX 3090", img: "../src/imgs/3090.jpg", description: "big ferocious GPU (BFGPU) with TITAN class performance. Powered by Ampere—NVIDIA's 2nd gen RTX architecture—double down on ray tracing and AI performance with enhanced Ray Tracing Cores, Tensor Cores, and new streaming multiprocessors.", Price: "1499$", Cart: "Add To Cart"},
    {header: "RTX 3080", img: "../src/imgs/3080.jpg", description: "RTX 3080 graphics cards deliver the ultra performance that gamers crave, powered by Ampere—NVIDIA's 2nd gen RTX architecture. They are built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.", Price: "699$", Cart: "Add To Cart"},
    {header: "RTX 3070", img: "../src/imgs/3070.jpg", description: "The Nvidia GeForce RTX 3070 is a fast desktop graphics card based on the Ampere architecture. It uses the big GA104 chip and offers 5,888 cores and 8 GB GDDR6 graphics memory. The performance in games and 4k resolution is slightly below a RTX 2080 Ti but clearly faster then the old RTX 2080 Super.", Price: "499$", Cart: "Add To Cart"},
    {header: "RTX 3060", img: "../src/imgs/3060.jpg", description: "The Nvidia GeForce RTX 3060 is a fast desktop graphics card. It is based on the GA106 Ampere chip and offers 12 GB GDDR6 graphics memory with a 192 Bit memory bus. It offers 3,584 cores and supports PCIe 4.", Price: "329$", Cart: "Add To Cart"},
    {header: "RTX 3050", img: "../src/imgs/3050.jpg", description: "The GeForce RTX™ 3050 is built with the powerful graphics performance of the NVIDIA Ampere architecture. It offers dedicated 2nd gen RT Cores and 3rd gen Tensor Cores, new streaming multiprocessors.", Price: "250$", Cart: "Add To Cart"}
];

var CPU =[

    {header: "Intel i9 12900k", img: "../src/imgs/i9.png", description: "The Intel Core i9-12900K is a high end CPU for desktops based on the Alder Lake architecture. And offers 8 performance cores and 8 efficiency cores. The performance cores (P-cores) support HyperThreading, leading to 24 Threads that can be processed at once.", Price: "589$", Cart: "Add To Cart"},
    {header: "Intel i7 12700k", img: "../src/imgs/i7.png", description: " i7 12700k processor has a 5 GHz Turbo Boost Max 3.0 frequency with 25MB of cache for fast and reliable performance. The Core i7-12700K also includes support for up to PCI Express 5.0 and dual-channel DDR5 memory at 4800 MHz to help run and multitask a variety of demanding applications.", Price: "409$", Cart: "Add To Cart"},
    {header: "Intel i5 12600k", img: "../src/imgs/i5.png", description: "The Intel Core i5-12600K is a brilliant processor for gaming. Rocking 10 physical hybrid cores and 16 threads, this CPU is more than powerful enough for the latest GPUs and PC games", Price: "320$", Cart: "Add To Cart"},
    {header: "AMD Ryzen 5 5600x", img: "../src/imgs/5600x.jpg", description: "This CPU features six cores, twelve threads, and a boost to 4.6GHz.", Price: "299$", Cart: "Add To Cart"},
    {header: "AMD Ryzen 7 5800x", img: "../src/imgs/5800x.png", description: "The 5800X is one of the best CPUs for gaming, and ideally suited for a mid-range setup. It is an 8-core/16-thread part with a 3.8GHz base clock, 4.7GHz max boost clock, and 32MB of L3 cache. A great all-around workhorse, it can power both your gaming and productivity needs ", Price: "449$", Cart: "Add To Cart"}
];

var Mobo =[
    {header: "GIGABYTE H610M", img: "../src/imgs/h610.png", description: "Intel LGA 1700 Socket: Supports 12th Gen Intel Core Series Processors with DDR4 support", Price: "89.99$", Cart: "Add To Cart"},
    {header: "Gigabyte Z690 Aorus Master", img: "../src/imgs/z690.png", description: "Support 12th Gen Intel Series Processors with DDR5 memory", Price: "449.99$", Cart: "Add To Cart"},
    {header: "MSI MAG B660 Tomahawk", img: "../src/imgs/5800x.png", description: "Intel LGA 1700 Socket: Supports 12th Gen Intel Core Series Processors with DDR4 support", Price: "189.99$", Cart: "Add To Cart"},
    {header: "GIGABYTE A520M", img: "../src/imgs/A520.png", description: "MicroATX, Supports AMD Ryzen 5000 Series/ 3rd Gen Ryzen and 3rd Gen Ryzen with Radeon Graphics Processors", Price: "189.99$", Cart: "Add To Cart"},
    {header: "MSI B550-A PRO", img: "../src/imgs/5800x.png", description: "Support for 3rd Gen AMD Ryzen processors and future AMD Ryzen processors with BIOS update", Price: "139.99$", Cart: "Add To Cart"}
];


function DisplayList(x){
    document.getElementById("display").innerHTML = "";
    for(var i = 0; i < x.length; i++){
        document.getElementById("display").innerHTML += "<div class= productCard><h1>"+x[i].header+"</h1><img src="+x[i].img+" alt=L><p class=productDetails>" +x[i].description+ "</p><p>"+ x[i].Price+"</p><button>"+x[i].Cart+"</button>";
    }
}
