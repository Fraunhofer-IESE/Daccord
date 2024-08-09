# Qualitätsmodell

Das D’accord-Qualitätsmodell ermöglicht eine multiperspektivische Qualitätsbetrachtung und -bewertung über mehrere Qualitätsbereiche hinweg. Neben der Qualitätssicht des Betreibers, bei dem die hauptsächliche Verantwortlichkeit für die Qualitätssicherung im digitalen Ökosystem liegt, werden hierbei auch die Qualitätssichten aller anderen relevanten Stakeholder berücksichtigt.

Für die Qualitätsbetrachtung in D'accord sind insbesondere zwei Softwaresysteme relevant, die gesondert zu betrachten sind, das Datenschutz-Cockpit als eigenständiges Produkt sowie die digitale Plattform des digitalen Ökosystems. Entsprechend ist in dem Modell meist nicht von einem „Produkt“ die Rede, sondern es wird das konkrete Softwareprodukt – das Datenschutz-Cockpit oder die digitale Plattform – benannt.

Das Qualitätsmodell ist in vier Ebenen aufgeteilt:

1. **_Bereich_**: Auf höchster Ebene besteht das Modell aus fünf Qualitätsbereichen: der Datenqualität, der Qualität der digitalen Plattform, der Qualität des Datenschutz-Cockpits, der Prozessqualität im digitalen Ökosystem sowie der Strukturqualität beim Betreiber des digitalen Ökosystems. Die Bereiche Qualität der digitalen Plattform und Qualität des Datenschutz-Cockpits bestehen jeweils aus zwei Abschnitten: Produktqualität (Qualität der digitalen Plattform bzw. des Datenschutz-Cockpits in Bezug auf die Erreichung der Ziele, für die sie bzw. es entwickelt wurde) und Nutzungsqualität (Auswirkungen der Nutzung der digitalen Plattform bzw. des Datenschutz-Cockpits auf den Nutzer in einem bestimmten Nutzungskontext).
2. **_Teilbereich_**: Jeder Qualitätsbereich ist unterteilt in mehrere Teilbereiche. Manche Qualitätsmodelle oder Standards bezeichnen Qualitäten auf dieser Ebene als „Hauptmerkmale“.
3. **_Qualitätsmerkmal_**: Jeder Teilbereich ist typischerweise in einzelne Qualitätsmerkmale unterteilt. Manche Qualitätsmodelle oder Standards bezeichnen Qualitäten auf dieser Ebene als „Teilmerkmale“.
4. **_Kriterium_**: Für jedes einzelne Qualitätsmerkmal wurden Bewertungs- bzw. Messkriterien erstellt, auf deren Basis die Erfüllung der jeweiligen Qualität eingeschätzt werden kann. Die Qualitätskriterien sind als Leitfragen formuliert, sodass man sie als Checklisten-Items verwenden kann. Die Antwort „ja“ bedeutet die Erfüllung eines Kriteriums (z. B., weil eine Organisation eine Voraussetzung sicherstellt oder das System eine gewisse Eigenschaft erfüllt).

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

- **_B_**_:_ Kennzeichnung des Bereichs: D = Datenqualität; Pl-Pd = Plattform-Produktqualität; Pl-N = Plattform-Nutzungsqualität; C-Pd = Cockpit-Produktqualität; C-N = Cockpit-Nutzungsqualität; Pz = Prozessqualität; S = Strukturqualität.
- **_Bereich_**_:_ Name des Qualitätsbereichs: Daten-, Prozess- bzw. Strukturqualität oder die Nutzungs- und Produktqualität des Datenschutz-Cockpits bzw. der digitalen Plattform.
- **_T_**_:_ Kennzeichnung des Teilbereichs: 0 = Überkategorie; 1–n = Teilbereiche (fortlaufend nummeriert).
- **_Teilbereich_**_:_ Name des Teilbereichs jeweiligen Qualitätsbereichs.
- **_Q_**_:_ Kennzeichnung des Qualitätsmerkmals: 0 = Überkategorie; 1–n = Teilbereiche (fortlaufend nummeriert).
- **_Qualitätsmerkmal_**_:_ Name des Qualitätsmerkmals, das einem bestimmten Teilbereich untergeordnet ist.
- **_#Kriterien_**_:_ automatisch berechnete Anzahl der Qualitätskriterien des jeweiligen Qualitätsbereichs, Teilbereichs oder Qualitätsmerkmals.
- **_Scope_**_:_ System, auf das die Qualität sich bezieht: das Datenschutz-Cockpit, die digitale Plattform oder das digitale Ökosystem als Ganzes.
- **_Beschreibung_**_:_ Definition des jeweiligen Qualitätsbereichs, Teilbereichs oder Qualitätsmerkmals.
- **_Quelle_**_:_ Referenz zur Quelle, auf der die Beschreibung basiert. Die Aufschlüsselung der Referenzen erfolgt im Blatt „Quellen“.
- **_Quelle – Originalbezeichnung_**_:_ Name des Qualitätsbereichs, Teilbereichs oder Qualitätsmerkmals in der referenzierten Quelle.

### Datenqualität, Qualität_der_Plattform, Qualität_des_Cockpits, Prozessqualität, Strukturqualität

Diese Blätter enthalten die **Kriterienkataloge** zu den einzelnen Qualitätsbereichen, wobei die Blätter „Qualität_der_Plattform“ und „Qualität_des_Cockpits“ jeweils Abschnitte zur Produktqualität und zur Nutzungsqualität umfassen. Alle Blätter bestehen aus folgenden Spalten:

- **_B | Bereich | T | Teilbereich | Q | Qualitätsmerkmal_**_:_ Die Kennzeichnungen und Namen der Bereiche, Teilbereiche und Qualitätsmerkmale entsprechen denen im Blatt „Qualitätsmodell“.
- **_K_**_:_ Kennzeichnung des Qualitätskriteriums: 00 = Überkategorie; 01–nn = Teilbereiche (fortlaufend nummeriert).
- **_Kriterium_**_:_ Qualitätskriterium zur Bewertung des jeweiligen Qualitätsmerkmals, Teilbereichs oder Qualitätsbereichs.
- **_ID_**_:_ auf Basis der oben beschriebenen Variablen B, T, Q und K automatisch generierter Identifikator des jeweiligen Qualitätskriteriums mit der Struktur B-T.Q.K.
- **_Quelle_**_:_ Referenz zur Quelle oder zu den Quellen, auf denen das Qualitätskriterium basiert. Die Aufschlüsselung der Referenzen erfolgt im Blatt „Quellen“.

### Quellen

Die Quellen, auf denen die Inhalte des Qualitätsmodells basieren, werden im Reiter **„Quellen“** referenziert. Er besteht aus den folgenden Spalten:

- **_Kürzel_**_:_ Kurzbezeichnung der Quelle, wie sie in anderen Blättern referenziert wird.
- **_Autor/Herausgeber_**_:_ Name des Autors bzw. Herausgebers der Ressource.
- **_Titel_**_:_ Vollständiger bzw. offizieller Name der Quelle.
- **_URL_**_:_ Verweis zur Quelle oder zu einem (offiziellen) Kanal, über den Informationen zur Quelle abgerufen werden können.

