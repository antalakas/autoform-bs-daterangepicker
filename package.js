Package.describe({
  name: 'antalakas:autoform-bs-daterangepicker',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Enables usage of bootstrap daterangepicker in autoform',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/antalakas/autoform-bs-daterangepicker',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);

  api.use('standard-app-packages', ['client', 'server']);
  api.use('bootstrap@0.3.1');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');

  api.addFiles('lib/moment.js', 'client');

  api.addFiles('lib/daterangepicker-bs3.css', 'client');
  api.addFiles('lib/daterangepicker-bs2.css', 'client');
  api.addFiles('lib/daterangepicker.js', 'client');

  api.addFiles('autoform-bs-daterangepicker.html', 'client');
  api.addFiles('autoform-bs-daterangepicker.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('antalakas:autoform-bs-daterangepicker');
  api.addFiles('tests/autoform-bs-daterangepicker-tests.js');
});
