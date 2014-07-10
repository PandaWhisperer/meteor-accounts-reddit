Accounts.addAutopublishFields({
  // publish all fields including access token, which can legitimately
  // be used from the client (if transmitted over ssl or on
  // localhost). https://developer.linkedin.com/documents/authentication
  forLoggedInUser: ['services.reddit'],
  forOtherUsers: ['services.reddit.id']
});
