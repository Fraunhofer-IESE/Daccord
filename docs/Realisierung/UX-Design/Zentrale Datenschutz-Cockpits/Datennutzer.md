# Datennutzer
Ein Datenschutz-Cockpit bietet Datennutzern (Organisationen oder Dienste) eine zentrale Plattform, um effizient und rechtssicher mit den personenbezogenen Daten der Nutzer umzugehen. Es stellt sicher, dass Datennutzer einen umfassenden Überblick darüber haben, welche Daten sie sammeln und verarbeiten dürfen, und unterstützt sie bei der Einhaltung von Datenschutzvorgaben. Datennutzer können Zugriffsrechte verwalten, die Einhaltung der DSGVO gewährleisten und auf Anfragen der Datengeber schnell reagieren, etwa bei Auskunfts- oder Löschungsbegehren. Dies trägt zur Minimierung von Risiken und zur Stärkung des Vertrauens in die Datenverarbeitung bei. In diesem Kapitel wird die Ansicht für Datenutzer anhand des generischen Prototyps vorgestellt, der als Grundlage für die Anwendungsfälle Smarte.Land.Regionen und digitale Gesundheitsplattform dient.

## Überblick
Auf der Startseite des Datenschutz-Cockpits werden alle wichtigen Informationen strukturiert dargestellt. Im oberen Bereich gibt es den Abschnitt "Neuigkeiten", der den Datennehmer über aktuelle Aufgaben und relevante Mitteilungen informiert. Hier werden unter anderem eingegangene Anträge auf Datenauskunft, Löschung oder Berichtigung sowie gemeldete Datenschutzverstöße angezeigt. Jede dieser Neuigkeiten ist deutlich gekennzeichnet, sodass der Datennehmer sofort erkennen kann, ob es sich um eine reine Information handelt oder ob eine aktive Handlung seinerseits erforderlich ist.

Darunter befindet sich im Abschnitt "Offene Anträge", ein Überblick, über die Anzahl der noch zu bearbeitenden Anträge. Es wird dabei zwischen Antrag auf Löschung, Antrag auf Berichtigung sowie Antrag auf Datenauskunft unterschieden. Durch diese Übersicht, kann der Datennutzer jederzeit schnell und einfach erkennen, wieviele und welche Anträge noch bearbeitet werden müssen.

Am Ende der Startseite findet kann der Datennehmer sich verschiedene Daten und Statistiken anzeigen lassen.
{% include Startseite-Datennutzer.html %}

## Dienste

Unter "Dienste" wird eine zentrale Übersicht derjenigen Dienste des digitalen Ökosystems angezeigt, die vom Datennehmer verwaltet werden. Jeder Dienst wird durch eine Kachel repräsentiert, die Informationen wie den Namen des Dienstes, eine kurze Beschreibung, die Anzahl der Nutzer und die verarbeiteten Datenkategorien anzeigt. Auf der Detailseite zu jeden Dienst können spezifische Einstellungen und Aktionen vorgenommen werden. Es können die Kontaktinformationen, zur Nutzung benötigte Daten, die Datenschutzerklärung und Nutzer des Diensets verwaltet werden. 


## Datenschutzerklärung

In einem weiteren Tab ist die Datenschutzerklären des Dienstes hinterlegt. Ein einfaches Versionierungssystem mit grundlegenden Funktionalitäten ermöglicht es den Überblick über die Änderunegn zwischen verschiedenen Versionen zu behalten. Zudem kann die Datenschutzerklärung bearbeitet oder ergänzt werden und anschließend eine entsprechende Information an alle Nutzer versendet werden. Die Datenschutzerklärung unterstützt durch ein Template im stile eines Baukastensystems den Datennutzer dabei, dass einerseits die Bearbeitung mit wenig Aufwand möglich ist sowie andererseits die Informationen für die Nutzer ansprechend und übersichtlich dargestellt werden.

## Nutzer

Zu jeden Dienst kann eine Liste der Nutzer eingesehen werden. Hierbei werden deren grundlegende Informationen, sofern der Verarbeitung dieser zugestimmt wurde, sowie eine Markierung für offenen Anfragen.
Diese Übersicht dient als zentrale Verwaltungseinheit, in der alle relevanten Informationen zu den Nutzern des Dienstes dargestellt werden. Die Informationen sind tabellarisch organisiert und umfassen wichtige Details wie Nachname, Vorname, Adresse und E-Mail-Adresse der Nutzer. Diese Struktur ermöglicht eine einfache Navigation und gezielte Suche nach bestimmten Nutzern.

In der Übersicht werden für jeden Nutzer Anfragen angezeigt, die noch nicht bearbeitet wurden. Diese Anfragen, wie etwa Datenauskunft oder Löschung, sind durch spezifische Symbole markiert, die den jeweiligen Anfragetyp verdeutlichen. Diese visuelle Kennzeichnung ermöglicht es den Verantwortlichen, offene Anfragen schnell zu identifizieren und darauf zu reagieren, um die gesetzlichen Vorgaben der DSGVO effizient zu erfüllen. Die Übersicht fördert eine ordnungsgemäße Verwaltung der Nutzerdaten, indem sie Transparenz und Kontrolle über die Datenverarbeitungsvorgänge schafft. Dadurch werden Verantwortliche dabei unterstützt, ihre datenschutzrechtlichen Pflichten durch eine klare und zugängliche Darstellung der Nutzerinformationen und offenen Anfragen zu erfüllen.

### Daten anfragen

In der Detailseite eines Dienstes werden die, für dessen Nutzung benötigten und optionalen Daten durch den Datennehemr festgelegt, deren Verabreitung die Nutzer zustimmen müssen bzw. ablehnen können. Die angegebenen Daten können bearbeitet oder gelöscht werden, wodurch automatisch eine Information oder Verarbeitungsanfrage an alle Nutzer des Dienstes gesendet wird. Darüber hinaus kann auch die Verarbeitung eines neuen Datentyps bei den Nutzern angefragt werden.


In der Detailseite eines Dienstes werden die „Benötigten Daten“, also die Datenkategorien, die für die Nutzung des Dienstes angefragt werden, verwaltet. Hierbei wird zwischen Daten unterschieden, die „Erforderlich für die Dienstenutzung“ sind, und solchen, die „Optional“ sind. Diese Unterteilung ist bedeutsam, da sie den Nutzern ermöglicht, eine informierte Entscheidung darüber zu treffen, welche Daten sie preisgeben möchten. Zu jeder Datenkategorie wird angezeigt, wie hoch der prozentuale Anteil der Nutzer ist, die ihre Zustimmung zur Verarbeitung dieser Daten gegeben haben. Diese Angabe erlaubt es, Rückschlüsse auf die Akzeptanz und das Vertrauen der Nutzer in den Dienst zu ziehen.
Über Schaltflächen können die jeweiligen Datenkategorien entweder bearbeitet oder gelöscht, sowie neue Datenkategorien ergänzt werden. Bei einer Änderung werden die Nutzer automatisch informiert und ihnen gegebenenfalls eine Datenverarbeitungsanfrage gesendet. Dies ermöglicht eine flexible und dynamische Anpassung der Datenanforderungen durch den Verantwortlichen und trägt dazu bei, die Datenverarbeitung den aktuellen Bedürfnissen und rechtlichen Vorgaben anzupassen.


## Betroffenenanfragen

Unter "Betroffenenanfragen" erhält der Datennutzer einen Überblick über offenen sowie ein Archiv zu bereits abgeschlossenen Anfragen. Die Übersicht bietet eine strukturierte und übersichtliche Darstellung von Betroffenenanfragen, die für die im Ökosystem zu verwalten Lösungen bearbeitet werden müssen. In einer zentralen Tabelle sind die Anfragen nach verschiedenen Kriterien geordnet: Frist, Anfragetyp, Quelle, Dienst und betroffene Person. Die Darstellung unterstützt eine klare und effiziente Verwaltung der Anfragen.
Farbliche Markierungen der zeitlichen Frist helfen dabei, die Priorität der einzelnen Anfragen schnell zu erfassen, wodurch die Einhaltung der Fristen sichergestellt wird. Der Anfragetyp ist durch entsprechende Symbole hervorgehoben, was eine schnelle Identifikation und Bearbeitung erleichtert. Auch die Quelle der Anfrage, etwa ob diese über ein Web-Formular, per E-Mail, Telefon oder Post eingegangen ist, wird klar angezeigt, was die Nachverfolgbarkeit verbessert.

Die Zuordnung der Anfragen zu spezifischen Diensten im digitalen Ökosystem ermöglicht eine eindeutige Identifizierung der Verantwortlichkeiten auf Seiten der Datenverarbeiter. Darüber hinaus wird die betroffene Person, die die Anfrage gestellt hat, namentlich aufgeführt, was eine direkte Zuordung für die Bearbeitung der Anfragen erlaubt. Filter- und Sortierfunktionen bieten dem Nutzer zusätzliche Werkzeuge, um die Anfragen effizient zu verwalten und zu priorisieren.

Insgesamt unterstützt diese Benutzeroberfläche die Einhaltung der DSGVO, indem sie den Verantwortlichen eine zentrale und transparente Plattform zur Verwaltung von Betroffenenanfragen bietet. Die klare Darstellung aller relevanten Informationen minimiert das Risiko von Fehlern und verbessert die Reaktionsfähigkeit auf Datenschutzanfragen.
