# dist-flow-example

This is just an example that shows how to distribute flow types for modules
which use `babel` and/or `rollup`. In this example, we have `src/browser-module`
and `src/node-module` to demonstrate each. The `rollup` example _could_ use the
`flow gen-flow-files` command except it suffers from
[this issue](https://github.com/facebook/flow/issues/3281#issuecomment-344009783).
So instead, you can forward all exports in a file with the same name with
`.flow`. See the output in the `dist` directory and the scripts in the
`package.json`.

I created this for [this blog post](https://blog.kentcdodds.com/3952ad38b357)
where I talk about doing this for my project `paypal-scripts`.
