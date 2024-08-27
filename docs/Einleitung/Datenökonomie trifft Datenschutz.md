# Datenökonomie trifft Datenschutz


## Datenschutz: Was ist das?

In der Literatur werden die Begriffe „Privacy“ und „Datenschutz“ oft austauschbar verwendet. Tatsächlich gibt es auch erhebliche Überschneidungen – je nachdem, welche Definition man zugrunde legt. Aus unserer Sicht erklärt Oostveen[^1] das Zusammenspiel treffend (übersetzt aus dem Englischen):

„_Allgemein gesprochen bezieht sich Privacy auf die persönliche Sphäre, während sich der Datenschutz auf die Kontrolle über oder den Schutz von persönlichen Informationen bezieht. Der Hauptunterschied zwischen dem Schutz der Privatsphäre und dem Datenschutz liegt also in ihrem Gegenstand. Die Privatsphäre ist weiter gefasst als der Datenschutz, da sie nicht nur Informationen betrifft, sondern beispielsweise auch physische Räume oder bestimmte Entscheidungen, die Menschen treffen. Gleichzeitig ist die Privatsphäre aber auch enger gefasst, denn der Datenschutz gilt unabhängig davon, ob ein Eingriff in die persönliche Sphäre vorliegt“._

Darüber hinaus bezeichnet der Begriff „Privatheit“ einen (Ziel-)Zustand unverletzter Privatsphäre, welcher unter anderem durch Datenschutzmaßnahmen erreicht wird.

Um dies zu verdeutlichen, zeigt Abbildung 1, wie Menschen (grün), Gesetzgebung (orange) und Technologie (blau) in Bezug auf Privatsphäre und Datenschutz zueinanderstehen.

![Zusammenhänge zwischen menschlichen (grün), technologischen (blau) und regulatorischen Aspekten (orange) beim Schutz personenbezogener Daten (grau)](<Zusammenhänge.jpg>)
_Abbildung 1 - Zusammenhänge zwischen menschlichen (grün), technologischen (blau) und regulatorischen Aspekten (orange) beim Schutz personenbezogener Daten (grau)_

Wenn von Datenschutz die Rede ist, sind das zentrale Element „personenbezogene Daten“ (grau), also nach Art. 4 DSGVO „alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann“.

Datennutzer*innen verarbeiten personenbezogene Daten, um ihre Aufgaben zu erfüllen, z. B. Aufgaben im Zusammenhang mit Geschäftsprozessen wie der Einstellung von Mitarbeiter*innen. Diese personenbezogenen Daten beziehen sich auf eine bestimmte Person, die sogenannte betroffene Person (kurz: Betroffene*r). Die betroffene Person hat bestimmte Datenschutzbedarfe (d. h. Transparenz-, Selbstbestimmungs- und Schutzbedarfe). Diese Bedürfnisse beziehen sich auf bestimmte personenbezogene Daten und können daher je nach Datenlage unterschiedlich sein. Sowohl Datennutzer*innen als auch Betroffene interagieren mit dem Informationssystem über die Benutzeroberfläche, um z. B. personenbezogene Daten einzugeben oder abzurufen. Daher müssen beide Gruppen als Endnutzer betrachtet werden.

Die Gesetzgebung respektiert die Persönlichkeitsrechte (i.S.v. „freie Entfaltung der eigenen Persönlichkeit“ im Grundgesetz) der Betroffenen und regelt den Datenschutz, der durch technische und organisatorische Maßnahmen (TOMs) umgesetzt wird. TOMs können somit das Vertrauen der Endnutzer*innen in das Informationssystem stärken.

Ähnlich wie bei der CIA-Triade für die Informationssicherheit (Vertraulichkeit, Integrität, Verfügbarkeit) lassen sich auch für den Datenschutz grundlegende Gewährleistungsziele formulieren, auch wenn dies in der Literatur weniger verbreitet ist. Im Standard-Datenschutzmodell wird die CIA-Triade dahingehend um folgende Gewährleistungsziele erweitert:

- **Transparenz**
- **Intervenierbarkeit**
- **Nichtverkettung von personenbezogenen Verfahren**
- **Datenminimierung**

## Welche Herausforderungen bestehen beim Datenschutz in digitalen Ökosystemen?  

Digitale Ökosysteme stellen strukturbedingt besondere Anforderungen an den Datenschutz. Diese sollen im Folgenden erläutert werden.

**Datenökonomie** ist eine Wirtschaftsform, bei der die Beziehungen der Marktteilnehmer primär datenbasiert sind.[^2] Dies ist auch der Fall bei **digitalen Ökosystemen.** Ein solches ist ein sozio-technisches System, in dem Unternehmen und Menschen kooperieren, die zwar unabhängig sind, sich von der Teilnahme aber einen gegenseitigen Vorteil versprechen.[^3] Im Zentrum eines jeden digitalen Ökosystems steht eine **digitale Plattform**, die die Kooperation der verschiedenen Marktteilnehmer ermöglicht; sie vermittelt zwischen der Angebot- und der Nachfrageseite.

Mittlerweile sind digitale Ökosysteme in einigen Branchen **marktbeherrschend**. Beispiele sind die Plattformen Booking.com oder Airbnb für das Buchen von Unterkünften, Netflix für Videostreamingdienste und der Amazon Marketplace für Verkäufe von Waren.

Die wirtschaftlichen Vorteile, die sich sowohl für den Betreiber der Plattform als auch für die Anbieter von Waren oder Dienstleistungen und die Nutzer ergeben, bringen zugleich Herausforderungen in Bezug auf den Datenschutz mit sich. Denn die **Funktionsweise** digitaler Ökosysteme beruht gerade auf dem Austausch und der Nutzung von (auch sensiblen und personenbezogenen) Daten.

Für die Analyse der datenkonformen Erhebung und Verarbeitung von Daten können diese sinnvollerweise wie folgt in **Kategorien** eingeteilt werden:

- Kundenstammdaten (z. B Name und Adresse)
- Verhaltensdaten (z. B. Bewertungen)
- Trackingdaten (auch außerhalb der digitalen Plattform).

Die digitale Plattform fungiert als **Vermittler von Daten**. So müssen bei einem Kauf beispielsweise die erforderlichen Stammdaten des Nutzers über den Betreiber an den Anbieter übermittelt werden. Die Daten werden mithin immer auch von **Dritten** verarbeitet. Zudem findet regelmäßig auch eine Datenweitergabe an **Vierte** statt. Das kann beispielsweise der Fall sein, wenn Daten an Zahlungsdienstleister, über welche die Zahlung abgewickelt wird, übermittelt werden.

Problematisch können sich dabei die oft kommerziellen Interessen der Parteien (Betreiber, Anbieter, Vierte) gestalten, die möglicherweise in einem Widerspruch zu den Interessen der Nutzer stehen, die in der Bundesrepublik Deutschland durch das **Recht auf informationelle Selbstbestimmung** als Ausprägung des allgemeinen Persönlichkeitsrechts gemäß Art. 2 Abs. 1 i. V. m. Art. 1 Abs. 1 GG, auf EU-Ebene durch den **Schutz personenbezogener Daten** gemäß Art. 8 EU-Grundrechtecharta geschützt werden. Angesichts der riesigen Datenmengen, die innerhalb eines Ökosystems verarbeitet werden, besteht ein nicht zu unterschätzendes Risiko von Datenschutzverletzungen. **Missbrauch** und **Cyberangriffen** muss vorgebeugt werden.

Sobald die Daten personenbezogen sind – was bei Stammdaten fast immer der Fall sein dürfte – genießen sie im Anwendungsbereich der **DSGVO** einen besonderen Schutz. Aber auch das **Bundesdatenschutzgesetz** und das jeweils einschlägige **Landesdatenschutzgesetz** sind zu beachten.

Zudem könnte der kürzlich in Kraft getretene **Data Governance Act** (DGA) einschlägig sein. Der Betreiber der digitalen Plattform könnte als Datenmittler (auch: Datenintermediär) im Sinne des DGA gelten (Art. 2 Nr. 11 DGA und Erwägungsgrund 27 Satz 4 DGA: „Beispiele für Datenvermittlungsdienste schließen […] Orchestrierer von Ökosystemen zur gemeinsamen Datennutzung [ein]“). Dann wären insbesondere die Art. 10–15 DGA zu beachten. Der Datenmittler unterläge also einem Anmeldeverfahren (Art. 10 f. DGA) und müsste die Bedingungen des Art. 12 DGA zur Verwendung der Daten beachten.

Das Gesetz über digitale Märkte (kurz: GDM, engl. **Digital Markets Act**) – mittlerweile vollumfänglich in Kraft getreten – ist für all jene digitalen Ökosysteme anwendbar, die die sogenannte Torwächter- (engl. Gatekeeper) Funktion erfüllen. Die Europäische Kommission hat beispielsweise die Plattform Booking.com am 13.05.2024 als solchen Torwächter eingestuft,[^4] die Untersuchung von X (ehemals Twitter) ist noch nicht abgeschlossen.

Das Gesetz über digitale Dienste (engl. **Digital Services Act**), das die E-Commerce-Richtlinie ergänzt, ist für Vermittlungsdienste wie Online-Plattformen ebenfalls einschlägig.

Ein vollumfänglicher Datenschutz geht immer auch einher mit **Datensouveränität**, das heißt mit der Befähigung zur Kontrolle über die eigenen Daten. Auch die Gewährleistung von Datensouveränität steht auf Grund der **Vielzahl der Akteure** und der **Menge an Daten** bei digitalen Ökosystemen vor besonderen Herausforderungen und sollte deshalb im Einzelnen bewertet und beachtet werden.

Durchgängiger Datenschutz ist bereits für „traditionelle“ Systeme und Dienste komplex. Bei digitalen Ökosystemen gibt es eine Reihe von Besonderheiten, die die Umsetzung weiter verkomplizieren. Dies sind unter anderem:

- **Verlockungen:** Digitale Ökosysteme bieten große Vorteile für Anbieter und Konsument*innen. Gleichzeitig ist die Eintrittsbarriere niedrig. Das macht es äußerst verlockend, Daten preiszugeben.
- **Volatilität:** Digitale Ökosysteme sind, wie alle Ökosysteme, einem ständigen Wandel unterworfen: Anbieter kommen und gehen, Dienste werden überarbeitet, AGB und Datenschutzerklärungen werden aktualisiert und die Ökosysteme passen sich an geänderte Gesetze an.
- **Vertrauen:** Es ist äußerst schwierig, Vertrauen in ein ganzes Ökosystem aufzubauen, das aus potenziell Tausenden von Teilnehmern besteht. Vertrauen ist jedoch eine wesentliche Voraussetzung für die gemeinsame Nutzung von Daten.
- **Verantwortlichkeiten:** Für den Nutzer bzw. die Nutzerin ist es schwierig, herauszufinden, wer in einem Ökosystem oder in einem Anwendungsfall Verantwortlicher bzw. Ansprechpartner*in bei Datenschutzfragen ist.
- **Konsistenz:** Die Teilnehmer an einem digitalen Ökosystem sind unabhängige Unternehmen. Jedes dieser Unternehmen hat seine eigenen AGBs, Datenschutzerklärungen und ggf. Datenschutzeinstellungen. Unterschiedliche Gestaltungen und Formulierungen machen es den Nutzer*innen jedoch äußerst schwer, diese zu verstehen und zu vergleichen.

****

| [![](/Daccord/assets/images/backward-solid.svg) Plattformökonomie](<Digitale Plattformen und Plattformökonomie>) | [Datenverarbeitungen ![](/Daccord/assets/images/forward-solid.svg)](<Datenverarbeitungen in digitalen Ökosystemen>) |




[^1]: Oostveen, M. (2016). Warum Privacy ≠ Datenschutz ist (und wie sie sich überschneiden), Berlin: Alexander von Humboldt Institut für Internet und Gesellschaft. [https://www.hiig.de/warum-privacy-%E2%89%A0-datenschutz-ist-und-wie-sie-sich-ueberschneiden/](https://www.hiig.de/warum-privacy-%E2%89%A0-datenschutz-ist-und-wie-sie-sich-ueberschneiden/)

[2]: Weber/Gernert, Data Governance – Datenteilung in Ökosystemen rechtskonform gestalten, in: Rohde/Bürger/Peneva/Mock (Hrsg.), Datenwirtschaft und Datentechnologie, S. 111.

[3]:[https://www.iese.fraunhofer.de/de/leistungen/digitale-oekosysteme.html#Was-sind-Digitale-oekosysteme](https://www.iese.fraunhofer.de/de/leistungen/digitale-oekosysteme.html#Was-sind-Digitale-oekosysteme) (zuletzt abgerufen am 22.05.2024).

[4]:[https://digital-strategy.ec.europa.eu/en/news/commission-designates-booking-gatekeeper-and-opens-market-investigation-x](https://digital-strategy.ec.europa.eu/en/news/commission-designates-booking-gatekeeper-and-opens-market-investigation-x) (zuletzt abgerufen am 14.05.2024).

