1. [Introduction](index.md)
2. [System context and domain model](system-context.md)
3. [Architecture drivers](drivers.md)
4. System decomposition
5. [Quality concepts](quality.md)
6. [Further notes](conclusion.md)

# System decomposition

# Structure

The figure below features the _Data Intermediation Platform_ composed by two elements: the _Platform Core_ and the _DPC_. On the left side, an human actor represents a _data provider_; on the right side, a external third-party system and its user compose the _data consumer_. The data provider sends data assets to and the data provider gets data assets from the platform core. That means that the flow of the data assets happens via the core platform and does not belong to the scope of the DPC. The DPC contributes, to the dataflow, though, for the information about grants belong to the DPC and therefore the platform core must check the DPC for grant information before forwarding data assets to a data consumer.

![first decomposition](images/diagram_decomposition-1.svg)

# Behavior

<p align="center">
    <a href="system-context.md">Previous: 3. Architecture drivers</a>&nbsp; | &nbsp;<a href="decomposition.md">Next: 5. Quality concepts</a>
</p>
