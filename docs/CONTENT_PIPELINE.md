# Content-Pipeline

## Level

Kapitel und Levelnamen liegen in `js/data.js`. Die Funktion `createLevel(chapterIndex, levelIndex, seed)` erzeugt deterministische Plattformen, Gegner und Sammelobjekte. Handgebaute Level können dieselbe Rückgabestruktur verwenden.

## Grafik

Canvas-Zeichenfunktionen in `GameEngine.draw*` bilden Pixelart aus Rechtecken, Kreisen und begrenzten Paletten. Kapitelpaletten sind in `data.js` definiert.

## Audio

`js/audio.js` synthetisiert Töne und Loops aus Oszillatoren und Noise-Buffern. Es werden keine Samples oder bekannten Melodien verwendet.

## Validierung

`tests/content.test.js` prüft Kapitel-, Level-, Waffen-, Erfolgs-, Wochenplan- und Lootmengen. `tests/logic.test.js` prüft Kernregeln.
