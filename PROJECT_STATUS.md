# PROJECT STATUS

## Gesamtfortschritt

**74 % – spielbarer Browser-Prototyp mit vollständiger Systembreite und datengetriebenem Storyumfang**

## Aktueller Meilenstein

Webgame-Beta: Kernspiel, Meta-Systeme, Offlinebetrieb, Tests und Dokumentation sind vorhanden.

## Fertige Systeme

- responsive HTML/CSS-Oberfläche und Querformat-Touchsteuerung
- Charaktererstellung und lokale Profilvalidierung
- Hauptnavigation und alle zentralen Menüs
- Storykarte mit acht Kapiteln und 32 Levelknoten
- datengetriebene Levelgenerierung mit Plattformen, Gegnern, Checkpoint, Ziel und Sammelobjekten
- Player Controller mit Coyote Time, Jump Buffer und freischaltbaren Bewegungsfähigkeiten
- Fernkampf, acht Waffen, Reichweitenupgrades und Projektilverhalten
- Gegner-, Boss- und Bossphasen-Grundsystem
- Krankenzimmer, Abholen lassen, Tod und Respawn
- Levelnoten, Bestzeiten und Zeugnisdaten
- Shop, Wallet, Kosmetik, Schultaschen, transparente Chancen und Pity-Zähler
- tägliche Belohnungen mit acht Wochenplänen
- Dauernachsitzen mit lokalem Score und Mock-Revive
- Save-Version, Backup, Integritätsprüfung und Transaktions-IDs
- Audio-Synthese und Musik-Loops über Web Audio API
- Offline-PWA-Cache
- Einstellungen, Consent-Schalter und Accessibility-Grundoptionen
- Node-basierte Logik- und Inhaltsvalidierung

## Unvollständige Systeme

- alle 32 Level sind spielbar generiert, aber nicht als 32 individuell handgebaute Langform-Level ausgestaltet
- Bosse verwenden ein gemeinsames Framework und Kapitelparameter statt aller im Master-Prompt beschriebenen Einzelangriffsmuster
- Seilklettern ist als Freischaltung/Trainingseintrag vorhanden, aber noch keine vollständige Seilphysik
- gezielter Touch-Wurf zeigt noch keine Finger-Flugbahn
- Freunde, Cloud Save, globale Ranglisten, Ads, IAP und Analytics sind lokale Mocks
- vollständige Mehrsprachigkeit ist strukturell vorbereitet, aber UI-Texte liegen derzeit direkt auf Deutsch vor
- keine echte Store-/Backend-Veröffentlichung
- keine gesprochenen oder vorgerenderten WAV-Dateien; Audio wird live synthetisiert

## Bekannte Fehler / Einschränkungen

- Browser-Autoplay-Regeln starten Audio erst nach der ersten Benutzereingabe.
- PWA-Installation benötigt HTTPS oder localhost.
- Touchsteuerung unterstützt Skalierung und Transparenz, jedoch noch kein freies Drag-and-Drop-Layout.
- In sehr schmalen Querformatfenstern können Touchbuttons eng stehen.

## Zuletzt ausgeführte Tests

- `node --check` für alle JavaScript-Dateien
- `tests/logic.test.js`
- `tests/content.test.js`
- HTTP-Ressourcenprüfung: alle Kernressourcen Status 200
- Chromium-CDP-Renderprüfung der Startseite: Titel, Menü und Skripte geladen
- automatisierter UI-Fluss: Hauptmenü → Charaktererstellung → Storykarte → Level 1; 32 Levelkarten erkannt, Canvas 960×540, HUD aktiv, keine Laufzeit-Ausnahme

## Nächste konkrete Arbeitsschritte

1. Seilphysik und gezielte Touch-Flugbahn ergänzen.
2. Kapitelbosse mit individuellen Attack-Schedulern und Phasen ausbauen.
3. Generatorlevel durch handgebaute Segmentdaten pro Story-Level ersetzen.
4. vollständige Lokalisierungstabellen und englische Übersetzung erstellen.
5. Produktionsadapter für gewählten Backend-/Ads-/IAP-Anbieter anbinden.
6. reale Geräte-QA auf iOS Safari und Android Chrome durchführen.

## Fehlende externe Zugangsdaten

- Hostingdomain/HTTPS-Deployment
- optionales Backendprojekt und Zugangsdaten
- Ads-Provider-App- und Placement-IDs
- Storekonten und IAP-Produkt-IDs
- Support-E-Mail, Datenschutz-URL und Impressum
- juristische Prüfung für Datenschutz, Minderjährige, Werbung und Käufe
