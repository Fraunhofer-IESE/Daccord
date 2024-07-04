1. [Introduction](index.md)
2. [System context and domain model](system-context.md)
3. Architecture drivers
4. [Initial decomposition](decomposition.md)
5. [Quality concepts](quality.md)
6. [Further notes](conclusion.md)


# Architecture drivers

> **Note:** This section focuses on the _architecture-relevant requirements_. For a comprehensive view on all system requirements, you can visit the [Requirements page](../../Anforderungen/index.md).

At least three relevant stakeholders can be named in two-sided digital data platforms: the data providers, the data consumers, and the platform operators. Data providers are frequently associated with end users: they own data about themselves, and their data is shared with the data consumers through the platform. Data consumers, in turn, are related to companies interested in the data. Considering data providers' perspective, their concerns include self-determination and information about data usage. Data consumers, on the other hand, have data usage needs. Finally, one important quality of a DPC for the platform operators is its adaptability, meaning that the DPC has the quality of being adaptable to work with heterogeneous platforms.

This section presents DPC's  _key functional requirements (KFR) and the _quality requirements_ (QR). The former refers to _what_ functions the system performs; the latter refers to _how well_ the system works. To document the quality requirement, we used _architecture scenarios_, where the driver is described as a concrete scenario with a well-defined environment, a stimulus, a response, and quantifications of the previous ones. We use a formal requirements template for the key functional requirements.


## Key functional requirements

### Requests

**KFR.1.** The DPC shall provide one-side participants (e.g., data providers) with the ability to request data-related actions from other participants (e.g., data consumers). 

### Notifications

**KFR.2.** When a request (see KFR.1) is triggered, the DPC shall notify the concerned party. 
**KFR.3.** When a user acts upon a notification that requires a response, the DSC shall notify the party who triggered the notification.

### Grants

**KFR.4.** The DPC shall provide data providers with the ability to manage (i.e., view, grant, decline, and revoke) their data-related grants.

## Quality scenarios

****

<p align="center">
    <a href="system-context.md">Previous: 1. System context and domain model</a>&nbsp; | &nbsp;<a href="decomposition.md">Next: 3. Initial decomposition</a>
</p>
