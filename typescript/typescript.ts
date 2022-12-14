interface objectversion {
    VersionType: string
    Release_Date: string
    Bugs: string[]
    Features: string[]
    Authors: string
    Type: string
}
let version: objectversion[] = [{
    VersionType: "Cup Cake",
    Release_Date: "27 / 04 / 2009",
    Type: "Android 1.5",
    Features: ["Copy and paste Features in web browser."],
    Authors: "Elon Decker",
    Bugs: ["Notifications are buggy and arbitrarily limited"]
},

{
    VersionType: "Donut",
    Release_Date: "15 / 09 / 2009",
    Type: "Android 1.6",
    Features: ["Voice and text entry search enhanced to include bookmark history, contacts, and the web.",],
    Authors: "Google",
    Bugs: ["Media player",
        "Access to Google Maps Navigation",
        "Quick search box for Android"]
},

{
    VersionType: "Eclair",
    Release_Date: " 23 / 10 / 2009",
    Type: "Android 2.0",
    Features: ["The camera app was also redesigned with numerous new camera Features, including flash support, digital zoom, scene mode, white balance"],
    Authors: "Andy Rubin",
    Bugs: ["The AVD just hang and nothing is responsive."]
},

{
    VersionType: "Froyo",
    Release_Date: "20 / 05 / 2010",
    Type: "Android 2.2",
    Features: ["Speed, memory, and performance optimizations"],
    Authors: "JR Raphael",
    Bugs: ['ASD56']
},
]

// bugId=['ASD56',"Voice Dialer (Voice Dialler) is misspelled in the App Drawer"]
// giveId='ASD56'
// if(giveId==version[3].Bugs){
//     console.log(bugId[1]);
// }

// bugId={id:'ASD56',
// DESCRIPTION:'Voice Dialer (Voice Dialler) is misspelled in the App Drawer'}

function findbyReleaseYear(year: string) {
    console.log("---------------------")
    let filteredYear = version.filter(n => n.Release_Date.includes(year))
    console.log(`${filteredYear.length},the version released in ${year}`)
    console.log(filteredYear)
}
function findByBugs(str: string) {
    let Bugs = version.filter(n => n.Bugs.includes(str))
    console.log(`${Bugs.length},the version have ${str} Bugs...`)
    console.log(Bugs)
    console.log(Bugs.length, "Bugs")

}
function findByFeature(str: string) {
    let Feature = version.filter(n => n.Features.includes(str))
    console.log(`${Feature.length},the version have ${str} feature...`)
    console.log(Feature)
}
function findByAuthor(name: string) {
    let Author = version.filter(n => n.Authors.includes(name))
    console.log(`${Author.length},the version has developed ${name}...`)
    console.log(Author)
}

function findByType(types: string) {
    let type = version.filter(n => n.Type.includes(types))
    console.log(`${type.length},the version have ${type} type...`)
    console.log(types)
}
function authorName() {
    let arr: any = []
    version.forEach(elements => {
        for (let i of elements.Authors)
            arr.push(i)
    })
    let count = 1
    let authorValue = 0
    let maxValue = 1
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
            if (maxValue < count) {
                maxValue = count
                authorValue = arr[i]
            }
        }
        count = 0
    }
    console.log(`The Author ${authorValue} Has Worked ${maxValue} Releases`)
}

findbyReleaseYear(2010)
findByBugs("Notifications")
findByFeature("Copy and paste Features in web browser.")
findByAuthor("Elon Decker")
findByVersion("VersionType")
findByType("Android 1.5")