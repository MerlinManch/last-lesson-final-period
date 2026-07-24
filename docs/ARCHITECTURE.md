# Architektur

## Schichten

- `js/data.js`: unveränderliche Inhalts- und Balancingdefinitionen
- `js/logic.js`: DOM-unabhängige, testbare Funktionen für Noten, Zufall, Pity, Score und Levelgenerierung
- `js/save.js`: versionierter lokaler Spielstand, Backup, Integrität und idempotente Transaktionen
- `js/audio.js`: prozedurales Audio und Musikzustände
- `js/services.js`: Adapter für Rewarded Ads, IAP, Leaderboards, Freunde, Analytics und Serverzeit
- `js/game.js`: Composition Root, Screen-Navigation, UI-Presenter und Canvas-Runtime

## Zustandsfluss

Das Spiel verwendet eine kontrollierte Screen-Navigation. Beim Start eines Levels wird die Menüoberfläche ausgeblendet und eine `GameEngine`-Instanz erzeugt. Diese besitzt sämtliche Laufzeitdaten eines Runs. Persistente Änderungen laufen über `LLSave`.

## Erweiterung

Neue Kapitel-/Levelmetadaten werden in `data.js` ergänzt. Individuelle Level können die Ausgabe von `LLLogic.createLevel` ersetzen, ohne Save- oder UI-Code zu ändern. Produktionsdienste ersetzen die Mock-Instanzen in `services.js`, während die aufrufenden Systeme unverändert bleiben.
