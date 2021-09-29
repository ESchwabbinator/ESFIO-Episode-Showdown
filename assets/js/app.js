// HTML Elements
var textInput = document.getElementById("text-input");
var submitBtn = document.getElementById("submit-btn");
var lostResult = document.getElementById("lost-result");
var beatResult = document.getElementById("beat-result");
var results = document.getElementById("results");
// var dropdown = document.getElementById("dropdown");
var seasonRank = document.getElementById("season-rank");
var seasonDropdown = document.getElementById("season-dropdown");
var season1Dropdown = document.getElementById("season-1-dropdown");
var season2Dropdown = document.getElementById("season-2-dropdown");
var season3Dropdown = document.getElementById("season-3-dropdown");
var season4Dropdown = document.getElementById("season-4-dropdown");

var season;

// Episode Data
var episodes = {
    "all that glitters": {
        "lost": "Best Day Ever",
        "season": 4,
        "round": "1st round"
    },
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
        "lost": "Pizza Delivery",
        "season": "1 & 2",
        "round": "Championship Round",
        "beat": ["Procrastination", "Something Smells", "Graveyard Shift", "Dying for Pie", "Sailor Mouth"],
        "rank": 1
    },
    "best day ever": {
        "lost": "",
        "season": null,
        "round": null,
        "beat": ["All That Glitters"]
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
    "bummer vacation": {
        "lost": "",
        "season": null,
        "round": null,
        "beat": ["Driven to Tears"]
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
    "doing time": {
        "lost": "",
        "season": null,
        "round": null,
        "beat": ["The Great Snail Race"]
    },
    "driven to tears": {
        "lost": "Bummer Vacation",
        "season": 4,
        "round": "1st round"
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
        "beat": ["Survival of the Idiots", "Krusty Love", "Christmas Who?"],
        "rank": 3
    },
    "employee of the month": {
        "lost": "Hall Monitor",
        "season": 1,
        "round": "Semi-Finals",
        "beat": ["Plankton!", "F.U.N.", "Naughty Nautical Neighbors", "Culture Shock"],
        "rank": 4
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
    "the great snail race": {
        "lost": "Doing Time",
        "season": 3,
        "round": "1st round"
    },
    "hall monitor": {
        "lost": "Pizza Delivery",
        "season": 1,
        "round": "FINALS",
        "beat": ["Nature Pants", "Boating School", "Texas", "Employee of the Month"],
        "rank": 2
    },
    "help wanted": {
        "lost": "SB-129",
        "season": 1,
        "round": "Quarter-Finals",
        "beat": ["Home Sweet Pineapple", "Tea at the Treedome"]
    },
    "hocus pocus": {
        "lost": "",
        "season": null,
        "round": null,
        "beat": ["Squid Wood"]
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
    "mermaid man and barnacle boy iv": {
        "lost": "Mid-Life Crustacean",
        "season": 3,
        "round": "1st round"
    },
    "mid-life crustacean": {
        "lost": "",
        "season": null,
        "round": null,
        "beat": ["Mermaid Man and Barnacle Boy IV"]
    },
    "missing identity": {
        "lost": "",
        "season": null,
        "round": null,
        "beat": ["Ugh"]
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
    "new student starfish": {
        "lost": "",
        "season": null,
        "round": null,
        "beat": ["Party Pooper Pants"]
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
    "party pooper pants": {
        "lost": "New Student Starfish",
        "season": 3,
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
    "the pink purloiner": {
        "lost": "",
        "season": null,
        "round": null,
        "beat": ["The Thing"]
    },
    "pizza delivery": {
        "lost": "",
        "season": null,
        "round": null,
        "beat": ["Neptune's Spatula", "Ripped Pants", "Bubblestand", "SB-129", "Hall Monitor", "Band Geeks"],
        "rank": 1
    },
    "plankton!": {
        "lost": "Employee of the Month",
        "season": 1,
        "round": "1st round"
    },
    "plankton's army": {
        "lost": "",
        "season": null,
        "round": null,
        "beat": ["The Sponge Who Could Fly"]
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
    "rule of dumb": {
        "lost": "",
        "season": null,
        "round": null,
        "beat": ["Wigstruck"]
    },
    "sailor mouth": {
        "lost": "Band Geeks",
        "season": 2,
        "round": "FINALS",
        "beat": ["The Fry Cook Games", "Big Pink Loser", "Squidville", "Shanghaied"],
        "rank": 2
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
        "beat": ["Hooky", "Karate Choppers", "Help Wanted"],
        "rank": 3
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
        "lost": "Sailor Mouth",
        "season": 2,
        "round": "Semi-Finals",
        "beat": ["Your Shoe's Untied", "Artist Unknown", "Patty Hype"],
        "rank": 4
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
    "the sponge who could fly": {
        "lost": "Plankton's Army",
        "season": 3,
        "round": "1st round"
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
    "squid wood": {
        "lost": "Hocus Pocus",
        "season": 4,
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
    "the thing": {
        "lost": "The Pink Purloiner",
        "season": 4,
        "round": "1st round",
    },
    "ugh": {
        "lost": "Missing Identity",
        "season": 3,
        "round": "1st round"
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
    "wigstruck": {
        "lost": "Rule of Dumb",
        "season": 4,
        "round": "1st round"
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

// Clears results if text input is changed
textInput.oninput = (function(){
    seasonDropdown.value = "default";
    season1Dropdown.style.display = "none";
    season2Dropdown.style.display = "none";
    season3Dropdown.style.display = "none";
    season4Dropdown.style.display = "none";
    results.style.display = "none";
})

seasonDropdown.onchange = (function(){
    // Only show episodes from season in season dropdown
    var value = this.value;
    if(value == 1){
        season1Dropdown.style.display = "block";
        season2Dropdown.style.display = "none";
        season3Dropdown.style.display = "none";
        season4Dropdown.style.display = "none";
        season = 1;
    } else if(value == 2){
        season2Dropdown.style.display = "block";
        season1Dropdown.style.display = "none";
        season3Dropdown.style.display = "none";
        season4Dropdown.style.display = "none";
        season = 2;
    } else if(value == 3){
        season3Dropdown.style.display = "block";
        season1Dropdown.style.display = "none";
        season2Dropdown.style.display = "none";
        season4Dropdown.style.display = "none";
        season = 3;
    } else if(value == 4){
        season4Dropdown.style.display = "block";
        season1Dropdown.style.display = "none";
        season2Dropdown.style.display = "none";
        season3Dropdown.style.display = "none";
        season = 4;
    }
    // Sets episode dropdowns to default
    season1Dropdown.value = "default";
    season2Dropdown.value = "default";
    season3Dropdown.value = "default";
    season4Dropdown.value = "default";
    // Clears results
    textInput.value = "";
    results.style.display = "none";
});

season1Dropdown.onchange = (function(){
    results.style.display = "none"
});

season2Dropdown.onchange = (function(){
    results.style.display = "none"
});

season3Dropdown.onchange = (function(){
    results.style.display = "none"
});

season4Dropdown.onchange = (function(){
    results.style.display = "none"
});

function generateResults(dropdownValue){
    // If there is nothing in the text input, use the value in the dropdown...
    if(textInput.value == "") {
        if(dropdownValue == "default" || seasonDropdown.value == "default"){
            lostResult.innerHTML = "You must choose an episode to get a result.";
            beatResult.innerHTML = "";
        } else {
            // Handle lost to sentence
            if(episodes[dropdownValue]["lost"] == "") {
                lostResult.innerHTML = `<div class="dark-blue">This episode has not lost yet!</div>`;
            } else {
                lostResult.innerHTML = `<div class="dark-blue">This episode lost to:</div>
                "${episodes[dropdownValue.toLowerCase()]["lost"]}" in the ${episodes[dropdownValue.toLowerCase()]["round"]} of Season ${episodes[dropdownValue.toLowerCase()]["season"]}.`;
            }
            // Handle beat list
            if(episodes[dropdownValue]["beat"]){
                beatResult.innerHTML = `<div class="dark-blue">This episode beat: </div>`;
                for(var i = 0; i < episodes[dropdownValue]["beat"].length; i++) {
                    beatResult.innerHTML += "<li>" + episodes[dropdownValue]["beat"][i] + "</li>";
                }
            } else {
                beatResult.innerHTML = "";
            }
            // Handle season rank sentence
            if(episodes[dropdownValue]["rank"]){
                seasonRank.innerHTML = `Rank within its season: ${episodes[dropdownValue]["rank"]}`;
            } else {
                seasonRank.innerHTML = "";
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
                lostResult.innerHTML = `<div class="dark-blue">This episode has not lost yet!</div>`;
            } else {
                lostResult.innerHTML = `<div class="dark-blue">This episode lost to:</div>
                "${episodes[textInput.value.toLowerCase()]["lost"]}" in the ${episodes[textInput.value.toLowerCase()]["round"]} of Season ${episodes[textInput.value.toLowerCase()]["season"]}.`;
            }
            // Handle beat list
            if(episodes[textInput.value.toLowerCase()]["beat"]){
                beatResult.innerHTML = `<div class="dark-blue">This episode beat: </div>`;
                for(var i = 0; i < episodes[textInput.value.toLowerCase()]["beat"].length; i++) {
                    beatResult.innerHTML += "<li>" + episodes[textInput.value.toLowerCase()]["beat"][i] + "</li>";
                }
            } else {
                beatResult.innerHTML = "";
            }
            // Handle season rank sentence
            if(episodes[textInput.value.toLowerCase()]["rank"]){
                seasonRank.innerHTML = `Rank within its season: ${episodes[textInput.value.toLowerCase()]["rank"]}`;
            } else {
                seasonRank.innerHTML = "";
            }
        }
    }
}

submitBtn.onclick = (function(event){
    // Prevents page from reloading after submission
    event.preventDefault();
    results.style.display = "block";

    if(season == 1){
        generateResults(season1Dropdown.value);
    } else if(season == 2){
        generateResults(season2Dropdown.value);
    } else if(season == 3){
        generateResults(season3Dropdown.value);
    } else if(season == 4) {
        generateResults(season4Dropdown.value);
    } else {
        generateResults();
    }
});