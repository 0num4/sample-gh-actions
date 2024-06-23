# sample actions

練習用のactions。repositoryを一覧してissueの数などをreadmeに追記するなど。

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

### `github-pat-token`

**Required** もしかしたら github.token でもいいかも。 
Default `"nya"`.

### `badges`

**Required** 何を作るか。
Default: `"nya"`.

### `badge-style`

**Required** 何を作るか。
Default: `"flat"`

### `write-style`

**Required** バッジを作ったとき、commit にするか PR にするか 
Default: `"commit"`

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
- name: 0num4/Hello World
  uses: 0num4/sample-gh-actions@v1.1.8
  with:
    who-to-greet: "Mona the Octocat"
    github-pat-token: ${{ secrets.GH_PAT_TOKEN }}
    badges: "hello"
    badge-style: "world"
    write-style: "commit"
```
