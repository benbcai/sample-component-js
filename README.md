# sample-component-js
An example project to show `before` hook is executed after the describe block in a test

The `Executing "before" hook in Example Service` message being logged inside the `before` hook. Given the following test the messages are logged in the following order:

```js
console.log('*********Outside "describe" block in test*********');
describe('describe block', () => {
  console.log('*********Inside "describe" block in test*********');
  it('should log message', () => {
    console.log('*********Inside "it" block in test*********');
  })
})
```

> *********Outside "describe" block in test*********
>
> *********Inside "describe" block in test*********
>
> *********Executing "before" hook in Example Service*********
>
> *********Inside "it" block in test*********


## Getting Started

Install and compile javascript assets with:
```sh
> npm install
```

Run the webdriverio test with:
```sh
> npm run wdio
```