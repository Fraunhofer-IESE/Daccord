1. [Introduction](index.md)
2. [System context and domain model](system-context.md)
3. [Architecture drivers](drivers.md)
4. System decomposition
5. [Quality concepts](quality.md)
6. [Further notes](conclusion.md)

# System decomposition

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

**There are two components in the interface layer:**

- The <kbd>UI</kbd> component is responsible for implementing the DPC's user interface (UI) and user experience (UX). Additional details regarding this can be found on the [UX Design page](../UX-Design/index.md). It is dependent on the **API** component for its functionality.
> For example, the <kbd>UI</kbd> component can be implemented as a Single-Page Application using React that interacts with DPC's backend through a RESP API.
- The <kbd>API</kbd> component is responsible for exposing the internal functionality of the DPC to the UI and external components. It depends on the <kbd>Grant Service</kbd>, <kbd>Log Service</kbd>, <kbd>Notification Service</kbd>, and <kbd>Event Broker Service</kbd> components, as these components provide the actual functionalities of the DPC.

**The service layer contains six components:**

- The <kbd>Grant Service</kbd> component is responsible for managing the storage of grant permissions. It exposes functionalities to create grant requests, approve grant requests, and find and revoke grants. This component depends on <kbd>Log Service</kbd> for logging all grant-related operations, <kbd>Participant Service</kbd> for connecting two participants (a data provider and a data consumer), and <kbd>Event Broker Service</kbd> for exchanging all messages, including grant requests and notifications, via the event broker.
- The <kbd>Notification Service</kbd> component is responsible for creating and searching notifications of all types, such as grant requests, information, and confirmations. It depends on the <kbd>Log Service</kbd> for logging all notifications to ensure proper tracking and record-keeping.
- The <kbd>Log Service</kbd> component is responsible for logging all operations within the DPC, particularly focusing on activities related to grants and notifications.
- The <kbd>Participant Service</kbd> component is tasked with maintaining a record of existing participants, including data providers and data consumers, within the platform core. This component stores information about the origin and destination of all notifications. It also provides a function to locate participants. The <kbd>Participant Service</kbd> depends on the <kbd>Event Broker Service</kbd> to receive information about participants, whose records are managed in the Platform Core.
- The <kbd>Event Broker Service</kbd> is responsible for maintaining a list of events within the DPC that are of interest to enable components to publish and subscribe to messages related to these events. For instance, the <kbd>Platform Core</kbd> can publish an event to notify that a new data consumer has joined the platform, while the <kbd>Notification Service</kbd> can publish an information request on behalf of a data provider to all data consumers who have access to the provider's data, and so on.


![first decomposition](images/diagram_decomposition-2.svg)



# Behavior

<p align="center">
    <a href="system-context.md">Previous: 3. Architecture drivers</a>&nbsp; | &nbsp;<a href="decomposition.md">Next: 5. Quality concepts</a>
</p>
