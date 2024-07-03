# Stakeholder



Der Begriff Stakeholder (Interessenvertreter, von engl. stake: Anteil) bezeichnet alle Perso-nen oder Gruppen, die die Anforderungen an ein System beeinflussen oder von dessen Ent-wicklung oder Betrieb in irgendeiner Weise betroffen sind.  Ein Stakeholder kann prototy-pisch durch eine Persona beschrieben sein. Bei einer Persona werden unter anderem Cha-raktereigenschaften, Erfahrungen und Werte des Stakeholders beschrieben. Diese Eigen-schaften können die Gestaltung des Datenschutz-Cockpits beeinflussen. Entsprechend gibt es diese beiden Fragestellungen:

1.	Welche Stakeholder gibt es hinsichtlich des Datenschutz-Cockpits?
2.	Welche Eigenschaften haben diese Stakeholder?

## Vorgehen 

Die Stakeholder wurden vom Projektkonsortium gesammelt. Dabei wurde auf Arbeiten zu typischen Stakeholdern von digitalen Ökosystemen zurückgegriffen, die vom Fraunhofer IESE erstellt wurden.

Zur besseren Übersicht werden Stakeholder häufig kategorisiert. Bei der Produktentwicklung ist ein bewährter Ansatz für die Einordnung von Stakeholdern das sogenannte Zwiebelschalenmodell [^1]. In der Mitte, dem Kern, steht das Produkt oder System und die Stakeholder werden typischerweise in drei Kreisen bzw. „Zwiebelschalen“ eingeteilt: der innere Kreis bildet die direkte Umgebung, ein weiterer Kreis stellt die indirekte Umgebung dar und der äußere Kreis bietet Platz für die Berücksichtigung der Stakeholder aus der weiteren Umgebung.

In D’accord wurde diese Darstellung zunächst auch als Hilfsmittel gewählt. Jedoch sind hier zwei Systeme zu berücksichtigen: das im D’accord-Projekt zu entwickelnde Datenschutz-Cockpit sowie die digitale Plattform im digitalen Ökosystem, wo das Datenschutz-Cockpit zum Einsatz kommen soll. Stakeholder eines Systems sind nicht zwingend Stakeholder beider Systeme. Entsprechend wurden verschiedene Varianten des Zwiebelschalenmodells ausprobiert, bei denen sich die Kreise des Modells überlappten. Hierdurch konnte festgestellt werden, dass die meisten Stakeholder in unterschiedlichen Bezügen zu beiden Systemen stehen; nur wenige Stakeholder im digitalen Ökosystem hatten gar keinen Bezug zum Datenschutz-Cockpit und keine Stakeholder standen ausschließlich mit dem Datenschutz-Cockpit in Verbindung.

Entsprechend wurde die Entscheidung getroffen, die Stakeholder nicht nach dem Zwiebelschalenmodell, sondern in einer Matrix mit mehreren Dimensionen einzuteilen. Somit kann der großen Variabilität zwischen den Stakeholdern Rechnung getragen werden. Diese Einteilung der Stakeholder erfolgte nach:

- Rolle im digitalen Ökosystem und Intensität/Häufigkeit der Verwendung des digitalen Ökosystems;
- Rolle bzgl. des Datenschutz-Cockpits und Intensität/Häufigkeit der Verwendung des Datenschutz-Cockpits;
- Bezug zur Verarbeitung personenbezogener Daten;
- Wichtigkeit und Einfluss, als Einteilung für die Ableitung einer Einfluss-und-Wichtigkeits-Matrix [^2] zitiert in Groot, 2001[^3]

Eine erste Beschreibung der Stakeholder nach den genannten Dimensionen lag vor, wodurch die Anwendbarkeit der Dimensionen bestätigt wurde. In der zweiten Iteration wurden die Stakeholder in das Requirements-Management-Tool ReqSuite aufgenommen und dort anhand dieser Kategorien beschrieben.

Die Stakeholder können, wie bereits gesagt, detaillierter als Persona beschrieben werden. Das in der Abbildung gezeigte Persona-Template nennt relevante Eigenschaften eines Stakeholders und zeigt, wie diese dokumentiert werden können. Es wurde im Konsortium entwickelt und greift unter anderem Eigenschaften aus dem Nutzergruppen-Template des DsiN-Sicherheitsindex[^4] auf. Zudem sind Eigenschaften eingeflossen, die das Projektteam aufgrund der Erfahrungen aus früheren Projekten im Bereich Usable Security & Privacy als relevant erachtet.

Im Folgenden beschreiben wir alle Stakeholder pro Kategorie, sortiert nach deren Wichtig-keit. Eine Übersicht zeigt folgende Abbildung:

![Übersicht über die Stakeholder](<Stakeholders.png>)
_Abbildung 1: Übersicht über die Stakeholder_

## Benutzergruppenprofile

### Betroffener (STH4)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | [Siehe Glossareintrag](../../Einleitung/Glossar#betroffene-person-gb60) |
| **Rolle im digitalen Ökosystem** | Benutzergruppenprofil|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Nutzung der UI für Güterkonsumenten|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angle-up-solid.svg) häufig|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | Betroffener|
| **Einfluss** | ![](../../assets/images/angle-down-solid.svg) kaum|
| **Wichtigkeit** | ![](../../assets/images/angles-up-solid.svg) hoch |


### Datennutzer (STH3)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | Ein Datennutzer ist eine Person, die personenbezogene Daten eines Betroffenen verarbeitet|
| **Rolle im digitalen Ökosystem** | Benutzergruppenprofil|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Nutzung der UI für Güterkonsumenten|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angle-down-solid.svg) gelegentlich|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | Datennutzer|
| **Einfluss** | ![](../../assets/images/angle-up-solid.svg) teilweise|
| **Wichtigkeit** | ![](../../assets/images/angles-up-solid.svg) hoch |


### Verantwortlicher (STH2)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | [Siehe Glossareintrag](../../Einleitung/Glossar#verantwortlicher-gb51) |
| **Rolle im digitalen Ökosystem** | Betreiber|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Überprüfung / Sicherstellung der Einhaltung des Datenschutzes|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angles-up-solid.svg) sehr häufig|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | Verantwortlicher|
| **Einfluss** | ![](../../assets/images/angles-up-solid.svg) hoch|
| **Wichtigkeit** | ![](../../assets/images/angles-up-solid.svg) hoch |


### Cockpit-Nutzer (STH1)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | Der Cockpit-Nutzer ist eine Person, die mit dem Front-End des Datenschutz-Cockpits interagiert|
| **Rolle im digitalen Ökosystem** | Benutzergruppenprofil|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Nutzung der UI für Güteranbieter|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angle-up-solid.svg) häufig|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | Kontextabhängig|
| **Einfluss** | ![](../../assets/images/angle-down-solid.svg) kaum|
| **Wichtigkeit** | ![](../../assets/images/angles-up-solid.svg) hoch |

### Güteranbieter (zukünftig) (STH19)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | [Siehe Glossareintrag](../../Einleitung/Glossar#güteranbieter-gb91) |
| **Rolle im digitalen Ökosystem** | Güteranbieter|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | <tbd>|
| **Häufigkeit der Nutzung der Cockpit-UI** | <tbd>|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | kein direkter Bezug zu den Daten|
| **Einfluss** | <tbd>|
| **Wichtigkeit** | <tbd> |


### Güteranbieter (gegenwärtig) (STH17)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | [Siehe Glossareintrag](../../Einleitung/Glossar#güteranbieter-gb91) |
| **Rolle im digitalen Ökosystem** | <tbd>|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | <tbd>|
| **Häufigkeit der Nutzung der Cockpit-UI** | <tbd>|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | <tbd>|
| **Einfluss** | <tbd>|
| **Wichtigkeit** | <tbd> |


### Externer Anbieter (Dienstleister auf der Plattform) (STH18)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | [Siehe Glossareintrag](../../Einleitung/Glossar#externer-anbieter-gb95) |
| **Rolle im digitalen Ökosystem** | zusätzlicher Dienstanbieter|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Nutzung der UI für Güteranbieter|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angle-down-solid.svg) gelegentlich|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | Datennutzer|
| **Einfluss** | ![](../../assets/images/angle-up-solid.svg) teilweise|
| **Wichtigkeit** | ![](../../assets/images/angle-up-solid.svg) teilweise |


### Externer Anbieter (B2B-Zulieferer) (STH20)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | [Siehe Glossareintrag](../../Einleitung/Glossar#externer-anbieter-gb95) |
| **Rolle im digitalen Ökosystem** | externer Dienstleister oder Anwender (indirekter Einfluss)|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Kein Bezug|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angles-down-solid.svg) nie / nicht zutreffend|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | Datennutzer|
| **Einfluss** | ![](../../assets/images/angles-down-solid.svg) gar kein(e)|
| **Wichtigkeit** | ![](../../assets/images/angle-down-solid.svg) kaum |

## Betreiber & Umfeld

### Aufsichtsbehörde (STH13)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | Eine Aufsichtsbehörde ist eine Organisation, die als Behörde eine Aufsichtsfunktion über privatrechtliche oder staatliche Institutionen ausführt. Je nach Domäne sind unterschiedliche Aufsichtsbehörden für den Betreiber eines digitalen Ökosystems zuständig|
| **Rolle im digitalen Ökosystem** | nur prüfend / regulatorisch|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Überprüfung / Sicherstellung der Einhaltung des Datenschutzes|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angles-down-solid.svg) nie / nicht zutreffend|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | kein direkter Bezug zu den Daten|
| **Einfluss** | ![](../../assets/images/angle-down-solid.svg) kaum|
| **Wichtigkeit** | ![](../../assets/images/angles-up-solid.svg) hoch


### Initiator (STH11)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | Der Initiator ist eine Person oder Organisation, die die Initiative zur Entwicklung eines digitalen Ökosystems ergreift und die Konzipierung, Finanzierung und Geschäftsentwicklung begleitet, bis der Betreiber diese Aufgaben eigenständig ausüben kann|
| **Rolle im digitalen Ökosystem** | Initiator|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Kein Bezug|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angles-down-solid.svg) nie / nicht zutreffend|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | kein direkter Bezug zu den Daten|
| **Einfluss** | ![](../../assets/images/angles-up-solid.svg) hoch|
| **Wichtigkeit** | ![](../../assets/images/angles-up-solid.svg) hoch


### Betreiber (STH5)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | [Siehe Glossareintrag](../../Einleitung/Glossar#betreiber-eines-digitalen-ökosystems-gb83) |
| **Rolle im digitalen Ökosystem** | Betreiber|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Bereitstellung des Datenschutz-Cockpits / Infrastruktur|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angles-up-solid.svg) sehr häufig|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | Verantwortlicher|
| **Einfluss** | ![](../../assets/images/angles-up-solid.svg) hoch|
| **Wichtigkeit** | ![](../../assets/images/angles-up-solid.svg) hoch


### Auditor/Gutachter (STH12)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | Ein Auditor ist eine Organisation, die das Qualitätsmanagement des Betreibers überprüft|
| **Rolle im digitalen Ökosystem** | nur prüfend / regulatorisch|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Überprüfung / Sicherstellung der Einhaltung des Datenschutzes|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angle-down-solid.svg) selten|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | kein direkter Bezug zu den Daten|
| **Einfluss** | ![](../../assets/images/angles-down-solid.svg) gar kein(e)|
| **Wichtigkeit** | ![](../../assets/images/angle-up-solid.svg) teilweise


### Werbetreibender (STH10)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | Ein Werbetreibender im Kontext eines digitalen Ökosystem ist ein Unternehmen, das für Güter auf der digitalen Plattform wirbt|
| **Rolle im digitalen Ökosystem** | zusätzlicher Dienstanbieter|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Nutzung der UI für Güteranbieter|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angle-down-solid.svg) selten|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | Datennutzer|
| **Einfluss** | ![](../../assets/images/angles-down-solid.svg) gar kein(e)|
| **Wichtigkeit** | ![](../../assets/images/angle-up-solid.svg) teilweise


### Datenschutzbeauftragter (STH6)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | Ein Datenschutzbeauftragter ist eine Person, die sich beim Betreiber um die Einhaltung des Datenschutzes kümmert. Abhängig von der Größe und Kerntätigkeit ist der Betreiber ggf. gesetzlich dazu verpflichtet, einen Datenschutzbeauftragten zu benennen|
| **Rolle im digitalen Ökosystem** | Betreiber|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Überprüfung / Sicherstellung der Einhaltung des Datenschutzes|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angle-down-solid.svg) gelegentlich|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | Verantwortlicher|
| **Einfluss** | ![](../../assets/images/angle-up-solid.svg) teilweise|
| **Wichtigkeit** | ![](../../assets/images/angle-up-solid.svg) teilweise


### Onboarding-Verantwortlicher (STH7)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | Ein Onboarding-Verantwortlicher ist eine Person, die beim Betreiber für die praktisch-organisatorische, vertragliche und technische Integration der Beteiligten in das digitale Ökosystem zuständig ist|
| **Rolle im digitalen Ökosystem** | Broker|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Kommunikation zu Dritten|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angle-up-solid.svg) häufig|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | kein direkter Bezug zu den Daten|
| **Einfluss** | ![](../../assets/images/angle-down-solid.svg) kaum|
| **Wichtigkeit** | ![](../../assets/images/angle-down-solid.svg) kaum


### Kundenservice (STH16)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | Der Kundenservice des Betreibers ist eine Personengruppe, die technische und fachliche (interne oder externe) Unterstützung bietet, den Beteiligten des digitalen Ökosystems und entsprechend den Cockpit-Nutzern für Rückfragen zur Verfügung steht und diese bei Problemen rund um die Nutzung unterstützt|
| **Rolle im digitalen Ökosystem** | Betreiber|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Nutzung einer zusätzlichen UI (Demo, Kundenservice, et cetera)|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angle-up-solid.svg) häufig|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | Datennutzer|
| **Einfluss** | ![](../../assets/images/angles-down-solid.svg) gar kein(e)|
| **Wichtigkeit** | ![](../../assets/images/angles-down-solid.svg) gar kein(e)


### Externer Anbieter (Cloudservice / -infrastruktur) (STH15)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | [Siehe Glossareintrag](../../Einleitung/Glossar#externer-anbieter-gb95) |
| **Rolle im digitalen Ökosystem** | zusätzlicher Dienstanbieter|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Bereitstellung des Datenschutz-Cockpits / Infrastruktur|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angles-down-solid.svg) nie / nicht zutreffend|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | Verantwortlicher|
| **Einfluss** | ![](../../assets/images/angles-up-solid.svg) hoch|
| **Wichtigkeit** | ![](../../assets/images/angles-down-solid.svg) gar kein(e)


### Wettbewerber (STH14)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | Ein Wettbewerber ist eine Organisation, die mit dem Betreiber konkurriert, insbesondere wenn sie ein anderes digitales Ökosystem betreibt, das einen vergleichbaren digitalen Ökosystemdienst anbietet|
| **Rolle im digitalen Ökosystem** | externer Dienstleister oder Anwender (indirekter Einfluss)|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Kein Bezug|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angles-down-solid.svg) nie / nicht zutreffend|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | kein direkter Bezug zu den Daten|
| **Einfluss** | ![](../../assets/images/angles-down-solid.svg) gar kein(e)|
| **Wichtigkeit** | ![](../../assets/images/angles-down-solid.svg) gar kein(e)


### Plattformentwickler (STH9)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | Die Plattformentwickler des Betreibers sind für die (Weiter-)Entwicklung der digitalen Plattform und die Funktionen des digitalen Ökosystems zuständig|
| **Rolle im digitalen Ökosystem** | Betreiber|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Interaktion mit Backend|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angles-down-solid.svg) nie / nicht zutreffend|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | kein direkter Bezug zu den Daten|
| **Einfluss** | ![](../../assets/images/angles-up-solid.svg) hoch|
| **Wichtigkeit** | ![](../../assets/images/angles-down-solid.svg) gar kein(e)


### Wartungspersonal (STH8)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | Das Wartungspersonal beim Betreiber ist eine Personengruppe, die für die Instandhaltung der digitalen Plattform Sorge trägt|
| **Rolle im digitalen Ökosystem** | Betreiber|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Interaktion mit Backend|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angles-down-solid.svg) nie / nicht zutreffend|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | kein direkter Bezug zu den Daten|
| **Einfluss** | ![](../../assets/images/angle-up-solid.svg) teilweise|
| **Wichtigkeit** | ![](../../assets/images/angles-down-solid.svg) gar kein(e) |

## Güterkonsument

### Güterkonsument (zukünftig) (STH24)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | [Siehe Glossareintrag](../../Einleitung/Glossar#güterkonsument-gb92) |
| **Rolle im digitalen Ökosystem** | Güterkonsument|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Nutzung einer zusätzlichen UI (Demo, Kundenservice, et cetera)|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angle-down-solid.svg) selten|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | kein direkter Bezug zu den Daten|
| **Einfluss** | <tbd>|
| **Wichtigkeit** | <tbd> |


### Externer Anbieter (Dienstleistung für Güterkonsument außerhalb der Plattform) (STH23)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | [Siehe Glossareintrag](../../Einleitung/Glossar#externer-anbieter-gb95) |
| **Rolle im digitalen Ökosystem** | <tbd>|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | <tbd>|
| **Häufigkeit der Nutzung der Cockpit-UI** | <tbd>|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | kein direkter Bezug zu den Daten|
| **Einfluss** | <tbd>|
| **Wichtigkeit** | <tbd> |


### Güterkonsument (gegenwärtig) (STH21)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | [Siehe Glossareintrag](../../Einleitung/Glossar#güterkonsument-gb92) |
| **Rolle im digitalen Ökosystem** | <tbd>|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | <tbd>|
| **Häufigkeit der Nutzung der Cockpit-UI** | <tbd>|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | Betroffener|
| **Einfluss** | <tbd>|
| **Wichtigkeit** | <tbd> |


### Anwender (STH22)

| **Eigenschaft** | **Beschreibung** |
| -- | -- |
| **Stakeholder-Beschreibung** | Ein Anwender ist eine Person oder Organisation, die kein Beteiligter des digitalen Ökosystems ist, sondern als B2B- oder B2C-Kunde vom Güterkonsument vom digitalen Ökosystemdienst profitiert|
| **Rolle im digitalen Ökosystem** | externer Dienstleister oder Anwender (indirekter Einfluss)|
| **Hauptsächlicher Bezug zum Datenschutz-Cockpit** | Kein Bezug|
| **Häufigkeit der Nutzung der Cockpit-UI** | ![](../../assets/images/angles-down-solid.svg) nie / nicht zutreffend|
| **Rolle bzgl. personenbezogener Daten im Datenschutz-Cockpit** | Betroffener|
| **Einfluss** | ![](../../assets/images/angles-down-solid.svg) gar kein(e)|
| **Wichtigkeit** | ![](../../assets/images/angle-up-solid.svg) teilweise |

## Quellen

[^1]:  I. F. Alexander (2005). A taxonomy of stakeholders: Human roles in system development. International Journal of Technology and Human Interaction, 1(1), 23–59.

[^2]:  F. Fonteh, W. Lammers, A. Mmbaga, S. Mubiiru, & F. Tibayungwa (1998). Targeting Development and Research for smallholder dairy systems of the Lake Crescent Region of Uganda. Technical report. Working Document Series 71. Wageningen, the Netherlands: ICRA.

[^3]:   A. M. Groot (2001). Stakeholder matrices: Guidelines. ICRA Learning Materials. [Online] Available: https://www.dors.it/public/ar54/20!!_Stakeholder_Matrices-Guidelines.pdf

[^4]: Deutschland sicher im Netz e.V. (2022). DsiN-Sicherheitsindex 2022. https://www.sicher-im-netz.de/dsin-sicher-heitsindex-2022