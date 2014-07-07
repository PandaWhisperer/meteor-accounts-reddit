Package.describe({
  summary: "Accounts service for reddit"
});

Package.on_use(function (api) {
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('reddit-oauth', ['client', 'server']);

  // v0.6.5
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('reddit-oauth', ['client', 'server']);

  api.add_files(['reddit_login_button.css'], 'client');

  api.add_files('reddit_common.js', ['client', 'server']);
  api.add_files('reddit_server.js', 'server');
  api.add_files('reddit_client.js', 'client');
});

