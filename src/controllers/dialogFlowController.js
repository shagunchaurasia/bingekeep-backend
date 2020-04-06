const dialogFlow = require('dialogflow');
const config     = require('./../config/keys');
const sessionClient = new dialogFlow.SessionsClient();
const sessionPath = sessionClient.sessionPath(config.googleProjectId, config.dialogFlowSessionId);

exports.dfTextQuery =  async (request,response,next)=>{

    console.log(request.body)

    const requestToSend = {
        session         : sessionPath,
        queryInput      : {
            text        : {
                text            : request.body.text,
                languageCode    : config.dialogFlowSessionLanguageCode
            }
        }
    }

    let responses = await sessionClient.detectIntent(requestToSend)
    response.send(responses[0].queryResult);
    
  

}


exports.dfEventQuery = (request,response,next)=>{

    response.json({'do':'df_event_query'})

}


