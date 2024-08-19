1. Introduction
2. [System context and domain model](system-context.md)
3. [Architecture drivers](drivers.md)
4. [System decomposition](decomposition.md)
5. [Quality concepts](quality.md)
6. [Further notes](conclusion.md)

# Architectural concept

This section introduces a reference architecture for realizing a Data Protection Cockpit (DPC, also referred to as DSC from the German "Datenschutz-Cockpit").

<!-- - [Business context](#business-context) 
- [System overview](#system-overview)
- [Constraints](#constraints)
- [Stakeholders](#stakeholders)
-->

<!--
## Business context

tbd
-->

## System overview

In a digital data ecosystem, data is the core asset exchanged among participants through an enabling digital platform. While data providers use the platform to provide their data, data consumers use the platform to access the data. 

**The DPC is a software component integrated into the digital platform where privacy-related data is exchanged among participants.** It gives participants (providers and consumers) a central point for managing data-related requests (e.g., information, access grants).


## Constraints

The DSC shall support legal compliance with data protection regulations (e.g., GDPR).

## Stakeholders

In the context of the DPC, there are three primary stakeholders:

- **The data provider**: also known as _data subjects_, data providers are individuals whose data is used in the digital ecosystem of interest.
- **The data consumer**: also referred to as _service providers_, data consumers are companies whose digital services use data providers' data intermediated through the platform of the digital ecosystem of interest.
- **The platform operator**: The company responsible for the platform that enables the digital ecosystem and, among other things, intermediates the data exchange between data providers and consumers.


[Next: 2. System context and domain model](system-context.md)

