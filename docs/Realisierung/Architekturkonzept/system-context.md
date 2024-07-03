1. [Introduction](index.md)
2. System context and domain model
3. [Architecture drivers](drivers.md)
4. [Initial decomposition](decomposition.md)
5. [Quality concepts](quality.md)
6. [Further notes](conclusion.md)

# System context and domain model

## System context

While the platform, at its core, is responsible for brokering data assets from providers to consumers, the DPC is a software component to be integrated into the platform to enable the participants to send data-related notifications to each other. Three entities interact with the DSC: the platform core, the data provider, and the data consumer (see Figure below). Note that the platform core also gets information about grants from the DPC.

![Context delineation](images/diagram_context-delineation_basic.svg)

![Context delineation](images/diagram_context-delineation_clean.svg)

![Context delineation](images/diagram_context-delineation.svg)

## Domain model



<p align="center">
    <a href="index.md">Previous: 1. Introduction</a>&nbsp; | &nbsp;<a href="drivers.md">Next: 3. Architecture drivers</a>
</p>
