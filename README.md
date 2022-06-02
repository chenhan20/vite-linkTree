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
