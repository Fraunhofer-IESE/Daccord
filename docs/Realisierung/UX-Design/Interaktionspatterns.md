# Interaktionspatterns

Patterns sind bewährte Lösungsschablonen für wiederkehrende Entwurfsprobleme. Bei der Gestaltung von Benutzerschnittstellen können Interaktionspatterns genutzt werden, die Lösungen zu bestimmten Problemen bei der Interaktionsgestaltung liefern. Diese Patterns tragen zur Steigerung der Entwicklungseffizienz und zugleich zur Erhöhung der Konsistenz der Benutzeroberflächen bei.

Um zu identifizieren, welche Interaktionspatterns zur Umsetzung von Datenschutz-Cockpits in digitalen Ökosystemen geeignet sind, wurden in D'accord existierende Ökosysteme aus unterschiedlichen Domänen untersucht. Alle identifizierten Patterns sind bereits in verschiedenen Patternsammlungen dokumentiert. In der folgenden Übersicht sind die Patterns zusammenfasst und mit den jeweiligen Quellen bzw. weiterführenden Informationen verlinkt.



## Transparenz-Patterns


### Transparenz über berechtigte Interessen (Informed Implicit Consent)
In Fällen, in denen die Verarbeitung von personenbezogenen Daten auf einem berechtigten Interesse basiert, müssen die betroffenen Personen vor Beginn der Verarbeitung umfassend über diese informiert werden.

In digitalen Ökosystemen müssen Nutzende beispielweise vor Beginn der Nutzung über die mit einhergehenden Datenverarbeitungen informiert werden, um Gelegenheit zu geben von der Nutzung der Angebote abzusehen. Dabei müssen alle rechtlich vorgeschriebenen Informationen in einfacher und präziser Form präsentiert werden, um die Informiertheit der Nutzenden zu gewährleisten.
#### Quelle
* [privacypatterns.org: Informed-Implicit-Consent](https://privacypatterns.org/patterns/Informed-Implicit-Consent)


### Aktivitätsverlauf (Event Log)
Digitale Ökosysteme basieren auf dem Austausch von Daten und anderen Gütern zwischen den Nutzenden bzw. einer Vielzahl an Diensteanbietern. Besonders bei einer langjährigen Nutzung eines digitalen Ökosystems können Nutzende den Überblick verlieren, insbesondere über die Verbreitung ihrer personenbezogenen Daten. 

Ein Aktivitätsverlauf soll alle in dem digitalen Ökosystems ausgeführten Aktivitäten chronologisch dokumentieren. Dabei können insbesondere die Art der Aktion sowie die beteiligten Ökosystemteilnehmenden dokumentiert werden.
#### Quelle
* [catalogue.projectsbyif.com: Activity-log](https://catalogue.projectsbyif.com/patterns/activity-log/)


### Eingebettete Hilfsfunktionen (Inline Help)
In digitalen Ökosystemen werden Nutzende mit einer Vielzahl von Diensteanbietern verbunden. Dies ist häufig nicht einfach zu überschauen und kann zu datenschutzbezogenen Fragen führen. Um Antworten zu erhalten, müssen Nutzende meist den aktuellen Kontext (z. B. Tätigen eines Einkaufs) verlassen und auf entsprechenden Hilfeseiten nach den gesuchten Informationen recherchieren. 

Eingebettete Hilfsfunktionen sollen die benötigten Informationen bereitstellen, ohne dass die Nutzenden den aktuellen Kontext verlassen müssen. Die Hinweise sollen dabei bestmöglich mit Bezug zur aktuell von den Nutzenden ausgeführten Aktion konkretisiert sein.
#### Quellen
* [ui-patterns.com: Inline Help Box](https://ui-patterns.com/patterns/InlineHelpBox)
* [ui-patterns.com: Inline Hints](https://ui-patterns.com/patterns/inline-hints)


### Privacy Dashboard 
Ein digitales Ökosystem, dass personenbezogene Daten von Nutzenden verarbeitet, muss den betroffenen Personen Auskunft darüber geben, welche Daten konkret vom digitalen Ökosystem genutzt werden. Insbesondere bei großen Datenmengen wie beispielsweise Nutzungsdaten kann dies schnell unübersichtlich werden.

Mit einem Privacy Dashboard können digitale Ökosysteme ihren Nutzenden detaillierte und einfach verständliche Informationen über die verarbeiteten Daten anbieten. Hierbei können auch Visualisierungen oder Statistiken angewendet werden. 
#### Quellen
* [privacypatterns.org: Privacy Dashboard](https://privacypatterns.org/patterns/Privacy-dashboard)



### Datenschutzerklärung (Privacy Policy Display)
Der Verantwortliche muss die betroffenen Personen umfassend über die Verarbeitung ihrer personenbezogenen Daten informieren. Im Internet geschieht dies üblicherweise in Form einer Datenschutzerklärung. Eine Datenschutzerklärung sollte immer dann verwendet werden, wenn personenbezogene Daten in einem digitalen Ökosystem verarbeitet werden.

Bei der Erstellung der Datenschutzerklärung ist darauf zu achten, dass diese alle gesetzlich geforderten Inhalte enthält. Gleichzeitig müssen die Informationen in leicht zugänglicher Form und in einer klaren und einfachen Sprache übermittelt werden, damit die Nutzenden mögliche Konsequenzen verstehen und fundierte Entscheidungen treffen können.
#### Quellen
* [privacypatterns.org: Privacy Policy Display](https://privacypatterns.org/patterns/Privacy-Policy-Display)
* [privacypatterns.org: Dynamic Privacy Policy Display](https://privacypatterns.org/patterns/Dynamic-Privacy-Policy-Display)
* C. Graf, P. Wolkerstorfer, A. Geven, and M. Tscheligi, “A Pattern Collection for Privacy Enhancing Technology”, The Second International Conferences of Pervasive Patterns and Applications (Patterns 2010), vol. 2, no. 1, pp. 72–77, 2010.
* [primelife.ercim.eu](http://primelife.ercim.eu/images/stories/deliverables/d4.1.3-hci_pattern_collection_v2-public.pdf)
* S. Fischer-Hübner, C. Köffel, J.-S. Pettersson, P. Wolkerstorfer, C. Graf, L. E. Holtz, U. König, H. Hedbom, and B. Kellermann, “HCI Pattern Collection - Version 2”, 2010.


### Tabelle mit personenbezogenen Daten (Personal Data Table)
Nutzende haben ein Recht darauf, zu erfahren, welche personenbezogenen Daten in einem digitalen Ökosystem verarbeitet werden, wollen jedoch nicht unbedingt laufend darüber benachrichtigt werden. Die Aufbereitung der entsprechenden Informationen in Form einer Tabelle schafft Transparenz und ermöglicht es den Nutzenden, gewünschte Informationen bei Interesse einzusehen. 

Die Tabelle sollte insbesondere Informationen darüber enthalten, welche Kategorien personenbezogener Daten verarbeitet werden, auf welcher Rechtsgrundlage und zu welchem Zweck die Verarbeitung stattfindet, an welche Empfänger die Daten übermittelt werden und wie lange die Daten gespeichert werden.
#### Quelle
* [privacypatterns.org: Personal Data Table](https://privacypatterns.org/patterns/Personal-Data-Table)


### Profil (Profile)
Ein Profil verleiht den Nutzenden des digitalen Ökosystems ein Gesicht. Dieses Pattern sollte insbesondere dann verwendet werden, wenn viele Inhalte des Ökosystems von den Nutzenden erstellt werden oder das Ökosystem den Aufbau von Beziehungen zwischen den Nutzenden fördert.  

Die Felder des Profils sollten sorgfältig ausgewählt sein und die Nutzenden sollten die Möglichkeit haben, ihre Profilinformationen nachträglich zu ändern. Funktionen zur Personalisierung fördern die Identifikation der Nutzenden mit ihrem Profil und dem digitalen Ökosystem.
#### Quelle 
* Crumlish, Christian, and Erin Malone. Designing Social Interfaces: Principles, Patterns, and Practices for Improving the User Experience. 2nd ed. Sebastopol, Ca: O’Reilly Media, Inc., August, 2015. pp. 118-125.


### Mehrstufige Datenschutzrichtlinie (Layered Policy Design)
Datenschutzrichtlinien sind in der Regel umfangreiche, komplexe und schwer verständliche Dokumente. In der heute gängigen Praxis dienen sie eher dazu, dass die Verantwortlichen sich rechtlich absichern, als dass die Betroffenen informiert werden. 

Eine mehrstufig aufgebaute Datenschutzrichtlinie hilft den Nutzenden dabei, sich schnell einen Überblick zu verschaffen und die für sie relevanten Informationen zu finden. Wichtige Aspekte, die am ehesten gelesen werden, sollten im Vordergrund stehen; Detailinformationen können (insbesondere bei umfangreichen Datenschutzrichtlinien) zunächst ausgeblendet sein.
#### Quelle
* [privacypatterns.org: Layered Policy Design](https://privacypatterns.org/patterns/Layered-policy-design)


### Datenschutz in einfacher Sprache (User-friendly Privacy Wording)
Nutzende digitaler Ökosysteme werden oft mit einer Vielzahl von Datenschutzhinweisen konfrontiert, die sie über unterschiedliche Sachverhalte informieren, insbesondere über die Zwecke, zu denen personenbezogenen Daten erhoben bzw. verarbeitet werden. Diese Informationen enthalten meist unnötige Details und sind für juristische Laien schwer verständlich. 

Alle datenschutzrelevanten Informationen sollten leicht verständlich und in kurzen, prägnanten Sätzen formuliert sein. Hierbei sollte auf bekannte, standardisierte Begriffe zurückgegriffen werden. Im Zweifel können Tests mit repräsentativen Nutzenden aus der Zielgruppe durchgeführt werden.
#### Quelle
* [privacypatterns.org: Privacy Aware Wording](https://privacypatterns.org/patterns/Privacy-Aware-Wording)




## Kontroll-Patterns


### Privatheitseinstellungen (Privacy Settings)
Bei der Nutzung eines digitalen Ökosystems werden häufig zahlreiche personenbezogene Daten verarbeitet. Je nach Rechtsgrundlage der Datenverarbeitung steht den Nutzenden das Recht zu, selbst über die Verarbeitung ihrer Daten zu entscheiden. 

An einem zentralen Ort sollen Nutzende sowohl eine Übersicht über alle möglichen Privatheitseinstellungen erhalten als auch Gelegenheit haben, diese zu ändern. Dabei sollen lange Listen möglicher Einstellungsoptionen vermieden werden und die Einstellungen in thematisch zusammenhängende Gruppen unterteilt werden.
#### Quellen
* [ui-patterns.com: Settings](https://ui-patterns.com/patterns/settings)
* [socialpatterns.adl.org: Account Privacy Settings](https://socialpatterns.adl.org/patterns/account-privacy-setting/)


### Zustimmung (Explicit Consent)
Wenn personenbezogene Daten auf Grundlage einer Einwilligung verarbeitet werden sollen, müssen Nutzende eines digitalen Ökosystems diese Einwilligung gemäß den rechtlichen Vorgaben aus der DSGVO erteilen. 

Um die Informiertheit der Nutzenden bei der Erteilung oder Verweigerung einer Einwilligung zu gewährleisten, müssen alle relevanten Informationen über die geplante Datenverarbeitung in einfacher und präziser Form präsentiert werden. Der Mechanismus zum Erteilen der Einwilligung muss unmissverständlich bedienbar sein. Es sollte vermieden werden, dass eine Zustimmung aus Zeitnot getätigt wird oder Nutzende zur Einwilligung gezwungen werden.  
#### Quelle
* [privacypatterns.org: Obtaining Explicit Consent](https://privacypatterns.org/patterns/Obtaining-Explicit-Consent)


### Selektive Zugriffssteuerung (Selective Access Control)
Nutzende digitaler Ökosysteme müssen eine wirksame Kontrolle über ihre personenbezogenen Daten haben und selbst entscheiden können, mit wem sie diese teilen. 

Sowohl bei erstellten Inhalten als auch bei (automatisch) generierten Daten mit Personenbezug sollten die Nutzenden daher die Möglichkeit haben, die Zielgruppe bzw. die Empfänger zu definieren und die Zugriffsregeln festzulegen. 
#### Quelle
* [privacypatterns.org: Selective Access-Control](https://privacypatterns.org/patterns/Selective-Access-Control)


### Funktionen steuern (Opt-in / Opt-out)
Neben den Kernfunktionen bieten digitale Ökosystem meist zahlreiche weitere Funktionen an, mit denen häufig auch personenbezogene Daten verarbeitet werden. Nicht alle Nutzenden benötigen jedoch den vollen Funktionsumfang eines digitalen Ökosystems und könnten somit die Menge der Verarbeitungen ihrer personenbezogenen Daten einschränken.

Nutzende sollten selbst wählen können, welche erweiterten Funktionen sie nutzen möchten. Dafür muss zu jeder Funktion dargestellt werden, welche Datenverarbeitungen dabei stattfinden (Granularität der Einwilligung).
#### Quellen
* [privacypatterns.org: Enable-Disable Functions](https://privacypatterns.org/patterns/Enable-Disable-Functions)
* Baraki, H., Geihs, K., Hoffmann, A., Voigtmann, C., Kniewel, R., Macek, B. E., & Zirfas, J. (2014). Towards Interdisciplinary Design Patterns for Ubiquitous Computing Applications. Kassel, Germany. https://books.google.nl/books?id=D40vBgAAQBAJ
* C. Kuner, European Data Protection Law, Corporate Compliance and Regulation. Oxford University Press, 2007. G. Hornung and C. Schnabel, “Data protection in germany: The population census decision and the right to informational self-determination”, Computer Law & Security Review, vol. 25, no. 1, pp. 84–88, 2009.


### Privatheitsfreundliche Voreinstellungen (Good Defaults)
Bei der Einrichtung eines Accounts in einem digitalen Ökosystems müssen häufig initial zahlreiche Einstellungen getätigt werden. Da Nutzende meist möglichst schnell die Dienste in Anspruch nehmen möchten, bleiben wenig Zeit und kognitive Ressourcen für potenziell privatheitsrelevante Entscheidungen.

Durch privatheitsfreundliche Voreinstellungen können Nutzende beim Einrichtungsprozess unterstützt werden. 
#### Quellen
* [ui-patterns.com: Good Defaults](https://ui-patterns.com/patterns/GoodDefaults)
* [ui-patterns.com: Status-qou-Bias](https://ui-patterns.com/patterns/Statusquo-bias)


### Maskieren (Masquerade)
Digitale Ökosysteme verlangen meist die Angabe einer Mindestmenge personenbezogener Daten, um sich zu registrieren. Während der Nutzung möchten die Nutzenden jedoch möglicherweise frei entscheiden, welche Daten sie an welche Empfänger freigeben.

Wenn möglich, sollte Nutzenden die Möglichkeit eingeräumt werden, nicht benötigte Daten für eine bestimmte Aktion zu maskieren und die Verarbeitung somit dynamisch einzuschränken. Hierzu soll den Nutzenden ein geeignetes Bedienfeld geboten werden, mit dem Daten beispielsweise nach Kategorie oder der Möglichkeit einer Identifizierung der eigenen Person zur Maskierung ausgewählt werden können.
#### Quellen
* [privacypatterns.org: Masquerade](https://privacypatterns.org/patterns/Masquerade)


### Festlegen neuer Berechtigungen im Voraus (Setting new permissions up-front)
Viele Dienste digitaler Ökosysteme benötigen den Zugriff auf bestimmte personenbezogene Daten, damit sie ordnungsgemäß funktionieren. Meist wollen die Nutzenden einen Dienst sofort nutzen, ohne vorher differenzierte Einstellungen vorzunehmen. Allerdings dürfen sie nicht dazu gedrängt werden, sämtliche Berechtigungen zu akzeptieren.

Daher sollten die Nutzenden schnell grundlegende Einstellungen vornehmen können (bei der Installation eines Messengers z. B. das Erlauben des Zugriffs auf ihre Kontakte). Nachträglich sollte es ihnen möglich sein, die Berechtigungen in den Einstellungen zu überprüfen und anzupassen (z. B. Widerruf einer Einwilligung).
#### Quelle
* [catalogue.projectsbyif.com: Setting permissions up-front](https://catalogue.projectsbyif.com/patterns/setting-permissions-up-front/)


### Just-in-Time-Berechtigungsanfragen (Just-in-time Access Permission)
Oft wollen Nutzende den Zugriff auf bestimmte personenbezogene Daten nicht dauerhaft erlauben, sondern nur dann, wenn es für die Funktionalität dringend erforderlich ist. Hierzu müssen sie dann die Berechtigungen in den Einstellungen ändern. 

Stattdessen kann zu dem Zeitpunkt, zu dem der Zugriff benötigt wird, darum gebeten werden (z. B. um den Zugriff auf Standortdaten, wenn Nutzende ein Foto mit ihrem Standort markieren möchten). Da dieses Pattern die Nutzenden schnell überfordert und frustriert, sollte es allerdings nur sparsam eingesetzt werden.
#### Quelle
* [catalogue.projectsbyif.com: Just-in-Time Consent](https://catalogue.projectsbyif.com/patterns/just-in-time-consent/)




## Allgemeine Patterns



### Action Buttons
Einige Aktionen in digitalen Ökosystemen erfordern eine Bestätigung durch die Nutzenden. Das Bestätigen von Aktionen kann in einigen Fällen (beispielsweise Finanztransaktionen) schwerwiegendere Konsequenzen haben als in anderen (beispielsweise das Speichern von geänderten Profilinformationen).

Um Nutzenden eindeutig zu signalisieren, welche Auswirkung eine Aktion hat, sollten Buttons verwendet werden, die mit entsprechenden, eindeutigen Verben beschriftet sind. Buttons mit besonderer Bedeutung können farblich hervorgehoben können. Der Einsatz von Farben sollte aber auf das Notwendigste beschränkt werden.
#### Quelle
* [welie.com: Action Button](http://www.welie.com/patterns/showPattern.php?patternID=action-button)


### Themenseiten (Topic Pages)
Nutzende digitaler Ökosysteme, die sich über Datenschutzthemen informieren wollen, müssen unter Umständen in einer großen Menge von Dokumenten nach den gewünschten Informationen suchen. Die Anzahl der Kernthemen, nach denen die meisten Nutzer suchen, ist dagegen meist überschaubar. 

Spezielle Themenseiten zu Fragen des Datenschutzes, gegebenenfalls mit Links zu wichtigen Dokumenten, ermöglichen den Nutzenden einen schnellen Zugriff auf die am häufigsten gesuchten Dokumente. Alle Themen sollten auf einer Themenübersichtsseite verfügbar sein, zum Beispiel als alphabetischer Index.
#### Quellen
* [welie.com: Topic-Pages](http://www.welie.com/patterns/showPattern.php?patternID=topic-pages)


### Maskierung sensibler Daten (Masking of Personal Data)
Herkömmliche Zugriffskontrolle erlaubt nur eine binäre Entscheidung – Zugriff gewähren oder verweigern. Die Maskierung sensibler Daten ermöglicht die Nutzung dieser Daten dort, wo dies vorher entweder nicht möglich oder mit einem Risiko verbunden war. 

Hierzu werden die Daten so dargestellt, dass die Nutzenden damit arbeiten können, aber eine andere Person nichts damit anfangen kann. Ein Beispiel: Um Shoulder Surfing zu erschweren, werden Asteriske verwendet oder nur die letzten drei Zahlen einer Kontonummer angezeigt.
#### Quelle
* [mydata-control](https://www.mydata-control.de/)


### Symbolsprache (Privacy Icons)
Datenschutzhinweise und -richtlinien sind für die Nutzenden digitaler Ökosysteme oft schwer zu verstehen. Ergänzende visuelle Symbole können das Verständnis erleichtern und eine ungefähre Vorstellung davon vermitteln, was der jeweilige Text aussagt. 

Icons sind eine geeignete Ergänzung zum geschriebenen Text, da sie auf einen Blick und durch eine andere Modalität (Bilder) viele Informationen transportieren. Auch wenn einige Symbole für sich allein stehen können, ist es wichtig, dass die Nutzenden Zugang zu textuellen Erläuterungen haben. 
#### Quellen
* [privacypatterns.org: Privacy Icons](https://privacypatterns.org/patterns/Privacy-icons.html)
* [privacypatterns.org: Icons for Privacy Policies](https://privacypatterns.org/patterns/Icons-for-Privacy-Policies)
* [privacypatterns.org: Appropriate Privacy Icons](https://privacypatterns.org/patterns/Appropriate-Privacy-Icons)
* Timo Jakobi, Mandy Balthasar, Martina Borkowsky, Hartmut Schmitt (2020): Transparenz & Datenschutz: Privacy Icons aus Sicht von UX Professionals. In: Holger Fischer, Steffen Hess (Hrsg.): Mensch und Computer 2020 – Usability Professionals. Gesellschaft für Informatik e.V. und German UPA e.V., Bonn.


### Benachrichtigungen (Notifications)
Nutzende wollen über wichtige Aktionen, die die Verarbeitung ihrer Daten betreffen, informiert werden. Personalisierte, zeitnahe Benachrichtigungen können als Einstiegspunkt für detailliertere Informationen dienen. Bei Bedarf können die Nutzenden Aktionen überprüfen, anpassen oder abbrechen, bevor diese ausgeführt werden.

Da Benachrichtigungen störend wirken können, sollte deren Häufigkeit zur Relevanz des Inhalts passen. Außerdem sollten die Nutzenden die Möglichkeit haben, die Benachrichtigungen in ihren Einstellungen zu deaktivieren oder zu ändern. Gesetzlich verpflichtende Benachrichtigungen dürfen allerdings nicht deaktiviert werden können.
#### Quelle
* [catalogue.projectsbyif.com: Notice of upcoming action](https://catalogue.projectsbyif.com/patterns/notice-of-upcoming-action/)
* [ui-patterns.com: Notifications](https://ui-patterns.com/patterns/notifications)


### Strukturiertes Layout (Structured Layout / Chunking)
Der große Funktionsumfang digitaler Ökosystemen kann dazu führen, dass große Mengen Informationen für die Nutzenden bereitgestellt werden müssen. Um die Verständlichkeit dieser Informationen zu gewährleisten, müssen diese möglichst strukturiert aufbereitet werden.

Das Unterteilen von Informationen in thematisch zusammenhängende Gruppen kann die Erfassbarkeit erleichtern. Unterkapitel, prägnante Einzelüberschriften und visuelle Abhebungen ermöglichen dabei ein einfaches Auffinden und werden so auch von der Rechtsprechung vorgeschlagen.  Auch mehrspaltige Formatierungen können die Übersichtlichkeit verbessern. Hier werden prägnante Schlagworte in der ersten Spalte, und zugehörige Informationen oder Einstellmöglichkeiten in der zweiten Spalte platziert.
#### Quellen
* [vmware.github.io: App-Layout](https://vmware.github.io/clarity/documentation/v0.11/app-layout)
* [ui-patterns.com: Chunking](https://ui-patterns.com/patterns/Chunking)
* [nngroup.com: Chunking](https://www.nngroup.com/articles/chunking)


****

| [Eingebettete Datenschutzfunktionen ![](/Daccord/assets/images/forward-solid.svg)](<../Eingebettete Datenschutzfunktionen>) | [![](/Daccord/assets/images/backward-solid.svg) Architekturkonzept](<../Architekturkonzept>) |

****


