# build しようとしたらエラー

```sh
❯ bun run index.ts
Hello via Bun!
Hello, !

::set-output name=time::16:02:42 GMT+0900 (Japan Standard Time)
The event payload:  {}

root in sample-gh-actions on  main via 🍞 v1.1.9 via  v22.2.0 on ☁️
❯ make
bun build index.ts --outdir ./dist
89 |         tls = require('tls')
                           ^
error: Browser build cannot require() Node.js builtin: "tls". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/core/connect.js:89:23

61 | const { TransformStream } = require('stream/web')
                                         ^
error: Browser build cannot require() Node.js builtin: "stream/web". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/fetch/index.js:61:37

1805 |     ReadableStream = require('stream/web').ReadableStream
                                    ^
error: Browser build cannot require() Node.js builtin: "stream/web". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/fetch/index.js:1805:30

381 |     ReadableStream = require('stream/web').ReadableStream
                                   ^
error: Browser build cannot require() Node.js builtin: "stream/web". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/core/util.js:381:30

4 | var tls = require('tls');
                      ^
error: Browser build cannot require() Node.js builtin: "tls". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/tunnel/lib/tunnel.js:4:19

520 |         TransformStream = require('stream/web').TransformStream
                                        ^
error: Browser build cannot require() Node.js builtin: "stream/web". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/fetch/request.js:520:35

30 | const ReadableStream = globalThis.ReadableStream || require('stream/web').ReadableStream
                                                                 ^
error: Browser build cannot require() Node.js builtin: "stream/web". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/fetch/response.js:30:61

10 | const { AsyncResource } = require('async_hooks')
                                       ^
error: Browser build cannot require() Node.js builtin: "async_hooks". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/api/api-request.js:10:35

3 | const { AsyncResource } = require('async_hooks')
                                      ^
error: Browser build cannot require() Node.js builtin: "async_hooks". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/api/api-connect.js:3:35

11 | const { AsyncResource } = require('async_hooks')
                                       ^
error: Browser build cannot require() Node.js builtin: "async_hooks". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/api/api-stream.js:11:35

14 | const { AsyncResource } = require('async_hooks')
                                       ^
error: Browser build cannot require() Node.js builtin: "async_hooks". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/api/api-pipeline.js:14:35

4 | const { AsyncResource } = require('async_hooks')
                                      ^
error: Browser build cannot require() Node.js builtin: "async_hooks". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/api/api-upgrade.js:4:35

5 | const { performance } = require('perf_hooks')
                                    ^
error: Browser build cannot require() Node.js builtin: "perf_hooks". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/fetch/util.js:5:33

8 | const { isUint8Array } = require('util/types')
                                     ^
error: Browser build cannot require() Node.js builtin: "util/types". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/fetch/util.js:8:34

970 |     ReadableStream = require('stream/web').ReadableStream
                                   ^
error: Browser build cannot require() Node.js builtin: "stream/web". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/fetch/util.js:970:30

3 | const { MessageChannel, receiveMessageOnPort } = require('worker_threads')
                                                             ^
error: Browser build cannot require() Node.js builtin: "worker_threads". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/fetch/constants.js:3:58

3 | const diagnosticsChannel = require('diagnostics_channel')
                                       ^
error: Browser build cannot require() Node.js builtin: "diagnostics_channel". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/websocket/connection.js:3:36

4 | const diagnosticsChannel = require('diagnostics_channel')
                                       ^
error: Browser build cannot require() Node.js builtin: "diagnostics_channel". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/websocket/receiver.js:4:36

21 | const { isUint8Array, isArrayBuffer } = require('util/types')
                                                     ^
error: Browser build cannot require() Node.js builtin: "util/types". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/fetch/body.js:21:49

35 |     ReadableStream = require('stream/web').ReadableStream
                                  ^
error: Browser build cannot require() Node.js builtin: "stream/web". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/fetch/body.js:35:30

256 |     ReadableStream = require('stream/web').ReadableStream
                                   ^
error: Browser build cannot require() Node.js builtin: "stream/web". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/fetch/body.js:256:30

5 | const { MessagePort } = require('worker_threads')
                                    ^
error: Browser build cannot require() Node.js builtin: "worker_threads". To use Node.js builtins, set target to 'node' or 'bun'
    at /mnt/c/Users/Owner/work/private/test/sample-gh-actions/node_modules/undici/lib/websocket/events.js:5:33
make: *** [Makefile:2: build] Error 1

```

これで ok(node 用の時は--target node が必要)

```
❯ make
bun build index.ts --outdir ./dist --target node

  ./index.js  899.00 KB

[326ms] bundle 139 modules
```
