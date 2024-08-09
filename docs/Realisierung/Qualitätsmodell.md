# Qualitätsmodell

Das D’accord-Qualitätsmodell ermöglicht eine multiperspektivische Qualitätsbetrachtung und -bewertung über mehrere Qualitätsbereiche hinweg. Neben der Qualitätssicht des Betreibers, bei dem die hauptsächliche Verantwortlichkeit für die Qualitätssicherung im digitalen Ökosystem liegt, werden hierbei auch die Qualitätssichten aller anderen relevanten Stakeholder berücksichtigt.

Für die Qualitätsbetrachtung in D'accord sind insbesondere zwei Softwaresysteme relevant, die gesondert zu betrachten sind, das Datenschutz-Cockpit als eigenständiges Produkt sowie die digitale Plattform des digitalen Ökosystems. Entsprechend ist in dem Modell meist nicht von einem „Produkt“ die Rede, sondern es wird das konkrete Softwareprodukt – das Datenschutz-Cockpit oder die digitale Plattform – benannt.

Das Qualitätsmodell ist in vier Ebenen aufgeteilt:

1. **Bereich**: Auf höchster Ebene besteht das Modell aus fünf Qualitätsbereichen: der Datenqualität, der Qualität der digitalen Plattform, der Qualität des Datenschutz-Cockpits, der Prozessqualität im digitalen Ökosystem sowie der Strukturqualität beim Betreiber des digitalen Ökosystems. Die Bereiche Qualität der digitalen Plattform und Qualität des Datenschutz-Cockpits bestehen jeweils aus zwei Abschnitten: Produktqualität (Qualität der digitalen Plattform bzw. des Datenschutz-Cockpits in Bezug auf die Erreichung der Ziele, für die sie bzw. es entwickelt wurde) und Nutzungsqualität (Auswirkungen der Nutzung der digitalen Plattform bzw. des Datenschutz-Cockpits auf den Nutzer in einem bestimmten Nutzungskontext).
2. **Teilbereich**: Jeder Qualitätsbereich ist unterteilt in mehrere Teilbereiche. Manche Qualitätsmodelle oder Standards bezeichnen Qualitäten auf dieser Ebene als „Hauptmerkmale“.
3. **Qualitätsmerkmal**: Jeder Teilbereich ist typischerweise in einzelne Qualitätsmerkmale unterteilt. Manche Qualitätsmodelle oder Standards bezeichnen Qualitäten auf dieser Ebene als „Teilmerkmale“.
4. **Kriterium**: Für jedes einzelne Qualitätsmerkmal wurden Bewertungs- bzw. Messkriterien erstellt, auf deren Basis die Erfüllung der jeweiligen Qualität eingeschätzt werden kann. Die Qualitätskriterien sind als Leitfragen formuliert, sodass man sie als Checklisten-Items verwenden kann. Die Antwort „ja“ bedeutet die Erfüllung eines Kriteriums (z. B., weil eine Organisation eine Voraussetzung sicherstellt oder das System eine gewisse Eigenschaft erfüllt).

Das Thema Datenschutz ist hierbei in verschiedenen Bereichen relevant:

- Qualität der digitalen Plattform bzw. des Datenschutz-Cockpits: In der Softwareentwicklung ist Datenschutz insbesondere über das entwickelte Softwareprodukt – in D'accord die digitale Plattform bzw. das Datenschutz-Cockpit – zu erreichen. Dies sind also eher technisch „implementierbare“, systemspezifische Qualitätseigenschaften.
- Prozessqualität: Die Verarbeitung personenbezogener Daten und die Verwendung der verarbeitenden Softwaresystemen findet in der Regel innerhalb von Geschäftsprozessen statt. Dies sind also eher allgemeingültige Qualitätseigenschaften, etwa der Grad, in dem eine Organisation Prozesse und Maßnahmen definiert sind, um Transparenz sicherzustellen.
- Strukturqualität: Die Sicherstellung des Datenschutzes liegt in der Verantwortung der verarbeitenden Organisation.
- Datenqualität: Personenbezogene Daten bilden eine besondere Datenkategorie.

Die Arbeiten am Qualitätsmodell in D’accord basierten auf den im Vorgängerprojekt [TrUSD](https://www.trusd-projekt.de) geleisteten Vorarbeiten.

## Struktur des Qualitätsmodells

Das Qualitätsmodell ist in einer Excel-Datei dokumentiert, die folgende Blätter umfasst:

### Qualitätsmodell

Dieses Blatt besteht aus folgenden Spalten:

- **B**: Kennzeichnung des Bereichs: D = Datenqualität; Pl-Pd = Plattform-Produktqualität; Pl-N = Plattform-Nutzungsqualität; C-Pd = Cockpit-Produktqualität; C-N = Cockpit-Nutzungsqualität; Pz = Prozessqualität; S = Strukturqualität.
- **Bereich**: Name des Qualitätsbereichs: Daten-, Prozess- bzw. Strukturqualität oder die Nutzungs- und Produktqualität des Datenschutz-Cockpits bzw. der digitalen Plattform.
- **T**: Kennzeichnung des Teilbereichs: 0 = Überkategorie; 1–n = Teilbereiche (fortlaufend nummeriert).
- **Teilbereich**: Name des Teilbereichs jeweiligen Qualitätsbereichs.
- **Q**: Kennzeichnung des Qualitätsmerkmals: 0 = Überkategorie; 1–n = Teilbereiche (fortlaufend nummeriert).
- **Qualitätsmerkmal**: Name des Qualitätsmerkmals, das einem bestimmten Teilbereich untergeordnet ist.
- **#Kriterien**: automatisch berechnete Anzahl der Qualitätskriterien des jeweiligen Qualitätsbereichs, Teilbereichs oder Qualitätsmerkmals.
- **Scope**: System, auf das die Qualität sich bezieht: das Datenschutz-Cockpit, die digitale Plattform oder das digitale Ökosystem als Ganzes.
- **Beschreibung**: Definition des jeweiligen Qualitätsbereichs, Teilbereichs oder Qualitätsmerkmals.
- **Quelle**: Referenz zur Quelle, auf der die Beschreibung basiert. Die Aufschlüsselung der Referenzen erfolgt im Blatt „Quellen“.
- **Quelle – Originalbezeichnung**: Name des Qualitätsbereichs, Teilbereichs oder Qualitätsmerkmals in der referenzierten Quelle.

### Datenqualität, Qualität_der_Plattform, Qualität_des_Cockpits, Prozessqualität, Strukturqualität

Diese Blätter enthalten die **Kriterienkataloge** zu den einzelnen Qualitätsbereichen, wobei die Blätter „Qualität_der_Plattform“ und „Qualität_des_Cockpits“ jeweils Abschnitte zur Produktqualität und zur Nutzungsqualität umfassen. Alle Blätter bestehen aus folgenden Spalten:

- **B, Bereich, T, Teilbereich, Q, Qualitätsmerkmal**: Die Kennzeichnungen und Namen der Bereiche, Teilbereiche und Qualitätsmerkmale entsprechen denen im Blatt „Qualitätsmodell“.
- **K**: Kennzeichnung des Qualitätskriteriums: 00 = Überkategorie; 01–nn = Teilbereiche (fortlaufend nummeriert).
- **Kriterium**: Qualitätskriterium zur Bewertung des jeweiligen Qualitätsmerkmals, Teilbereichs oder Qualitätsbereichs.
- **ID**: auf Basis der oben beschriebenen Variablen B, T, Q und K automatisch generierter Identifikator des jeweiligen Qualitätskriteriums mit der Struktur B-T.Q.K.
- **Quelle**: Referenz zur Quelle oder zu den Quellen, auf denen das Qualitätskriterium basiert. Die Aufschlüsselung der Referenzen erfolgt im Blatt „Quellen“.

### Quellen

Sämtliche Quellen, auf denen die Inhalte des Qualitätsmodells basieren, werden im Blatt **„Quellen“** referenziert. Es besteht aus den folgenden Spalten:

- **Kürzel**: Kurzbezeichnung der Quelle, wie sie in anderen Blättern referenziert wird.
- **Autor/Herausgeber**: Name des Autors bzw. Herausgebers der Ressource.
- **Titel**: Vollständiger bzw. offizieller Name der Quelle.
- **URL**: Verweis zur Quelle oder zu einem (offiziellen) Kanal, über den Informationen zur Quelle abgerufen werden können.

