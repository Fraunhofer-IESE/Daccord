# Datenklassen

Eine Datenklasse ist ein abstraktes Modell für eine Reihe ähnlicher Datenobjekte. Die Klasse beschreibt die Attribute (Eigenschaften) dieser Objekte. Im Detail unterscheiden sich die in verschiedenen digitalen Ökosystemen verarbeiteten Datenarten natürlich stark voneinander. Dennoch gibt es immer wiederkehrende Muster was ihre (Datenschutz-)Eigenschaften betrifft. Daher ist es unser Ziel allgemeine Datenklassen zu identifizieren, die für die meisten digitalen Ökosysteme relevant und gültig sind.

![](<Datenklassen.png>)

Wie der Grafik zu entnehmen ist, unterschieden wir Daten nach ihrer Kritikalität und ihrer Fachlichkeit, wie im Folgenden beschrieben.

## Kritikalitätsklassen

### Daten ohne Personenbezug (DK1)

Daten, welche sich nicht auf eine Person beziehen bzw. ihr nicht zugeordnet werden können. Der Personenbezug kann auch entfernt worden sein, z. B. durch Anonymisierung.

**Beispiele:** Anonymisierte Daten, Regelungen, Organisationsanweisungen

**Datenursprung**: auf verschiedenen Wegen erfasst

### Personenbezogene Daten (DK2)

Nach Art. 4 DSGVO bezeichnet der Begriff personenbezogene Daten alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.

**Beispiele:** siehe Unterklassen der Kategorie


**Datenursprung**: auf verschiedenen Wegen erfasst

### Besondere Kategorien personenbezogener Daten (DK3)

In Art. 9 DSGVO ist die Verarbeitung „besonderer Kategorien personenbezogener Daten“ geregelt. Dies sind Daten, aus denen die rassische und ethnische Herkunft, politische Meinungen, religiöse oder weltanschauliche Überzeugungen oder die Gewerkschaftszugehörigkeit hervorgehen, sowie genetische Daten, biometrische Daten zur eindeutigen Identifizierung einer natürlichen Person, Gesundheitsdaten oder Daten zum Sexualleben oder der sexuellen Orientierung einer natürlichen Person.

**Beispiele:** siehe Unterklassen der Kategorie


**Datenursprung**: auf verschiedenen Wegen erfasst

### Gewerkschaftszugehörigkeit (DK4)

Daten, die auf die Zugehörigkeit eines Betroffenen zu einer Gewerkschaft schließen lassen.

**Beispiele:** Gewerkschaftsmitgliedschaft, Streikteilnahme

**Datenursprung**: nicht erfasst

### Rassische und ethnische Herkunft (DK5)

Daten, die auf die rassische bzw. ethnische Herkunft des Betroffenen schließen lassen.

**Beispiele:** Hautfarbe („schwarz“), Herkunft („asiatisch“)

**Datenursprung**: nicht erfasst

### Politische Meinungen (DK6)

Daten, die auf politische Meinungen oder eine Parteizugehörigkeit schließen lassen.

**Beispiele:** Teilnahme an Veranstaltungen, Nutzung von Symbolik, Zugehörigkeit zu Gruppen (u. a. auf der Plattform)

**Datenursprung**: nicht erfasst

### Religiöse oder weltanschauliche Überzeugungen (DK7)

Daten, die auf die Meinung oder Zugehörigkeit eines Betroffenen zu einer religiösen oder weltanschaulichen Vereinigung schließen lassen.

**Beispiele:** genutzte Gebetszeiten, Geburtsurkunden, Zugehörigkeit zu Gruppen (u. a. auf der Plattform)

**Datenursprung**: nicht erfasst

### Genetische Daten (DK8)

Genetische Daten des Betroffenen.

**Beispiele:** DNA-Profile, die von Polizisten erfasst werden, um diese bei der Untersuchung von DNA-Spuren des Tatorts auszuschließen

**Datenursprung**: vom Betroffenem explizit bereitgestellt

### Biometrische Daten (DK9)

Biometrische Daten eines Betroffenen.

**Beispiele:** Fingerabdruck zur Authentifizierung, Gesichtsgeometrie (“Face ID”), Irismuster

**Datenursprung**: auf verschiedenen Wegen erfasst

### Gesundheitsdaten (DK10)

Daten, die auf den vergangenen oder aktuellen Gesundheitszustand eines Betroffenen schließen lassen.

**Beispiele:** Krankheitsgeschichte, chronische Krankheiten, Behinderungen (einschließlich Daten Angehöriger), Informationen zum Gesundheitsmanagement, Wearable-Daten (z. B. Fitness-Tracker)

**Datenursprung**: auf verschiedenen Wegen erfasst

### Daten zum Sexualleben oder der sexuellen Orientierung (DK11)

Daten, welche auf Sexualleben oder die sexuelle Orientierung eines Betroffenen schließen lassen.

**Beispiele:** Heiratsurkunde, Fotos

**Datenursprung**: nicht erfasst

### Einfache personenbezogene Daten (DK12)

Personenbezogene Daten, bei denen kein erhöhter Schutzbedarf vorliegt.

**Datenursprung**: auf verschiedenen Wegen erfasst

### Individuell besonders schützenswerte Daten (DK13)

Personenbezogene Daten, die nicht in die besonderen Kategorien fallen, aber dennoch einen höheren Schutzbedarf für einen Betroffenen haben.

**Beispiele:** Standort(-verlauf), Kommunikationsdaten

**Datenursprung**: auf verschiedenen Wegen erfasst

## Fachliche Klassen
### Stammdaten (DK14)

Allgemeine Daten zum Nutzer.

**Beispiele:** Accountdaten, Login

**Datenursprung**: auf verschiedenen Wegen erfasst

### Finanzdaten (DK15)

Daten, die sich auf die Bezahlung von Waren und Dienstleistungen beziehen.

**Beispiele:** hinterlegte Zahlungsarten, Abbuchungen

**Datenursprung**: vom Betroffenem explizit bereitgestellt

### Kommunikationsdaten (DK16)

Kommunikation mit der Plattform und mit anderen Teilnehmern des Ökosystems.

**Beispiele:** Chat, Rückgaben, Garantieabwicklung

**Datenursprung**: vom Betroffenem explizit bereitgestellt

### Allgemeine Präferenzen (DK17)

Einstellungen, die der Nutzer auf der Plattform vornimmt.

**Beispiele:** Accounteinstellungen, Werbeeinstellungen, Benachrichtigungseinstellungen

**Datenursprung**: vom Betroffenem explizit bereitgestellt

### Einwilligungen (DK18)

Erteilte / nicht erteilte / widerrufene Einwilligungen.

**Beispiele:** Cookie-Einwilligungen

**Datenursprung**: vom Betroffenem explizit bereitgestellt

### Transaktionsdaten (DK19)

Daten, die sich auf das Vermitteln des Guts beziehen (Brokering).

**Beispiele:** gebuchte digitale Dienste, Abos, gebuchte analoge Dienstleistungen, gekaufte Waren

**Datenursprung**: automatisiert aufgrund von Aktionen des Betroffenen erhoben

### Auf der Plattform gespeicherte Daten (DK20)

Nutzdaten, die die Plattform im Auftrag des Datengebers speichert.

**Beispiele:** Daten, die andere Teilnehmer kaufen können, Datenspeicherdienste, Datentreuhänder

**Datenursprung**: vom Betroffenem explizit bereitgestellt

### Nutzungsdaten (DK21)

Daten, die sich auf die Nutzung der Plattform bzw. der Dienste durch einen Nutzer beziehen.

**Beispiele:** Tracking, Nutzungsverhalten

**Datenursprung**: automatisiert aufgrund von Aktionen des Betroffenen erhoben

### Datenschutzdaten (DK22)

Daten, die lediglich für den Datenschutz anfallen.

**Beispiele:** Datenauskünfte, Löschersuchen, Korrekturersuchen

**Datenursprung**: auf verschiedenen Wegen erfasst

****

| [![](/Daccord/assets/images/backward-solid.svg) Datenverarbeitung](<./>) | [Verarbeitungszwecke ![](/Daccord/assets/images/forward-solid.svg)](<Verarbeitungszwecke>) |

****
