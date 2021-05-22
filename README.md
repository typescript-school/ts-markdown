# Setup Jest



Add jest

```bash
yarn add -D jest ts-jest @types/jest
```



Init

```bash
npx ts-jest config:init

# Jest configuration written to "/ts-jest/jest.config.js".
```



Created file on init : 

```json
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

> The preset file will allow us running typescript jest file directly in IDE as well as via node script.



Create test script in `package.json`

```diff
  "scripts": {
    "compile": "tsc ",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts",
+   "test": "jest"
  },
```



Create a `src/sum.ts`

```typescript
const sum = (one : number, two : number) => one + two;

export default {sum};
```



Create a test `test/sum.test.ts`

```typescript
import sum from '../src/sum';

test('adds 1 + 2 to equal 3', () => {
    expect(sum.sum(2,1)).toBe(3);
});
```



Now you can run the test either from cli or from an IDE.