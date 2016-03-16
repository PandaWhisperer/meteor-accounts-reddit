Package.describe({
  name: 'pandawhisperer:accounts-reddit',
  version: '0.0.8',
  // Brief, one-line summary of the package.
  summary: 'Accounts service for reddit',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/PandaWhisperer/meteor-accounts-reddit.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('pandawhisperer:reddit-oauth@0.0.8', ['client', 'server']);

  api.addFiles(['reddit_login_button.css'], 'client');

  api.addFiles('reddit.js', ['client', 'server']);
});
