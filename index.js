import inquirer from 'inquirer';
inquirer
    .prompt([ {
        name: 'title',
        message: 'What is the Title of Your Project?',
        type: 'input' 
    },
    {
        name: 'description',
        message: 'What Does Your Project Do?',
        type: 'input'

    }])
    .then((answers) => {
        console.log("#" + answers["title"] + "\r\n");
        console.log("##" + "Description" + "\r\n" + answers["description"]);
    });
    
