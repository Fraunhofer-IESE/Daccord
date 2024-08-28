# Kommunikationplattform für Unternehmen

Bei der elektronischen Kommunikation und Zusammenarbeit von IT-Unternehmen mit Partnern, Kunden und Lieferanten werden in der Regel intensiv personenbezogene Daten ausgetauscht, an Dritte weitergegeben werden oder bei Cloud-Diensten gespeichert. Für die Betroffenen, z. B. Mitarbeiter in den beteiligten Unternehmen, ist dies oft nicht transparent und sie haben keine Möglichkeit, steuernd in die Datenverarbeitung einzugreifen.

Ziel dieses Anwendungsbeispiels war es, die D’accord-Konzepte und die adaptive Werkzeugsammlung in dem konkreten Unternehmenskontext der HK Business Solutions zu erproben. Während der gesamten Umsetzungskette wurde mit Zielgruppenvertretern aus Kunden- und Partnerunternehmen zusammengearbeitet, die sich als assoziierte Partner am D’accord-Projekt beteiligten.

## Rahmenbedingungen

- Umsetzung des Datenschutz-Cockpits in Form einer Internetanwendung
- Einsatz etablierter, verbreiteter Web-Technologien und Werkzeuge, wie sie von der HKBS auch bei der Softwareentwicklung in Kundenprojekten bzw. internen Projekten genutzt werden
  - C# – objektorientierte Programmiersprache
  - ASP.NET – Framework zur Entwicklung von Webanwendungen
  - HTML, CSS, JavaScript – Entwicklung webbasierter Benutzeroberflächen
  - MS Visual Studio – Entwicklungsumgebung
  - Team Foundation Server – Quellcodeverwaltung, Versionierung
  - MS SQL Management Studio – Datenbank-Verwaltung
- Einbindung von Zielgruppenvertretern während der gesamten Umsetzungskette (Ermittlung von Anforderungen an ein Datenschutz-Cockpit, Feedback zu Zwischenergebnissen, abschließende Evaluation des funktionsfähigen Demonstrators)

## Ablauf

Im Rahmen der Anforderungserhebung an das Datenschutz-Cockpit wurden bei der HK Business Solutions interne Workshops durchgeführt. Anschließend wurden Experteninterviews mit Vertretern aus vier Kundenunternehmen geführt. Auf diese Weise wurden insgesamt 50 Anwendungsfälle identifiziert (siehe Beispiele in den Abbildungen), die den Funktionsumfang definierten:

![Use-Case-Diagramm des Datenschutz-Cockpits](<HKBS-I-02.png>)

![Beispiel-Use-Cases des Datenschutz-Cockpits](<HKBS-I-03.png>)

Als wichtigste Akteure für die Anwendungsfälle wurden identifiziert:

- Datennutzer: alle Personen bei der HKBS und anderen Organisationen (z. B. Kunden, Partnerunternehmen, Lieferanten), die personenbezogene Daten verwenden
- Admin: kümmert sich um die Administration des Datenschutz-Cockpits
- Content-Manager: kümmert sich um die inhaltliche Pflege des Datenschutz-Cockpits
- Betroffene: alle Personen bei anderen Organisationen, deren personenbezogene Daten erhoben bzw. verarbeitet werden

![Übersicht: Datenschutz-Cockpit, Organisationen und Akteure](<HKBS-I-01.png>)

Zudem wurde entschieden, welche Betroffenenrechte im Cockpit-Demonstrator umgesetzt werden sollten:

- Datenauskunft: der Betroffene kann sich informieren, welche personenbezogenen Daten bzw. Datenkategorien, von wem und zu welchem Zweck erhoben bzw. verarbeitet werden
- Datenkorrektur: der Betroffene kann falsche/veraltete Daten berichtigen (lassen)
- Datenlöschung: der Betroffene kann nicht mehr benötigte Daten löschen (lassen)
- Datenexport: der Betroffene kann alle personenbezogenen Daten, die ihn selbst betreffen, sowohl in einem menschenlesbaren Format als auch in einem maschinenlesbaren Format exportieren

Im Anschluss an die Konzepterstellung und die Durchführung einer technischen Machbarkeitsstudie erfolgte die technische Implementierung des Demonstrators für das Anwendungsszenario der HKBS. Die Ausarbeitung fand inkrementell statt, Zwischenstände wurden regelmäßig intern und mit den Projektpartnern abgestimmt. Auf Basis des Feedbacks der Zielgruppenvertreter wurden neue Funktionen hinzugefügt, Umstrukturierungen und Umbenennungen vorgenommen und neue Menüpunkte ergänzt.

## Demonstrator des Datenschutz-Cockpits


<video src="Daccord-Cockpit_HKBS.mp4" controls="controls" style="max-width: 960px;"></video>
(Stand: August 2024)

### Login-Screen und Startseite des Datenschutz-Cockpits

![Login-Screen](<HKBS_01_login.JPG>)

![Cockpit-Startseite](<HKBS_02_startseite.JPG>)

### Datenschutz-Glossar und Beispieleintrag
allgemeinverständliche Erklärungen datenschutzrelevanter Begriffe und Verweise auf relevante Quellen

![Datenschutz-Glossar](<HKBS_03_glossar.JPG>)

![Beispieleintrag](<HKBS_04_glossareintrag.JPG>)

### Übersicht "Datenschutz bei HKBS"

![Datenschutz bei HKBS](<HKBS_05_ds-bei-hkbs.JPG>)

### Richtlinien und Beispiel
interne Richtlinien u. ä., die den Umgang mit personenbezogenen Daten im digitalen Ökosystem regeln

![Richtlinien](<HKBS_06_richtlinien.JPG>)

![Beispielrichtlinie](<HKBS_07_richtlinien-beispiel.JPG>)

### Verträge und Maske zum Anlegen eines neuen Vertrags
Verträge (insbesondere mit externen Datenverarbeitern), die den Umgang mit personenbezogenen Daten im digitalen Ökosystem regeln

![Verträge](<HKBS_08_vertraege.JPG>)

![Maske zum Anlegen eines neuen Vertrags](<HKBS_09_neuer-vertrag.JPG>)

### Audits/Reviews und Maske zum Dokumentieren eines Datenschutz-Audits

![Audits/Reviews](<HKBS_10_audits.JPG>)

![Maske zum Dokumentieren eines Audits](<HKBS_11_neues-audit.JPG>)

### Schulungen und Maske zum Dokumentieren einer Schulung
durchgeführte Schulungen zum Umgang mit personenbezogenen Daten im digitalen Ökosystem

![Schulungen](<HKBS_12_schulungen.JPG>)

![Maske zum Dokumentieren einer Schulung](<HKBS_13_neue-schulung.JPG>)

### Verarbeitungsverzeichnis und Beispieleintrag

![Verarbeitungsverzeichnis](<HKBS_14_verarbeitungsverzeichnis.JPG>)

![Beispieleintrag](<HKBS_15_verarbeitungsverzeichnis-beispiel.JPG>)

### Verzeichnis der technischen und organisatorischen Maßnahmen, Beispieleintrag

![Technische und organisatorische Maßnahmen](<HKBS_16_tom.JPG>)

![TOM-Beispieleintrag](<HKBS_17_tom-beispiel.JPG>)

### Verzeichnis der Datenschutz-Folgenabschätzungen und Maske zum Dokumentieren einer DSFA

![Verzeichnis der Datenschutz-Folgenabschätzungen](<HKBS_18_dsfa.JPG>)

![Maske zum Dokumentieren einer DSFA](<HKBS_19_neue-dsfa.JPG>)

### Übersichten der Datenkategorien, Dienste und Zwecke
Datenkategorien mit Beschreibung, Quelle, Zweck, Empfänger; Dienste und Zwecke inkl. Rechtsgrundlagen

![Übersicht der Datenkategorien](<HKBS_20_datenkategorien.JPG>)

![Übersicht der Dienste und Zwecke](<HKBS_21_dienste-zwecke.JPG>)

### Übersicht der eigenen personenbezogenen Daten, Datenexport (als PDF)

![Übersicht der eigenen personenbezogenen Daten](<HKBS_22_eigene-daten-aendern.JPG>)

![Datenexport](<HKBS_23_eigene-daten-exportieren.JPG>)

### Einwilligungen und Anfragen, Beispielanfrage

![Einwilligungen und Anfragen](<HKBS_24_einwilligungen-anfragen.JPG>)

![Beispielanfrage](<HKBS_25_anfrage-beispiel.JPG>)

### HKBS-Meldungen zum Datenschutz, Maske zum Erstellen einer neuen Meldung

![HKBS-Meldungen zum Datenschutz](<HKBS_26_meldungen.JPG>)

![Maske zum Erstellen einer neuen Meldung](<HKBS_27_neue_meldung.JPG>)

### Administrationsoberfläche: Benutzerverwaltung und Rollenzuweisungen

![Administrationsoberfläche: Benutzerverwaltung](<HKBS_28_benutzerverwaltung.JPG>)

![Administrationsoberfläche: Rollenzuweisungen](<HKBS_29_rolle-aendern.JPG>)
