#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
node --check js/data.js
node --check js/logic.js
node --check js/save.js
node --check js/audio.js
node --check js/services.js
node --check js/game.js
node tests/logic.test.js
node tests/content.test.js
printf '\nSmoke-Test erfolgreich. Start: python3 -m http.server 8080\n'
