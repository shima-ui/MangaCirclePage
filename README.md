# GitHub Codespaces ♥️ React

GitHub Codespaces で動作する React アプリケーションへようこそ！React を探索するために、すべてを起動して準備しています。

このプロジェクトは GitHub Pages デプロイ用に設定されています。

## 🚀 GitHub Pages デプロイ

このプロジェクトは、main ブランチにプッシュすると自動的に GitHub Pages にデプロイされるように設定されています。

### 📋 セットアップ手順

1. **`package.json`を更新**: `homepage` フィールドの設定を確認してください：
   ```json
   "homepage": "https://shima-ui.github.io/MangaCirclePage/"
   ```

2. **GitHub Pages を有効化**: 
   - リポジトリの設定に移動
   - 「Pages」セクションに移動
   - ソースとして「**GitHub Actions**」を選択（推奨）
   - または「Deploy from a branch」を選択して「gh-pages」ブランチを選択

3. **権限設定を確認**:
   - Settings → Actions → General → Workflow permissions
   - 「**Read and write permissions**」を選択
   - 「Allow GitHub Actions to create and approve pull requests」にチェック

4. **GitHub にプッシュ**: GitHub Actions ワークフローが自動的にアプリをビルドしてデプロイします。

### 🔧 手動デプロイ

次のコマンドを使って手動でデプロイすることもできます：
```bash
npm run deploy
```

### 💻 ローカル開発

ここでのすべての作業は、この1つのコードスペース内に含まれています。GitHub上にはまだリポジトリはありません。準備ができたら「**Publish Branch**」をクリックして、リポジトリを作成し、プロジェクトをプッシュできます。

探索だけをしていて、このコードがもう必要ない場合は、単純にコードスペースを削除すれば、永久に削除されます。

このプロジェクトは [Vite](https://vitejs.dev/) でブートストラップされています。

## 📜 利用可能なスクリプト

プロジェクトディレクトリで、次のコマンドを実行できます：

### `npm start`

すでに下の `Codespaces: server` ターミナルウィンドウで実行済みです。何らかの理由でサーバーを停止する必要がある場合は、`npm start` を再度実行してオンラインに戻すことができます。

アプリを開発モードで実行します。
内蔵のシンプルブラウザ（`Cmd/Ctrl + Shift + P > Simple Browser: Show`）で [http://localhost:3000/](http://localhost:3000/) を開いて、実行中のアプリケーションを表示します。

変更を加えると、ページが自動的にリロードされます。
また、コンソールでlintエラーを確認することもできます。

### `npm test`

インタラクティブなウォッチモードでテストランナーを起動します。
詳細については、[テストの実行](https://facebook.github.io/create-react-app/docs/running-tests) のセクションを参照してください。

### `npm run build`

アプリを本番環境用に `dist` フォルダにビルドします。
本番モードでReactを正しくバンドルし、最高のパフォーマンスのためにビルドを最適化します。

ビルドは最小化され、ファイル名にハッシュが含まれます。
アプリはデプロイ準備完了です！

詳細については、[デプロイ](https://facebook.github.io/create-react-app/docs/deployment) のセクションを参照してください。

### `npm run deploy`

手動で GitHub Pages にデプロイします。
このコマンドは `npm run build` を実行してから、`dist` フォルダの内容を `gh-pages` ブランチにプッシュします。

## 🔧 トラブルシューティング

### GitHub Actions のデプロイエラー

もしGitHub Actionsでデプロイエラーが発生した場合：

1. **権限設定を確認**:
   - Settings → Actions → General → Workflow permissions
   - 「Read and write permissions」を選択

2. **GitHub Pages設定を確認**:
   - Settings → Pages → Source
   - 「GitHub Actions」を選択（推奨）

3. **ワークフローファイルを確認**:
   - `.github/workflows/deploy.yml` または `deploy-alternative.yml` を使用

### 404エラーの解決

もしデプロイ後に404エラーが発生した場合：

1. **ベースパスの確認**:
   - `vite.config.js` の `base` プロパティが正しく設定されているか確認
   - 現在の設定: `base: "/MangaCirclePage/"`

2. **リソースパスの確認**:
   - 画像やCSSファイルのパスが正しいか確認

## 📚 詳細情報

### 技術スタック

- **React**: UI ライブラリ
- **Vite**: ビルドツール
- **GitHub Pages**: ホスティングサービス
- **GitHub Actions**: CI/CD パイプライン

### 学習リソース

- [Vite ドキュメント](https://vitejs.dev/guide/) - Viteの詳細な使い方
- [Vitest ドキュメント](https://vitest.dev/guide/) - Viteネイティブなテスティングフレームワーク
- [React ドキュメント](https://reactjs.org/) - React の学習

### 追加情報

- [コード分割](https://sambitsahoo.com/blog/vite-code-splitting-that-works.html)
- [バンドルサイズの分析](https://github.com/btd/rollup-plugin-visualizer#rollup-plugin-visualizer)
- [プログレッシブウェブアプリの作成](https://dev.to/hamdankhan364/simplifying-progressive-web-app-pwa-development-with-vite-a-beginners-guide-38cf)
- [高度な設定](https://vitejs.dev/guide/build.html#advanced-base-options)
- [デプロイ](https://vitejs.dev/guide/build.html)
- [トラブルシューティング](https://vitejs.dev/guide/troubleshooting.html)

---

## 🎯 プロジェクト構成

```
codespaces-react/
├── public/              # 静的ファイル
├── src/                 # ソースコード
│   ├── App.jsx         # メインアプリケーション
│   ├── App.css         # アプリケーションスタイル
│   └── index.jsx       # エントリーポイント
├── .github/workflows/   # GitHub Actions ワークフロー
├── dist/               # ビルド出力 (自動生成)
├── package.json        # パッケージ設定
├── vite.config.js      # Vite設定
└── README.md           # このファイル
```

Happy coding! 🎉