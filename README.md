## accounts-reddit

Reddit Oauth2 login service for use with Meteor Auth

### Package Dependencies

* accounts-base
* accounts-oauth
* pandawhisperer:reddit-oauth

### Usage

1. `meteor add pandawhisperer:accounts-reddit`
2. Read the 'Integrating with Login Services' section of [Getting Started with Auth](https://github.com/meteor/meteor/wiki/Getting-started-with-Auth) and make sure you set up your config and secret correctly.
3. Call `Meteor.loginWithReddit();`

### Credits

* Shamelessly based on
[@yefim](https://github.com/yefim)'s LinkedIn OAuth2 login service
