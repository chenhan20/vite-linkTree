# Vue 3 + Vite + tailwind

## hreoku 部屬注意事項
需再Settings->  Buildpacks 新增(https://github.com/heroku/heroku-buildpack-static.git)  
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

## 參考資料
[font-awesome設定](https://rogeraabbccdd.github.io/F2E-book/views/ch24.html#font-awesome)
