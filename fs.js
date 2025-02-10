const fs = require("fs");
const path = require("path");

fs.writeFileSync("notesAmor.json", JSON.stringify( 
    [
        { note: 1, quote: "Love is the beauty of the soul"},
        { note: 2, quote: "Love is the greatest refreshment in life."},
        { note: 3, quote: "At the touch of love everyone becomes a poet."},
        { note: 4, quote: "Love is the whole thing. We are only the pieces."},
        { note: 5, quote: "Love is being stupid together."},
    ]
));

const notesAmorData = fs.readFileSync("notesAmor.json");
console.log(JSON.parse(notesAmorData.toString()));

const dataPath = path.resolve("data");

if(!fs.existsSync(dataPath)) {
    fs.mkdirSync(dataPath);
}

fs.writeFileSync(path.join(dataPath, "userNotes.json"), "{}");

fs.writeFileSync(
    path.join(dataPath, ".gitignore"), "# Ignore files and directories in this folder :)"
);

fs.appendFileSync(path.join(dataPath, ".gitignore"), `

node_modules`
);