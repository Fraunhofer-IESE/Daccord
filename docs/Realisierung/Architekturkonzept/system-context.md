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

The diagram below features the role "ecosystem participant" as a generalization for each participant. Furthermore, this diagram illustrates functions specific to each participant, reflecting different notification types.

![Context delineation](images/diagram_context-delineation_clean.svg)

The next diagram puts these elements into a larger context. Now, we see the platform core and the DPC as part of a _Data Intermediation Platform_, which is operated by a _platform provider_. The diagram also makes explicit the existence of a _third-party data consumer_, an organization that operates a _data consumer system_ (used by a user).

This diagram includes two platform core functions: _provide data asset_ and _get data asset_. These functions implement the asset brokering aspect of the data intermediation platform. **It is worth noting that these functions do not belong to the scope of the DPC.**

![Context delineation](images/diagram_context-delineation.svg)

## Base domain model

The DPC domain model is organized into four parts: _Participants_, _Grants_, _Notifications_, and _Logs_.


- **Participants**
    - **Participant:** _An ecosystem participant_. A participant can be a data provider, a data consumer, or the platform operator. 
    - **Data Provider:** Especialization of the entity _Participant_ that represents a _data provider_.
    - **Data Consumer:** Especialization of the entity _Participant_ that represents a _data consumer_.
- **Grants**
    - **Data type:** A description of data items provided by the data provider and of potential interest to data consumers. The platform operator most likely defines which data types are intermediated by the platform; however, depending on the characteristics of the data ecosystem, the definition of the data types may be flexible.
    - **Data usage purpose:** It contains information about what purpose data can be used for. Depending on the characteristics of the data ecosystem, data usage purposes may be either predefined by the platform operator or by other participants, particularly the data consumer. For example, while in some ecosystems, the data usage purpose can be predetermined for each type of data being brokered via the platform, in some other ecosystems, the purpose might be tightly related to the particular use case implemented by the data consumer.
    - **Grant**: A _grant_ is an authorization provided by a data provider allowing a data consumer to collect, process, or share personal data under specific terms and conditions.
    - **Grant status**: The status of a grant. For example, when requested, the grant can be "Pending;" if accepted, it can become "Granted;" if later revoked, "Revoked," etc.



![Domain model](images/diagram_data-model_clean-and-complete.svg)

<p align="center">
    <a href="index.md">Previous: 1. Introduction</a>&nbsp; | &nbsp;<a href="drivers.md">Next: 3. Architecture drivers</a>
</p>
