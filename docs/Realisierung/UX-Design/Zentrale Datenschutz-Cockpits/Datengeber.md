
# Datengeber

Ein Datenschutz-Cockpit bietet Datengebern (Benutzer) Transparenz und Kontrolle über ihre persönlichen Daten. Es ermöglicht einen klaren Überblick darüber, welche Daten gesammelt und verarbeitet werden, und erlaubt eine einfache Verwaltung von Berechtigungen. Nutzer können ihre Datenschutzeinstellungen individuell anpassen, ihre Rechte gemäß Datenschutzgesetzen wahrnehmen und bei Bedarf die Löschung von Daten veranlassen. Dies stärkt das Vertrauen und die Sicherheit im Umgang mit ihren Daten.
In diesem Kapitel werden die einzelnen Funktionalitäten des generischen Prototyps vorgesetellt, der die Grundlage für die beiden Anwendungsfälle [Smarte.Land.Regionen](/Daccord/Realisierung/Demonstratoren/Smarte.Land.Regionen) und [digitale Gesundheitsplattform](/Daccord/Realisierung/Demonstratoren/DigitaleGesundheitsplattform) bildet

## Startseite/Überblick

Das Datenschutz-Cockpit stellt auf seiner Startseite alle relevanten Informationen übersichtlich zusammen. Im oberen Bereich findet der Nutzer den Abschnitt "Neuigkeiten", der ihn über aktuelle Aufgaben und wichtige Informationen informiert. Hier wird beispielsweise angezeigt, wenn ein Dienst eine neue Datenschutzerklärung veröffentlicht hat oder wenn eine neue Anfrage zur Nutzung seiner Daten vorliegt. Jede Neuigkeit ist dabei klar markiert, sodass der Nutzer sofort erkennt, ob es sich um eine rein informative Meldung handelt oder ob eine Aktion von ihm erforderlich ist.

Darunter befindet sich im Abschnitt "Meine Dienste", ein Überblick, über die Dienste des Ökosystems, die genutzt werden und Daten verarbeiten. Dies ermöglicht es Nutzern, schnell zu erkennen, welche Dienste Zugriff auf die eigenen Daten haben und welche Datenkategorien von diesen verarbeitet werden.

Am Ende der Startseite findet der Nutzer den Abschnitt "Statistiken". Hier werden verschiedene Daten und Statistiken angezeigt, die Einblicke in die Nutzung und Verarbeitung der Daten geben. Dazu gehören unter anderem Informationen über die jüngsten Änderungen, oder beispielsweise wie oft bestimmte Dienste auf seine Daten zugegriffen haben, und andere relevante Kennzahlen. 
{% include Startseite-Datengeber.html %}

## Meine Dienste

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

### Antrag auf Datenauskunft und Datenübertragung

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

### Antrag auf Löschung

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

{% include MeineDienste-Datengeber.html %}

## Berechtigungen

Die Verwaltung von Berechtigungen ist eine der zentralen Funktionen eines Datenschutzcockpits. Bei der Konzeption dieser Funktion bestand die besondere Herausforderung darin, Berechtigungszustände und deren Einstellungsmöglichkeiten übersichtlich und benutzerfreundlich darzustellen. In einem digitalen Ökosystem können verschiedene Dienste unterschiedliche Daten anfordern, was zu einer hohen Komplexität führen kann. Ursprünglich wurde die Idee einer Kreuztabelle für die Darstellung in Betracht gezogen, jedoch verworfen, da die unterschiedlichen Datenanfragen oft zu vielen leeren Zellen geführt hätten. Dies hätte die Erfassung relevanter Informationen erschwert und möglicherweise zu Fehlentscheidungen geführt.

Um Nutzern trotz der vielfältigen Kombinationen aus Datenkategorien, Diensten und Berechtigungen ein klares und verständliches System zu bieten, wurden zwei unterschiedliche Ansichten für die Berechtigungsverwaltung entwickelt. Nutzer können Berechtigungen entweder nach Daten oder nach Dienst sortiert anzeigen lassen. Die Sortierung nach Daten ermöglicht es beispielsweise, schnell herauszufinden, welche Dienste Zugriff auf die Herzfrequenz haben. Die Sortierung nach Diensten zeigt hingegen an, welche Daten ein spezifischer Dienst, verarbeiten darf.

Diese Darstellung bietet zudem die Möglichkeit, dienstübergreifende Änderungen vorzunehmen. So kann beispielsweise die Verarbeitung einer bestimmten Datenkategorie, wie der Herzfrequenz, für alle Dienste gleichzeitig abgelehnt oder widerrufen werden. Eine weitere Besonderheit ist die Möglichkeit, Berechtigungen nicht nur binär (ja/nein) zu vergeben. Nutzer können Datenzugriffe individuell einschränken, etwa indem Daten maskiert oder über einen Zeitraum gemittelt freigegeben werden. Sollte ein Widerruf oder eine Einschränkung negative Auswirkungen auf die Nutzung eines Dienstes haben, beispielsweise wenn bestimmte Daten obligatorisch sind, werden die Nutzer durch eine Sicherheitsabfrage über die möglichen Konsequenzen informiert, um Fehler zu vermeiden.

{% include Berechtigungen-Datengeber.html %}
