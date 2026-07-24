# Designentscheidungen

1. **Web statt Unity:** Die Anforderung wurde als statische HTML/CSS/JavaScript-Site umgesetzt. Canvas ersetzt Sprite-/Tilemap-Rendering.
2. **Originale Laufzeitgrafik:** Sämtliche Spielfiguren, Gegner, Props und VFX bestehen aus eigenen Pixel-Shapes. Dadurch gibt es keine Fremdassets oder Lizenzabhängigkeiten.
3. **Keine Pflicht-Onlineverbindung:** Story, Training, Shop-Mock, Hosentasche, Zeugnis und Endlosmodus funktionieren lokal.
4. **Datengetriebener Umfang:** 32 Level werden aus validierten Segmentmustern erzeugt. Dies liefert den vollständigen Navigations- und Progressionsumfang bei beherrschbarer Webprojektgröße.
5. **Faire Monetarisierungs-Mocks:** Ads sind ausschließlich freiwillig. IAP verändert keine Kampfstärke. Schultaschen können nicht mit Echtgeld gekauft werden.
6. **Jugendschutz:** Kein Chat, keine Kontaktangaben in Namen, keine realen Marken, kein Blut und keine identifizierbaren realen Personen.
7. **Save-Sicherheit:** Lokale Verschleierung/Signatur verhindert nur triviale Änderungen und wird nicht als manipulationssicher bezeichnet.
