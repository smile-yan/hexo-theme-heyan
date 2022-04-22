# hexo-theme-heyan

A simple hexo theme based on Bootstrap5.

## Usage

Clone this repository and install the following dependencies to maintain local search functionality.

```bash
$ git clone git@github.com:smile-yan/hexo-theme-heyan.git themes/heyan
$ npm install hexo-generator-search --save
```

## Configuration

Add the following to the `_config.yml` of your hexo project, and please make sure that the path `template: themes/heyan/search.xml` is correct.

```yaml
search:
  path: search.xml
  field: post
  content: true
  template: themes/heyan/search.xml
```

Next, for a better performance, please modify the file `_config.yml` to use `highlight.js`.

```yaml
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: true  # only to modify the last line
```

## 效果展示

参考 [csdn](https://smileyan.blog.csdn.net/article/details/124291505)


> Smileyann
> 2022.4.21 22:10