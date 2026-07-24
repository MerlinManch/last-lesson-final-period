# Build- und Deployment-Guide

Das Projekt benötigt keinen Bundler.

## Lokale Validierung

```bash
npm run validate
```

## Lokaler Start

```bash
python3 -m http.server 8080
```

## Release

Den gesamten Projektordner ohne `tests/`, lokale Screenshots und Entwicklungslogs auf einen HTTPS-fähigen statischen Host kopieren. Vor dem Deployment die Cachekennung in `service-worker.js` erhöhen.

## Mobile Verpackung

Optional kann die Site über Capacitor oder eine vergleichbare WebView-Hülle als Store-App verpackt werden. Vorher sind Safe-Area-, Back-Button-, Audio-Fokus-, Datenschutz- und Storekauf-Tests auf echten Geräten erforderlich.
