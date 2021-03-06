const dialogFlow = require("dialogflow");
const config = require("./../config/config");
const { struct } = require("pb-util");

const googleProjectId = config.googleProjectId;
const credentials = {
  client_email: config.googleClientEmail,
  private_key: config.googlePrivateKey,
};

// console.log(credentials);

const sessionClient = new dialogFlow.SessionsClient({
  projectId: googleProjectId,
  credentials: credentials,
});

exports.dfTextQuery = async (request, response, next) => {
  const sessionPath = sessionClient.sessionPath(
    googleProjectId,
    config.dialogFlowSessionId + request.body.chatBotUserId
  );

  console.log(request.body);

  const requestToSend = {
    session: sessionPath,
    queryInput: {
      text: {
        text: request.body.text,
        languageCode: config.dialogFlowSessionLanguageCode,
      },
    },
    queryParams: {
      payload: {
        data: request.body.params,
      },
    },
  };

  let responses = await sessionClient.detectIntent(requestToSend);
  console.log(responses[0].queryResult.fulfillmentMessages);
  response.send(responses[0].queryResult);
};

exports.dfEventQuery = async (request, response, next) => {
  console.log(request.body);
  const sessionPath = sessionClient.sessionPath(
    googleProjectId,
    config.dialogFlowSessionId + request.body.chatBotUserId
  );

  const requestToSend = {
    session: sessionPath,
    queryInput: {
      event: {
        name: request.body.event,
        // parameters      : struct.encode(parameters),
        languageCode: config.dialogFlowSessionLanguageCode,
      },
    },
    queryParams: {
      payload: {
        data: request.body.params,
      },
    },
  };

  let responses = await sessionClient.detectIntent(requestToSend);
  console.log(responses);
  response.send(responses[0].queryResult);
};
