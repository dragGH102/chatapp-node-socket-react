# chatapp-node-socket-react
A Slack-style chat app built on top of ...
- node
- express
- socket.io
- next.js
- react
- eslint
- jest
- font awesome
- and a bunch of others libraries...

Tested on **Chrome 60 (Linux Debian 8)**

## Quirks:
- Server-side rendering by default (thanks to Next.js!)
- BEM conventions for CSS styling
- custom webpack config (allows importing css as modules). See example @ `components/Error`
- chat messages and command validation
- shows when the other user typing
- prevent chatting when app is offline
- Various types of tests written in **Jest**: snapshot, state change (isolate tests - lots of headaches taken out, same result), mocks, wrapper (HOC)
- In general can work with 3+ clients, but some features (e.g. change name) won't as the server is not keeping track of the clients connected
- auto-scroll to bottom
- messages are animated!

## CHAT commands:
(open 2 windows to chat!)

- <message>: send a normal message. You can also includes emoticons by typing `(smile)` and / or `(frown)`. Prefix with `/highlight` to obtain 10% biffer font and background 10% darker. Prefix with `/think` to have the message appear in dark gray.
- `/nick` <name>: show your new name on the other chat
- `/oops` : remove last messages (both chats)
- `/fadelast`: show last message sent with 10% visibility (sender chat only)
- `/countdown <seconds> <valid url>`: to open a window with `<valid url>` after X `<seconds> on the other user's chat

## CLI Commands:
(here I use `yarn` but `npm` should work too)

- yarn run `dev`: run app in `dev` environment. Runs @ `localhost:3000`
- yarn run `build`: build app to run in a `node server` (output: `out/`)
- yarn run `start`: run app in `production` environment (**after** running `build`)
- yarn run `export`: export app for `static hosting` (server part won't work)
- yarn run `test`: to run tests
- yarn run `lint`: to run eslint
- yarn run `lint-fix`: to fix eventual linting errors (relies on eslint capability of doing it!)

