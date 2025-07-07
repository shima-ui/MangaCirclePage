import './App.css';

function App() {
  return (
    <div className="App">
      {/* ヘッダー */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <h1>MangaCircle</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#about">チーム紹介</a></li>
            <li><a href="#members">メンバー</a></li>
            <li><a href="#products">プロダクト</a></li>
          </ul>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="main-content">
        {/* ヒーローセクション */}
        <section className="hero">
          <div className="hero-content">
            <h1>MangaCircle</h1>
            <p>漫画を愛する開発チーム</p>
            <p>シマとNAKUSAによる革新的な漫画関連サービスを開発しています</p>
          </div>
        </section>

        {/* チーム紹介セクション */}
        <section id="about" className="about-section">
          <div className="container">
            <h2>チーム紹介</h2>
            <div className="about-content">
              <p>
                MangaCircleは、漫画文化を愛する2人の開発者によって結成されたチームです。
                私たちは漫画の素晴らしさを多くの人に伝え、漫画コミュニティをより豊かにするための
                革新的なサービスを開発しています。
              </p>
              <p>
                技術力と創造性を組み合わせ、ユーザーが漫画をより楽しく、より深く体験できる
                プラットフォームの構築を目指しています。
              </p>
            </div>
          </div>
        </section>

        {/* メンバー紹介セクション */}
        <section id="members" className="members-section">
          <div className="container">
            <h2>メンバー紹介</h2>
            <div className="members-grid">
              <div className="member-card">
                <img src="/images/team/shima_manga.svg" alt="シマ" className="member-avatar" />
                <h3>シマ</h3>
                <p className="member-role">Developer & Designer</p>
                <p className="member-description">
                  フロントエンド開発とUI/UXデザインを担当。
                  漫画の魅力を視覚的に伝えることに情熱を注いでいます。
                </p>
              </div>
              <div className="member-card">
                <img src="/images/team/nanana7bump.svg" alt="NAKUSA" className="member-avatar" />
                <h3>NAKUSA</h3>
                <p className="member-role">Backend Developer</p>
                <p className="member-description">
                  バックエンド開発とシステム設計を担当。
                  スケーラブルで効率的なシステム構築が得意です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* プロダクト紹介セクション */}
        <section id="products" className="products-section">
          <div className="container">
            <h2>プロダクト紹介</h2>
            <div className="products-grid">
              <div className="product-card">
                <img src="/images/products/manga-battle.svg" alt="漫画布教バトル" className="product-image" />
                <h3>漫画布教バトル</h3>
                <p className="product-description">
                  お気に入りの漫画を紹介し合い、その魅力を競い合うソーシャルプラットフォーム。
                  ユーザー同士が漫画の素晴らしさを語り合い、新しい作品に出会える場を提供します。
                </p>
                <div className="product-features">
                  <span className="feature-tag">ソーシャル</span>
                  <span className="feature-tag">レビュー</span>
                  <span className="feature-tag">コミュニティ</span>
                </div>
              </div>
              <div className="product-card">
                <img src="/images/products/manga-securities.svg" alt="漫画証券" className="product-image" />
                <h3>漫画証券</h3>
                <p className="product-description">
                  漫画作品を株式のように取引できる仮想投資プラットフォーム。
                  作品の人気度を予測し、投資することで漫画市場の動向を楽しく学べます。
                </p>
                <div className="product-features">
                  <span className="feature-tag">投資シミュレーション</span>
                  <span className="feature-tag">データ分析</span>
                  <span className="feature-tag">予測ゲーム</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 MangaCircle. All rights reserved.</p>
          <p>Made with ♥️ by Shima & NAKUSA</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
