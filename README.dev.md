# Developer documentation


## Tech stack

1. [Vue 3](https://vuejs.org/) 
1. [Vite](https://vitejs.dev/)
1. [TypeScript](https://www.typescriptlang.org/)

## IDE / dev setup

We recommend using Volar VSCode extension for improved development experience. The project uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

1. [VS Code](https://code.visualstudio.com/)
1. [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Development installation

```shell
cd <some dir>
git clone https://github.com/ardc-fair-checklist/ardc-fair-checklist .
npm install
```

Building for development:

```shell
npm run dev
```

Building for production:

```shell
npm run build
```

There is a GitHub action `/.github/workflows/publish.yml` that builds the project for production and hosts it at https://ardc-fair-checklist.github.io/ardc-fair-checklist. The GitHub action can be triggered manually via the GitHub user interface.

## TODO

1. ~~add points to questions~~
2. ~~show points in interface for the time being~~
4. ~~calculate partial and total progress~~
5. ~~write jsonschema for questions~~
7. add testing as prose
8. implement testing prose
9. publish coverage in ci
10. write foundation for versioning of list of questions
11. add validation of query parameters
12. use the checklist for a couple of existing software packages
13. revisit questions content with TomH
14. investigate migrating to SSR

