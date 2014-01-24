StatusPanel
===========

Custom panels for the StatusBoard

Installation
------------

These provide installation instructions. Note you must have node >= v0.11.9 installed.

### Node

```bash
# Install from nvm https://github.com/creationix/nvm
curl https://raw.github.com/creationix/nvm/master/install.sh | sh
# Install node v0.11
nvm install 0.11
# Set node v0.11 as the default
nvm alias default 0.11
```

You may need to close and reopen your terminal after running those commands

### Statuspanel

```bash
# Fork or clone the repo
git clone git@github.com:pspeter3/statuspanel.git
# Install dependencies
npm install
# Running the scss compiler
grunt sass
# Run tests
npm test
# Run the server
npm start
```

Configuration
-------------

The server configuration reads environment variables and runs on port 3000 by default. You will need to configure the server with the following.

```bash
export AUTH_NAME=name
export AUTH_PASS=pass
export FOURSQUARE_TOKEN=abcdef
export FOURSQUARE_IDS=1,2,3
```
