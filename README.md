<div id="top"></div>

# Gray Mickey
### プロジェクトについて
<!-- プロジェクトについて -->
このWebサイトは自身の関心があることなどをテーマに自分自身のオリジナルのWebサイトを自由に作成する目的で制作しました。そのため、すべての制作物の中で最も好きでお気に入りのプロジェクトです。今後もこのサイトは自身の関心の移り変わりによって内容が追加・改修されていく予定です。特にメニュー内の生き物や自然環境に関する記事群はかねてより一貫して変わらない興味関心と、これまで歩んできた自身の心の足跡のようなものです。人気キャラクターを取り入れたアニメーションやゲームは自身のWeb技術やjavascriptに関心を持った最初の理由でもあります。完全に個人的な自由なサイトですが、何より楽しんで作ったことが特に意義のあるサイトです。元々はHtml、CSS、JavaScriptで作成したサイトですが、ホスティングをVercelで統一するため、他のサイトと共に新たにNext.jsで作り直しました。ピュアなJavascriptとReactの違いを実感したかったという理由もあります。ディズニーキャラクターを使用している理由は、ミッキーマウスのイメージと社会問題という対照性のあるものを共に扱うことにより、サイトの趣旨がより引き立つと考え使用しました。また、同作品のミッキーやミニーマウス、作品そのものの著作権が2023年末に切れ、パブリックドメインとなっています。


## URL
アプリ:  https://gray-mickey.vercel.app/

## 使用技術一覧

<!-- シールド一覧 -->
<!-- 該当するプロジェクトの中から任意のものを選ぶ-->
<p style="display: inline">
  <!-- フロントエンドの言語一覧 -->
  <img src="https://img.shields.io/badge/-javascript-000000?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
  <!-- フロントエンドのフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/-react-000000?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  
  <!-- バックエンドの言語一覧 -->
  <!-- ミドルウェア一覧 -->
  <!-- インフラ一覧 -->
</p>

## 機能一覧
- スライドアニメーション ( useEffect、useState、setInterval )

<!-- 
- ユーザー登録、ログイン機能(devise)
- 投稿機能
  - 画像投稿(refile)
  - 位置情報検索機能(geocoder)
- いいね機能(Ajax)
  - ランキング機能
- コメント機能(Ajax)
- フォロー機能(Ajax)
- ページネーション機能(kaminari)
  - 無限スクロール(Ajax)
- 検索機能(ransack)
-->

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク他 | バージョン |
| --------------------- | ---------- |
| Node.js               | v24.5.0    |
| React                 | ^18     |
| Next.js               | 14.2.35     |

その他のパッケージのバージョンは package.json を参照してください. 


## プロジェクト詳細

<h3 align="center">導入部分の工夫</h3>
<p>
サイトを開くと最初に、簡単なサイトの説明文と10から1までのカウントダウンボタンがある描画になります。その後にフェードアウト、フェードインで自然とスライドアニメーションのあるメインの描画へ移行します。2つの描画は同ページで、stateでコンポーネントを切り替えています。このようなワンクッションを置く目的は、2つ目のコンポーネントのイメージなどの描画が遅延することなく表示されることですが、見ている人に簡単にどのようなサイトであるかということと、自然と世界観に誘導できるような仕組みにしています。
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/Asami222/gray-mickey/main/public/git/1.webp" width="328" style="max-width: 100%;" />
</p>
<br />
<h3 align="center">CSSでの細かな調整</h3>
<p>
サイト制作の中でとても苦労した箇所です。スライドアニメーションや性格診断ゲームのそれぞれのシーンは一つのコンポーネントでまとめています。それをシーンごとにCSS Modules内で細かく調整しています。レスポンシブ対応もしているので、幅が狭くなった時にレイアウトが崩れないかにも配慮し、PCとモバイルでイラストの配置を変えたりなどかなり根気のいる作業でした。位置を同じにしたりなど実装しやすい配置に途中で変更することはせず、元々のデザイン通りに仕上げることができました。
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/Asami222/gray-mickey/main/public/git/2.webp" width="328" style="max-width: 100%;" />
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/Asami222/gray-mickey/main/public/git/3.webp" width="328" style="max-width: 100%;" />
</p>
<br />
<h3 align="center">イラスト・GIFアニメーション制作</h3>
<p>
サイト内のイラストやアニメーション、アイコンはすべてProcreateで制作しています。その後Photoshopで調整をしてサイト内で使用しています。キャラクターはレトロ感を出すために少し荒めの粒子のようなペイントにしています。
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/Asami222/gray-mickey/main/public/git/4.webp" width="328" style="max-width: 100%;" />
</p>

<p align="right">(<a href="#top">トップへ</a>)</p>
