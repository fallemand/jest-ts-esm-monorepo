### Jest TS ESM Monorepo setup
I'm trying to setup a monorepo, using Jest, ES modules and typescript.  
But when reading the jest config from a different file, it seems ts-node compiles the file to CJS instead of ESM.

``` sh
pnpm i

# Package importing config
cd packages/package
pnpm test #this command will fail if you try to import the config from another package

# Package with local config
cd packages/testing
pnpm test # works
```