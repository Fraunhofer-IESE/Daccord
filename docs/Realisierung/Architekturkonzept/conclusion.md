1. [Introduction](index.md)
2. [System context and domain model](system-context.md)
3. [Architecture drivers](drivers.md)
4. [System decomposition](decomposition.md)
5. [Quality concepts](quality.md)
6. Further notes

# Further Notes

This reference architecture provides the architecture drivers, the system context, the domain model, the functional decomposition, key interaction concepts, and a quality concept for adaptability. The reference architecture aims to provide architects with a head start when designing _concrete architectures for a DPC_, which will have specificities. Moving from this reference architecture to a concrete architecture requires observing the following next steps:

- **Description of development time aspects of data**: from the entities and relationships provided in the [domain model](system-context.md#domain-model), a data structure must be described in detail.
- **Decomposing functions at development time:** from the high-level components (i.e., runtime elements) of the DPC (<kbd>API</kbd>, <kbd>UI</kbd>, <kbd>Notification Service</kbd>, <kbd>Grant Service</kbd>, etc.), development time elements (i.e., modules) must be described, further decomposing the elements until a level of granularity that is adequate for the development team.
- **Deployment structure:** It is necessary to decide how the DPC will be deployed, a decision that might be influenced by the constraints of the platform that will incorporate it.
- **Define deployment strategy:** The deployment strategy for the DPC must be aligned with the deployment strategy of the platform that will incorporate it.
- **Runtime activities:** Runtime activities necessary to operate the DPC must be defined, including all roles and permissions to search and modify DPC's data. This can vary largely from platform to platform. For example, in platforms where the data usage purposes can be predefined, an administrator role must be taken by the platform owner to manage the record of these purposes in the DPC; however, in a platform where data consumers independently define the usage purposes for it depends specifically of the use case implemented by them, data consumers may have to take the role of maintaining the record of their data usage purposes.
- **Technology**: It is necessary to define the dev time and runtime technologies that will support the development and operation of the DPC and evaluate the pros and cons of alternatives.
- **Expand architecture drivers**: The list of architecture drivers should be reviewed and probably expanded to incorporate constraints and business goals that may be particular to the implementing organization.

****

[![](/Daccord/assets/images/backward-solid.svg) 5. Quality concepts](quality)

