1. [Introduction](index.md)
2. [System context and domain model](system-context.md)
3. [Architecture drivers](drivers.md)
4. System decomposition
5. [Quality concepts](quality.md)
6. [Further notes](conclusion.md)

# System decomposition

# Structure

The figure below features the _Data Intermediation Platform_ composed of two elements: the _Platform Core_ and the _DPC_. On the left side, a human actor represents a _data provider_; on the right side, an external third-party system and its user compose the _data consumer_. The data provider sends data assets to, and the data provider gets data assets from, the platform core. That means that the flow of the data assets happens via the core platform and does not belong to the scope of the DPC (note the data flow area in the figure). The DPC contributes to the data for the information about grants is managed by the DPC. Therefore, the platform core must check the DPC for grant information before forwarding data assets to a data consumer.

![first decomposition](images/diagram_decomposition-1.svg)

The next figure further decomposes the DPC component and features not only the external but also the internal dependencies among components in the ecosystem. In this representation, we colored the components _Participant Service_, _Log Service_, _Notification Service_, and _Grant Service_ matching the corresponding areas in the [domain model](system-context#domain-model).

![first decomposition](images/diagram_decomposition-2.svg)

# Behavior

<p align="center">
    <a href="system-context.md">Previous: 3. Architecture drivers</a>&nbsp; | &nbsp;<a href="decomposition.md">Next: 5. Quality concepts</a>
</p>
