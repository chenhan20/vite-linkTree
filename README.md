# Vue 3 + Vite + tailwind

2022/09/03 - 新增 router、pinia

## hreoku 部屬注意事項

需再 Settings-> Buildpacks 新增(<https://github.com/heroku/heroku-buildpack-static.git>)  
並且根目錄新建一個 static.json

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

### 解決方式 settings.json 要補上這段--

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

### GITHUB靜態頁面部屬

```javascript
.gitignore需把dist先移除在執行deploy.sh 否則檔案上傳會失敗
不能有沒commit的東西 都要先清掉才能執行 否則會影響到
```

## 參考資料

[font-awesome 設定](https://rogeraabbccdd.github.io/F2E-book/views/ch24.html#font-awesome)
[vite 的 router 基礎設定](https://functional.style/vite/vue-router/)
