const dotenv = require('dotenv').config();

console.log("Environment "+process.env.ENV);
//JSON.parse added specifically for escaping \\n character 
module.exports ={
    googleProjectId                 : process.env[process.env.ENV+"_GOOGLE_PROJECT_ID"],
    dialogFlowSessionId             : process.env[process.env.ENV+"_DIALOG_FLOW_SESSION_ID"],
    dialogFlowSessionLanguageCode   : process.env[process.env.ENV+"_DIALOG_FLOW_SESSION_LANGUAGE_CODE"],
    googleClientEmail               : process.env[process.env.ENV+"_GOOGLE_CLIENT_EMAIL"],
    googlePrivateKey               : JSON.parse(`"${process.env[process.env.ENV+"_GOOGLE_PRIVATE_KEY"]}"`),

}

