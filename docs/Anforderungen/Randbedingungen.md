# Randbedingungen

Eine Randbedingung stellt eine Anforderung bezüglich eines Systems oder Entwicklungsprozesses dar, die den Lösungsraum über das hinaus einschränkt, was zur Erfüllung der gegebenen funktionalen und Qualitätsanforderungen notwendig ist. Bei Randbedingungen sind insbesondere die gesetzlichen Regelungen relevant, weshalb diese in diesem Kapitel genauer betrachtet werden.

# Hintergrund und Vorgehen

Ein wichtiges Ziel des Projekts stellt die Sammlung rechtlicher Anforderungen zur Sicherstellung der Rechtskonformität des im Projekt geplanten Vorhabens dar. Thematisch sind die Anforderungen insbesondere im deutschen und europäischen Datenschutzrecht angesiedelt. Initial wurden die gesammelten Anforderungen als Rechtmäßigkeitsanforderungen bzw. Rechtsanforderungen bezeichnet. Diese wurden von der UdS primär aus der Datenschutzgrundverordnung (DSGVO) und dem Data Governance Act (DGA) abgeleitet. Sie wurden anschließend in Abstimmung mit dem IESE und später auch der HKBS und der HBRS eruiert, thematisch strukturiert und in Hinblick auf den Einfluss auf Datenschutz-Cockpits bewertet.

Die Abstimmungen mit dem IESE ergaben, dass die Anforderungen mehrheitlich verbindliche Pflichten des Verantwortlichen darstellen. Im Requirements Engineering gelten Anforderungen, die aus dem Gesetzesrahmen hervorkommen als Randbedingungen, eine Art nichtfunktionaler Anforderungen.[^1] Eine Besonderheit in dieser Anforderungsspezifikation ist, dass an das Datenschutz-Cockpit keine groben Randbedingungen gestellt werden (z. B. „Das Datenschutz-Cockpit muss Gesetzeskonform mit DSGVO und DGA sein.“), sondern präzise Anforderungen und Folgen formuliert werden können. Somit kann die Erfüllung der rechtlichen Anforderungen an das Datenschutz-Cockpit in der Implementierung sichergestellt werden.

Bei der Anforderungsspezifikation wurden die identifizierten Pflichten zunächst mit Hilfe des Musters „Der Verantwortliche ist dazu verpflichtet…“ hervorgehoben. Später wurde dies gemäß den im Requirements Engineering häufig verwendeten Satzschablonen von Rupp vereinfacht.[^2] Die Formulierungen wurden geändert in „Der Verantwortliche muss…“ für Anforderungen ohne Vorbedingung und „Wenn [Bedingung], muss der Verantwortliche…“ für Anforderungen mit Vorbedingung. Das Wort „muss“ impliziert immer eine gesetzliche Verpflichtung und entsprechend ist die Priorität solcher Muss-Anforderungen immer „unabdingbar“. Bspw. muss das Softwareprodukt so entworfen sein, dass es beim Auftreten der Vorbedingung immer korrekt (d. h. gesetzeskonform) reagiert. Die Unabdingbarkeit gilt ebenfalls für alle Anforderungen, die mit dieser Randbedingung in Zusammenhang stehen (wie Bedarfe, Anwendungsfälle und Interaktonspattern). Statt eine Prioritätsstufe zuzuweisen, wird untersucht, ob der „Impact“ auf das Projekt (d. h.: der Grad, mit dem die Anforderung durch das Datenschutz-Cockpit umgesetzt werden kann) bestimmt werden kann.

Neben der reinen Anforderung (Name und Beschreibung) wurden weitere Metadaten formuliert. Naheliegend ist der Verweis zu der jeweiligen Rechtsgrundlage (insb. die relevanten Artikel der DSGVO bzw. des DGA); ferner wurden sie auch logischen Kategorien zugewiesen (z. B. Betroffenenreche, Transparenzgebot). Nennenswert ist, dass auch die Intention des Gesetzgebers hinter der jeweiligen Anforderung („Der Gesetzgeber will damit erreichen, dass…“) inkludiert wurde, damit jeder Anforderung besser nachvollzogen werden kann.

Da diese Anforderungen allgemeingültig und nicht ausschließlich für das Datenschutz-Cockpit von Bedeutung sind, sind sie gut geeignet für die Wiederverwendung in allen Entwicklungsprojekten, in denen die Datenschutzkonformität im Fokus steht. Unser Katalog an Randbedingungen stellt die Vereinbarkeit mit der DSGVO und dem DGA sicher. Wegen der Verknüpfung mit der gesetzlichen Grundlage können auch ausschließlich die Randbedingungen übernommen werden, die entweder nur aus der DSGVO oder aus dem DGA hervorgehen.

# Grundprinzipien des Datenschutzrechts

## Verarbeitung in einer rechtmäßigen Weise und nach Treu und Glauben (RAB9)

Der Verantwortliche muss Daten in einer rechtmäßigen Weise und nach Treu und Glauben verarbeiten.

**Intention:** Der Gesetzgeber möchte, dass Verantwortliche bei der Verarbeitung personenbezogener Daten die Grundsätze der DSGVO und anderer einschlägiger Gesetze einhält und dabei nicht gegen grundlegende Wertevorstellungen verstößt.

**Rechtsgrundlagen:** Art. 5 Abs. 1 lit. a DSGVO

**Impact auf das Projekt:** Organisatorische Randbedingung außerhalb des Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Zweckbindung bei der Verarbeitung personenbezogener Daten (RAB10)

Der Verantwortliche darf Daten nur für festgelegte, eindeutige und legitime Zwecke erheben und muss sicherstellen, dass die Daten nicht in einer mit diesen Zwecken nicht zu vereinbarenden Weise weiterverarbeitet werden.

**Intention:** Der Gesetzgeber möchte, dass Verantwortliche personenbezogene Daten nur zu angemessenen und legitimen Zwecken verarbeiten.

**Rechtsgrundlagen:** Art. 5 Abs. 1 lit. b DSGVO

**Impact auf das Projekt:** Organisatorische Randbedingung außerhalb des Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Datenminimierung (RAB11)

Der Verantwortliche muss sicherstellen, dass er nur so viele Daten, wie für den Zweck unbedingt notwendig, verarbeitet werden.

**Intention:** Der Gesetzgeber möchte, dass Verantwortliche möglichst wenige Daten erheben und nur die Daten, die wirklich notwendig sind.

**Rechtsgrundlagen:** Art. 5 Abs. 1 lit. c DSGVO

**Impact auf das Projekt:** Organisatorische Randbedingung außerhalb des Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Richtigkeit (RAB12)

Der Verantwortliche muss sicherstellen, dass er nur Daten verarbeitet, die sachlich richtig und auf dem neuesten Stand sind.

Der Verantwortliche muss alle angemessenen Maßnahmen ergreifen, die notwendig sind um sicherzustellen zu können, dass personenbezogene Daten, die im Hinblick auf die Zwecke ihrer Verarbeitung unrichtig sind, unverzüglich gelöscht oder berichtigt werden.

**Intention:** Der Gesetzgeber möchte, dass Verantwortliche nur Daten verarbeiten, die sachlich richtig sind, damit keine Nachteile für betroffene Personen entstehen.

**Rechtsgrundlagen:** Art. 5 Abs. 1 lit. d DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Speicherbegrenzung (RAB13)

Der Verantwortliche muss sicherstellen, dass er Daten nur so lange aufbewahrt, wie es für den Zweck der Verarbeitung wirklich erforderlich ist.

Wenn einer der Löschungsgründe nach Art. 17 DSGVO vorliegt, muss der Verantwortliche die Daten löschen.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen wissen, welche ihrer Daten wie lange gespeichert werden. Hilfreich ist es auch, wenn die betroffenen Personen Löschkonzepte/-intervalle kennen.

**Rechtsgrundlagen:** Art. 5 Abs. 1 lit. e, Art. 13 Abs. 2 lit. a DSGVO

**Impact auf das Projekt:** Organisatorische Randbedingung außerhalb des Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Integrität und Vertraulichkeit (RAB14)

Der Verantwortliche muss die Sicherheit der Daten, die verarbeitet werden, gewährleisten. Der Verantwortliche und der Auftragsverarbeiter müssen für die Gewährleistung der Datensicherheit geeignete technische und organisatorische Maßnahmen ergreifen.

**Intention:** Der Gesetzgeber möchte, dass Verantwortliche personenbezogene Daten auch in technischer Hinsicht sichern, insbesondere auch gegen Angriffe von außen.

**Rechtsgrundlagen:** Art. 5 Abs. 2 lit. f, Art. 24, Art. 25, Art. 28 Abs. 3 S. 2 lit. c, Art. 32 DSGVO

**Impact auf das Projekt:** Organisatorische Randbedingung außerhalb des Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

# Betroffenenrechte

## Einrichtung zur Geltendmachung von Betroffenenrechten (RAB3)

Der Verantwortliche muss die betroffene Person aktiv dabei unterstützen, ihre Betroffenenrechte geltend zu machen.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen ihre Rechte möglichst einfach geltend machen können und ihnen alle notwendigen Informationen zur Verfügung stehen.

**Rechtsgrundlagen:** Art. 12 Abs. 2 S. 1 DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Recht auf Auskunft (RAB4)

Wenn Daten einer betroffenen Person verarbeitet werden, muss der Verantwortliche den betroffenen Personen hierüber Auskunft erteilen.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen wissen, wer welche ihrer Daten verarbeitet.

**Rechtsgrundlagen:** Art. 15, Art. 12 Abs. 1 und 2 DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Recht auf Berichtigung/Ergänzung (RAB5)

Wenn Daten einer betroffenen Person unrichtig oder unvollständig sind, muss der Verantwortliche diese korrigieren oder vervollständigen.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen falsche oder unvollständige Daten möglichst einfach korrigieren lassen können.

**Rechtsgrundlagen:** Art. 16, Art. 12 Abs. 1 und 2 DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Recht auf Löschung (RAB6)

Wenn ein Löschungsgrund aus Art. 17 DSGVO vorliegt, muss der Verantwortliche die entsprechenden Daten der betroffenen Person löschen.

**Intention:** Der Gesetzgeber möchte, dass Verantwortliche personenbezogene Daten löschen, soweit sie nicht mehr benötigt werden. Ferner möchte der Gesetzgeber, dass betroffene Personen die Löschung beantragen können, wenn die Löschung nicht automatisch erfolgt.

**Rechtsgrundlagen:** Art. 17, Art. 12 Abs. 1 und 2 DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Recht auf Einschränkung der Verarbeitung (RAB7)

Wenn eine der Voraussetzungen aus Art. 18 Abs. 1 lit. a - d DSGVO gegeben ist, muss der Verantwortliche in verschiedenen Situationen die Verarbeitung einschränken.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen in verschiedenen Situationen die Verarbeitung einschränken können, bspw. wenn die Verarbeitung unrechtmäßig ist, aber eine Löschung nicht in Frage kommt.

**Rechtsgrundlagen:** Art. 18, Art. 12 Abs. 1 und 2 DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Recht auf Datenübertragbarkeit (RAB8)

Der Verantwortliche muss der betroffenen Person oder einem anderen Verantwortlichen Daten in einem gängigen und strukturierten maschinenlesbaren Format zukommen lassen.

**Intention:** Der Gesetzgeber möchte, dass betroffene Person ihre Daten ggf. möglichst einfach anderen Verantwortlichen zukommen lassen können. Dafür müssen die Daten in einem gängigen und strukturierten maschinenlesbaren Format geteilt werden. Hierdurch wird der Übergang von einem zum anderen Verantwortlichen erleichtert.

**Rechtsgrundlagen:** Art. 20, Art. 12 Abs. 1 und 2 DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

# Pflichten des Verantwortlichen

## Informationen zum Verantwortlichen mit Kontaktdaten (RAB32)

Der Verantwortliche muss der betroffenen Person Kontaktdaten zu sich selbst und zu einer Kontaktstelle zur Verfügung stellen.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen klare Angaben zum Verantwortlichen erhalten und somit eine Ansprechperson zur Geltendmachung von Betroffenenrechten kontaktieren können.

**Rechtsgrundlagen:** Art. 12, Art. 13 Abs. 1 lit. a, Art. 5 Abs. 1 lit. a DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Aufklärung über alle durchgeführten Datenverarbeitungen (RAB33)

Der Verantwortliche muss betroffene Personen hinreichend über alle vorgenommenen Datenverarbeitungen aufklären.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen überblicken können, welche Verarbeitungen ihrer personenbezogenen Daten durchgeführt werden.

**Rechtsgrundlagen:** Art. 5 Abs. 1 lit. a DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Aufklärung über alle Zwecke, zu denen die Datenverarbeitung durchgeführt wird (RAB34)

Der Verantwortliche muss betroffene Personen hinreichend über die Zwecke der Datenverarbeitung aufklären.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen die Zwecke der Verarbeitung ihrer personenbezogenen Daten kennen.

**Rechtsgrundlagen:** Art. 13 Abs. 1 lit. c, Art. 5 Abs. 1 lit. a und b DSGVO;

Art. 12 lit. a DGA

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Aufklärung über Zweckänderungen (RAB35)

Wenn der Verarbeitungszweck sich ändert, muss der Verantwortliche die betroffene Person über die neuen Zwecke informieren. Soll eine Zweckänderung nach Art. 6 Abs. 4 DSGVO durchgeführt werden, ist eine Kompatibilitätsprüfung des alten mit dem neuen Zweck durchzuführen.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen Änderungen des Zwecks angezeigt bekommen und sie ggf. reagieren oder ihre Einwilligung verweigern können. Ferner möchte der Gesetzgeber, dass Verantwortliche die Daten nicht für andere als die von den betroffenen Personen akzeptierten bzw. ihnen mitgeteilten Zwecke verarbeitet werden. Der Verantwortliche muss die Datenverarbeitung auf das absolut notwendige Maß beschränken.

**Rechtsgrundlagen:** Art. 13 Abs. 1 lit. c, Art. 5 Abs. 1 lit. a, b und c, Art. 6 Abs. 4 DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Aufklärung über mögliche Übermittlungen von Daten (RAB36)

Wenn Daten an eine andere Institution übermittelt werden, muss der Verantwortliche dies der betroffenen Person mitteilen.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen wissen, an wen ihre Daten übermittelt werden.

**Rechtsgrundlagen:** Art. 13 Abs. 1 lit. e DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Aufklärung über mögliche Drittlandsübermittlungen (RAB37)

Wenn Daten in Drittländer übermittelt werden, muss der Verantwortliche offenlegen, in welche Drittländer und aufgrund welcher Rechtsgrundlage (z. B. Angemessenheitsbeschluss). Wenn kein Angemessenheitsbeschluss vorliegt, muss der Verantwortliche dies explizit aufzeigen.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen wissen, ob ihre Daten in Drittländer übermittelt werden.

**Rechtsgrundlagen:** Art. 13 Abs. 1 lit. f DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Mitteilung des Datenschutzbeauftragten an die betroffene Person (RAB38)

Der Verantwortliche muss den betroffenen Personen seinen Datenschutzbeauftragten mitteilen.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen einen Ansprechpartner beim Verantwortlichen haben. Hierfür ist die Mitteilung des Datenschutzbeauftragten wichtig.

**Rechtsgrundlagen:** Art. 13 Abs. 1 lit. b DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Beschwerderecht (RAB39)

Der Verantwortliche muss die betroffenen Personen über die Möglichkeit des Beschwerderechts informieren.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen die Möglichkeit, sich bei einer Aufsichtsbehörde zu beschweren, kennen.

**Rechtsgrundlagen:** Art. 13 Abs. 2 lit. d DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Vollständig automatisierte Einzelfallentscheidungen (RAB40)

Wenn eine Entscheidung des Verantwortlichen vollständig auf einer automatisierten Datenverarbeitung beruht, muss der Verantwortliche dies der betroffenen Person mitteilen. Solche vollständig auf automatisierten Datenverarbeitungen beruhenden Entscheidungen sind verboten, soweit sie der betroffenen Person gegenüber rechtliche Wirkung entfalten oder sie in ähnlicher Weise erheblich beeinträchtigen.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen wissen, ob eine sie betreffende Entscheidung vollständig automatisiert oder mithilfe von menschlichen Zwischenschritten getroffen wird, sodass sie ggf. reagieren und widersprechen können.

**Rechtsgrundlagen:** Art. 13 Abs. 2 lit. f, Art. 22 DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Auskunftsanspruch u.a. bei vollständig automatisierten Einzelfallentscheidungen (RAB41)

Der Verantwortliche ist dazu verpflichtet, aussagekräftige Informationen über vorhandene Daten und die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person zu erteilen.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen wissen, wie der Algorithmus bei einer vollständig automatisierten Einzelentscheidung funktioniert.

**Rechtsgrundlagen:** Art. 13 Abs. 2 lit. f, Art. 15, Art. 22 DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Rechenschaftspflicht (RAB42)

Der Verantwortliche muss nachweisen können, dass er die grundlegenden Prinzipien des Datenschutzrechtes (Art. 5 Abs. 1 DSGVO) eingehalten hat. Hierfür ist beispielsweise ein Verarbeitungsverzeichnis (Art. 30 DSGVO) erforderlich.

**Intention:** Der Gesetzgeber möchte, dass Verantwortliche grundlegende Prinzipien bei der Datenverarbeitung einhalten. Ferner möchte der Gesetzgeber betroffene Personen dadurch entlasten, dass der Verantwortliche grundsätzlich in der Nachweispflicht für die Einhaltung dieser Prinzipien ist.

**Rechtsgrundlagen:** Art. 5 Abs. 2, Art. 30 DSGVO

**Impact auf das Projekt:** Organisatorische Randbedingung außerhalb des Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Nachweis der Ergreifung angemessener technischer und organisatorischer Maßnahmen (RAB43)

Der Verantwortliche muss nachweisen können, dass er zur Sicherstellung der Sicherheit der Verarbeitung geeignete technische und organisatorische Maßnahmen ergreift.

**Intention:** Der Gesetzgeber möchte, dass Verantwortliche personenbezogene Daten auch in technischer Hinsicht sichern, insbesondere auch gegen Angriffe von außen. Ferner ist es dem Gesetzgeber wichtig, dass betroffene Personen nicht selbst Verstöße beweisen müssen, sondern der Verantwortliche in der Pflicht ist.

**Rechtsgrundlagen:** Art. 24 Abs. 1 S. 1 DSGVO

**Impact auf das Projekt:** Organisatorische Randbedingung außerhalb des Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Aufklärung über die der Verarbeitung zugrundeliegenden Rechtsgrundlage (RAB44)

Der Verantwortliche muss die betroffenen Personen über die Rechtsgrundlage der Verarbeitung informieren.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen die Rechtsgrundlage der Verarbeitung kennen.

**Rechtsgrundlagen:** Art. 5 Abs. 1 lit. a, Art. 13 Abs. 1 lit. c DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Aufklärungen in einfacher und verständlicher Sprache (RAB45)

Der Verantwortliche muss die Informationen über Datenverarbeitungen in möglichst einfacher und verständlicher Form und in einfacher und klarer Sprache erteilen.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen eine möglichst übersichtliche und einfach verständliche Aufklärung über Datenverarbeitungen erhalten.

**Rechtsgrundlagen:** Art. 12 Abs. 1 S. 1 DSGVO und Erwägungsgrund 58

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Zugänglichkeit zu allen erforderlichen Informationen (RAB46)

Der Verantwortliche muss den Zugang zu Informationen für die betroffene Person möglichst einfach gestalten.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen einfach Zugang zu Informationen zu durchgeführten Datenverarbeitungen haben und sie diese nicht lange suchen müssen.

**Rechtsgrundlagen:** Art. 12 DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Meldepflicht gegenüber betroffenen Personen bei Verletzungen des Schutzes personenbezogener Daten (RAB47)

Wenn aus Sicht des Verantwortlichen nach Durchführung einer Prognoseentscheidung hinsichtlich der möglichen Folgen der Datenpanne ein hohes Risiko für die persönlichen Rechte und Freiheiten natürlicher Personen zu erwarten ist, muss der Verantwortliche dies unverzüglich den betroffenen Personen melden. Sinnvoll ist in diesem Zusammenhang die Führung eines Konzepts, welches im Falle einer Datenpanne angewendet werden kann.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen im Falle einer Datenpanne informiert werden, wenn durch die Datenpanne ein hohes Risiko für ihre persönlichen Rechte und Freiheiten entsteht.

**Rechtsgrundlagen:** Art. 34 Abs. 1 DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Meldepflicht gegenüber der Aufsichtsbehörde bei Verletzungen des Schutzes personenbezogener Daten (RAB48)

Wenn eine Verletzung des Schutzes personenbezogener Daten festgestellt wird, muss der Verantwortliche dies unverzüglich und möglichst binnen 72 Stunden der zuständigen Aufsichtsbehörde melden.

**Intention:** Der Gesetzgeber möchte die effektive Überwachung durch die Aufsichtsbehörden sicherstellen.

**Rechtsgrundlagen:** Art. 33 DSGVO

**Impact auf das Projekt:** Organisatorische Randbedingung außerhalb des Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Gemeinsame Verantwortlichkeit (RAB49)

Wenn eine gemeinsame Verantwortlichkeit für die Datenverarbeitung anzunehmen ist, müssen die gemeinsam Verantwortlichen einen Joint-Controller-Vertrag im Sinne des Art. 26 DSGVO abschließen, der die tatsächlichen Beziehungen und Funktionalitäten beider Beteiligten zeigt.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen wissen, wem die Datenverarbeitung zuzurechnen ist und an wen sie sich wenden müssen/können.

**Rechtsgrundlagen:** Art. 26 DSGVO

**Impact auf das Projekt:** Organisatorische Randbedingung außerhalb des Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

# Auftragsverarbeitung

## Weisungsgebundenheit des Auftragsverarbeiters (RAB1)

Der Auftragsverarbeiter muss die Anweisungen des Verantwortlichen befolgen (weisungsgebunden) und darf diese nicht überschreiten.

Der Auftragsverarbeiter muss sicherstellen, dass er nur auf dokumentierte Weisung des Verantwortlichen handelt.

**Intention:** Der Gesetzgeber möchte, dass die Zuständigkeiten bei der Verarbeitung personenbezogener Daten klar verteilt sind. Hierzu gehört auch, dass der Auftragsverarbeiter, dem die Verarbeitung nicht zuzurechnen ist, nur in den Grenzen des durch den Verantwortlichen Erlaubten handelt.

**Rechtsgrundlagen:** Art. 28 Abs. 3 S. 2 lit. a DSGVO

**Impact auf das Projekt:** Organisatorische Randbedingung außerhalb des Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Auftragsverarbeitungsvertrag (RAB2)

Der Verantwortliche muss einen Auftragsverarbeitungsvertrag im Sinne des Art. 28 DSGVO mit seinen Auftragsverarbeitern abschließen. Die Mindestinhalte ergeben sich aus Art. 28 Abs. 3 DSGVO.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen wissen, wem die Datenverarbeitung zuzurechnen ist, wer sie durchführt und an wen sie sich wenden müssen/können.

**Rechtsgrundlagen:** Art. 28 DSGVO

**Impact auf das Projekt:** Organisatorische Randbedingung außerhalb des Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

# Pflichten des Datenvermittlungsdienstes aus dem DGA

## Interoperabilität zwischen Dateninhabern/betroffenen Personen (RAB15)

Der Anbieter des Datenvermittlungsdienstes muss den Austausch der Daten in dem Format ermöglichen, in dem er diese von einer betroffenen Person oder vom Dateninhaber erhält.

Der Anbieter des Datenvermittlungsdienstes darf die Daten nur in bestimmte Formate umwandeln, wenn mindestens eine der folgende Bedingungen erfüllt wird:

(1) Wenn dies erforderlich ist um die Interoperabilität innerhalb und zwischen Sektoren zu verbessern.

(2) Wenn der Datennutzer dies verlangt.

(3) Wenn das Unionsrecht dies vorschreibt.

(4) Wenn dies der Harmonisierung mit internationalen oder europäischen Datennormen dient.

Der Anbieter des Datenvermittlungsdienstes muss es betroffenen Personen und Dateninhaber ermöglichen, auf die Umwandlung mittels Opt-out zu verzichten.

**Intention:** Der Gesetzgeber möchte, damit der Binnenmarkt reibungslos funktionieren kann, dass Anbieter von Datenvermittlungsdiensten angemessene Maßnahmen ergreifen, um die Interoperabilität innerhalb eines Sektors und zwischen verschiedenen Sektoren sicherzustellen.

**Rechtsgrundlagen:** Art. 12 lit. d DGA

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Gewährleistung von Interoperabilität zu anderen Diensten im selben Sektor (RAB16)

Der Anbieter des Datenvermittlungsdienstes muss die Interoperabilität mit anderen Diensten, die im selben Sektor tätig sind durch die Nutzung von üblicherweise verwendeten offenen Standards gewährleisten.

**Intention:** Der Gesetzgeber möchte, damit der Binnenmarkt reibungslos funktionieren kann, dass Anbieter von Datenvermittlungsdiensten angemessene Maßnahmen ergreifen, um die Interoperabilität innerhalb eines Sektors und zwischen verschiedenen Sektoren sicherzustellen.

**Rechtsgrundlagen:** Art. 12 lit. i DGA

**Impact auf das Projekt:** Technische Randbedingung außerhalb des Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Anmeldung des Datenvermittlungsdienstes (RAB17)

Der Anbieter eines Datenvermittlungsdienstes im Sinne des Art. 10 DGA muss den Dienst nach Art. 11 Abs. 1 DGA bei der zuständigen Behörde anmelden.

**Intention:** Der Gesetzgeber möchte, dass ein Anmeldeverfahren für Datenvermittlungsdienste eingeführt wird, damit sichergestellt ist, dass die Daten-Governance auf der Grundlage einer vertrauenswürdigen Datenweitergabe in der Union erfolgt.

**Rechtsgrundlagen:** Art. 10 lit. b DGA, Art. 11 Abs. 1 DGA

Inhalt der Anmeldung: Art. 11 Abs. 6 DGA

**Impact auf das Projekt:** Organisatorische Randbedingung außerhalb des Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Zweckbindung von Datenvermittlungsdiensten (RAB18)

Der Anbieter des Datenvermittlungsdienstes muss die strenge Zweckbindung, die der DGA normiert, einhalten; die Daten dürfen zu keinem anderen Zweck als der Bereitstellung für Datennutzer verarbeitet werden.

**Intention:** Der Gesetzgeber möchte, dass Datenvermittlungsdienste als neutrale Datenmittler tätig werden. Daher dürfen die Datenvermittlungsdienste die bereitgestellten Daten nur zum Zwecke der Bereitstellung für Datennutzer verwenden.

**Rechtsgrundlagen:** Art. 12 lit. a DGA;

Art. 5 Abs. 1 lit. b DSGVO

**Impact auf das Projekt:** Organisatorische Randbedingung außerhalb des Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Kommerzielle Bedingungen und Preisgestaltung (RAB19)

Der Anbieter des Datenvermittlungsdienstes muss sicherstellen, dass kommerzielle Bedingungen und Preisgestaltung nicht davon abhängig sind, ob und in welchem Umfang der Dateninhaber oder Datennutzer Dienste desselben Anbieters nutzen.

**Intention:** Der Gesetzgeber möchte, dass eine strukturelle Trennung des Datenvermittlungsdienstes von allen anderen erbrachten Diensten, vorgenommen wird, um Interessenkonflikte zu vermeiden.

**Rechtsgrundlagen:** Art. 12 lit. b DGA

**Impact auf das Projekt:** Out of Scope

**Erfordert eine Nutzerinteraktion:** nein

## Einhaltung von Werten (RAB20)

Der Anbieter des Datenvermittlungsdienstes muss sicherstellen, dass der Zugang sowohl für Betroffene als auch für Datennutzer und Dateninhaber fair, nichtdiskriminierend und transparent ist.

**Intention:** Der Gesetzgeber möchte, dass der Datenvermittlungsdienst grundlegende Werte einhält.

**Rechtsgrundlagen:** Art. 12 lit. f DGA

**Impact auf das Projekt:** Organisatorische Randbedingung außerhalb des Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Verfahren zur Verhinderung betrügerischer oder missbräuchlicher Praktiken (RAB21)

Der Anbieter des Datenvermittlungsdienstes muss über ein Verfahren zur Verhinderung betrügerischer oder missbräuchlicher Praktiken bezogen auf die Parteien, die Zugang zum Datenvermittlungsdienst ersuchen, verfügen.

**Intention:** Der Gesetzgeber möchte, dass der Anbieter eines Datenvermittlungsdienstes über Verfahren zur Verhinderung betrügerischer oder missbräuchlicher Praktiken verfügt.

**Rechtsgrundlagen:** Art. 12 lit. g DGA

**Impact auf das Projekt:** Organisatorische Randbedingung außerhalb des Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Maßnahmen im Falle der Insolvenz (RAB22)

Wenn der Anbieter eines Datenvermittlungsdienstes insolvent ist, muss dieser eine angemessene Weiterführung des Dienstes gewährleisten und Mechanismen einrichten, die es Dateninhabern und Datennutzern ermöglichen, Zugang zu ihren Daten zu erhalten, diese zu übertragen oder abzurufen und wenn Datenvermittlungsdiensten zwischen betroffenen Personen und Datennutzern erbracht werden, ihre Rechte auszuüben.

**Intention:** Der Gesetzgeber möchte, dass der Datenvermittlungsdienst auch im Falle der Insolvenz noch den Zugang zu Daten für Dateninhaber und Datennutzern ermöglicht.

**Rechtsgrundlagen:** Art. 12 lit. h DGA

**Impact auf das Projekt:** Out of Scope

**Erfordert eine Nutzerinteraktion:** nein

## Sicherheit von nicht personenbezogenen Daten (RAB23)

Der Anbieter des Datenvermittlungsdienstes muss die Sicherheit von nicht personenbezogenen Daten gewährleisten, indem er Maßnahmen ergreift, um die rechtswidrige Übertragung und den rechtswidrigen Zugang zu diesen Daten zu verhindern.

Personenbezogene Daten werden in der Vorschrift nicht explizit erwähnt, weil sich die entsprechende Anforderung bereits aus der DSGVO ergibt.

**Intention:** Der Gesetzgeber möchte, dass der Datenvermittlungsdienst auch die technische Sicherheit von nicht personenbezogenen Daten gewährleistet.

**Rechtsgrundlagen:** Art. 12 lit. j DGA

**Impact auf das Projekt:** Out of Scope

**Erfordert eine Nutzerinteraktion:** nein

## Sicherheit von nicht personenbezogenen Daten bei der Speicherung, Verarbeitung und Übermittlung (RAB24)

Der Anbieter eines Datenvermittlungsdiensts muss die Sicherheit nicht personenbezogener Daten gewährleisten, indem er die notwendigen Maßnahmen ergreift, um ein angemessenes Sicherheitsniveau bei der Speicherung/Verarbeitung und Übermittlung sicherzustellen. Der Anbieter des Datenvermittlungsdienstes muss das höchste Sicherheitsniveau für die Übertragung wettbewerbsrelevanter Informationen sicherstellen.

Personenbezogene Daten werden in der Vorschrift nicht explizit erwähnt, weil sich die entsprechende Anforderung bereits aus der DSGVO ergibt.

**Intention:** Der Gesetzgeber möchte, dass der Datenvermittlungsdienst auch die technische Sicherheit von nicht personenbezogenen Daten gewährleistet und hierzu geeignete Maßnahmen ergreift.

**Rechtsgrundlagen:** Art. 12 lit. l DGA

**Impact auf das Projekt:** Out of Scope

**Erfordert eine Nutzerinteraktion:** nein

## Meldung des unbefugten Umgangs mit Daten (RAB25)

Der Anbieter eines Datenvermittlungsdienstes muss die unbefugte Übertragung, den unbefugten Zugriff und die unbefugte Nutzung von nicht-personenbezogenen Daten dem Dateninhaber melden.

Personenbezogene Daten werden in der Vorschrift nicht explizit erwähnt, weil sich die entsprechende Anforderung bereits aus der DSGVO ergibt.

**Intention:** Der Gesetzgeber möchte, dass der Datenvermittlungsdienst transparent auch Informationen zu Vorfällen mit nicht personenbezogenen Daten bereitstellt.

**Rechtsgrundlagen:** Art. 12 lit. k DGA

**Impact auf das Projekt:** Out of Scope

**Erfordert eine Nutzerinteraktion:** ja

## Aufklärung betroffener Personen bei der Einholung von Einwilligungen (RAB26)

Der Anbieter des Datenvermittlungsdienstes muss betroffene Personen, bevor sie ihre Einwilligung erteilen, in prägnanter, transparenter, verständlicher und leicht zugänglicher Weise über die beabsichtigte Nutzung der Daten durch Datennutzer und die üblichen Geschäftsbedingungen für solche Nutzungen informieren und beraten.

Der Anbieter des Datenvermittlungsdienstes muss die Rechteausübung der betroffenen Personen durch diese Maßnahmen erleichtern.

**Intention:** Der Gesetzgeber möchte, dass der Datenvermittlungsdienst betroffene Personen hinreichend aufklärt, wenn Einwilligungen eingeholt werden. Ferner möchte der Gesetzgeber, dass der Datenvermittlungsdienst betroffene Personen bei der Geltendmachung von Betroffenenrechten unterstützt.

**Rechtsgrundlagen:** Art. 12 lit. m DGA

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Zurverfügungstellen von Werkzeugen zur Einholung und zum Widerruf von Einwilligungen (RAB27)

Wenn Werkzeuge zur Einholung von Einwilligungen von betroffenen Personen bzw. von Erlaubnissen der Verarbeitung der vom Dateninhaber zur Verfügung gestellten Daten bereitgestellt werden, muss der Anbieter des Datenvermittlungsdienstes:

(1) das Hoheitsgebiet des Drittlandes angeben, in dem die Datennutzung stattfinden soll und

(2) den betroffenen Personen Werkzeuge zur Erteilung und zum Widerruf der Einwilligung zur Verfügung stellen sowie

(3) Dateninhabern Werkzeuge zur Erteilung und zum Widerruf der Erlaubnis zur Verarbeitung von Daten zur Verfügung stellen.

**Intention:** Der Gesetzgeber möchte, dass der Datenvermittlungsdienst betroffene Personen hinreichend aufklärt, wenn Werkzeuge zur Einholung von Einwilligungen von betroffenen Personen bzw. von Erlaubnissen der Verarbeitung der vom Dateninhaber zur Verfügung gestellten Daten bereitgestellt werden.

**Rechtsgrundlagen:** Art. 12 lit. n DGA

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Führung eines Protokolls (RAB28)

Der Anbieter des Datenvermittlungsdienstes muss Protokoll über seine Tätigkeit führen.

**Intention:** Der Gesetzgeber möchte, dass der Datenvermittlungsdienst einen Nachweis über seine Tätigkeiten führt.

**Rechtsgrundlagen:** Art. 12 lit. o DGA

**Impact auf das Projekt:** Optionaler Bestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** nein

## Verarbeitung in einer transparenten Art und Weise (RAB29)

Der Verantwortliche muss Daten in einer für die betroffene Person nachvollziehbaren Weise verarbeiten.

**Intention:** Der Gesetzgeber möchte, dass betroffene Personen transparente Informationen zur Verarbeitung ihrer personenbezogenen Daten erhalten.

**Rechtsgrundlagen:** Art. 5 Abs. 1 lit. a DSGVO

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Einrichtung von weiteren Diensten und Werkzeugen für betroffene Personen und Dateninhaber (RAB30)

Wenn weitere Dienste und Werkzeuge zur Unterstützung von Dateninhabern und betroffenen Personen eingerichtet sind, bspw. um den Datenaustausch zu ermöglichen, muss der Anbieter des Datenvermittlungsdienstes sicherstellen, dass er diese nur auf expliziten Wunsch des Dateninhabers bzw. betroffenen Person zur Verfügung stellt.

**Intention:** Der Gesetzgeber möchte, dass Datenvermittlungsdienste Dateninhabern oder betroffenen Personen insbesondere zur Erleichterung des Datenaustauschs weitere Werkzeuge, z. B. durch vorübergehende Speicherung, Pflege, Konvertierung, Anonymisierung und Pseudonymisierung anbieten dürfen. Diese Werkzeuge und Dienste sollten nur auf ausdrücklichen Antrag oder mit der Zustimmung des Dateninhabers oder der betroffenen Person verwendet werden; und in diesem Zusammenhang angebotene Werkzeuge Dritter sollten Daten zu keinen anderen Zwecken verwenden.

**Rechtsgrundlagen:** Art. 12 lit. e DGA

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

## Daten zur Erbringung des Datenvermittlungsdienstes (RAB31)

Der Anbieter des Datenvermittlungsdienstes darf Daten, die in Bezug auf Tätigkeiten einer natürlichen oder juristischen Person zur Erbringung des Datenvermittlungsdienstes erhoben werden (wie etwa Datum, Uhrzeit und Geolokalisierungsdaten, Dauer der Tätigkeit sowie Verbindungen zu anderen natürlichen oder juristischen Personen) nur für die Entwicklung dieses Datenvermittlungsdienstes verwenden.

Der Anbieter des Datenvermittlungsdienstes muss diese Daten den Dateninhabern auf Anfrage zur Verfügung stellen.

**Intention:** Der Gesetzgeber möchte, dass die Anbieter von Datenvermittlungsdiensten die von den Dateninhabern bereitgestellten Daten zur Verbesserung ihrer Datenvermittlungsdienste verwenden können.

**Rechtsgrundlagen:** Art. 12 lit. c DGA

**Impact auf das Projekt:** Kernbestandteil eines Datenschutz-Cockpits

**Erfordert eine Nutzerinteraktion:** ja

****

| [![](/Daccord/assets/images/backward-solid.svg) Mentale Modelle](<../Zielgruppen/Mentale Modelle>) | [Bedarfe ![](/Daccord/assets/images/forward-solid.svg)](<Bedarfe>) |

****

**Quellen:**

[^1]: nach Martin Glinz, „On Non-Functional Requirements”, 15. IEEE International Requirements Engineering Conference (RE), 2007, P. 21–26, doi: 10.1109/RE.2007.45.

[^2]: siehe Kapitel 6 in Chris Rupp und die SOPHISTen, „Requirements Engineering und -Management“, 6. Auflage, 2020, Hanser Verlag.