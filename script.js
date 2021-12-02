console.log("portfolio"); 

var flipbookTekst =document.querySelector(".container-flipbook"); 
var counter = 0;  
var tekst = ["Techno liefhebber 🎵", "Hondenvriend 🐕", "Fantasy nerd 📚", "Bordspelletjesfanaat🎲", "Keukenprinses 🎂", "Theatermeisje 🎭"]; 
var inst = setInterval(flipbookFuntie, 2000); 


function flipbookFuntie() { 
    console.log("flipbook"); 
     flipbookTekst.innerHTML = tekst[counter]; 
    counter++; 

     if (counter >= tekst.length) { 
         counter = 0; 
     }
}


console.log("test"); 

flipbookFuntie(); 
