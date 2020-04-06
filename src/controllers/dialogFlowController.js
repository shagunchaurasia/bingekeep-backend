const dialogFlow = require('dialogflow');
const config     = require('./../config/keys');
const sessionClient = new dialogFlow.SessionsClient();
const sessionPath = sessionClient.sessionPath(config.googleProjectId, config.dialogFlowSessionId);

exports.dfTextQuery =  (request,response,next)=>{


    const requestToSend = {
        session         : sessionPath,
        queryInput      : {
            text        : {
                text            : "Designated",
                languageCode    : config.dialogFlowSessionLanguageCode
            }
        }
    }

    sessionClient.detectIntent(requestToSend)
    .then(responses=>{
        console.log('Detected intent');
        const result = responses[0].queryResult;
        console.log(`  Query: ${result.queryText}`);
        console.log(`  Response: ${result.fulfillmentText}`);
        if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
        } else {
        console.log(`  No intent matched.`);
        }
    })
    
  

}


exports.dfEventQuery = (request,response,next)=>{

    response.json({'do':'df_event_query'})

}


