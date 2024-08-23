
# Datengeber

Ein Datenschutz-Cockpit bietet Datengebern (Benutzer) Transparenz und Kontrolle über ihre persönlichen Daten. Es ermöglicht einen klaren Überblick darüber, welche Daten gesammelt und verarbeitet werden, und erlaubt eine einfache Verwaltung von Berechtigungen. Nutzer können ihre Datenschutzeinstellungen individuell anpassen, ihre Rechte gemäß Datenschutzgesetzen wahrnehmen und bei Bedarf die Löschung von Daten veranlassen. Dies stärkt das Vertrauen und die Sicherheit im Umgang mit ihren Daten.
In diesem Kapitel werden die einzelnen Funktionalitäten des generischen Prototyps vorgesetellt, der die Grundlage für die beiden Anwendungsfälle [Smarte.Land.Regionen](/Daccord/Realisierung/Demonstratoren/Smarte.Land.Regionen) und [digitale Gesundheitsplattform](/Daccord/Realisierung/Demonstratoren/DigitaleGesundheitsplattform) bildet

## Überblick

Das Datenschutz-Cockpit stellt auf seiner Startseite alle relevanten Informationen übersichtlich zusammen. Im oberen Bereich findet der Nutzer den Abschnitt "Neuigkeiten", der ihn über aktuelle Aufgaben und wichtige Informationen informiert. Hier wird beispielsweise angezeigt, wenn ein Dienst eine neue Datenschutzerklärung veröffentlicht hat oder wenn eine neue Anfrage zur Nutzung seiner Daten vorliegt. Jede Neuigkeit ist dabei klar markiert, sodass der Nutzer sofort erkennt, ob es sich um eine rein informative Meldung handelt oder ob eine Aktion von ihm erforderlich ist.

Darunter befindet sich im Abschnitt "Meine Dienste", ein Überblick, über die Dienste des Ökosystems, die genutzt werden und Daten verarbeiten. Dies ermöglicht es Nutzern, schnell zu erkennen, welche Dienste Zugriff auf die eigenen Daten haben und welche Datenkategorien von diesen verarbeitet werden.

Am Ende der Startseite findet der Nutzer den Abschnitt "Statistiken". Hier können verschiedene Daten und Statistiken angezeigt werden, die Einblicke in die Nutzung und Verarbeitung der Daten geben. Dazu gehören unter anderem Informationen über die jüngsten Änderungen, oder beispielsweise wie oft bestimmte Dienste auf Daten zugegriffen haben, oder andere relevante Kennzahlen. 
{% include Startseite-Datengeber.html %}

## Meine Dienste

Unter "Meine Dienste" ist eine zentrale Übersicht derjenigen Dienste des digitalen Ökosystems gegeben, welche vom Nutzer in Anspruch genommen werden und personenbezogene Daten verarbeiten. Jeder Dienst wird durch eine Kachel repräsentiert, die Informationen wie den Namen des Dienstes, eine kurze Beschreibung und die verarbeiteten Datenkategorien enthält. Zusätzlich sind in jeder Kachel zwei Schaltflächen integriert, die es dem Nutzer ermöglichen, direkt eine Datenauskunft oder einen Datenexport zu beantragen sowie die Löschung der eigenen Daten zu veranlassen. Diese Gestaltung gewährleistet, dass Nutzer zentral, datenschutzrelevante Rechte effizient und unkompliziert wahrnehmen können, indem sie einen schnellen Zugang zu den notwendigen Funktionen erhalten.

In einem digitalen Ökosystem mit zahlreichen Diensten ist es besonders wichtig, dass Informationen und Funktionen klar den jeweiligen Diensten zugeordnet werden können. Daher wurde für jeden Dienst eine individuelle Informationsseite entwickelt, auf der Nutzer ausführlichere Informationen erhalten. Diese Seite enthält allgemeine Angaben zum Dienst, eine Übersicht der erteilten und angefragten Berechtigungen sowie die Datenschutzerklärung. Zusätzlich gibt es auch hier die beiden Schaltflächen zur Beantragung oder Löschung von Daten.

### Antrag auf Datenauskunft und Datenübertragung

Beim Antrag auf Datenauskunft können Nutzer wählen, ob sie Auskunft über gespeicherte Daten (gemäß Art. 15 DSGVO) oder die Übertragung ihrer Daten (gemäß Art. 20 DSGVO) wünschen. Diese Auswahl bestimmt, in welcher Form die Daten bereitgestellt werden und leitet die entsprechende Anfrage an den Verantwortlichen weiter. Nutzer erhalten dabei relevante Informationen zu ihren Betroffenenrechten, die bei Bedarf in einem separaten Fenster angezeigt werden können. Da die Datenauskunft oftmals nicht sofort erfolgt, wird nach Absenden der Anfrage der Bearbeitungsstatus angezeigt. Sobald die Anfrage abgeschlossen ist, wird der Nutzer benachrichtigt und kann die bereitgestellten Daten herunterladen.


### Antrag auf Löschung

Neben der Datenauskunft bietet das Datenschutzcockpit auch eine Funktion zur Beantragung der Löschung von Daten, wie sie in der DSGVO vorgesehen ist. Auch ist auf der jeweiligen Informationsseite eines Dienstes die Schaltfläche "Löschung beantragen" verfügbar. Wenn ein Nutzer die Löschung seiner Daten beantragen möchte, wird er zunächst über die möglichen Konsequenzen einer Löschung informiert, die bestätigt werden müssen, bevor der Antrag weiter bearbeitet wird. Dieser Prozess soll sicherstellen, dass Nutzer sich der Auswirkungen ihrer Entscheidung bewusst sind und Fehler vermieden werden. 

{% include MeineDienste-Datengeber.html %}

## Berechtigungen

Die Verwaltung von Berechtigungen ist eine der zentralen Funktionen eines Datenschutzcockpits. Bei der Konzeption dieser Funktion bestand die besondere Herausforderung darin, Berechtigungszustände und deren Einstellungsmöglichkeiten übersichtlich und benutzerfreundlich darzustellen. In einem digitalen Ökosystem können verschiedene Dienste unterschiedliche Daten anfordern, was zu einer hohen Komplexität führen kann. Ursprünglich wurde die Idee einer Kreuztabelle für die Darstellung in Betracht gezogen, jedoch verworfen, da die unterschiedlichen Datenanfragen oft zu vielen leeren Zellen geführt hätten. Dies hätte die Erfassung relevanter Informationen erschwert und möglicherweise zu Fehlentscheidungen geführt.

Um Nutzern trotz der vielfältigen Kombinationen aus Datenkategorien, Diensten und Berechtigungen ein klares und verständliches System zu bieten, wurden zwei unterschiedliche Ansichten für die Berechtigungsverwaltung entwickelt. Nutzer können Berechtigungen entweder nach Daten oder nach Dienst sortiert anzeigen lassen. Die Sortierung nach Daten ermöglicht es beispielsweise, schnell herauszufinden, welche Dienste Zugriff auf die Herzfrequenz haben. Die Sortierung nach Diensten zeigt hingegen an, welche Daten ein spezifischer Dienst, verarbeiten darf.

Diese Darstellung bietet zudem die Möglichkeit, dienstübergreifende Änderungen vorzunehmen. So kann beispielsweise die Verarbeitung einer bestimmten Datenkategorie, wie der Herzfrequenz, für alle Dienste gleichzeitig abgelehnt oder widerrufen werden. Eine weitere Besonderheit ist die Möglichkeit, Berechtigungen nicht nur binär (ja/nein) zu vergeben. Nutzer können Datenzugriffe individuell einschränken, etwa indem Daten maskiert oder über einen Zeitraum gemittelt freigegeben werden. Sollte ein Widerruf oder eine Einschränkung negative Auswirkungen auf die Nutzung eines Dienstes haben, beispielsweise wenn bestimmte Daten obligatorisch sind, werden die Nutzer durch eine Sicherheitsabfrage über die möglichen Konsequenzen informiert, um Fehler zu vermeiden.

{% include Berechtigungen-Datengeber.html %}

Wie gezeigt wurde, können Datenschutz-Cockpits Datengebern eine zentrale Plattform bieten, um ihre persönlichen Daten zu verwalten und ihre Datenschutzrechte einfach auszuüben. Sie ermöglichen eine klare Übersicht darüber, welche Daten gesammelt und verarbeitet werden, und bieten zugleich einfache Werkzeuge, um Berechtigungen anzupassen oder Daten zu löschen. Dies stärkt das Vertrauen der Nutzer und gibt ihnen mehr Kontrolle über ihre Daten. Doch auch für Datennutzer ist der Einsatz von Datenschutz-Cockpits mit einem Mehrwert verbunden. Die Datennutzer-Sicht des Datenschutzcckpits finden sie hier: ([Zur Datennutzer-Sicht](/Daccord/Realisierung/UX-Design/ZentraleDatenschutz-Cockpits/Datennutzer))
