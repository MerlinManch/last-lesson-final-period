# Last Lesson – Final Period · Browser Edition

Eine eigenständige, offlinefähige HTML/CSS/JavaScript-Adaption des Spielkonzepts. Das Projekt verwendet keine externen Assets, Frameworks, CDNs oder geschützten Marken. Grafik und VFX werden zur Laufzeit als Canvas-Pixelart erzeugt; Musik und SFX entstehen prozedural über die Web Audio API.

## Start

```bash
python3 -m http.server 8080
```

Danach `http://localhost:8080` öffnen. Alternativ:

```bash
npm run start
```

Ein lokaler HTTP-Server wird empfohlen, damit Service Worker und Offline-Cache funktionieren. Das Spiel läuft in aktuellen Chromium-, Firefox- und Safari-Versionen. Querformat ist vorgesehen.

## Steuerung

- A/D oder Pfeiltasten: Bewegung
- S/Pfeil unten: Ducken/Rutschen
- Space: Sprung
- Shift: Sprint
- J: Angriff
- K: Luft-Dash
- E: Interaktion
- Escape: Pause
- Auf Mobilgeräten: eingeblendete Touchbuttons

## Enthaltene Systeme

- Hauptmenü, Charaktererstellung, Storykarte, Shop, Zeugnis, Fähigkeiten, Hosentasche und Einstellungen
- 8 Kapitel mit 32 datengetriebenen Leveldefinitionen
- Canvas-Plattformer mit Checkpoints, Gegnern, Sammelobjekten, Bossen und Levelnoten
- Sprint, gezielter Wurf, Doppelsprung, Wandsprung, Rutschen, Seil-/Trainingsfreischaltung, Luft-Dash, Abpraller und Bodenstampfer
- 8 Waffen mit fünf Reichweitenstufen
- Krankenzimmer und „Abholen lassen“
- Dauernachsitzen mit lokalem Leaderboard und Rewarded-Ad-Mock-Revive
- tägliche Belohnungen, Schultaschen, Pity-Zähler, Duplikat-/Währungslogik und freiwillige Werbe-Mocks
- versionierter, signierter lokaler Spielstand mit Backup
- 50 Erfolgsdefinitionen
- PWA-Offline-Cache
- prozedurales Audio ohne Fremdsamples

## Tests

```bash
npm test
npm run validate
# oder
./smoke_test.sh
```

## Projektgrenzen

Dies ist eine umfangreiche Browser-Prototyp-/Webgame-Fassung, kein Unity-Projekt und kein bereits veröffentlichter Store-Build. Die 32 Level teilen eine datengetriebene Generator- und Gameplaybasis; sie besitzen Kapitelpaletten, Inhalte und Bossdaten, aber keine jeweils vollständig handgezeichnete, mehrere Minuten lange Einzelproduktion wie in einem kommerziellen Vollprojekt. Produktions-Backends, echte Ads und IAP sind ausschließlich durch lokale Adapter simuliert.

Siehe `PROJECT_STATUS.md` und `docs/EXTERNAL_SETUP.md`.
