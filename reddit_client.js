Meteor.loginWithReddit = function(options, callback) {
    // support a callback without options
    if (!callback && typeof options === "function") {
        callback = options;
        options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    RedditOauth.requestCredential(options, credentialRequestCompleteCallback);
};
