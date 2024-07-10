1. [Introduction](index.md)
2. [System context and domain model](system-context.md)
3. [Architecture drivers](drivers.md)
4. System decomposition
5. [Quality concepts](quality.md)
6. [Further notes](conclusion.md)

# System decomposition

The DPC uses an event-driven architectural style to manage the data exchanged among participants, whether general notifications, data-related requests, or any other message type.

> In this reference architecture, the <kbd>Message Broker</kbd> (a key component of any event-driven architecture) is depicted as part of the DPC. A concrete architecture could, however, feature the <kbd>Message Broker</kbd> outside the DPC (i.e., as part of the main platform). This brings no issues to the design as the <kbd>Message Broker</kbd> does not depend on any other component.

# Structure

The figure below features the <kbd>Data Intermediation Platform</kbd> composed of two elements: the <kbd>Platform Core</kbd> and the <kbd>DPC</kbd>. On the left side, a human actor represents a _data provider_; on the right side, an external third-party system and its user compose the _data consumer_. The data provider sends data assets to, and the data provider gets data assets from, the platform core. That means that the flow of the data assets happens via the core platform and does not belong to the scope of the DPC (note the _data asset flow_ area in the figure). The DPC contributes to the data flow, though, for the information about grants is managed by the DPC. Therefore, the platform core must check the DPC for grant information before forwarding data assets to a data consumer.

![first decomposition](images/diagram_decomposition-1.svg)

## Layers

Internally, the compositing components of the DPC are organized into three layers: 

- <kbd>Interface</kbd> contains the components responsible for interfacing the DPC with the external world;
- <kbd>Service</kbd> contains the components that implement the functionalities of the DPC; and
- <kbd>Repository</kbd> contains the components responsible for managing DPC's data storage.

![first decomposition](images/diagram_decomposition-layers.svg)

## DPC's internal components

The next figure further decomposes the DPC component and features the external and internal dependencies among components in the ecosystem. In this representation, we colored the components <kbd>Participant Service</kbd>, <kbd>Log Service</kbd>, <kbd>Notification Service</kbd>, and <kbd>Grant Service</kbd> matching the corresponding areas in the [domain model](system-context.md#domain-model).

![first decomposition](images/diagram_decomposition-layers-components.svg)

There are two components in the interface layer: <kbd>UI</kbd> and <kbd>API</kbd>.

- <kbd>UI</kbd>
    Responsibilities: Implementing the DPC's user interface (UI) and user experience (UX). More information about this can be found on the [UX Design page](../UX-Design/index.md).
    - Depends on: <kbd>API</kbd>.
- <kbd>API</kbd>
    - Responsibilities: Exposing the internal functionality of the DPC to the UI and external components.
    - Depends on: <kbd>Grant Service</kbd>, <kbd>Log Service</kbd>, <kbd>Notification Service</kbd>, and <kbd>Event Broker Service</kbd>.

The service layer contains six components:

- <kbd>

![first decomposition](images/diagram_decomposition-2.svg)



# Behavior

<p align="center">
    <a href="system-context.md">Previous: 3. Architecture drivers</a>&nbsp; | &nbsp;<a href="decomposition.md">Next: 5. Quality concepts</a>
</p>
