# Balancing-Guide

Die produktiv genutzten Startwerte stehen derzeit sowohl in `BALANCE_CONFIG.json` als Dokumentationsquelle als auch in den JavaScript-Definitionen. Bei Änderungen müssen beide Stellen synchronisiert und die Tests ausgeführt werden.

## Zielkurven

- frühe Level: Zielzeit 3–5 Minuten
- spätere Level: Zielzeit bis etwa 8–12 Minuten
- Gegnerleben steigt kapitelweise moderat
- Bossleben steigt pro Kapitel, Projektildichte bleibt mobil begrenzt
- Reichweitenupgrades verwenden 8.000 / 18.000 / 35.000 / 60.000 Bücher
- Dauernachsitzen startet mit 120 Pixeln/Sekunde und steigt bis 310

## Noten

Die Note beginnt bei 100 Punkten. Zeitüberschreitung, Tode, verlorene Herzen, Krankenzimmer und Abholen lassen ziehen Punkte ab. Kritzeleien, Kaugummis, Bücher und optionale Ziele geben begrenzte Boni. Die Formel liegt testbar in `LLLogic.gradeLevel`.
