// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.s.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)
