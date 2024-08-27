1. [Introduction](index.md)
2. [System context and domain model](system-context.md)
3. [Architecture drivers](drivers.md)
4. [System decomposition](decomposition.md)
5. Quality concepts
6. [Further notes](conclusion.md)

# Quality concepts

<!--
to do.

describe here what has to be done in the platform to integrate the DPC.

describe async calls (when performing write operations) to prevent core platform from being impacted by performance of DPC

emphasize role of <kbd>Participant Service</kbd>

- allow for configuration of parameters (data types, purposes, legal base)

-->

## Solution concept for adaptability

The solution concept for enabling the DPC to be used by any platform centers on having the DPC as a self-contained component that does not depend on the platform core, but is depended upon. The DPC has its own data repository to store notifications, grants, logs. When it comes to participants, the DPC maintains a copy of participants in its repository, which must be updated by the <kbd>Platform Core</kbd> when new participants join or leave the ecosystem. This section summarizes the set of design decisions that compose this solution concept.

### Design decision: DPC as self-contained component that does not depend on the platform core

- **Pros:** No modification is required at devtime to use the DPC with any platform.
- **Cons:** Platform has to adapt to DPC's exposed privacy data model; participants' data, which belongs to the platform core, must be duplicated inside the DPC.
- **Assumptions:** Platforms can interact with the API via state-of-the-practice API technologies.
- **Trade-offs:** More development effort on the side of the platform core.




### Design decision: Expose DPC's functions via REST APIs

- **Pros:** Standard (state-of-the-practice) technique to publish APIs and can be consumed by API clients implemented using virtually any language.
- **Cons:** It limits integration techniques to one approach (REST APIs).
- **Assumptions:** Any platform can consume REST APIs regardless of their implementation technology.
- **Trade-offs:** Network overhead, which would not be necessary if technology-specific SDKs/libraries were implemented to support DPC integration.

### Design decision: Replicate participants' identifications in the DPC

- **Pros:** Prevent DPC from depending on the platform core to know the participants who exchange notifications via the DPC.
- **Cons:** Data duplication.
- **Assumptions:** Platforms can provide the DPC with information about participants in negligible time (i.e., minimizing the risk of inconsistency).
- **Trade-offs:** Consistency.

### Design decision: DPC functions are executed asynchronously when the platform core writes data to the DPC

- **Pros:** Prevent the platform core from experiencing issues due to DPC internal processes. For example, when the platform wants to notify a data provider, it only requests the DPC to create the notification. Still, it does not have to wait until the DPC creates the notification.
- **Cons:** The platform core does not receive confirmation of the operation on the fly.
- **Assumptions:** The actual implementation of the DPC can provide other means for the platform to ensure a process (such as notification creating) is executed, including, for example, the usage of callback functions, if really necessary.
- **Trade-offs:** Testability.



<!--

- **Pros:**
- **Cons:**
- **Assumptions:**
- **Trade-offs:**

| Pros         | Cons         | Assumptions  | Trade-offs   |
|--------------|--------------|--------------|--------------|
|              |              |              |              


| Pros         | Cons         | Assumptions  | Trade-offs   |
|--------------|--------------|--------------|--------------|
|              |              |              |              
-->

****

<p align="center">

[![](/Daccord/assets/images/backward-solid.svg) 4. System decomposition](decomposition) | [6. Further notes ![](/Daccord/assets/images/forward-solid.svg)](conclusion)

</p>