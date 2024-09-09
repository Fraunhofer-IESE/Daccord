# Datennutzer
Ein Datenschutz-Cockpit bietet Datennutzern (Organisationen oder Diensten) eine zentrale Plattform, um effizient und rechtssicher mit den personenbezogenen Daten der Nutzer umzugehen. Es stellt sicher, dass Datennutzer einen umfassenden Überblick darüber haben, welche Daten sie sammeln und verarbeiten dürfen, und unterstützt sie bei der Einhaltung von Datenschutzvorgaben. Datennutzer können Zugriffsrechte verwalten und schnell auf Anfragen der Datengeber, etwa bei Auskunfts- oder Löschungsbegehren. Dies trägt zur Minimierung von Risiken und zur Stärkung des Vertrauens in die Datenverarbeitung bei. In diesem Kapitel wird die Ansicht für Datenutzer anhand des generischen Prototyps vorgestellt, der als Grundlage für die Anwendungsfälle [Smarte.Land.Regionen](/Daccord/Realisierung/Demonstratoren/Smarte.Land.Regionen) und die [digitale Gesundheitsplattform](/Daccord/Realisierung/Demonstratoren/DigitaleGesundheitsplattform) dient.

## Überblick
Auf der Startseite des Datenschutz-Cockpits werden alle wichtigen Informationen strukturiert dargestellt. Im oberen Bereich gibt es den Abschnitt *Neuigkeiten*, der Datennehmer über aktuelle Aufgaben und relevante Mitteilungen informiert. Hier werden unter anderem eingegangene Anträge auf Datenauskunft, Löschung oder Berichtigung sowie gemeldete Datenschutzverstöße angezeigt. Jede dieser Neuigkeiten ist deutlich gekennzeichnet, sodass der Datennehmer sofort erkennen kann, ob es sich um eine reine Information handelt oder ob eine aktive Handlung erforderlich ist.

Darunter befindet sich im Abschnitt *Offene Anträge*, ein Überblick über die Anzahl der noch zu bearbeitenden Anträge. Es wird dabei zwischen Antrag auf Löschung, Antrag auf Berichtigung sowie Antrag auf Datenauskunft unterschieden. Durch diese Übersicht, können Datennutzer jederzeit schnell und einfach erkennen, wieviele und welche Anträge noch bearbeitet werden müssen.

Am Ende der Startseite können sich Datennehmer verschiedene Daten und Statistiken anzeigen lassen. 
{% include Startseite-Datennutzer.html %}

## Betroffenenanfragen

Unter *Betroffenenanfragen* erhalten Datennutzer einen Überblick über offene, sowie ein Archiv zu bereits abgeschlossenen Anfragen. Die Übersicht bietet eine strukturierte Darstellung von Betroffenenanfragen, von den im Ökosystem zu verwaltenden Lösungen. In einer zentralen Tabelle sind die Anfragen nach verschiedenen Kriterien geordnet: Frist, Anfragetyp, Quelle, Dienst und betroffene Person. Die Darstellung unterstützt eine klare und effiziente Verwaltung der Anfragen.
Farbliche Markierungen der zeitlichen Frist helfen dabei, die Priorität der einzelnen Anfragen schnell zu erfassen, wodurch die Einhaltung der Fristen sichergestellt wird. Der Anfragetyp ist durch entsprechende Symbole hervorgehoben, was eine schnelle Identifikation und Bearbeitung erleichtert. Auch die Quelle der Anfrage, etwa ob diese über ein Web-Formular, per E-Mail, Telefon oder Post eingegangen ist, wird angezeigt, was die Nachverfolgbarkeit verbessert.

Die Zuordnung der Anfragen zu spezifischen Diensten im digitalen Ökosystem ermöglicht eine eindeutige Identifizierung der Verantwortlichkeiten auf Seiten der Datenverarbeiter. Darüber hinaus wird die betroffene Person, die die Anfrage gestellt hat, namentlich aufgeführt, was eine direkte Zuordung für die Bearbeitung der Anfragen erlaubt. Filter- und Sortierfunktionen bieten dem Nutzer zusätzliche Werkzeuge, um die Anfragen effizient zu verwalten und zu priorisieren.

Insgesamt unterstützt diese Benutzeroberfläche die Einhaltung der DSGVO, indem sie den Verantwortlichen eine zentrale und transparente Plattform zur Verwaltung von Betroffenenanfragen bietet. Die klare Darstellung aller relevanten Informationen minimiert das Risiko von Fehlern und verbessert die Reaktionsfähigkeit auf Datenschutzanfragen.

## Dienste

Unter *Dienste* wird eine zentrale Übersicht derjenigen Dienste des digitalen Ökosystems angezeigt, die vom Datennehmer verwaltet werden. Jeder Dienst wird durch eine Kachel repräsentiert, den Namen des Dienstes, eine kurze Beschreibung, die Anzahl der Nutzer und die verarbeiteten Datenkategorien anzeigt. Auf der Detailseite zu jeden Dienst können spezifische Einstellungen und Aktionen vorgenommen werden. Es können die Kontaktinformationen, die zur Nutzung benötigte Daten, die Datenschutzerklärung und die Nutzer des Dienstes verwaltet werden. In der Detailseite eines Dienstes werden die *Benötigten Daten*, also die Datenkategorien, die für die Nutzung des Dienstes angefragt werden, verwaltet. Hierbei wird zwischen erforderlichen und optionalen Daten unterschieden. Diese Unterteilung ist bedeutsam, da sie den Nutzern ermöglicht, eine informierte Entscheidung darüber zu treffen, welche Daten sie preisgeben möchten. Zu jeder Datenkategorie wird angezeigt, wie hoch der prozentuale Anteil der Nutzer ist, die ihre Zustimmung zur Verarbeitung gegeben haben. Diese Angabe erlaubt es, Rückschlüsse auf die Akzeptanz und das Vertrauen der Nutzer in den Dienst zu ziehen.
Über Schaltflächen können die jeweiligen Datenkategorien entweder bearbeitet oder gelöscht, sowie neue Datenkategorien ergänzt werden. Bei einer Änderung werden die Nutzer automatisch informiert und ihnen gegebenenfalls eine Datenverarbeitungsanfrage gesendet. Dies ermöglicht eine flexible und dynamische Anpassung der Datenanforderungen durch den Verantwortlichen und trägt dazu bei, die Datenverarbeitung den aktuellen Bedürfnissen und rechtlichen Vorgaben anzupassen.

### Datenschutzerklärung

In einem weiteren Tab ist die Datenschutzerklärung des Dienstes hinterlegt. Ein einfaches Versionierungssystem mit grundlegenden Funktionalitäten ermöglicht es, den Überblick über die Änderungen zwischen verschiedenen Versionen zu behalten. Zudem kann die Datenschutzerklärung bearbeitet oder ergänzt werden sowie anschließend eine entsprechende Information an alle Nutzer versendet werden. Die Datenschutzerklärung unterstützt durch ein Template im Stile eines Baukastensystems den Datennutzer dabei, dass einerseits die Bearbeitung mit wenig Aufwand möglich ist sowie andererseits die Informationen für die Nutzer ansprechend und übersichtlich dargestellt werden.

### Nutzer

Zu jedem Dienst kann eine Liste der Nutzer eingesehen werden. Hierbei werden deren grundlegende Informationen, sofern der Verarbeitung dieser zugestimmt wurde, sowie eine Markierung für offene Anfragen angezeigt. Diese Übersicht dient als zentrale Verwaltungseinheit, in der alle relevanten Informationen zu den Nutzern des Dienstes dargestellt werden. Diese Struktur ermöglicht eine einfache Navigation und gezielte Suche nach bestimmten Nutzern.

In der Übersicht werden für jeden Nutzer Anfragen angezeigt, die noch nicht bearbeitet wurden. Diese Anfragen, wie etwa Datenauskunft oder Löschung, sind durch spezifische Symbole dargestellt, die den jeweiligen Anfragetyp verdeutlichen. Diese visuelle Kennzeichnung ermöglicht es den Verantwortlichen, offene Anfragen schnell zu identifizieren und darauf zu reagieren, um die gesetzlichen Vorgaben der DSGVO effizient zu erfüllen. Die Übersicht unterstützt Verantwortliche dabei, ihre datenschutzrechtlichen Pflichten durch eine klare und zugängliche Darstellung der Nutzerinformationen und offenen Anfragen sowei der Möglichkeit diese zu bearbeiten, zu erfüllen.

#### Daten anfragen

Auf der Detailseite eines Dienstes werden die, für dessen Nutzung benötigten und optionalen Daten durch den Datennehmer festgelegt, deren Verarbeitung die Nutzer zustimmen müssen bzw. die sie ablehnen können. Die angegebenen Daten können bearbeitet oder gelöscht werden, wodurch automatisch eine Information oder Verarbeitungsanfrage an alle Nutzer des Dienstes gesendet wird. Darüber hinaus kann auch die Verarbeitung eines neuen Datentyps bei den Nutzern angefragt werden.

{% include Dienste-Datennutzer.html %}

Datenschutz-Cockpits bieten Datennehmern eine zentrale Lösung, um die Verwaltung und den Schutz von personenbezogenen Daten effizient zu steuern. Sie ermöglichen eine klare Übersicht über alle anstehenden Anfragen, wie Datenauskunft oder Löschung und unterstützen bei der Einhaltung gesetzlicher Anforderungen nach DSGVO. Durch die benutzerfreundliche Aufbereitung von Informationen und die Möglichkeit, schnell auf Anfragen zu reagieren, tragen Datenschutz-Cockpits wesentlich zur rechtssicheren Datenverarbeitung bei.
****

| [![](/Daccord/assets/images/backward-solid.svg) Datengeber](<Datengeber>) | [Eingebettete Datenschutzfunktionen ![](/Daccord/assets/images/forward-solid.svg)](<../Eingebettete Datenschutzfunktionen>) |

****
