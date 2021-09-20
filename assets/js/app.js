// HTML Elements
var textInput = document.getElementById("text-input");
var submitBtn = document.getElementById("submit-btn");
var lostResult = document.getElementById("lost-result");
var beatResult = document.getElementById("beat-result");
var results = document.getElementById("results");
var dropdown = document.getElementById("dropdown");

// Episode Data
var episodes = {
    "arrgh!": {
        "lost": "Fools in April",
        "season": 1,
        "round": "2nd round"
    },
    "artist unknown": {
        "lost": "Shanghaied",
        "season": 2,
        "round": "3rd round",
        "beat": ["I'm Your Biggest Fanatic"]
    },
    "band geeks": {
        "lost": "",
        "season": null,
        "round": null,
        "beat": ["Procrastination", "Something Smells", "Graveyard Shift", "Dying for Pie"]
    },
    "big pink loser": {
        "lost": "Sailor Mouth",
        "season": 2,
        "round": "3rd round",
        "beat": ["No Free Rides"]
    },
    "boating school": {
        "lost": "Hall Monitor",
        "season": 1,
        "round": "3rd round",
        "beat": ["Mermaid Man and Barnacle Boy"]
    },
    "bossy boots": {
        "lost": "Graveyard Shift",
        "season": 2,
        "round": "2nd round"
    },
    "bubble buddy": {
        "lost": "Imitation Krabs",
        "season": 2,
        "round": "2nd round"
    },
    "bubblestand": {
        "lost": "Pizza Delivery",
        "season": 1,
        "round": "Quarter-Finals",
        "beat": ["Squeaky Boots", "Fools in April"]
    },
    "the chaperone": {
        "lost": "Jellyfishing",
        "season": 1,
        "round": "1st round"
    },
    "christmas who?": {
        "lost": "Dying for Pie",
        "season": 2,
        "round": "Quarter-Finals",
        "beat": ["The Smoking Peanut", "Imitation Krabs"]
    },
    "culture shock": {
        "lost": "Employee of the Month",
        "season": 1,
        "round": "Quarter-Finals",
        "beat": ["Sleepy Time", "Jellyfishing"]
    },
    "dumped": {
        "lost": "The Smoking Peanut",
        "season": 2,
        "round": "1st round"
    },
    "dying for pie": {
        "lost": "Band Geeks",
        "season": 2,
        "round": "Semi-Finals",
        "beat": ["Survival of the Idiots", "Krusty Love", "Christmas Who?"]
    },
    "employee of the month": {
        "lost": "Hall Monitor",
        "season": 1,
        "round": "Semi-Finals",
        "beat": ["Plankton!", "F.U.N.", "Naughty Nautical Neighbors", "Culture Shock"]
    },
    "fools in april": {
        "lost": "Bubblestand",
        "season": 1,
        "round": "3rd round",
        "beat": ["Sandy's Rocket", "Arrgh!"]
    },
    "frankendoodle": {
        "lost": "Squidville",
        "season": 2,
        "round": "3rd round",
        "beat": ["Squid's Day Off"]
    },
    "the fry cook games": {
        "lost": "Sailor Mouth",
        "season": 2,
        "round": "2nd round"
    },
    "f.u.n.": {
        "lost": "Employee of the Month",
        "season": 1,
        "round": "2nd round"
    },
    "gary takes a bath": {
        "lost": "Graveyard Shift",
        "season": 2,
        "round": "3rd round",
        "beat": ["I'm With Stupid", "Mermaid Man and Barnacle Boy III"]
    },
    "grandma's kisses": {
        "lost": "No Free Rides",
        "season": 2,
        "round": "1st round"
    },
    "graveyard shift": {
        "lost": "Band Geeks",
        "season": 2,
        "round": "Quarter-Finals",
        "beat": ["Bossy Boots", "Gary Takes a Bath"]
    },
    "hall monitor": {
        "lost": "",
        "season": null,
        "round": null,
        "beat": ["Nature Pants", "Boating School", "Texas", "Employee of the Month"]
    },
    "help wanted": {
        "lost": "SB-129",
        "season": 1,
        "round": "Quarter-Finals",
        "beat": ["Home Sweet Pineapple", "Tea at the Treedome"]
    },
    "home sweet pineapple": {
        "lost": "Help Wanted",
        "season": 1,
        "round": "2nd round"
    },
    "hooky": {
        "lost": "SB-129",
        "season": 1,
        "round": "2nd round"
    },
    "i was a teenage gary": {
        "lost": "Reef Blower",
        "season": 1,
        "round": "1st round"
    },
    "i'm with stupid": {
        "lost": "Gary Takes a Bath",
        "season": 2,
        "round": "1st round"
    },
    "i'm your biggest fanatic": {
        "lost": "Artist Unknown",
        "season": 2,
        "round": "2nd round",
        "beat": ["Sandy, SpongeBob, and the Worm"]
    },
    "imitation krabs": {
        "lost": "Cristmas Who?",
        "season": 2,
        "round": "3rd round",
        "beat": ["Bubble Buddy"]
    },
    "jellyfish hunter": {
        "lost": "Life of Crime",
        "season": 2,
        "round": "2nd round"
    },
    "jellyfish jam": {
        "lost": "Texas",
        "season": 1,
        "round": "3rd round",
        "beat": ["Opposite Day"]
    },
    "jellyfishing": {
        "lost": "Culture Shock",
        "season": 1,
        "round": "3rd round",
        "beat": ["The Chaperone", "Mermaid Man and Barnacle Boy II"]
    },
    "karate choppers": {
        "lost": "SB-129",
        "season": 1,
        "round": "3rd round",
        "beat": ["Reef Blower"]
    },
    "krusty love": {
        "lost": "Dying for Pie",
        "season": 2,
        "round": "3rd round",
        "beat": ["Squirrel Jokes"]
    },
    "life of crime": {
        "lost": "Patty Hype",
        "season": 2,
        "round": "3rd round",
        "beat": ["Jellyfish Hunter"]
    },
    "mermaid man and barnacle boy": {
        "lost": "Boating School",
        "season": 1,
        "round": "2nd round"
    },
    "mermaid man and barnacle boy ii": {
        "lost": "Jellyfishing",
        "season": 1,
        "round": "2nd round"
    },
    "mermaid man and barnacle boy iii": {
        "lost": "Gary Takes a Bath",
        "season": 2,
        "round": "2nd round"
    },
    "musclebob buffpants": {
        "lost": "Nature Pants",
        "season": 1,
        "round": "1st round"
    },
    "nature pants": {
        "lost": "Hall Monitor",
        "season": 1,
        "round": "2nd round",
        "beat": ["MuscleBob BuffPants"]
    },
    "naughty nautical neighbors": {
        "lost": "Employee of the Month",
        "season": 1,
        "round": "3rd round",
        "beat": ["Suds"]
    },
    "neptune's spatula": {
        "lost": "Pizza Delivery",
        "season": 1,
        "round": "2nd round",
        "beat": ["The Paper"]
    },
    "no free rides": {
        "lost": "Big Pink Loser",
        "season": 2,
        "round": "2nd round",
        "beat": ["Grandma's Kisses"]
    },
    "opposite day": {
        "lost": "Jellyfish Jam",
        "season": 1,
        "round": "2nd round",
        "beat": ["Squidward the Unfriendly Ghost"]
    },
    "the paper": {
        "lost": "Neptune's Spatula",
        "season": 1,
        "round": "1st round"
    },
    "patty hype": {
        "lost": "Shanghaied",
        "season": 2,
        "round": "Quarter-Finals",
        "beat": ["Prehibernation Week", "Life of Crime"]
    },
    "pickles": {
        "lost": "Texas",
        "season": 1,
        "round": "2nd round"
    },
    "pizza delivery": {
        "lost": "",
        "season": null,
        "round": null,
        "beat": ["Neptune's Spatula", "Ripped Pants", "Bubblestand", "SB-129"]
    },
    "plankton!": {
        "lost": "Employee of the Month",
        "season": 1,
        "round": "1st round"
    },
    "prehibernation week": {
        "lost": "Patty Hype",
        "season": 2,
        "round": "2nd round"
    },
    "pressure": {
        "lost": "Survival of the Idiots",
        "season": 2,
        "round": "1st round"
    },
    "procrastination": {
        "lost": "Band Geeks",
        "season": 2,
        "round": "2nd round",
        "beat": ["Wormy"]
    },
    "reef blower": {
        "lost": "Karate Choppers",
        "season": 1,
        "round": "2nd round",
        "beat": ["I Was a Teenage Gary"]
    },
    "ripped pants": {
        "lost": "Pizza Delivery",
        "season": 1,
        "round": "3rd round",
        "beat": ["Rock Bottom"]
    },
    "rock bottom": {
        "lost": "Ripped Pants",
        "season": 1,
        "round": "2nd round"
    },
    "sailor mouth": {
        "lost": "",
        "season": null,
        "round": null,
        "beat": ["The Fry Cook Games", "Big Pink Loser", "Squidville"]
    },
    "sandy's rocket": {
        "lost": "Fools in April",
        "season": 1,
        "round": "1st round"
    },
    "sandy, spongebob, and the worm": {
        "lost": "I'm Your Biggest Fanatic",
        "season": 2,
        "round": "1st round"
    },
    "sb-129": {
        "lost": "Pizza Delivery",
        "season": 1,
        "round": "Semi-Finals",
        "beat": ["Hooky", "Karate Choppers", "Help Wanted"]
    },
    "scaredy pants": {
        "lost": "Tea at the Treedome",
        "season": 1,
        "round": "2nd round",
        "beat": ["Walking Small"]
    },
    "the secret box": {
        "lost": "Something Smells",
        "season": 2,
        "round": "2nd round",
    },
    "shanghaied": {
        "lost": "",
        "season": null,
        "round": null,
        "beat": ["Your Shoe's Untied", "Artist Unknown", "Patty Hype"]
    },
    "sleepy time": {
        "lost": "Culture Shock",
        "season": 1,
        "round": "2nd round"
    },
    "the smoking peanut": {
        "lost": "Christmas Who?",
        "season": 2,
        "round": "2nd round",
        "beat": ["Dumped (HAH!)"]
    },
    "something smells": {
        "lost": "Band Geeks",
        "season": 2,
        "round": "3rd round",
        "beat": ["The Secret Box"]
    },
    "squeaky boots": {
        "lost": "Bubblestand",
        "season": 1,
        "round": "2nd round",
        "beat": ["Valentine's Day"]
    },
    "squid on strike": {
        "lost": "Squidville",
        "season": 2,
        "round": "1st round"
    },
    "squid's day off": {
        "lost": "Frankendoodle",
        "season": 2,
        "round": "2nd round"
    },
    "squidville": {
        "lost": "Sailor Mouth",
        "season": 2,
        "round": "Quarter-Finals",
        "beat": ["Squid on Strike", "Welcome to the Chum Bucket", "Frankendoodle"]
    },
    "squidward the unfriendly ghost": {
        "lost": "Opposite Day",
        "season": 1,
        "round": "1st round"
    },
    "squirrel jokes": {
        "lost": "Krusty Love",
        "season": 2,
        "round": "2nd round"
    },
    "suds": {
        "lost": "Naughty Nautical Neighbors",
        "season": 1,
        "round": "2nd round"
    },
    "survival of the idiots": {
        "lost": "Dying for Pie",
        "season": 2,
        "round": "2nd round",
        "beat": ["Pressure"]
    },
    "tea at the treedome": {
        "lost": "Help Wanted",
        "season": 1,
        "round": "3rd round",
        "beat": ["Scaredy Pants"]
    },
    "texas": {
        "lost": "Hall Monitor",
        "season": 1,
        "round": "Quarter-Finals",
        "beat": ["Pickles", "Jellyfish Jam"]
    },
    "valentine's day": {
        "lost": "Squeaky Boots",
        "season": 1,
        "round": "1st round"
    },
    "walking small": {
        "lost": "Scaredy Pants",
        "season": 1,
        "round": "1st round"
    },
    "welcome to the chum bucket": {
        "lost": "Squidville",
        "season": 2,
        "round": "2nd round"
    },
    "wormy": {
        "lost": "Procrastination",
        "season": 2,
        "round": "1st round",
    },
    "your shoe's untied": {
        "lost": "Shanghaied",
        "season": 2,
        "round": "2nd round"
    }
};

dropdown.onchange = (function(){
    textInput.value = "";
});

textInput.oninput = (function(){
    dropdown.value = "default";
})

submitBtn.onclick = (function(event){
    // Prevents page from reloading after submission
    event.preventDefault();
    results.style.display = "block";
    // If there is nothing in the text input, use the value in the dropdown...
    if(textInput.value == "") {
        if(dropdown.value == "default"){
            lostResult.innerHTML = "You must choose an episode to get a result.";
            beatResult.innerHTML = "";
        } else {
            // Handle lost to sentence
            if(episodes[dropdown.value]["lost"] == "") {
                lostResult.innerHTML = "This episode has not lost yet!";
            } else {
                lostResult.innerHTML = `Lost to "${episodes[dropdown.value.toLowerCase()]["lost"]}" in the ${episodes[dropdown.value.toLowerCase()]["round"]} of Season ${episodes[dropdown.value.toLowerCase()]["season"]}.`;
            }
            // Handle beat list
            if(episodes[dropdown.value]["beat"]){
                beatResult.innerHTML = "This episode beat: ";
                for(var i = 0; i < episodes[dropdown.value]["beat"].length; i++) {
                    beatResult.innerHTML += "<li>" + episodes[dropdown.value]["beat"][i] + "</li>";
                }
            } else {
                beatResult.innerHTML = "";
            }
        }
    // ...Otherwise use the value in the text input
    } else {
        if(episodes[textInput.value.toLowerCase()] == undefined){
            lostResult.innerHTML = "Hmmm... I don't recognize that one (Tip: make sure to include any spaces or punctuation)";
            beatResult.innerHTML = "";
        } else {
            // Handle lost to sentence
            if(episodes[textInput.value.toLowerCase()]["lost"] == "") {
                lostResult.innerHTML = "This episode has not lost yet!";
            } else {
                lostResult.innerHTML = `Lost to "${episodes[textInput.value.toLowerCase()]["lost"]}" in the ${episodes[textInput.value.toLowerCase()]["round"]} of Season ${episodes[textInput.value.toLowerCase()]["season"]}.`;
            }
            // Handle beat list
            if(episodes[textInput.value.toLowerCase()]["beat"]){
                beatResult.innerHTML = "This episode beat: ";
                for(var i = 0; i < episodes[textInput.value.toLowerCase()]["beat"].length; i++) {
                    beatResult.innerHTML += "<li>" + episodes[textInput.value.toLowerCase()]["beat"][i] + "</li>";
                }
            } else {
                beatResult.innerHTML = "";
            }
        }
    }
});