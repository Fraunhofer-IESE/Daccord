1. [Introduction](index.md)
2. System context and domain model
3. [Architecture drivers](drivers.md)
4. [Initial decomposition](decomposition.md)
5. [Quality concepts](quality.md)
6. [Further notes](conclusion.md)

# System context and domain model

## System context

While the platform, at its core, is responsible for brokering data assets from providers to consumers, the DPC is a software component to be integrated into the platform to enable the participants to send data-related notifications to each other. Three entities interact with the DSC: the platform core, the data provider, and the data consumer (see figure below). Note that the platform core also gets information about grants from the DPC.

![Context delineation](images/diagram_context-delineation_basic.svg)

The data provider, the data consumer, and the platform core are "Ecosystem participants" and share the functions "send notification" and "get notification" as they notify each other via the DPC. While these functions have named in generic terms, there are different types of notifications sent from participant to participant. For example:

- the data provider can _request data access_ (notification of type "data access request") from the data consumer;
- the data consumer can _request data modification_ from the platform core;


The diagram below details the functions used by the 

"Send notification" and "get notification" are general terms for the different types of notifications sent from participant to participant via the DPC. 

![Context delineation](images/diagram_context-delineation_clean.svg)

![Context delineation](images/diagram_context-delineation.svg)

## Domain model



<p align="center">
    <a href="index.md">Previous: 1. Introduction</a>&nbsp; | &nbsp;<a href="drivers.md">Next: 3. Architecture drivers</a>
</p>
