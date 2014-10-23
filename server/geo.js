Meteor.methods({
  trackLocation: function() {
    // assume this is a legitimate method which will
    // invoke an API call and get more details about the 
    // Geo location from IP
    // We will need this on every page load
    Meteor._sleepForMs(2000);
  }
});