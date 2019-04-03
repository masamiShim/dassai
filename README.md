# dassai
## vuetify + typescript
* [Qiitaより](https://qiita.com/Nossa/items/3860e55551697bb46e38#vuetify-%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E3%81%AE%E8%BF%BD%E5%8A%A0)
## ハマりポイント
* this.$refs.form.validate()でFunction not foundのLint Error
  (this.$refs.form as any).validate()にすればOK  
  [参考](https://stackoverflow.com/questions/52109471/typescript-in-vue-property-validate-does-not-exist-on-type-vue-element)

* git commit時にcrlfほげエラー  
https://normalblog.net/system/lf_replaced_crlf/

* regexpで1行当たりのmax-lengthエラー  
  lintのmax-lengthをfalse
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
