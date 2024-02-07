# Daccord

Daccord is a ...

Repository organization:

- The docs folders contains the complete documentation for the framework. Its content is published at https://fraunhofer-iese.github.io/Daccord/
- The src folders contains an example implementation

## Docs

We are using markdown pages to document the framework. Those pages will be rendered to html files using the default github pages action and deployed on the github page of the repository.

### Breadcrumbs

The cayman theme does not support additional navigation bars or breadcrumbs in its layout template. In order to support and include breadcrumbs, the default template of the theme has copied to /docs/_layouts/default.html. The breadcrumb template is located /docs/_includes/breadcrumbs.html. In case of a theme layout change, one needs to adapt our copied default template accordingly.
