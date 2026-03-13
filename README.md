**Instuktioner för testning av sidan med Cypress:**


*Starta test för lokal server (på port 5050)*:
- Direkt i terminalen: "npm run test:local"
- Genom att öppna Cypress GUI:n: "npm run test:local:gui"

*Starta test för deploy-ad sida (på GitHub Pages)*:
- Direkt i terminalen: "npm run test:deploy"
- Genom attt öppna Cypress GUI:n: "npm run test:deploy:gui"

***

Testar följande:

- Startsidan laddas och innehåller h1 ("deployed page")

- Navigering från startsidan till Challenges och bokning ("navigation")

- Filtertabben för Challenges fungerar ("filter-challenges")

- Visar kort vid matchande sökord eller visar felmeddelande om ingen match ("right-or-wrong")

