# Creating CLI app with Type Script



- [x] Create a typescrpt project
- [x] Onelines on  each library used
- [x] Install as cli app
- [x] publish to npm
- [x] test in a docker image
- [ ] source map and debugging ?



**Create npm project** 

```
yarn init
```



**Install libs** 

- `typescript` : typescript compiler ??
- `@types/node` : types for nodejs
- `@types/ts-node` : running typescript without compiling

  ```
  yarn add -D typescript @types/node ts-node
  ```
  
  > These are all compile time libraries.At runtime, we will have a simple js.

  

Create **ts-config.json**

- This file indicates that it is a typescirpt project

- It has compiler options for typescript compiler.

- Create it as : 

  ```yaml
  {
    "compilerOptions": {
      "baseUrl": ".",
      "target": "ES2017",
      "module": "commonjs",
      "strict": true,
      "esModuleInterop": true,
      "rootDir": "src",   # Our ts files
      "outDir": "dist"    # Compiled js files
    }
  }
  ```

  > Notice **"outDir": "dist"**. Our compiled js files are created here.



**Create and `index.ts`**

```
console.log("Hello from index.ts");
```



**Create script to compile and run `index.ts`** in `package.json`

```yaml
  "scripts": {
    "compile": "tsc ",
    "start": "node dist/index.js"
  },
```

```bash
yarn compile
yarn start
# output : 
# Hello from index.ts
```



**Use `ts-node` to run without compiling** in `package.json`

```diff
	"scripts": {
    "compile": "tsc ",
    "start": "node dist/index.js",
+   "dev": "ts-node src/index.ts"
  },
```



**Create a bin (binary) to run for our program in `package.json`**

```yaml
  "bin": {
    "ts-cli-app": "dist/index.js"
  },
```

In `index.ts`, add directive to instruct shell on how to run this file : 

```
#!/usr/bin/env node
```



**Test by installing it on local machine** 

```bash
yarn link
ts-cli-app
# output : 
# Hello from index.ts
```





**Publish to npm** 

```bash
# Publish to npm org.
yarn publish

# Test with a fresh install in a docker image
docker run node:14 npx ts-cli-app 
```



Refer: 

- https://walrus.ai/blog/2019/11/typescript-cli/