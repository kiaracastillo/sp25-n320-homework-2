## Homework 2

### sp25-create-lovapp

#### Description
 
 This module is a CLI tool designed to help users generate customized Valentine's Day invitations or scaffold new project directories. 

- Generate Valentine Invitation: The user can create a personalized Valentine's Day invitation by answering a series of questions. The generated invitation is saved as a .txt file with the recipient's name, and the user is prompted to share it.
- Create Project: The user can generate a new project directory with a README.md file that includes the project's name.

#### Steps to Utilize the Module

- To run the functionality, use:

```
npx sp25-create-lovapp
```

* The CLI will ask you if you'd like to create a Valentine's Day invitation or a project scaffold.

1. If you choose valentine, you will be prompted for:
- The name of your special person
- Your plan for the date (e.g., dinner, picnic)
- A special message for your invitation
- The tool will then generate a .txt file with your invitation, saving it in the current directory.

2. To create a new project scaffold:

- Choose the project option.
- Provide the name of your project, and the tool will create a new folder with a README.md file.

[npm link] (https://www.npmjs.com/package/sp25-create-lovapp)

#### Weekly Recap

- **NPM Built-In Modules Introduction:** The path, fs, and readline modules in Node.js help manage file system paths, perform file operations, and interact with the command line interface. These built-in modules make it easier to scaffold projects and manipulate directories and files without needing external dependencies.

- **Process Environment Variables:** Environment variables are used to configure the runtime environment in Node.js, allowing sensitive information and settings to be stored outside the codebase.

- **Publish Module to NPM:** To publish a module to npm, you need to define key properties in the package.json file, such as version, bin, and files. These properties ensure that your package is versioned properly, can be used as a CLI tool, and includes only necessary files when published.
 ```
 Example: 

 Version Management: It show changes to users

- 1.0.0 → 2.0.0 (MAJOR): Breaking changes.
- 1.0.0 → 1.1.0 (MINOR): New features, backward-compatible.
- 1.0.0 → 1.0.1 (PATCH): Bug fixes, backward-compatible.
 ```

- **OOP Concepts:** Object-Oriented Programming is a paradigm that uses classes to structure and organize code around real-world entities. It includes concepts such as classes, inheritance, encapsulation, abstraction, and polymorphism to create modular, scalable, and maintainable software systems.





