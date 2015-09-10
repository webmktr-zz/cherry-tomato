Pomodoros = new Mongo.Collection("pomodoros"); //create a collection for Pomodoros if it doesn't already exist.

var ownsDocument = function(userID, doc) {
  return doc && doc.userID === userID;
};

Pomodoros.allow({
  insert: ownsDocument,
  update: ownsDocument,
  remove: ownsDocument,
});