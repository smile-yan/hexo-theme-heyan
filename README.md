# hexo-theme-heyan

A simple hexo theme based on Bootstrap5.

![](https://d33wubrfki0l68.cloudfront.net/39afd0a6a3a4908fbb70389353692a4d94569405/11e20/themes/screenshots/heyan@2x.jpg)

## Usage

Clone this repository and install the following dependencies to maintain local search functionality.

```bash
$ git clone https://github.com/smile-yan/hexo-theme-heyan.git themes/heyan
$ npm install hexo-generator-search --save
```

## Configuration

Change theme configuration of `_config.yml`:

```diff
- theme: landscape
+ theme: heyan
```

For a better performance, please modify the file `_config.yml` to use `prism.js`.

For new version of hexo.js:

```diff
- syntax_highlighter: highlight.js
+ syntax_highlighter: prismjs
```

For old version of hexo.js

```yaml
prismjs:
  enable: true
  preprocess: true
  line_number: true
  tab_replace: ''
```

## preview

[smileyan.cn/heyan/](https://smileyan.cn/heyan/)


> Smileyan
> 2022.4.30 15:41