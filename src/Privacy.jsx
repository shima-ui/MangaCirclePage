import { Link } from 'react-router-dom';
import './App.css';

function Privacy() {
  return (
    <div className="App">
      {/* ヘッダー */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <h1><Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>MangaCircle</Link></h1>
          </div>
          <ul className="nav-links">
            <li><Link to="/">ホーム</Link></li>
          </ul>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="main-content">
        {/* プライバシーポリシーセクション */}
        <section className="privacy-section">
          <div className="container">
            <h2>プライバシーポリシー</h2>
            <div className="privacy-content">
              <div className="privacy-item">
                <h3>1. 個人情報の収集について</h3>
                <p>
                  MangaCircle（以下「当チーム」）は、以下の場合に個人情報を収集することがあります。
                </p>
                <ul>
                  <li>サービスへの登録時</li>
                  <li>お問い合わせをいただいた時</li>
                  <li>アンケートにご回答いただいた時</li>
                  <li>サービス利用時の行動ログ</li>
                </ul>
              </div>
              
              <div className="privacy-item">
                <h3>2. 個人情報の利用目的</h3>
                <p>当チームが個人情報を収集・利用する目的は、以下のとおりです。</p>
                <ul>
                  <li>サービスの提供・運営のため</li>
                  <li>ユーザーからのお問い合わせに回答するため</li>
                  <li>サービスの改善・新サービスの開発のため</li>
                  <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                  <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                  <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                </ul>
              </div>
              
              <div className="privacy-item">
                <h3>3. 個人情報の第三者提供</h3>
                <p>
                  当チームは、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、
                  第三者に個人情報を提供することはありません。
                </p>
                <ul>
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                </ul>
              </div>
              
              <div className="privacy-item">
                <h3>4. 個人情報の開示</h3>
                <p>
                  当チームは、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。
                  ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、
                  開示しない決定をした場合には、その旨を遅滞なく通知します。
                </p>
                <ul>
                  <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                  <li>当チームの業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                  <li>その他法令に違反することとなる場合</li>
                </ul>
              </div>
              
              <div className="privacy-item">
                <h3>5. 個人情報の訂正および削除</h3>
                <p>
                  ユーザーは、当チームの保有する自己の個人情報が誤った情報である場合には、
                  当チームが定める手続きにより、当チームに対して個人情報の訂正、追加または削除（以下「訂正等」）を請求することができます。
                </p>
                <p>
                  当チームは、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、
                  遅滞なく、当該個人情報の訂正等を行うものとします。
                </p>
              </div>
              
              <div className="privacy-item">
                <h3>6. 個人情報の利用停止等</h3>
                <p>
                  当チームは、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、
                  または不正の手段により取得されたものであるという理由により、
                  その利用の停止または消去（以下「利用停止等」）を求められた場合には、遅滞なく必要な調査を行います。
                </p>
                <p>
                  前項の調査結果に基づき、その請求に応じる必要があると判断した場合には、
                  遅滞なく、当該個人情報の利用停止等を行います。
                </p>
              </div>
              
              <div className="privacy-item">
                <h3>7. Cookieその他の技術の利用</h3>
                <p>
                  当チームのサービスは、Cookieおよび同様の技術を利用することがあります。
                  これらの技術は、当チームによるサービスの利用状況等の把握に役立ち、サービス向上に資するものです。
                  Cookieを無効にしたいユーザーは、Webブラウザの設定を変更することによりCookieを無効にすることができます。
                </p>
                <p>
                  ただし、Cookieを無効にした場合、サービスの一部の機能が使用できなくなることがあります。
                </p>
              </div>
              
              <div className="privacy-item">
                <h3>8. プライバシーポリシーの変更</h3>
                <p>
                  本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、
                  ユーザーに通知することなく、変更することができるものとします。
                  当チームが別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
                </p>
              </div>
              
              <div className="privacy-item">
                <h3>9. お問い合わせ窓口</h3>
                <p>
                  本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                </p>
                <div className="contact-info">
                  <p><strong>MangaCircle</strong></p>
                  <p>Email: contact@mangacircle.dev</p>
                  <p>受付時間: 平日 10:00-18:00（土日祝日・年末年始を除く）</p>
                </div>
              </div>
              
              <div className="privacy-footer">
                <p>以上</p>
                <p>2025年7月8日 制定</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <Link to="/" className="footer-link"><span>ホーム</span></Link>
              <Link to="/terms" className="footer-link"><span>利用規約</span></Link>
              <Link to="/privacy" className="footer-link"><span>プライバシーポリシー</span></Link>
            </div>
            <p>&copy; 2025 MangaCircle. All rights reserved.</p>
            <p>Made with ♥️ by Shima & NAKUSA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Privacy;
