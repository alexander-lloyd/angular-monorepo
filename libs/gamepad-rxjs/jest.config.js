module.exports = {
  name: 'gamepad-rxjs',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/gamepad-rxjs',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
