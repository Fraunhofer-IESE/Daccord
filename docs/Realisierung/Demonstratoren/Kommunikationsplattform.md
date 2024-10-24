# Kommunikationsplattform für Unternehmen

<link rel="stylesheet" href="/Daccord/assets/css/slideshow.css">

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

![Use-Case-Diagramm des Datenschutz-Cockpits](<./Kommunikationsplattform/HKBS-I-02.png>)

![Beispiel-Use-Cases des Datenschutz-Cockpits](<./Kommunikationsplattform/HKBS-I-03.png>)

Als wichtigste Akteure für die Anwendungsfälle wurden identifiziert:

- Datennutzer: alle Personen bei der HKBS und anderen Organisationen (z. B. Kunden, Partnerunternehmen, Lieferanten), die personenbezogene Daten verwenden
- Admin: kümmert sich um die Administration des Datenschutz-Cockpits
- Content-Manager: kümmert sich um die inhaltliche Pflege des Datenschutz-Cockpits
- Betroffene: alle Personen bei anderen Organisationen, deren personenbezogene Daten erhoben bzw. verarbeitet werden

![Übersicht: Datenschutz-Cockpit, Organisationen und Akteure](<./Kommunikationsplattform/HKBS-I-01.png>)

Zudem wurde entschieden, welche Betroffenenrechte im Cockpit-Demonstrator umgesetzt werden sollten:

- Datenauskunft: der Betroffene kann sich informieren, welche personenbezogenen Daten bzw. Datenkategorien, von wem und zu welchem Zweck erhoben bzw. verarbeitet werden
- Datenkorrektur: der Betroffene kann falsche/veraltete Daten berichtigen (lassen)
- Datenlöschung: der Betroffene kann nicht mehr benötigte Daten löschen (lassen)
- Datenexport: der Betroffene kann alle personenbezogenen Daten, die ihn selbst betreffen, sowohl in einem menschenlesbaren Format als auch in einem maschinenlesbaren Format exportieren

Im Anschluss an die Konzepterstellung und die Durchführung einer technischen Machbarkeitsstudie erfolgte die technische Implementierung des Demonstrators für das Anwendungsszenario der HKBS. Die Ausarbeitung fand inkrementell statt, Zwischenstände wurden regelmäßig intern und mit den Projektpartnern abgestimmt. Auf Basis des Feedbacks der Zielgruppenvertreter wurden neue Funktionen hinzugefügt, Umstrukturierungen und Umbenennungen vorgenommen und neue Menüpunkte ergänzt.

## Demonstrator des Datenschutz-Cockpits

### Interaktion im Datenschutz-Cockpit (Video)
(Stand: August 2024)

<video src="./Kommunikationsplattform/Daccord-Cockpit_HKBS.mp4" controls="controls" style="max-width: 960px;"></video>

### Benutzeroberfläche des Datenschutz-Cockpits (Slideshow)
(Stand: August 2024)

<div class="slideshow-container">

  <div class="mySlides fade">
    <div class="numbertext">1 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_01_login.JPG" style="width:100%">
    <div class="text">Login-Screen des Datenschutz-Cockpits. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">2 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_02_startseite.JPG" style="width:100%">
    <div class="text">Startseite des Datenschutz-Cockpits. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">3 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_03_glossar.JPG" style="width:100%">
    <div class="text">Datenschutz-Glossar mit allgemeinverständlichen Erklärungen datenschutzrelevanter Begriffe und Verweisen auf relevante Quellen. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">4 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_04_glossareintrag.JPG" style="width:100%">
    <div class="text">Beispieleintrag im Datenschutz-Glossar. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">5 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_05_ds-bei-hkbs.JPG" style="width:100%">
    <div class="text">Übersicht “Datenschutz bei HKBS”. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">6 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_06_richtlinien.JPG" style="width:100%">
    <div class="text">Richtlinien u. ä., die den Umgang mit personenbezogenen Daten im digitalen Ökosystem regeln. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">7 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_07_richtlinien-beispiel.JPG" style="width:100%">
    <div class="text">Beispiel für eine interne Richtlinie. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">8 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_08_vertraege.JPG" style="width:100%">
    <div class="text">Verträge (insbesondere mit externen Datenverarbeitern), die den Umgang mit personenbezogenen Daten im digitalen Ökosystem regeln. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">9 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_09_neuer-vertrag.JPG" style="width:100%">
    <div class="text">Maske zum Anlegen eines neuen Vertrags. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">10 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_10_audits.JPG" style="width:100%">
    <div class="text">Audits/Reviews – Übersicht. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">11 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_11_neues-audit.JPG" style="width:100%">
    <div class="text">Maske zum Dokumentieren eines Datenschutz-Audits. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">12 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_12_schulungen.JPG" style="width:100%">
    <div class="text">Durchgeführte Schulungen zum Umgang mit personenbezogenen Daten im digitalen Ökosystem. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">13 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_13_neue-schulung.JPG" style="width:100%">
    <div class="text">Maske zum Dokumentieren einer Schulung. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">14 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_14_verarbeitungsverzeichnis.JPG" style="width:100%">
    <div class="text">Verarbeitungsverzeichnis – Übersicht. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">15 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_15_verarbeitungsverzeichnis-beispiel.JPG" style="width:100%">
    <div class="text">Beispieleintrag im Verarbeitungsverzeichnis. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">16 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_16_tom.JPG" style="width:100%">
    <div class="text">Verzeichnis der technischen und organisatorischen Maßnahmen (TOM). &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">17 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_17_tom-beispiel.JPG" style="width:100%">
    <div class="text">TOM-Beispieleintrag. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">18 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_18_dsfa.JPG" style="width:100%">
    <div class="text">Verzeichnis der Datenschutz-Folgenabschätzungen (DSFA). &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">19 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_19_neue-dsfa.JPG" style="width:100%">
    <div class="text">Maske zum Dokumentieren einer DSFA. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">20 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_20_datenkategorien.JPG" style="width:100%">
    <div class="text">Datenkategorien mit Beschreibung, Quelle, Zweck und Empfänger. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">21 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_21_dienste-zwecke.JPG" style="width:100%">
    <div class="text">Dienste und Zwecke inkl. Rechtsgrundlagen. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">22 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_22_eigene-daten-aendern.JPG" style="width:100%">
    <div class="text">Übersicht der eigenen personenbezogenen Daten. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">23 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_23_eigene-daten-exportieren.JPG" style="width:100%">
    <div class="text">Datenexport als PDF. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">24 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_24_einwilligungen-anfragen.JPG" style="width:100%">
    <div class="text">Einwilligungen und Anfragen. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">25 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_25_anfrage-beispiel.JPG" style="width:100%">
    <div class="text">Beispielanfrage. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">26 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_26_meldungen.JPG" style="width:100%">
    <div class="text">HKBS-Meldungen zum Datenschutz. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">27 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_27_neue_meldung.JPG" style="width:100%">
    <div class="text">Maske zum Erstellen einer neuen Meldung. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">28 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_28_benutzerverwaltung.JPG" style="width:100%">
    <div class="text">Administrationsoberfläche: Benutzerverwaltung. &copy; HK Business Solutions GmbH</div>
  </div>
  
  <div class="mySlides fade">
    <div class="numbertext">29 / 29</div>
    <img src="./Kommunikationsplattform/HKBS_29_rolle-aendern.JPG" style="width:100%">
    <div class="text">Administrationsoberfläche: Rollenzuweisungen. &copy; HK Business Solutions GmbH</div>
  </div>

  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
  <span class="dot" onclick="currentSlide(4)"></span>
  <span class="dot" onclick="currentSlide(5)"></span>
  <span class="dot" onclick="currentSlide(6)"></span>
  <span class="dot" onclick="currentSlide(7)"></span>
  <span class="dot" onclick="currentSlide(8)"></span>
  <span class="dot" onclick="currentSlide(9)"></span>
  <span class="dot" onclick="currentSlide(10)"></span>
  <span class="dot" onclick="currentSlide(11)"></span>
  <span class="dot" onclick="currentSlide(12)"></span>
  <span class="dot" onclick="currentSlide(13)"></span>
  <span class="dot" onclick="currentSlide(14)"></span>
  <span class="dot" onclick="currentSlide(15)"></span>
  <span class="dot" onclick="currentSlide(16)"></span>
  <span class="dot" onclick="currentSlide(17)"></span>
  <span class="dot" onclick="currentSlide(18)"></span>
  <span class="dot" onclick="currentSlide(19)"></span>
  <span class="dot" onclick="currentSlide(20)"></span>
  <span class="dot" onclick="currentSlide(21)"></span>
  <span class="dot" onclick="currentSlide(22)"></span>
  <span class="dot" onclick="currentSlide(23)"></span>
  <span class="dot" onclick="currentSlide(24)"></span>
  <span class="dot" onclick="currentSlide(25)"></span>
  <span class="dot" onclick="currentSlide(26)"></span>
  <span class="dot" onclick="currentSlide(27)"></span>
  <span class="dot" onclick="currentSlide(28)"></span>
  <span class="dot" onclick="currentSlide(29)"></span>
</div>


<script src="/Daccord/assets/scripts/slideshow.js"></script>


| [![](/Daccord/assets/images/backward-solid.svg) Digitale Gesundheitsplattform](<Digitale Gesundheitsplattform>) | [Bewertung ![](/Daccord/assets/images/forward-solid.svg)](../Bewertung) |

****
