# see-eat-sleep

Example of building a larger app with multiple smaller feature apps using npm and browserify.

## Installation

    npm install thlorenz/see-eat-sleep

or

    git clone https://github.com/thlorenz/see-eat-sleep.git

## Initialize and install deps
    
    cd see-eat-sleep && npm install

## Launching app


Launch **main app**:

    npm start

Launch **see feature**:
    
    cd ses-see && npm start

## Running tests
  
Run all tests:

    npm test

Run only **see feature** tests:

    cd ses-see && npm test

## Core app that supports all feature apps

- [core](https://github.com/thlorenz/ses-core)

## Feature apps

All feature apps have the same structure outlined in the [barebones see-eat-sleep feature](https://github.com/thlorenz/ses-barebones).

- [aside](https://github.com/thlorenz/ses-aside)

- [see](https://github.com/thlorenz/ses-see)
- [eat](https://github.com/thlorenz/ses-eat)
- [sleep](https://github.com/thlorenz/ses-sleep)

## Adding more features

The easiest way is to get started with the [barebones see-eat-sleep feature](https://github.com/thlorenz/ses-barebones).
You can read more on how to get started and customize your feature there.

## License

MIT
