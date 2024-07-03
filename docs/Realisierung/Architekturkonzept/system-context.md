1. [Introduction](index.md)
2. System context and domain model
3. [Architecture drivers](drivers.md)
4. [Initial decomposition](decomposition.md)
5. [Quality concepts](quality.md)
6. [Further notes](conclusion.md)

# System context and domain model

## System context

While the platform, at its core, is responsible for brokering data assets from providers to consumers, the DPC is a software component integrated into the platform to enable the participants to send data-related messages to each other. We refer to these messages generically as _notifications_. If a participant wants to request something from another participant, or inform another participant about something, the participant sends a _notification_.

Three entities interact with the DSC: the platform core, the data provider, and the data consumer (see figure below). Note that the platform core also gets information about grants from the DPC.

![Context delineation](images/diagram_context-delineation_basic.svg)

There are different types of notifications sent from participant to participant. For example:

- the data provider can _request data access_ (notification of type "data access request") from the data consumer;
- the data consumer can _request data modification_ (type: "data modification request") from the platform core;
- the data consumer can _report a data-leak incident_ (type: "incident report") to data providers;

The diagram below features the role "Ecosystem participant" as a generalization for each participant. Furthermore, this diagram illustrates functions specific to each participant, reflecting different notification types.

![Context delineation](images/diagram_context-delineation_clean.svg)

![Context delineation](images/diagram_context-delineation.svg)

## Domain model



<p align="center">
    <a href="index.md">Previous: 1. Introduction</a>&nbsp; | &nbsp;<a href="drivers.md">Next: 3. Architecture drivers</a>
</p>
