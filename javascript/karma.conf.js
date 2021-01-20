/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (config) => {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-typescript',
      'karma-spec-reporter',
    ],

    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json',
      bundlerOptions:
          {transforms: [require('karma-typescript-es6-transform')()]}
    },

    files: [
      {pattern: 'src/**/*.ts'},
      {pattern: 'test/**/*.ts'},
    ],

    preprocessors: {'**/*.ts': 'karma-typescript'},

    reporters: ['progress', 'spec', 'karma-typescript'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox'],
    singleRun: false,
    concurrency: Infinity
  })
}