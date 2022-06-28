var nav = responsiveNav(".navbar", { // Selector
    animate: true,  
    transition: 250,  
    label: "Menu",  
    insert: "after",  
    customToggle: "",  
    openPos: "relative",  
    jsClass: "js",  
    init: function(){}, // Function: Init callback
    open: function(){}, // Function: Open callback
    close: function(){} // Function: Close callback
});