<p align="center">
  <img src="icon.png" alt="Project Logo" width="21%">
</p>

## Hello World for StartOS

A bare bones template for bootstrapping packages for StartOS:

1. Access [hello-world-startos](https://github.com/Start9Labs/hello-world-startos).

1. Click "Use this template", then "Create new repository". You must be signed into Github to see this button.

1. Name your repository. The name should be `[service-name]-startos`. For example, `NextCloud` is `nextcloud-startos` and `Lightning Terminal` is `lightning-terminal-startos`.

1. For the repository description, enter "StartOS package for [Service Name]".

1. Make sure the repository is Public.

1. Click "Create Repository".

## Building from source

1. Set up your [environment](https://staging.docs.start9.com/packaging-guide/environment-setup.html).

1. Clone this repository and `cd` into it.

1. run `make`.

1. The resulting `.s9pk` can be side loaded into StartOS.
