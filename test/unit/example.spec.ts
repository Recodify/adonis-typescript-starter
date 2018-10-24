import { Suite } from "@adonisjs";

const Suite : Suite = use('Test/Suite')('Typescript test');
const {test} : {test: (name: string, callback: any) => void} = Suite;

test('Simple typescript test', async ({assert} : {assert: Chai.Assert}) => {
  assert.equal("sam", "sam");
});