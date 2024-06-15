# sample-gh-actions

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.9. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# GHActions(actions を提供する側)のサンプル

## やりたいこと

- badge-it の改修
- org-health-check

## ghactions 基礎

https://docs.github.com/ja/actions/creating-actions/about-custom-actions
https://qiita.com/HeRo/items/e2d5e3bc3dbe810f0482


アクションの実行環境は主に 2 つある

- javascript アクション
- docker アクション

sdk 的なサムシング
https://github.com/actions/toolkit

template
https://github.com/actions/typescript-action
