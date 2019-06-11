const aws = require('aws-sdk');
const moment = require('moment');

const dbDocClient = new aws.DynamoDB.DocumentClient();
const firehose = new aws.Firehose();

const USER_PROFILE_TABLE = process.env.TABLE_NAME;
const KINESIS_EVENT_STREAM_NAME = process.env.KINESIS_EVENT_STREAM_NAME

const forward_to_firehose = (eventName, user, timeStamp, metaData) => {
  // console.log(`Forwarding event ${eventName} for user ${userId} with metadata ${metaData}`);

  const theEvent = {
    timestamp: timeStamp,
    user: user,
    event: eventName,
    metaData: metaData,
  }
  const record = JSON.stringify(theEvent) + '\n';

  return firehose.putRecord({
    DeliveryStreamName: KINESIS_EVENT_STREAM_NAME,
    Record: {
      Data: record
    }
  }).promise();
};

const update_user_profile = async function(eventName, userId, timeStamp, callback) {
  // console.log(`Processing: ${eventName} for user ${userId}`);
  const putParams = {
    TableName: USER_PROFILE_TABLE,
    Item: {
      userId: userId,
      createdAt: timeStamp
    },
    ConditionExpression: 'attribute_not_exists(userId)'
  };
  try {
    const res = await dbDocClient.put(putParams).promise();
  } catch (err) {}; // conditional put: if there's already a user with the given id, the put throws an exception.
  const updateParams = {
    TableName: USER_PROFILE_TABLE,
    Key: {
      userId: userId
    },
    UpdateExpression: 'add #eventName :inc',
    ExpressionAttributeNames: {
      '#eventName': eventName
    },
    ExpressionAttributeValues: {
      ':inc': 1
    }
  }
  return dbDocClient.update(updateParams).promise();

}

module.exports.handle_incoming_event =  async (event, context, callback) => {
  // parse event data out of the event
  // use async.parallel of zoiets om user profile up te daten en op event op kinesis firehose te zetten
  //console.log('///Incoming event: '+ JSON.stringify(event));
  const eventName = event.body.event;
  const user = event.body.user;
  const userId = user.id;
  const metaData = event.body.metaData;
  const timeStamp = new moment().format('YYYY/MM/DD HH:mm:ss'); // make the time stamp at server side, beter tamperproof, storing

  try {
    const result = await Promise.all([update_user_profile(eventName, userId, timeStamp), forward_to_firehose(eventName, user, timeStamp, metaData)]);
  } catch (err) {
    console.log(err);
  }
  const response = {
    statusCode: 200,
    body: '',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type, ignoreLoadingBar'
    }
  };

  return callback(null, response);


}
