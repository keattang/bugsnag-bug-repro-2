This repository reproduces a bug that occurs when using jest to test a function that requires the bugsnag client.

To reproduce the bug simply run `yarn test`. You should see the error `TypeError: setInterval(...).unref is not a function` when the bugsnag client gets created.

This bug was seen when trying to integrate bugsnag into a react app and so there is a requirement for the jest `testEnvironment` to be the default `jsdom` rather than `node`. Part of the test requires `window` to be defined as a way of simulating this requirement.
