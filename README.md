# Hexagonal Architecture 🤝🏼 Turborepo

## Getting Started

This example is composed of two Next.js applications, two ports (*commerce engine and payment processor*), and two adapters (*custom commerce engine and custom payment processor*)

To start using, you can use the following commands: 

```bash
pnpm install

pnpm dev

pnpm build

pnpm test
```

This project also has some configured some tools like:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Jest](https://jestjs.io/) for unit testing
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting


## Applications
Located under `/apps`, you will find two applications.
- `app-one`: a simple [Next.js](https://nextjs.org/) app
- `app-two`: another simple [Next.js](https://nextjs.org/) app

## Ports
Located under `/packages/ports`, you will find two '*interfaces*' which handle the interactions between the applications and the implementations of the custom integrations.  

- `@repo/commerce`: encompasses interactions to commerce engine used by both `app-one` and `app-two` applications
- `@repo/payments`: encompasses interactions to payment processor used by both `app-one` and `app-two` applications


The goal of the `/packages/ports` to achieve a form of [Dependency Inversion](https://tanzu.vmware.com/developer/blog/write-more-maintainable-testable-code-with-dependency-injection/) by defining an interfaces by which the depending applications (and the custom integrations depend on).  

`app-one` -> `@repo/commerce` -> `@repo/custom-commerce`

`app-one` -> `@repo/payments` -> `@repo/custom-payments`

However, within `@repo/commerce` and `@repo/payment`, there is an Interface and an implementation.  By exposing an interface via the package, this allows the two `app`s to depend on the interface, while the implementation (ie: `IProductService`) **ALSO** depend on the interface.  This looks something like:

`app-one` -> `IProductService` <- `CustomProductService` -> `@repo/custom-commerce`.

Previously, in a normal turborepo with many integrations, I have experienced projects that have a dependency structure of: 

`app-one` -> `@repo/commerce`

Often in that case, highly coupling the application to the implementation of whatever the backing commerce engine is.  In this case, dependency inversion would allow for the decoupling of the commerce engine and the application, allowing for swapping the commerce engine completely without the application needing to know (or care). 


## Adapters
Located under `/packages/adapters`, you will find two '*implementations*' which handle the specific implementation details of each integration.  An adapter will be dependent on the interface/contract provided by the respective port.

- `@repo/custom-commerce`: defines implementation of a specific commerce engine to be used by both `@repo/commerce`
- `@repo/custom-payment`: defines implementation of a specific payment processor to be used by both `@repo/payment`


## Shared Configuration
Located under `/packages/config` is all of the shared configuration which the Turborepo uses.  This is a great space to put handy developer tools and code cleanliness configuration. 

- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/jest-config`: `jest` configurations for `browser` and `node` configurations
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo


## Useful Turborepo Links

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
