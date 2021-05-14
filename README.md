# Creating CLI app with Type Script



- [x] Create a typescrpt project
- [ ] Onelines on  each library used
- [ ] Install as cli app
- [ ] publish to npm
- [ ] test in a docker image
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



**Create script to compile and run `index.ts`**

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



**Use `ts-node` to run without compiling**

```diff
	"scripts": {
    "compile": "tsc ",
    "start": "node dist/index.js",
+   "dev": "ts-node src/index.ts"
  },
```



Refer: 

- https://walrus.ai/blog/2019/11/typescript-cli/