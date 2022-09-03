# Vue 3 + Vite + tailwind

2022/09/03 - 新增router、pinia

## hreoku 部屬注意事項
需再Settings->  Buildpacks 新增(<https://github.com/heroku/heroku-buildpack-static.git>)  
並且根目錄新建一個static.json

```json
    {
    "root": "dist",
    "clean_urls": true,
    "routes": {
      "/**": "index.html"
    }
  }
```

## tailwindCSS.includeLanguages 套件失效

**解決方式 settings.json要補上這段**  

```json
    "tailwindCSS.includeLanguages": {
        "vue": "html",
        "vue-html": "html"
        ,
    },
    "editor.quickSuggestions": {
  "strings": true
	},
```

## 參考資料

[font-awesome設定](https://rogeraabbccdd.github.io/F2E-book/views/ch24.html#font-awesome)
[vite的router基礎設定](https://functional.style/vite/vue-router/)
