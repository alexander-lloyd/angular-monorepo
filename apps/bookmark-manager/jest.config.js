module.exports = {
  name: 'bookmark-manager',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/bookmark-manager',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
