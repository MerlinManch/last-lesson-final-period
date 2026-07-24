# Externe Einrichtung

Das Projekt läuft ohne externe Zugangsdaten vollständig mit lokalen Mock-Diensten.

## Hosting

- Projekt auf einen statischen HTTPS-Host deployen.
- Wurzelpfade beibehalten, damit `service-worker.js` alle Dateien cachen kann.
- Cache-Control für `service-worker.js` kurz halten; versionierte Assets dürfen langfristig gecacht werden.

## Backend

Für Cloud Save, Freunde und globale Ranglisten ist ein eigener Anbieter zu wählen. Erforderlich sind:

- Projekt-/Mandanten-ID
- API-Basis-URL
- öffentliche Clientkonfiguration
- serverseitige Secrets ausschließlich im Backend
- Score-Validierung, Nonce/Run-ID und Plausibilitätsregeln
- Datenschutz- und Löschendpunkte

`js/services.js` enthält die austauschbaren lokalen Adapter.

## Rewarded Ads

- minderjährigengeeigneten Provider und nicht personalisierte Konfiguration prüfen
- App-ID und Placement-IDs nicht im Repository hardcoden
- Reward nur nach bestätigtem Completion-Callback gewähren
- Consentstatus vor Initialisierung berücksichtigen

## IAP

- Apple-/Google-Entwicklerkonten
- Produkt-IDs für Kaugummi- und Kosmetikpakete
- serverseitige Receipt-Validierung
- Restore-Purchases-Fluss
- Storepreise ausschließlich aus Storemetadaten

## Rechtlich notwendig

- Datenschutz-URL
- Impressum
- Support-E-Mail
- Altersfreigabe und Jugendschutzprüfung
- Prüfung von Consent, Analytics, Ads und Käufen für Minderjährige
- Verfahren für Datenexport und Kontolöschung
