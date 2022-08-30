version = [{
    name: "Cup Cake",
    Release_Date: 27 / 04 / 2009,
    Type: "Android 1.5",
    Features: ["Copy and paste features in web browser."],
    Authors: "Elon Decker",
    Bugs: ["Notifications are buggy and arbitrarily limited"]
},

{
    name: "Donut",
    Release_Date: 15 / 09 / 2009,
    Type: "Android 1.6",
    Features: ["Voice and text entry search enhanced to include bookmark history, contacts, and the web.",],
    Authors: "Google",
    Bugs: ["Media player",
        "Access to Google Maps Navigation",
        "Quick search box for Android"]
},

{
    name: "Eclair",
    Release_Date: 23 / 10 / 2009,
    Type: "Android 2.0",
    Features: ["The camera app was also redesigned with numerous new camera features, including flash support, digital zoom, scene mode, white balance"],
    Authors: "Andy Rubin",
    Bugs: ["The AVD just hang and nothing is responsive."]
},

{
    name: "Froyo",
    Release_Date: 20 / 05 / 2010,
    Type: "Android 2.2",
    Features: ["Speed, memory, and performance optimizations"],
    Authors: "JR Raphael",
    Bugs: 'ASD56'
},
]

// bugId=['ASD56',"Voice Dialer (Voice Dialler) is misspelled in the App Drawer"]
// giveId='ASD56'
// if(giveId==version[3].Bugs){
//     console.log(bugId[1]);
// }

// bugId={id:'ASD56',
// DESCRIPTION:'Voice Dialer (Voice Dialler) is misspelled in the App Drawer'}

function findbyReleaseyear(year){
    console.log("---------------------")
    filteryear=version.filter(n=>n.Release_Date.include(year))
    console.log(`${filteredYear.length},the version released in ${year}`)
    console.log(filteredYear)
}
function findByBugs(str){
    Bugs=version.filter(n=>n.Bugs.include(str))
    console.log(`${Bugs.length},the version have ${str} Bugs...`)
    console.log(Bugs)
    console.log(Bugs.length,"Bugs")

}
function findByFeature(str){
    feature=version.filter(n=>n.feature.include(str))
    console.log(`${Features.length},the version have ${str} feature...`)
    console.log(feature)
}
function findByAuthor(name){
    feature=version.filter(n=>n.Author.include(name))
    console.log(`${Author.length},the version has developed ${name}...`)
    console.log(Author)
}