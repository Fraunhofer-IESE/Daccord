# Anwendungsfälle

Ein Anwendungsfall ist eine Aktivität eines Anwenders, welche das Datenschutz-Cockpit involviert.

## Allgemeine Anwendungsfälle

### AF1 - Aufgaben ansehen und bearbeiten

Der Cockpit-Nutzer verschafft sich einen Überblick über seine aktuellen Aufgaben und Informationen, damit er diese bearbeiten kann.

#### Beteiligte

[STH1. Cockpit-Nutzer](./Zielgruppen/Stakeholder#cockpit-nutzer-sth1)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

#### Ablauf
1. Der Cockpit-Nutzer klickt auf "Übersicht" oder "Meine Aufgaben".
2. Das Datenschutz-Cockpit blendet die entsprechende Seite ein, in der alle offenen Aufgaben, z. B. benötigte Zustimmungen (Betroffener) oder zu bearbeitende Auskunftsersuchen (Datennutzer), hervorgehoben werden.
3. Der Cockpit-Nutzer wählt eine Aufgabe zur Bearbeitung aus.
4. Das Datenschutz-Cockpit zeigt ein Formular entsprechend der Aufgabenart an.
5. Der Cockpit-Nutzer bearbeitet das Formular und schließt die Aufgabe ab (Zustand: abgeschlossen).

#### Nachbedingungen

- Die Aufgabe ist abgeschlossen und verschwindet aus dem Cockpit (d. h., sie wird versteckt).

#### Anmerkungen

Zustände einer Aufgabe können (mindestens) sein: Neu, In Bearbeitung, Abgeschlossen.

#### Alternativen

- Der Cockpit-Nutzer wird über neue Aufgaben per Benachrichtigung (siehe AF3) informiert und gelangt per Link direkt zur Aufgabe.

- Der Nutzer kann die Aufgabe (weiter) bearbeiten ohne sie abzuschließen.

#### Anwendungsbeispiele

Airbnb:

- Im Datenschutz-Cockpit des Anbieters erscheint ein Auskunftsersuch eines Reisenden.

- Der Anbieter stellt die Daten zusammen, lädt sie in der Aufgabe hoch und markiert diese als abgeschlossen.

SLR:

- Im Datenschutz-Cockpit eines Lösungsanbieters erscheint ein Auskunftsersuch eines Bürgers.

- Der Lösungsanbieter stellt die Daten zusammen, lädt sie in der Aufgabe hoch und markiert diese als abgeschlossen.

HKBS:

- Im Datenschutz-Cockpit des Admins sind die Benutzer-Datensätze, die Änderungs- bzw. Löschvorschläge der Betroffenen enthalten, markiert, so dass der Admin diese leicht identifizieren und abarbeiten kann.

#### Phasen

- 3.1 Daten bearbeiten
- 3.2 Daten lesen
- 3.3 Daten löschen
- 4. Berechtigungen
- 5. Benachrichtungen
- 6. Vorfälle

### AF2 - Datenschutz-Cockpit durchsuchen

Der Cockpit-Nutzer durchsucht das Datenschutz-Cockpit nach Daten, Funktionen oder Datenschutz-Informationen, damit er diese prüfen oder verwenden kann.

#### Beteiligte

[STH1. Cockpit-Nutzer](./Zielgruppen/Stakeholder#cockpit-nutzer-sth1)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

#### Ablauf
1. Der Cockpit-Nutzer gibt Suchbegriff in das Suchfeld ein.
2. Das Datenschutz-Cockpit durchsucht folgende Bereiche:

    a. Daten (z. B. Suche nach "Adresse")

    b. Funktionen des Datenschutz-Cockpits (z. B. Suche nach "Korrektur")

    c. Datenschutz-Informationen (z. B. Suche nach "Datenschutzerklärung")
3. Das Datenschutz-Cockpit zeigt die Ergebnisse an.
4. Der Cockpit-Nutzer klickt auf die passenden Ergebnisse und wird zur entsprechenden Seite des Datenschutz-Cockpits geleitet.

#### Nachbedingungen

- Alle passenden Informationen und Funktionen werden als Ergebnisliste angezeigt.

#### Alternativen

- Der Cockpit-Nutzer navigiert durch das Datenschutz-Cockpit.

- Der Cockpit-Nutzer liest die Dokumentationen des Datenschutz-Cockpits (FAQ, Benutzerhandbuch).

- Der Cockpit-Nutzer nutzt die Suchfunktion des Browsers auf bestimmten Seiten.

- Der Cockpit-Nutzer sucht über eine externe Suchmaschine (nur öffentliche Bereiche und Datenschutzinformationen).

#### Anwendungsbeispiele

Airbnb:

- Aktuell setzt Airbnb eine Suchfunktion auf manchen Seiten um (z. B. im Hilfebereich).

- Man könnte die Suchfunktion auf den gesamten Bereich "Konto" ausweiten.

SLR:

- In der aktuellen Form der Huhu-Plattform sollte sich die Suchfunktion mindestens auf die gebuchten Lösungen, den Hilfebereich und die Datenschutzerklärung erstrecken.

HKBS:

- Es gibt im Datenschutz-Cockpit eine Volltextsuche, die die gesamten Inhalte durchsucht.

#### Phase

3.2 - Daten lesen
### AF3 - Benachrichtigungen konfigurieren

Der Cockpit-Nutzer konfiguriert Benachrichtigungen, damit er über genau die Ereignisse informiert wird, die für ihn relevant sind.

#### Beteiligte

[STH1. Cockpit-Nutzer](./Zielgruppen/Stakeholder#cockpit-nutzer-sth1)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

#### Ablauf
1. Der Cockpit-Nutzer ruft die Benachrichtigungseinstellungen in seinem Konto auf.
2. Das Datenschutz-Cockpit zeigt eine Übersicht über potentiell relevante Ereignisse und die aktuell aktivierten Benachrichtigungskanäle.
3. Der Cockpit-Nutzer legt fest, auf welchem Wege, in welcher Häufigkeit und zu welchen Zeiten er über welches Ereignis benachrichtigt werden will.
4. Das Datenschutz-Cockpit speichert die Einstellungen.

#### Nachbedingungen

- Das Datenschutz-Cockpit versendet basierend auf den Einstellungen Benachrichtigungen.

#### Anmerkungen

Mögliche Benachrichtigungskanäle sind: Im Datenschutz-Cockpit als Popup, E-Mail, SMS etc.

#### Alternativen

- Der Nutzer kann über einen Link in der Benachrichtigung diese direkt abbestellen.

#### Anwendungsbeispiele

Airbnb:

- Unter den Account-Einstellungen befinden sich auch die Benachrichtigungseinstellungen.

- Details:[Verwalte deine Benachrichtigungen – Airbnb-Hilfecenter](https://www.airbnb.de/help/article/14)

SLR:

- Der Bürger kann in seinem Konto zentral die Benachrichtigungen verwalten.

- Es kann sich anbieten, dass einzelne Lösungen die Benachrichtigungseinstellungen übernehmen oder dass diese einen zentralen Benachrichtigungsdienst der Plattform nutzen.

#### Phase

5 - Benachrichtigungen

## Betreibersicht

### AF4 - Verdachtsfall prüfen

Der Betreiber prüft einen Verdachtsfall eines Betroffenen, damit Datenschutzvorfälle erkannt und aufgeklärt werden.

#### Beteiligte

[STH5. Betreiber](./Zielgruppen/Stakeholder#betreiber-sth5)

#### Vorbedingung

- Ein Betroffener hat einen Verdachtsfall gemeldet (AF43).

- Der Cockpit-Nutzer ist eingeloggt.

- Der Cockpit-Nutzer hat die Rolle "Betreiber".

#### Ablauf
1. Das Datenschutz-Cockpit informiert den Betreiber über den Verdachtsfall.
2. Der Betreiber navigiert zum gemeldeten Verdachtsfall.
3. Das Datenschutz-Cockpit zeigt die Details zum Verdachtsfall an.
4. Der Betreiber:

    a. prüft den Verdachtsfall und klärt ihn ggf. mit dem Betroffenen ab;

    b. meldet ggf. einen Datenschutzvorfall (siehe AF25) oder stimmt mit dem Betroffenen ab, dass er dies macht;

    c. dokumentiert das Ergebnis der Prüfung im Datenschutz-Cockpit.
5. Das Datenschutz-Cockpit informiert den Betroffenen, der den Verdachtsfall gemeldet hat, über das Ergebnis.

#### Nachbedingungen

- Der Verdachtsfall ist beantwortet.

- Systemkorrekturen sind ggf. eingeleitet.

- Datenschutzvorfälle sind ggf. gemeldet (AF25).

#### Anwendungsbeispiele

Airbnb:

- Airbnb klärt den Verdachtsfall (ggf. mit den Anbietern) und leitet ggf. entsprechende Schritte ein.

SLR:

- SLR klärt den Verdachtsfall (ggf. mit den Lösungsanbietern) und leitet ggf. entsprechende Schritte ein.

#### Phase

6 - Vorfälle
### AF5 - Taxonomie definieren

Der Betreiber definiert die Taxonomie des Datenschutz-Cockpits, damit Zusammenhänge in der Domäne abgebildet werden können.

#### Beteiligte

[STH5. Betreiber](./Zielgruppen/Stakeholder#betreiber-sth5)

#### Vorbedingung

- Die Interaktionen der Akteure innerhalb der Domäne sind definiert (Use Cases o. Ä. liegen vor).

- Die Domäne ist beschrieben.

- Die Grenzen der Plattform sind klar definiert (z. B. nur 90 % der Domäne sollen abgebildet werden).

#### Ablauf
1. Der Betreiber öffnet die Einrichtungsseite des Datenschutz-Cockpits.
2. Das Datenschutz-Cockpit zeigt Eingabemasken zur Beschreibung der Taxonomie. Diese umfassen unter anderem:

    a. Datenkategorien (wie z. B. Stammdaten), inkl. Datenfeldern und Beziehungen,

    b. Verarbeitungszwecke,

    c. Datennutzerkategorien und

    d. Verarbeitungsarten.
3. Der Betreiber füllt die Eingabemasken aus.
4. Das Datenschutz-Cockpit speichert die Taxonomie als Grundlage für die anderen Anwendungsfälle.

#### Nachbedingungen

- Eine einheitliche und verständliche Terminologie für alle Akteure liegt vor.

- Die Plattform kann von allen Akteuren genutzt werden.

#### Anwendungsbeispiele

Airbnb:

- Der Kontext der Gütervermittlung in Form von Übernachtungen ist beschrieben.

- Die Rollen (v. a. des Güteranbieters und Güterkonsumenten) sind voneinander abgegrenzt.

- Die Datenkategorien und Datenarten sind definiert: benötigte Stammdaten der Plattform-Nutzer, Daten zur Beschreibung eines Guts (d.h. einer Übernachtungsmöglichkeit), Transaktionsdaten (Daten der Buchung eines Guts).

- Mögliche Besonderheiten: offizielle Papiere als Stammdaten (z. B. Personalausweis), bildlastige Beschreibung von Gütern, Transaktionsdaten umfassen sowohl Vergangenheit, Gegenwart als auch Zukunft.

SLR:

- 

- Die Gütervermittlung in Form von abonnierbaren Diensten ist beschrieben.

- Die Rollen von Güteranbieter, Güterkonsument (Landkreis) und Nutzer eines Guts (Endnutzer) sind voneinander abgegrenzt.

- Die Datenkategorien und Datenarten sind definiert: Daten zur Beschreibung eines Guts (also eines Dienstes), Abonnement- und Nutzungsmöglichkeiten eines Guts, Daten zum Buchen eines Guts (Zahlungsarten und -vorgänge),...

Weitere Umsetzungsmöglichkeiten:

- Man kann sich auf generische Datenkategorien, Verarbeitungszwecke, Datennutzerkategorien und Verarbeitungsarten beschränken, was jedoch ggf. die Verständlichkeit und Aussagekraft anderer Anwendungsfälle negativ beeinflusst.

#### Phase

1 - Setup

## Betroffenensicht

### AF6 - Daten berichtigen

Der Betroffene berichtigt Daten, damit deren Aktualität und Korrektheit gewährleistet ist.

#### Beteiligte

[STH4. Betroffener](./Zielgruppen/Stakeholder#betroffener-sth4)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

- Es werden Daten über den Betroffenen von Datennutzern gespeichert.

#### Ablauf
1. Der Betroffene stellt fest, dass ein Datum nicht korrekt oder nicht aktuell ist (z. B. AF16).
2. Das Datenschutz-Cockpit bietet die Möglichkeit zum Ändern.
3. Der Betroffene gibt den neuen Wert ein.
4. Das Datenschutz-Cockpit / die Plattform validiert den neuen Wert und bittet den Betroffenen um eine Bestätigung.
5. Der Betroffene bestätigt die Änderung.
6. Das Datenschutz-Cockpit führt die Änderung durch.

#### Nachbedingungen

- Die geänderten Daten sind umgehend in jeder relevanten Ansicht sichtbar.

#### Anmerkungen

Dieser Anwendungsfall ist Teil des Rechts auf Berichtigung (DSGVO Art. 16).

#### Alternativen

- Der Betroffene kann die Berichtigung der Daten beantragen, falls er sie nicht direkt selbst ändern kann (AF3)

- Schlägt eine Validierung fehl (z. B. aufgrund falscher Daten), wird der Nutzer gebeten korrekte Daten einzugeben.

- Kann eine Validierung nicht durchgeführt werden (z. B. da ein Dienst nicht erreichbar ist), wird der Anwendungsfall abgebrochen ODER der Nutzer muss stattdessen AF3 durchführen.

- Ist die Änderung nicht erfolgreich (z. B., weil ein Dienst sie ablehnt oder aus technischen Gründen), muss der Betroffene darauf hingewiesen werden.

#### Anwendungsbeispiele

Airbnb:

- Der Nutzer ändert Daten in seinem Konto (z. B. E-Mail-Adresse).

SLR:

- Der Nutzer ändert Daten in seinem Konto (z. B. E-Mail-Adresse).

HKBS:

- Um Missbrauch vorzubeugen, können die Betroffenen ihre Daten (z. B. E-Mail-Adresse, Postanschrift) im Datenschutz-Cockpit nicht selbst ändern. Sie können einen entsprechenden Änderungsvorschlag hinterlegen, inkl. Rückfrage/Kommentar-Funktion.

#### Phase

3.1 - Daten bearbeiten
### AF7 - Berichtigungsantrag stellen

Der Betroffene stößt die Berichtigung seiner Daten an, damit deren Aktualität und Korrektheit gewährleistet ist.

#### Beteiligte

[STH4. Betroffener](./Zielgruppen/Stakeholder#betroffener-sth4)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

- Es werden Daten über den Betroffenen von Datennutzern gespeichert.

- Betroffener kann das Datum nicht selbst ändern (AF6).

#### Ablauf
1. Der Nutzer stellt fest, dass ein Datum nicht korrekt oder nicht aktuell ist (z. B. AF8).
2. Das Datenschutz-Cockpit bietet die Möglichkeit, eine Änderung der Daten zu beantragen.
3. Der Betroffene gibt den neuen Wert ein.
4. Das Datenschutz-Cockpit validiert, falls möglich, den neuen Wert und bittet den Betroffenen um eine Bestätigung.
5. Der Betroffene bestätigt die Änderung und sendet damit den Änderungsantrag ab.
6. Das Datenschutz-Cockpit:

    a. sendet dem Betroffenen eine Mitteilung über das Absenden des Änderungsantrags;

    b. sendet dem/den Datennutzern den Änderungsantrag.

#### Nachbedingungen

- Der Berichtigungsantrag wurde gestellt und liegt dem Verantwortlichen zur Bearbeitung vor (siehe AF23).

#### Anmerkungen

Dieser Anwendungsfall ist Teil des Rechts auf Berichtigung (DSGVO Art. 16).  
  
Verantwortliche können die Plattform, aber auch Güteranbieter und Güterkonsumenten sein.

#### Alternativen

- Der Nutzer kann Daten direkt ändern (AF6).

- Schlägt eine Validierung fehl (z. B. aufgrund falscher Daten), wird der Nutzer gebeten korrekte Daten einzugeben.

- Kann eine Validierung nicht durchgeführt werden (z. B. da ein Dienst nicht erreichbar ist), wird der Anwendungsfall abgebrochen ODER der Nutzer muss stattdessen AF7 durchführen.

- Ist die Änderung nicht erfolgreich (z. B. weil ein Dienst sie ablehnt oder aus technischen Gründen) muss der Nutzer darauf hingewiesen werden.

#### Anwendungsbeispiele

Airbnb:

- Bei Airbnb können alle Daten im Konto geändert werden. Ein Berichtigungsantrag ist also nicht notwendig.

SLR:

- Bei manchen Lösungen könnte die E-Mail-Adresse des Betroffenen ein eigentlich unveränderlicher Identifikator sein.

- Ändert der Nutzer seine E-Mail-Adresse, kann dies dazu führen, dass ein manueller Prozess bei solchen Lösungen angestoßen wird.

HKBS:

- Um Missbrauch vorzubeugen, können die Betroffenen ihre Daten (z. B. E-Mail-Adresse, Postanschrift) im Datenschutz-Cockpit nicht selbst ändern. Sie können einen entsprechenden Änderungsvorschlag hinterlegen, inkl. Rückfrage/Kommentar-Funktion.

#### Phase

3.1 - Daten bearbeiten
### AF8 - Überblick über Daten verschaffen

Der Betroffene sieht die Datenübersicht an, damit er weiß, welche Daten von ihm aktuell gespeichert sind bzw. verarbeitet werden.

#### Beteiligte

[STH4. Betroffener](./Zielgruppen/Stakeholder#betroffener-sth4)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

#### Ablauf
1. Der Betroffene ruft eine Übersicht mit allen Datenkategorien bzw. mit seinen personenbezogenen Daten auf oder gelangt über die Suchfunktion (AF17) zu den Daten.
2. Das Datenschutz-Cockpit zeigt die Kategorien von Daten an, die auf der Plattform und bei den Datennutzern verarbeitet werden.

#### Nachbedingungen

- keine

#### Alternativen

- Bei auf der Plattform gespeicherten Daten kann der Betroffene sich zusätzlich zu den Kategorien die Daten selbst ansehen (AF18) und ggf. direkt bearbeiten (AF2).

#### Anwendungsbeispiele

Airbnb:

- Unter "Konto" kann sich der Betroffene seine Daten, gegliedert nach Kategorien bzw. Funktionen ansehen.

- Zusätzlich könnte unter dem Punkt "Datenschutz" eine Übersicht über alle Kategorien zentral einsehbar sein.

SLR:

- Daten können unter dem "HuhuKonto" unter "Profil" / "Organisationen" eingesehen werden.

HKBS:

- Unter "Daten bearbeiten" können Betroffene ein PDF generieren (Button "Daten exportieren"), das alle aktuellen personenbezogenen Daten (Adressdaten usw.) sowie Informationen zu erteilten und nicht erteilten Einwilligungen enthält.

- In den Rubriken "Datenkategorien" und "Dienste und Zwecke" können Betroffene einsehen, welche Daten die HKBS generell verarbeitet.

#### Phase

3.2 - Daten lesen
### AF9 - Daten exportieren

Der Betroffene stößt den Export seiner personenbezogenen Daten an, damit er diese sichern oder übertragen kann.

#### Beteiligte

[STH4. Betroffener](./Zielgruppen/Stakeholder#betroffener-sth4)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

#### Ablauf
1. Der Betroffene ruft die Export-Funktion auf.
2. Das Datenschutz-Cockpit zeigt ein Formular, mit Auswahlmöglichkeiten zum Scope des Exports (Datennutzer, Datenkategorien) und Wunschformat (maschinenlesbare und/oder menschenlesbare Formate).
3. Der Betroffene füllt das Formular aus und drückt auf den "Export"-Button.
4. Das Datenschutz-Cockpit:

    a. stellt Daten aus der Plattform zusammen (führt zu AF48);

    b. fragt den Export von Daten bei anderen Datennutzern (z. B. Güteranbieter) an;

    c. blendet einen "Download"-Button ein, der von ausgegraut zu farbig wechselt, sobald der Export zur Verfügung steht.
5. Der Betroffene klickt auf den "Download"-Button, um den Export herunterzuladen.

#### Nachbedingungen

- Der Betroffene hat seine Daten erhalten.

#### Anmerkungen

Dieser Anwendungsfall fasst das Auskunftsrecht (Art. 15) und das Recht auf Datenübertragbarkeit (Art. 20) zusammen.

#### Alternativen

Sollte der Download nicht direkt möglich sein, da die Zusammenstellung der Daten länger als ca. 30 Sekunden dauert, und somit der "Download"-Button länger ausgegraut bleiben, so handelt es sich bei diesem Anwendungsfall um eine Art "Antrag" für den Export. In diesem Fall läuft der Anwendungsfall ab Schritt 4.c wie folgt ab:

4. (d) Die Plattform informiert den Betroffenen, dass er per E-Mail benachrichtigt wird, sobald der Export verfügbar ist.

4. (e) Die Plattform sendet dem Betroffenen eine E-Mail mit der Information, dass der Export zur Verfügung steht, mit einem Link zur Plattform.

5. Der Betroffene klickt auf den Link in der E-Mail.

6. Die Plattform blendet die Maske mit "Download"-Button ein.

7. Der Betroffene klickt auf den "Download"-Button, um den Export herunterzuladen.

#### Anwendungsbeispiele

Airbnb:

- Der Betroffene kann unter "Konto" -> "Datenschutz und Freigabe" seine persönlichen Daten anfordern.

- Der Betroffene wählt den Zweck der Anfrage aus. Dies dient vermutlich dazu, das Format zu bestimmen.

SLR:

- Der Betroffene kann unter "MeinKonto" seine persönlichen Daten anfordern.

- Die Huhu-Plattform stellt im Namen des Betroffenen einen Antrag an alle seine Lösungen.

- Alternative 1: Die Plattform "sammelt" die Exporte und stellt sie dem Nutzer zentral zum Download zur Verfügung. Vorteil: Usability. Nachteil: Die Plattform hat dann Zugriff auf Daten, die ursprünglich nicht auf der Plattform verortet waren.

- Alternative 2: Die Lösungen stellen dem Nutzer direkt die Exporte zur Verfügung. Vorteil: Vertraulichkeit; Nachteil: eingeschränkte Usability.

HKBS:

- Unter "Daten bearbeiten" können Betroffene ein PDF generieren (Button "Daten exportieren"), das alle aktuellen personenbezogenen Daten (Adressdaten usw.) sowie Informationen zu erteilten und nicht erteilten Einwilligungen enthält.

#### Phase

3.2 - Daten lesen
### AF10 - Datenschutzerklärung einsehen

Der Betroffener sieht die Datenschutzerklärung eines Datennutzers ein, damit er sich über die Verarbeitung seiner Daten informieren kann.

#### Beteiligte

[STH4. Betroffener](./Zielgruppen/Stakeholder#betroffener-sth4)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

#### Ablauf
1. Der Betroffene wählt einen Datennutzer aus.
2. Das Datenschutz-Cockpit zeigt die Informationen zum Datennutzer an.
3. Der Betroffene ruft die Datenschutzerklärung des Datennutzers auf.
4. Das Datenschutz-Cockpit zeigt die entsprechende Datenschutzerklärung an.

#### Nachbedingungen

- Die ausgewählte Datenschutzerklärung wird angezeigt.

#### Alternativen

- Der Betroffene sieht sich die Datenschutzerklärung direkt auf der Website des Datennutzers an.

- Es gibt eine Übersicht über alle Datennutzer und Datenschutzerklärungen als zentralen Einstiegspunkt.

- Das Datenschutz-Cockpit bietet die Option, vergangene Datenschutzerklärungen des Güteranbieters anzuzeigen (Historie) und diese miteinander zu vergleichen.

- Je nach Ökosystem und Gut können auch einzelne Datennutzer unterschiedliche Datenschutzerklärungen haben, z. B. zur Erbringung individueller Dienstleistungen. In diesem Fall bietet das Datenschutz-Cockpit die Option sich diese ebenfalls anzeigen zu lassen.

- Es gibt nur eine zentrale Datenschutzerklärung, die einzelnen Teilnehmer haben keine eigene Datenschutzerklärung (z. B. im C2C-Fall).

#### Anwendungsbeispiele

Airbnb:

- Die Gastgeber stellen keine individuelle Datenschutzerklärung bereit.

- In der allgemeinen Datenschutzerklärung ist geregelt, welche Daten der Gastgeber von den Gästen bekommt und umgekehrt.

SLR:

- Die Dienst-Anbieter stellen eigene Datenschutzerklärungen/-informationen über die Huhu-Plattform bereit.

- Die Dienst-Nutzer können diese über die Huhu-Plattform einsehen.

HKBS:

- Die wichtigsten Informationen sind in den Rubriken "Datenschutz bei HKBS", "Datenkategorien" und "Dienste und Zwecke" aufbereitet.

- Die allgemeine Datenschutzerklärung der HKBS-Website ist in der Fußzeile des Datenschutz-Cockpits verlinkt.

#### Phase

4 - Berechtigungen
### AF11 - Überblick über Datenbedarfe verschaffen

Der Betroffene verschafft sich eine Übersicht über die Datenbedarfe eines Datennutzers, die für die Bereitstellung eines konkreten Guts notwendig sind, damit er entscheiden kann, ob er das Gut zu diesen Bedingungen konsumieren möchte.

#### Beteiligte

[STH4. Betroffener](./Zielgruppen/Stakeholder#betroffener-sth4)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

#### Ablauf
1. Der Betroffene wählt ein Gut (z. B. App, Unterkunft) aus, welches er konsumieren möchte.
2. Das Datenschutz-Cockpit zeigt eine Übersicht über Güteranbieter an, die das Gut anbieten.
3. Der Betroffene wählt einen konkreten Datennutzer aus.
4. Das Datenschutz-Cockpit zeigt die Datenbedarfe des Datennutzers an.

#### Nachbedingungen

- Der Betroffene hat einen Überblick über die Datenbedarfe der Datennutzer bzw. Güteranbieter.

#### Anmerkungen

In diesem AF geht es darum, sich über Datenbedarfe zu informieren, bevor man sich für einen Güteranbeiter (bzw. Datennutzer) entscheidet – also bevor man Berechtigungen vergibt. Im Gegensatz hierzu geht es in AF29 darum, sich über die bereits erteilten Berechtigungen zu informieren – also nachdem man die Berechtigungen vergeben hat.

#### Alternativen

- Das Datenschutz-Cockpit zeigt eine vollständige "Kreuzmatrix" (Bedarfe x Datennutzer) an.

#### Anwendungsbeispiele

Airbnb:

- Vor der Buchung einer Unterkunft wird dem Betroffenen dargestellt, auf welche Daten der Anbieter Zugriff bekommt.

SLR:

- Die Huhu-Plattform zeigt vor der Buchung einer Lösung an, welche Berechtigungen diese Lösung benötigt.

App-Store:

- Bevor eine App aus dem App-Store (z. B. Play Store, Apple App Store) installiert wird, muss der Nutzer die Berechtigungen akzeptieren.

#### Phase

4 - Berechtigungen
### AF12 - Überblick über Datennutzungsregelungen verschaffen

Der Betroffene verschafft sich einen Überblick über die Datennutzungsregelungen, damit er diese prüfen und ggf. anpassen kann.

#### Beteiligte

[STH4. Betroffener](./Zielgruppen/Stakeholder#betroffener-sth4)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

#### Ablauf
1. Der Betroffene navigiert zu seinen erteilten Datennutzungsregelungen, z. B. über "Meine Regelungen", "Meine Güter" oder "Meine Datennutzer".
2. Das Datenschutz-Cockpit zeigt eine entsprechende Übersicht an.
3. Der Betroffene wählt ein Element (Regelung, Gut, Datennutzer) aus.
4. Das Datenschutz-Cockpit zeigt die entsprechenden Datennutzungsregelungen an.

#### Nachbedingungen

- Der Betroffene bzw. Güterkonsument hat einen Überblick über seine erteilten Berechtigungen.

#### Anmerkungen

"Datennutzer" ist hier, je nach Ökosystem, organisatorisch (Personen, Unternehmen) oder technisch (Anwendungen) zu verstehen. Der Bereich "Meine Datennutzer" sollte entsprechend je nach Ökosystem konkretisiert werden, z. B. zu "Meine Reisen" (Airbnb) oder "Meine Lösungen" (SLR).

#### Alternativen

- Das Datenschutz-Cockpit zeigt eine vollständige "Kreuzmatrix" (Berechtigungen x Datennutzer) an.

#### Anwendungsbeispiele

Airbnb:

- Der Reisende sieht unter "Deine Reisen" die jeweiligen Datennutzungsregelungen für seine Buchungen.

SLR:

- Der Bürger sieht unter "Lösungen verwalten" die Datennutzungsregelungen aller gebuchten Lösungen.

#### Phase

4 - Berechtigungen
### AF13 - Überblick über Datenflüsse verschaffen

Der Betroffene verschafft sich einen Überblick über die Datenflüsse im digitalen Ökosystem, damit er prüfen kann, wie seine Daten weitergegeben wurden.

#### Beteiligte

[STH4. Betroffener](./Zielgruppen/Stakeholder#betroffener-sth4)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

#### Ablauf
1. Der Betroffene navigiert zu "Meine Daten", "Meine Güter" oder "Meine Datennutzer".
2. Das Datenschutz-Cockpit zeigt eine entsprechende Übersicht an.
3. Der Betroffene wählt aus, welche Datenflüsse er sehen will, z. B. alle Datenflüsse:

    a. für eine bestimmte Datenkategorie (Meine Daten);

    b. für ein bestimmtes Gut (Meine Güter);

    c. für einen bestimmten Datennutzer (Meine Datennutzer).
4. Das Datenschutz-Cockpit zeigt alle historischen Datenflüsse an.

    a. Welche Daten einer bestimmten Kategorie sind geflossen (Meine Daten)?

    b. Welche Daten sind geflossen, damit der Betroffene ein bestimmtes Gut nutzen konnte (Meine Güter)?

    c. Welche Daten wurden an einen bestimmten Datennutzer übertragen (Meine Datennutzer)?

#### Nachbedingungen

- Der Betroffene erhält ein "Protokoll" basierend auf seiner Anfrage.

#### Alternativen

- Der Betroffene stellt eine Datenauskunft bei bestimmten Datennutzern (Teil von AF22).

#### Anwendungsbeispiele

Airbnb:

- Der Reisende wählt eine Buchung aus "Deine Reisen" aus und erhält die Liste an Zugriffen bzw. Weitergaben von Daten an Anbieter im Zusammenhang mit der Buchung.

- Der Reisende wählt unter "Konto" eine Datenkategorie aus und erhält die Liste an Zugriffen bzw. Weitergaben dieser Datenkategorie an Anbieter.

- Eigene Funktion "Activity Log".

SLR:

- Der Bürger wählt eine seiner gebuchten Lösungen aus und erhält die Liste an Zugriffen bzw. Weitergaben von Daten an diese Lösung.

- Der Bürger wählt unter "HuhuKonto" eine Datenkategorie aus und erhält die Liste an Zugriffen bzw. Weitergaben dieser Datenkategorie an die Lösungen.

- Eigene Funktion "Activity Log".

HKBS:

- In der Übersicht "Datenkategorien" ist pro Datenkategorie jeweils der "Empfänger" genannt.

- Unter "Verträge mit Dritten" können Betroffene einsehen, mit welchen Dritten es Auftragsverarbeitungsverträge es gibt.

#### Phase

3.2 - Daten lesen
### AF14 - Datennutzungsregelung einstellen

Der Betroffene erteilt eine Datennutzungsregelung, damit er seine Selbstbestimmung ausüben kann.

#### Beteiligte

[STH4. Betroffener](./Zielgruppen/Stakeholder#betroffener-sth4)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

- Der Betroffene nutzt bereits ein Gut oder der Betroffene beantragt gerade die Nutzung.

#### Ablauf
1. Das Datenschutz-Cockpit zeigt die vom Datennutzer gewünschten Daten, Berechtigungen und Zwecke an.
2. Der Betroffene gibt seine Daten entsprechend seinen allgemeinen Datenschutzpräferenzen frei und bestätigt die daraus resultierende Datennutzungsregelung.
3. Das Datenschutz-Cockpit überführt die Datennutzungsregelung in technische Berechtigungen zum Datenzugriff über die Plattform oder informiert den Datennutzer über die Datennutzungsregelungen (je nach Ökosystem).

#### Nachbedingungen

- Der Datennutzer ist über die Datennutzungsregelung informiert.

- Es sind technische Berechtigungen entsprechend den Datennutzungsregelungen umgesetzt.

- Der Datennutzer kann die Daten entsprechend den Datennutzungsregelungen nutzen (oder eben nicht).

- Eine Datennutzungsregelung kann auch aussagen, dass eine Nutzung nicht gestattet ist.

#### Anmerkungen

Datennutzungsregelungen können vergleichsweise einfach (z. B. eine reine Ja/Nein-Entscheidung) sein, aber auch sehr komplex (z. B. eine Einschränkung der Datennutzung für bestimmte Zwecke, Zeiträume oder Systeme).  
Einwilligungen nach DSGVO oder TTDSG sind ein Spezialfall von Datennutzungsregelungen.

#### Alternativen

- Manche der vom Datennutzer gewünschten Daten sind für die Erbringung des Guts essenziell. Ein Verweigern der Nutzung führt dazu, dass das Gut nicht verwendet werden kann.

- Das Datenschutz-Cockpit erstellt einen Vorschlag für Datennutzungsregelungen basierend auf den Datenschutzpräferenzen des Betroffenen (Datenschutzassistent).

#### Anwendungsbeispiele

Airbnb:

- Wenn ein Nutzer eine Wohnung bucht, kann er entscheiden, welche Daten er dem Vermieter freigibt.

- Manche Datenkategorien sind dafür essenziell, wie z. B. der Name und die Telefonnummer des Betroffenen. Andere, wie z. B. das Profilbild des Nutzers, könnten aber optional sein.

SLR:

- Wenn der Nutzer eine Lösung bucht, zeigt die Huhu-Plattform ihm die Datenkategorien an, auf die die Lösung gerne Zugriff hätte.

- Manche Datenkategorien sind für die Lösungen essenziell, wie z. B. die E-Mail-Adresse und die Heimatgemeinde zur Zuordnung und Abrechnung mit der Gemeinde. Andere, wie z. B. das Profilbild des Nutzers, könnten aber optional sein.

#### Phase

4 - Berechtigungen
### AF15 - Datennutzungsregelung ändern / widerrufen

Der Betroffene bearbeitet eine erteilte Datennutzungsregelung, damit er sein Recht auf Selbstbestimmung wahrnehmen kann.

#### Beteiligte

[STH4. Betroffener](./Zielgruppen/Stakeholder#betroffener-sth4)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

- Der Nutzer hat mindestens eine Datennutzungsregelung erteilt (AF34).

- Der Nutzer sieht eine Übersicht über die von ihm erteilten Datennutzungsregelungen (AF29)

#### Ablauf
1. Der Betroffene wählt eine Datennutzungsregelung zur Bearbeitung aus.
2. Das Datenschutz-Cockpit zeigt dem Nutzer seine Optionen an.
3. Der Betroffene ändert die Datennutzungsregelung und bestätigt die Bearbeitung.
4. Das Datenschutz-Cockpit zeigt dem Nutzer die Konsequenzen seiner Bearbeitung (bspw. reduzierter Funktionsumfang, Stornierung einer Güternutzung).
5. Der Betroffene bestätigt seine Entscheidung.
6. Das Datenschutz-Cockpit aktualisiert die Berechtigungen zum Datenzugriff gemäß der neuen Datennutzungsregelung oder informiert den Datennutzer über die neue Datennutzungsregelung (je nach Ökosystem).

#### Nachbedingungen

- Der Datennutzer ist über die neue Datennutzungsregelung informiert.

- Technische Berechtigungen wurden entsprechend den neuen Datennutzungsregelungen aktualisiert.

- Der Datennutzer kann die Daten entsprechend den Datennutzungsregelungen nutzen (oder eben nicht mehr).

#### Anmerkungen

Handelt es sich bei den Datennutzungsregelungen um Einwilligungen gemäß DSGVO hat der Nutzer das Recht diese zu widerrufen. Bei anderen Arten von Datennutzungsregelungen besteht dieses Recht ggf. nicht.

#### Alternativen

- Das Zurückziehen einer Einwilligung kann mit der Löschung der Daten verknüpft werden (AF 61).

#### Anwendungsbeispiele

Airbnb:

- Der Nutzer entschließt sich nachträglich einem Vermieter den Zugriff auf gewisse Daten, z. B. sein Profilbild, zu verbieten.

SLR:

- Der Nutzer entschließt sich nachträglich einer gebuchten Lösung den Zugriff auf gewisse Daten, z. B. sein Profilbild, zu verbieten.

#### Phase

4 - Berechtigungen
### AF16 - Daten-Archivierungszeitraum einstellen

Der Betroffene stellt den Daten-Archivierungszeitraum für eine Datenkategorie ein, damit Daten nach einem für ihn angemessenen Zeitraum gelöscht werden.

#### Beteiligte

[STH4. Betroffener](./Zielgruppen/Stakeholder#betroffener-sth4)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

- Der Nutzer hat die Rolle "Betroffener".

#### Ablauf
1. Der Cockpit-Nutzer ruft die Einstellungen zu den Daten-Archivierungszeiträumen auf.
2. Das Datenschutz-Cockpit blendet die entsprechende Maske ein.
3. Der Cockpit-Nutzer:

    a. wählt die gewünschte Datenkategorie.

    b. bestimmt einen möglichen Archivierungszeitraum (rechtlich nicht mögliche Zeiträume stehen nicht zur Auswahl).
4. Das Datenschutz-Cockpit prüft, ob Daten älter als der selektierte Archivierungszeitraum sind, die dann sofort gelöscht würden. Falls ja, blendet das Datenschutz-Cockpit einen entsprechenden Hinweis ein.
5. Der Cockpit-Nutzer bestätigt die Selektion.

#### Nachbedingungen

- Der Archivierungszeitraum für die ausgewählte Datenkategorie ist gespeichert.

- Daten der gewählten Kategorie werden sofort gelöscht, falls sie älter als der eingestellte Zeitraum sind.

#### Anmerkungen

Der Defaultwert könnte "Unendlich" sein (falls keine gesetzliche Vorgabe existiert), sodass die Datennutzer selbst die Dauer bestimmen können.

#### Anwendungsbeispiele

Airbnb:

- Unter "Datenschutz und Freigabe" könnten Daten-Archivierungszeiträume eingestellt werden (z. B. für Chat- oder Suchverläufe).

SLR:

- Daten-Archivierungszeiträume können unter dem "HuhuKonto" unter "Profil" angepasst werden.

#### Phase

4 - Berechtigungen
### AF17 - Verdachtsfall melden

Der Betroffener stellt eine Anfrage für eine Aufklärung eines möglichen Datenschutzproblems (Verdachtsfall), damit er nachvollziehen kann, wie / wofür / wann /... seine Daten verwendet wurden.

#### Beteiligte

[STH4. Betroffener](./Zielgruppen/Stakeholder#betroffener-sth4)

#### Vorbedingung

- Der Betroffene vermutet, dass seine Daten unberechtigt verwendet wurden.

- Der Cockpit-Nutzer ist eingeloggt.

- Der Nutzer hat die Rolle "Betroffener".

#### Ablauf
1. Der Betroffene wählt "Anfrage auf Aufklärung".
2. Das Datenschutz-Cockpit zeigt eine Eingabe-Maske an, in der das Problem erfasst werden kann.
3. Der Betroffene beschreibt die Anfrage (z. B. Dienste, Daten, Kontext).
4. Das Datenschutz-Cockpit validiert die Eingaben.
5. Der Betroffene schickt die Anfrage ab.
6. Das Datenschutz-Cockpit erzeugt eine Anfrage mit Status "offen" für den Datenschutzbeauftragten der Plattform / des Ökosystems.

#### Nachbedingungen

- Die Anfrage ist gestellt und an den Datenschutzbeauftragten der Plattform weitergeleitet. Dieser kümmert sich um die Aufklärung (AF57).

- Der Betroffene erhält eine Bestätigung seiner Anfrage.

#### Anmerkungen

Ggf. kann man das betroffene Datum konkret auswählbar machen (anstatt es nur beschreiben zu lassen).

#### Anwendungsbeispiele

Airbnb:

- Der Reisende wählt im Hilfe-Bereich die entsprechende Funktion aus. Dort kann er beschreiben, mit welchem Anbieter welches Problem besteht.

SLR:

- Der Bürger wählt im Hilfe-Bereich die entsprechende Funktion aus. Dort kann er beschreiben, mit welchem Lösungsanbieter welches Problem besteht.

#### Phase

6 - Vorfälle
### AF18 - Daten löschen

Der Betroffene löscht ein Datum, damit er seine Selbstbestimmung wahrnehmen kann.

#### Beteiligte

[STH4. Betroffener](./Zielgruppen/Stakeholder#betroffener-sth4)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

- Der Cockpit-Nutzer hat die Rolle "Betroffener".

- Es werden Daten über den Betroffenen von Datennutzern gespeichert.

#### Ablauf
1. Der Betroffene stellt fest, dass er ein Datum löschen will (z. B. AF16).
2. Das Datenschutz-Cockpit bietet die Möglichkeit zum Löschen.
3. Der Betroffene bestätigt die gewünschte Löschung.
4. Das Datenschutz-Cockpit führt die Löschung durch.

#### Nachbedingungen

- Nach der Löschung ist das Datum aus jeder Ansicht entfernt und nicht mehr einsehbar.

#### Anmerkungen

Dieser Anwendungsfall ist Teil des Rechts auf Löschung (DSGVO Art. 17).

#### Alternativen

- Der Betroffene kann die Löschung der Daten beantragen, falls er sie nicht direkt selbst löschen kann (AF61).

- Ist die Löschung nicht erfolgreich (z. B., weil ein Dienst sie ablehnt, oder aus technischen Gründen) muss der Betroffene darauf hingewiesen werden.

#### Anwendungsbeispiele

Airbnb:

- Der Nutzer löscht Daten in seinem Konto (z. B. Kontonummer).

SLR:

- Der Nutzer löscht Daten in seinem Konto.

HKBS:

- Um Missbrauch vorzubeugen, können die Betroffenen ihre Daten (z. B. E-Mail-Adresse, Postanschrift) im Datenschutz-Cockpit nicht selbst löschen. Sie können einen entsprechenden Änderungsvorschlag (in diesem Fall Löschvorschlag) hinterlegen, inkl. Rückfrage/Kommentar-Funktion.

#### Phase

3.3 - Daten löschen
### AF19 - Löschantrag stellen

Der Betroffene stößt die Löschung seiner Daten an, damit er seine Selbstbestimmung wahrnehmen kann.

#### Beteiligte

[STH4. Betroffener](./Zielgruppen/Stakeholder#betroffener-sth4)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

- Der Cockpit-Nutzer hat die Rolle "Betroffener".

- Es werden Daten über den Betroffenen von Datennutzern gespeichert.

#### Ablauf
1. Der Betroffene ruft die Lösch-Funktion auf.
2. Das Datenschutz-Cockpit zeigt eine Eingabemaske mit einer Übersicht über Datenkategorien, die der Betroffene zur Löschung auswählen kann. Für spezifische Daten (z. B. eine konkrete Adresse) gibt es ein Freitextfeld.
3. Der Betroffene wählt die Daten aus, die er löschen möchte und klickt auf den "Löschen"-Button.
4. Das Datenschutz-Cockpit stößt die Löschung der Daten an (führt zu AF22).
5. Das Datenschutz-Cockpit informiert den Betroffenen nach Abschluss über die Löschung.

#### Nachbedingungen

- Der Löschantrag wurde gestellt und liegt dem Verantwortlichen zur Bearbeitung vor (siehe AF9).

#### Anmerkungen

Dieser Anwendungsfall ist Teil des Rechts auf Löschung (DSGVO Art. 17).

#### Alternativen

- Bei Daten, die auf der Plattform gespeichert sind, können statt Kategorien auch direkt Daten selbst zur Löschung angezeigt werden.

- Sollten sich Daten während des Prozesses als "nicht löschbar" herausstellen, wird der Nutzer hierüber informiert.

- Alternative (Daten löschen) ist in AF60 beschrieben.

#### Anwendungsbeispiele

Airbnb:

- Unter "Reisen" könnte der Reisende Reisen selektieren, die er löschen möchte.

SLR:

- Nutzungsdaten (z. B., welche App ich wann gebucht habe) können selektiert und gelöscht werden.

HKBS:

- Um Missbrauch vorzubeugen, können die Betroffenen ihre Daten (z. B. E-Mail-Adresse, Postanschrift) im Datenschutz-Cockpit nicht selbst löschen. Sie können einen entsprechenden Änderungsvorschlag (in diesem Fall Löschvorschlag) hinterlegen, inkl. Rückfrage/Kommentar-Funktion.

#### Phase

3.3 - Daten löschen
### AF20 - Datenschutzpräferenzen initial erfassen

Der Betroffene nimmt initiale Datenschutzpräferenzen vor, damit er später bei seinen Datenschutzeinstellungen unterstützt werden kann.

#### Beteiligte

[STH4. Betroffener](./Zielgruppen/Stakeholder#betroffener-sth4)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

- Der Cockpit-Nutzer hat die Rolle "Betroffener".

- Es liegen noch keine initialen Datenschutzpräferenzen vor.

#### Ablauf
1. Das Datenschutz-Cockpit bittet den Betroffenen nach dem Login darum, initiale Datenschutzpräferenzen vorzunehmen..
2. Der Betroffene startet den Prozess.
3. Das Datenschutz-Cockpit zeigt einen Wizard an.
4. Der Betroffene:

    a. füllt die einzelnen Wizard-Seiten aus;

    b. bestätigt seine Präferenzen.
5. Das Datenschutz-Cockpit:

    a. überprüft die Eingaben und gleicht diese mit vorliegenden Einwilligungen ab;

    b. speichert die Datenschutzpräferenzen.

#### Nachbedingungen

- Die initialen Datenschutzpräferenzen sind gespeichert.

#### Anmerkungen

Unter Datenschutzpräferenzen verstehen wir allgemeine Sichtweisen ("Attitudes") des Betroffenen zum Thema Datenschutz, aus denen sich konkrete Datennutzungsregelungen ergeben. Die Erfassung der Präferenzen dient unter anderem dazu, dem Betroffenen eine Entscheidungsunterstützung zu bieten und Voreinstellungen zu wählen, die in seinem Sinne sind.

#### Alternativen

Schritt 5: Bei der Überprüfung stellt das Datenschutz-Cockpit fest, dass die Datenschutzpräferenzen mit mindestens einer vorliegenden Einwilligung in Widerspruch stehen:

- 5.1.1 Das Datenschutz-Cockpit weist auf den Widerspruch hin und ermöglicht es dem Betroffenen, (1) die Datenschutzpräferenzen automatisch oder manuell anzupassen, (2) die widersprüchliche Einwilligungen als Ausnahme hinzuzufügen, (3) die widersprüchliche Einwilligungen zurückzuziehen oder (4) im Einzelfall zu entscheiden.

- 5.1.2 Der Betroffene wählt eine der Lösungen aus und macht ggf. Anpassungen.

- Weiter mit Schritt 5 (wiederholte Überprüfung).

#### Anwendungsbeispiele

Airbnb:

- Erstmalige Ausführung des Wizards nach Registrierung auf der Plattform.

- Danach ist der Wizard über das Datenschutz-Cockpit abrufbar.

- Deckt Güteranbieter und Güterkonsument ab.

SLR:

- Vergleichbar wie bei Airbnb für den Güterkonsument.

Beispiele anderer Lösungsmoglichkeiten:

- "Nein, danke"-Button.

- Empfehlungen einer NGO o. Ä. übernehmen.

- Einstellungen aus einem PIMS o. Ä. übernehmen.

- Das Datenschutz-Cockpit erlernt die Datenschutzpräferenzen aus dem Verhalten des Betroffenen.

#### Phase

2 - Onboarding
### AF21 - Datenschutzpräferenzen ändern

Der Betroffene ändert seine Datenschutzpräferenzen, damit er diese seinen geänderten Bedürfnissen anpassen kann.

#### Beteiligte

[STH4. Betroffener](./Zielgruppen/Stakeholder#betroffener-sth4)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

- Der Cockpit-Nutzer hat die Rolle "Betroffener".

- Initiale Einstellungen sind vorgenommen worden (AF63).

#### Ablauf
1. Der Betroffene öffnet seine Datenschutzpräferenzen.
2. Das Datenschutz-Cockpit zeigt dem Nutzer die gespeicherten Datenschutzpräferenzen an.
3. Der Betroffene nimmt Änderungen vor und speichert diese.
4. Das Datenschutz-Cockpit bietet dem Nutzer an, seine neuen Datenschutzpräferenzen mit seinen aktuellen Datenschutzregelungen abzugleichen.
5. Der Betroffene nimmt dieses Angebot an.
6. Das Datenschutz-Cockpit zeigt Datennutzungsregelungen an, die den neuen Datenschutzpräferenzen widersprechen.
7. Der Betroffene hat drei Optionen:

    a. Er bestätigt die neuen Datenschutzpräferenzen ohne die Datennutzungsregelungen anzupassen, die hierzu im Widerspruch stehen.

    b. Er passt die Datennutzungsregelungen an (vgl. AF37) und bestätigt anschließend die neuen Datenschutzpräferenzen.

    c. Er bricht den Vorgang ab.
8. Das Datenschutz-Cockpit speichert die neuen Datenschutzpräferenzen.

#### Nachbedingungen

- Die Datenschutzpräferenzen sind aktualisiert.

#### Alternativen

- Der Betroffene startet AF63 neu.

- Das Datenschutz-Cockpit "lernt" die Präferenzen anhand des Verhaltens oder der Datennutzungsregelungen des Betroffenen und ändert die Präferenzen dadurch selbstständig.

#### Anwendungsbeispiele

#### Phase

4 - Berechtigungen

## Datennutzersicht
### AF22 - Löschantrag bearbeiten

Der Datennutzer löscht personenbezogene Daten eines Betroffenen, damit er dem Recht auf Löschung nachkommt.

#### Beteiligte

[STH3. Datennutzer](./Zielgruppen/Stakeholder#datennutzer-sth3)

#### Vorbedingung

- Eine Löschung von Daten wurde gemäß AF61 angestoßen.

- Der Cockpit-Nutzer ist eingeloggt.

- Der Nutzer hat die Rolle "Datennutzer".

#### Ablauf
1. Das Datenschutz-Cockpit informiert den Datennutzer über eine "Aufgabe", die den Löschantrag enthält.
2. Der Datennutzer öffnet die Aufgabe.
3. Das Datenschutz-Cockpit zeigt die Aufgabe an.
4. Der Datennutzer:

    a. prüft eventuelle Aufbewahrungsfristen und ähnliches;

    b. löscht die Daten wo möglich oder begründet für (Teile der) Daten, warum diese nicht gelöscht werden können;

    c. markiert die Aufgabe als erledigt.
5. Das Datenschutz-Cockpit sendet eine Bestätigung zum Betroffenen.

#### Nachbedingungen

- Die Daten sind gelöscht oder die Begründung, warum dies nicht möglich ist, ist eingetragen.

- Der Betroffene wurde informiert.

#### Anmerkungen

Dieser Anwendungsfall ist Teil des Rechts auf Löschung (DSGVO Art. 17).

#### Anwendungsbeispiele

Beispiel: Löschantrag durch Betroffenen für Chat- und Suchverlauf

Airbnb:

- Kein internes Wissen.

SLR:

- Überprüfung auf Rechtsgrundlage für die Löschung.

- Manuelle Löschung von den Daten (Chat- und Suchverlauf), wenn keine rechtlichen Gründe dagegensprechen.

HKBS:

- Im Datenschutz-Cockpit des Admins erscheinen die Vorschläge der Betroffenen auf Berichtigung bzw. Löschung von Daten.

#### Phase

3.3 - Daten löschen
### AF23 - Berichtigungsantrag bearbeiten

Der Datennutzer berichtigt personenbezogene Daten eines Betroffenen, damit er dem Betroffenenrecht nach Berichtigung nachkommt und stets aktuelle Daten nutzen kann.

#### Beteiligte

[STH3. Datennutzer](./Zielgruppen/Stakeholder#datennutzer-sth3)

#### Vorbedingung

- Die Berichtigung von Daten wurde gemäß AF3 angestoßen.

- Der Cockpit-Nutzer ist eingeloggt.

- Der Nutzer hat die Rolle "Datennutzer".

#### Ablauf
1. Das Datenschutz-Cockpit informiert den Datennutzer über eine "Aufgabe", die den Berichtigungsantrag enthält.
2. Der Datennutzer öffnet die Aufgabe.
3. Das Datenschutz-Cockpit zeigt die Aufgabe an.
4. Der Datennutzer:

    a. prüft, ob die Daten berichtigt werden sollten;

    b. berichtigt die Daten oder begründet, warum (Teile der) Daten nicht berichtigt werden können;

    c. markiert die Aufgabe als erledigt.

#### Nachbedingungen

- Die Daten sind geändert oder die Begründung, warum dies nicht möglich ist, ist eingetragen.

#### Anmerkungen

Dieser Anwendungsfall ist Teil des Rechts auf Berichtigung (DSGVO Art. 16).  
  
Ein generelles Ändern oder Ablehnen ist nicht immer möglich. Wenn der Betroffene mehrere Daten geändert haben möchte, kann ggf. nur eine Teilmenge der Daten geändert werden.

#### Anwendungsbeispiele

Beispiel: Änderung von falsch erfassten Transaktionsdaten

Airbnb:

- Kein internes Wissen.

SLR:

- Manuelle Überprüfung der Korrektheit der Anfrage.

- Manuelle Berichtigung in der entsprechenden Datenbank oder Angabe der Begründung, warum dies nicht geschieht.

HKBS:

- Im Datenschutz-Cockpit des Admins erscheinen die Vorschläge der Betroffenen auf Berichtigung bzw. Löschung von Daten.

#### Phase

3.1 - Daten bearbeiten
### AF24 - Auskunfts- / Exportantrag bearbeiten

Der Datennutzer stellt personenbezogene Daten eines Betroffenen zusammen, damit er dem Betroffenenrecht nach Datenauskunft / Datenübertragbarkeit nachkommt.

#### Beteiligte

[STH3. Datennutzer](./Zielgruppen/Stakeholder#datennutzer-sth3)

#### Vorbedingung

- Ein Export von Daten gemäß AF22 wurde angestoßen.

- Der Cockpit-Nutzer ist eingeloggt.

- Der Nutzer hat die Rolle "Datennutzer".

#### Ablauf
1. Das Datenschutz-Cockpit informiert den Datennutzer über eine "Aufgabe", die den Antrag auf Datenauskunft bzw. Datenexport enthält.
2. Der Datennutzer öffnet die Aufgabe.
3. Das Datenschutz-Cockpit zeigt die Aufgabe an.
4. Der Datennutzer:

    a. stellt die Daten zusammen. Dies kann manuell oder automatisiert geschehen. Je nach angefordertem Format sind die Daten maschinen- oder menschenlesbar;

    b. lädt den Export in der Aufgabe hoch und markiert diese dadurch als erledigt.

#### Nachbedingungen

- Die Daten wurden zusammengestellt und dem Betroffenen direkt oder über das Datenschutz-Cockpit verfügbar gemacht.

#### Alternativen

- Der Datennutzer stellt dem Betroffenen die Daten über einen anderen Weg bereit (z. B. Versenden eines Download-Links). In diesem Fall markiert er die Aufgabe als abgeschlossen ohne die Daten über das Datenschutz-Cockpit bereitzustellen.

- Der Datennutzer stellt eine API für einen automatischen Export bereit, sodass der Betroffene diese direkt über die Plattform downloaden kann.

#### Anwendungsbeispiele

Airbnb:

- Es es unklar, ob Airbnb die Anfragen überhaupt an Anbieter weiterleitet.

SLR:

- Der Lösungsanbieter stellt Daten zusammen und versendet direkt einen Link an den Bürger.

- Die Plattform stellt die Daten der Plattform über das Cockpit als Download bereit.

HKBS:

- Da die Betroffenen unter "Daten bearbeiten" selbst ein PDF generieren können (Button "Daten exportieren"), das alle aktuellen personenbezogenen Daten (Adressdaten usw.) sowie Informationen zu erteilten und nicht erteilten Einwilligungen enthält, ist keine Bearbeitung von Exportanträgen im Datenschutz-Cockpit vorgesehen.

- Alternativ können Betroffene die HKBS direkt kontaktieren.

#### Phase

3.2 - Daten lesen
### AF25 - Verletzung des Schutzes personenbezogener Daten melden

Der Datennutzer meldet eine Verletzung des Schutzes personenbezogener Daten, damit er seinen gesetzlichen Pflichten nachkommt.

#### Beteiligte

[STH3. Datennutzer](./Zielgruppen/Stakeholder#datennutzer-sth3)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

- Der Cockpit-Nutzer hat die Rolle "Datennutzer".

- Eine kürzlich identifizierte Verletzung des Schutzes personenbezogener Daten liegt vor (z. B. auf Basis einer Meldung eines Verdachtsfalls; siehe AF17). Die Meldung einer Verletzung des Schutzes personenbezogener Daten (und somit dieser Anwendungsfall) muss binnen 72 Stunden, nachdem diese dem Datennutzer bekannt wurde, erfolgen.

#### Ablauf
1. Der Datennutzer wählt "Verletzung des Schutzes personenbezogener Daten melden".
2. Das Datenschutz-Cockpit zeigt eine Eingabemaske an, mittels derer der Datennutzer folgende Aufgaben machen kann:

    a. die Verletzung des Schutzes personenbezogener Daten beschreiben;

    b. den betroffenen Personenkreis auswählen (explizite Betroffene oder ganze Personenkreise wie Nutzer eines Guts).
3. Der Datennutzer füllt die Inhalte aus und und bestätigt die Verletzung des Schutzes personenbezogener Daten, indem er das Formular absendet.
4. Das Datenschutz-Cockpit benachrichtigt alle von der Verletzung betroffenen Personen.

#### Nachbedingungen

- Alle betroffenen Personen wurden über die Verletzung des Schutzes personenbezogener Dateninformiert.

- Auch der Betreiber prüft die Verletzung des Schutzes personenbezogener Daten und leitet ggf. Schritte ein.

#### Anwendungsbeispiele

Airbnb:

- Wenn ein Anbieter eine Verletzung des Schutzes personenbezogener Daten bemerkt, muss dieser alle betroffenen Reisenden informieren.

SLR:

- Wenn ein Lösungsanbieter eine Verletzung des Schutzes personenbezogener Daten bemerkt, muss dieser alle betroffenen Bürger informieren.

#### Phase

6 - Vorfälle
### AF26 - Güteranbieterdaten einpflegen

Der Güteranbieter pflegt seine Anbieterprofildaten (z. B. Adressdaten, AGB) ein, damit er seinen Pflichten (gesetzlich oder ökosystemspezifisch) nachkommt und Betroffene diese Informationen einsehen können.

#### Beteiligte

[STH17. Güteranbieter (gegenwärtig)](./Zielgruppen/Stakeholder#güteranbieter-gegenwärtig-sth17)  
[STH19. Güteranbieter (zukünftig)](./Zielgruppen/Stakeholder#güteranbieter-zukünftig-sth19)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

- Der Cockpit-Nutzer hat die Rolle "Güteranbieter".

#### Ablauf
1. Der Güteranbieter wählt "Mein Anbieterprofil" aus.
2. Das Datenschutz-Cockpit zeigt eine entsprechende Eingabemaske an.
3. Der Güteranbieter pflegt Daten wie Adressdaten, Datenschutzbeauftragter, Kontaktdaten, Datenschutzerklärung, AGB etc. ein.
4. Das Datenschutz-Cockpit speichert die eingegebenen Daten.

#### Nachbedingungen

- Die angegebenen Profildaten wurden erfasst.

- Gegebenenfalls werden, je nach Daten, verschiedene Prozesse gestartet (z. B. Benachrichtigung der Betroffenen).

#### Alternativen

- Manuelle Aktualisierung durch den Plattformbetreiber.

#### Anwendungsbeispiele

Airbnb:

- Unter "Become-a-host" wird ein Plattform-Nutzer zum Güteranbieter.

- Mithilfe eines Wizards gibt er alle relevanten Daten ein.

SLR:

- Option 1: Der B2B-Güteranbieter pflegt alle Daten denzentral auf einer eigenen Website ein.

- Option 2: Die SLR-Plattform stellt dem B2B-Güteranbieter ein Portal zur Verfügung, in dem er alle relevanten Daten einpflegen kann (ggfs. ebenfalls mit Wizard). Diese könnte er dann auf seiner Seite einbinden (z. B. mithilfe von generiertem HTML-Code oder generiertem Text).

#### Phase

2 - Onboarding
### AF27 - Für ein Gut erforderliche Daten angeben

Der Datennutzer pflegt die zur Erbringung eines Guts notwendigen Daten(-kategorien) und Zwecke ein, damit Betroffene einsehen können, welche ihrer Daten für das Konsumieren des Guts notwendig sind.

#### Beteiligte

[STH3. Datennutzer](./Zielgruppen/Stakeholder#datennutzer-sth3)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

- Der Cockpit-Nutzer hat die Rolle "Güteranbieter".

- Der Güteranbieter hat mindestens ein Gut auf der digitalen Plattform angelegt.

#### Ablauf
1. Der Güteranbieter wählt eines seiner Güter aus.
2. Das Datenschutz-Cockpit zeigt eine Eingabemaske an, in der Datenkategorien und Datenarten, die zur Erbringung notwendig sind, ausgewählt werden können.
3. Der Güteranbieter erfasst die für die Erbringung des Gut notwendigen Daten und Verwendungszwecke (z. B. eine Matrix mit Daten x Zwecke).
4. Das Datenschutz-Cockpit speichert die Auswahl.

#### Nachbedingungen

- Die erforderlichen Daten mit Zweckbindung sind erfasst.

#### Anmerkungen

Dienste sind auch Güter (siehe Glossar).

#### Anwendungsbeispiele

Airbnb:

- Die Plattform legt fest, welche Daten zur Gütervermittlung notwendig sind (standardisiert, da nur eine Kategorie von Gütern angeboten wird).

- Der Güteranbieter kann ggf. Spezifika auswählen (besondere benötigte Dokumente, benötigte Daten für gewisse Zahlungsarten).

SLR:

- Beim Einpflegen eines Guts (d. h. eines Dienstes) gibt der B2B-Güteranbieter bei der Plattform an, welche Daten er zur Nutzung des Guts vom Nutzer eines Gutes (d. h. dem Endnutzer) benötigt.

- Dafür kann er auf vom Plattform-Betreiber festgelegte Datenkategorien zurückgreifen (siehe AF5).

#### Phase

2 - Onboarding
### AF28 - Datenschutzerklärung bereitstellen

Der Datennutzer stellt eine Datenschutzerklärung bereit, damit er Betroffene gemäß den gesetzlichen Aufklärungspflichten informiert.

#### Beteiligte

[STH3. Datennutzer](./Zielgruppen/Stakeholder#datennutzer-sth3)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

- Der Cockpit-Nutzer hat die Rolle "Datennutzer".

#### Ablauf
1. Der Datennutzer öffnet sein Konto und wählt "Datenschutzerklärung hinzufügen".
2. Das Datenschutz-Cockpit zeigt eine Eingabemaske an.
3. Der Datennutzer füllt die Eingabemaske aus.
4. Das Datenschutz-Cockpit speichert die neue Datenschutzerklärung und informiert die Betroffenen.

#### Nachbedingungen

- Die Datenschutzerklärung kann von Nutzern eingesehen werden.

#### Alternativen

- Vorhandene Datenschutzerklärungen können aktualisiert werden. Dadurch entsteht eine neue "Version" der Datenschutzerklärung.

- Je nach Domäne kann ein Datennutzer unterschiedliche Datenschutzerklärungen für unterschiedliche Güter bereitstellen.

#### Anwendungsbeispiele

Airbnb:

- Datenschutzerklärungen der Wohnungsanbieter.

SLR:

- Jeder Lösungsanbieter muss mindestens eine Datenschutzerklärung bereitstellen, ggf. für jede Lösung individuell.

HKBS:

- Die wichtigsten Informationen sind in den Rubriken "Datenschutz bei HKBS", "Datenkategorien" und "Dienste und Zwecke" aufbereitet; diese Informationen können vom Admin aktualisiert werden (WYSIWIG-Editor). Die allgemeine Datenschutzerklärung auf der HKBS-Website ist in der Fußzeile des Datenschutz-Cockpits verlinkt.

#### Phase

2 - Onboarding
### AF29 - Datennutzungsanfrage stellen

Der Datennutzer stellt eine Anfrage zur Nutzung von Daten, damit er diese verarbeiten darf (Legitimation) und kann (technische Berechtigung).

#### Beteiligte

[STH3. Datennutzer](./Zielgruppen/Stakeholder#datennutzer-sth3)

#### Vorbedingung

- Der Cockpit-Nutzer ist eingeloggt.

- Der Cockpit-Nutzer hat die Rolle "Datennutzer".

#### Ablauf
1. Der Datennutzer wählt einen Betroffenen unter "Meine Güterkonsumenten" aus.
2. Das Datenschutz-Cockpit zeigt Details zu dem Betroffenen an.
3. Der Datennutzer wählt "Datennutzungsanfrage stellen" aus.
4. Das Datenschutz-Cockpit zeigt eine Eingabemaske an, die mindestens folgende Informationen abfragt:

    a. gewünschte Datenkategorie,

    b. gewünschte Verarbeitungsarten,

    c. intendierte Verarbeitungzwecke und

    d. Gültigkeit / Dauer der Datennutzung.
5. Der Betroffene füllt die Eingabemaske aus und speichert sie.
6. Das Datenschutz-Cockpit benachrichtigt den Betroffenen und bittet ihn, die Anfrage zu prüfen (AF13).
7. Der Betroffene prüft die Anfrage und erteilt eine Datennutzungsregelung (AF34).
8. Das Datenschutz-Cockpit informiert den Datennutzer über die Entscheidung des Betroffenen.

#### Nachbedingungen

- Der Betroffene hat eine Datennutzungsanfrage erhalten und bearbeitet.

- Eine neue Datennutzungsregelung wurde erstellt. Diese kann auch lauten, dass die Nutzung nicht gestattet wird.

- Der Datennutzer wurde über die Entscheidung informiert und hat entsprechend der Datennutzungsregelung Zugriff auf die Daten.

#### Alternativen

- Der Betroffene kann die Regelung von sich aus treffen, also ohne eine vorherige Anfrage des Datennutzers (AF34)

#### Anwendungsbeispiele

Airbnb:

- Ein Vermieter hätte gerne Zugriff auf die Mobilfunknummer des Reisenden, um ihn im Notfall kontaktieren zu können.

SLR:

- Nach Änderungen am Funktionsumfang einer Lösung benötigt diese Zugriff auf Daten, die sie initial nicht benötigte (z. B. das Profilbild des Betroffenen).

HKBS:

- Datennutzer können in der entsprechenden Rubrik neue Nutzungsanfragen erstellen. Diese Anfragen sind immer an eine bestimmte Person gerichtet.

- Alle Nutzungsanfragen können nachträglich bearbeitet werden (inkl. Statusänderung) oder gelöscht werden.

- Für Betroffene ist der aktuelle Status aller an sie gerichteten Nutzungsanfragen in der entsprechenden Rubrik sowie im "Datenexport" ersichtlich.

#### Phase

4 - Berechtigungen

## User Stories (Triviale Anwendungsfälle)

### Einloggen
Als Cockpit-Nutzer möchte ich mich beim Datenschutz-Cockpit einloggen, damit niemand sonst auf meine Daten und Funktionen zugreifen kann.

### Handbuch konsultieren
Als Cockpit-Nutzer möchte ich Informationen im Handbuch nachlesen, damit ich das Datenschutz-Cockpit effektiv und effizient verwenden kann.

### Konto löschen**
Als Cockpit-Nutzer möchte ich mein Konto löschen können, damit ich einen sauberen Abschluss machen kann (z. B. Daten löschen, exportieren).

### Plattformbetrieb beenden
Als Betreiber möchte ich den Betrieb der Plattform einstellen können, damit ich meinen Geschäftsinteressen nachkommen kann.
