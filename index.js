import inquirer from 'inquirer';
inquirer
    .prompt([ {
        name: 'title',
        message: 'What is the Title of Your Project?',
        type: 'input' 
    },
    {
        name: 'description',
        message: 'Give a description of your project. Please include why you built the project, what problem it solves, and what you learned?',
        type: 'input'

    },
    {
        name: 'installation',
        message: 'What are the steps required to install your project?',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'What is the app used for, and how does someone use the app?',
        type: 'input'
    },
    {
        name: 'credit',
        message: 'Please list any contributers to this project, or state otherwise. Did you use any third party assets or follow any tutorials?',
        type: 'input',
    },
    {
        name: 'username',
        message: 'What is your GitHub username?',
        type: 'input'
    },
    {
        name: 'email',
        message: 'What is your e-mail?',
        type: 'input'
    },
    //{
    //    name: 'license',
    //    message: 'Please select a license',
    //    type: 'list',
    //    choices: ['MIT', 'GPL', 'Apache', 'none']
    //}
    //  Couldn't quite figure this out with enough time to finish it.
    ])
    .then((answers) => {
        console.log("#" + answers["title"] + "\r\n");
        console.log("##" + "Description" + "\r\n" + answers["description"] + "\r\n");
        console.log("##" + "Installation" + "\r\n" + answers["installation"] + "\r\n");
        console.log("##" + "Usage" + "\r\n" + answers["usage"] + "\r\n");
        console.log("##" + "Contributing" + "\r\n" + answers["credit"] + "\r\n");
        console.log("##" + "Questions" + "\r\n" + "github.com/" + answers["username"] + "\r\n" + answers["email"] + "\r\n");
    });
    
