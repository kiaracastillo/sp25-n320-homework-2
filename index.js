#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const readline = require("readline");

const app = readline.createInterface({
    output: process.stdout,
    input: process.stdin,
});

function quitApp() {
    console.log("Process completed successfully!");
    app.close();
}

function generateValentineInvitation() {
    console.log(" Welcome to the Valentine's Day Invitation!");

    app.question("What is the name of your special person? ", (name) => {
        app.question("What plan do you have for your date? (example: dinner, picnic, movie, walk): ", (plan) => {
            app.question("Write a special message for your invitation: ", (message) => {
                const invitation = `
                Dear ${name} <3, 

                Valentine's Day is coming, and I can't imagine a better time
                with you. I would love to invite you to a ${plan}
                to make this day even more special.

                "${message}"

                Will you be my Valentine? <3

                With love,
                
                `;

                console.log("Here is your invitation:");
                console.log(invitation);

                const filePath = path.join(__dirname, `Valentine_Invitation_${name}.txt`);
                fs.writeFileSync(filePath, invitation);

                console.log(` Invitation saved as "${filePath}". Don't forget to send it! <3`);
                quitApp();
            });
        });
    });
}

app.question("Do you want to create a Valentine's Day invitation or a project? (project/valentine): ", function (choice) {
    const cleanedChoice = choice.trim().toLowerCase();

    if (cleanedChoice === "project") {
        app.question("Name of Project: ", function (projectName) {
            const baseDirectory = process.env.TEST === "1" ? path.resolve("output") : process.cwd();
            const projectDirectory = path.join(baseDirectory, projectName);
            const readmeFile = path.join(projectDirectory, "README.md");

            if (!fs.existsSync(projectDirectory)) {
                fs.mkdirSync(projectDirectory);
            }

            fs.writeFileSync(readmeFile, `# ${projectName}`);
            quitApp();
        });
    } else if (cleanedChoice === "valentine") {
        generateValentineInvitation();
    } else {
        console.log("Please enter 'project' or 'valentine'.");
        app.close();
    }
});
