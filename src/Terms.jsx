import { Link } from 'react-router-dom';
import './App.css';

// ベースURLを取得（Viteの公式方法）
const baseUrl = import.meta.env.BASE_URL || './';

function Terms() {
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
        {/* 利用規約セクション */}
        <section className="terms-section">
          <div className="container">
            <h2>利用規約</h2>
            <div className="terms-content">
              <div className="terms-item">
                <h3>第1条（適用）</h3>
                <p>
                  本規約は、MangaCircle（以下「当チーム」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。
                  登録ユーザーの皆さま（以下「ユーザー」）には、本規約に従って、本サービスをご利用いただきます。
                </p>
              </div>
              
              <div className="terms-item">
                <h3>第2条（利用登録）</h3>
                <p>
                  本サービスにおいては、登録希望者が本規約に同意の上、当チームの定める方法によって利用登録を申請し、
                  当チームがこれを承認することによって、利用登録が完了するものとします。
                </p>
              </div>
              
              <div className="terms-item">
                <h3>第3条（ユーザーIDおよびパスワードの管理）</h3>
                <p>
                  ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
                  ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、
                  もしくは第三者と共用することはできません。
                </p>
              </div>
              
              <div className="terms-item">
                <h3>第4条（禁止事項）</h3>
                <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                <ul>
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当チーム、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                  <li>当チームのサービスの運営を妨害するおそれのある行為</li>
                  <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                  <li>不正アクセスをし、またはこれを試みる行為</li>
                  <li>他のユーザーに成りすます行為</li>
                  <li>当チームが許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</li>
                </ul>
              </div>
              
              <div className="terms-item">
                <h3>第5条（本サービスの提供の停止等）</h3>
                <p>
                  当チームは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく
                  本サービスの全部または一部の提供を停止または中断することができるものとします。
                </p>
                <ul>
                  <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                  <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>その他、当チームが本サービスの提供が困難と判断した場合</li>
                </ul>
              </div>
              
              <div className="terms-item">
                <h3>第6条（利用制限および登録抹消）</h3>
                <p>
                  当チームは、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、
                  ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、
                  またはユーザーとしての登録を抹消することができるものとします。
                </p>
                <ul>
                  <li>本規約のいずれかの条項に違反した場合</li>
                  <li>登録事項に虚偽の事実があることが判明した場合</li>
                  <li>当チームからの連絡に対し、一定期間返答がない場合</li>
                  <li>本サービスについて、最終の利用から一定期間利用がない場合</li>
                  <li>その他、当チームが本サービスの利用を適当でないと判断した場合</li>
                </ul>
              </div>
              
              <div className="terms-item">
                <h3>第7条（免責事項）</h3>
                <p>
                  当チームは、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、
                  特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）が
                  ないことを明示的にも黙示的にも保証しておりません。
                </p>
                <p>
                  当チームは、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。
                  ただし、本サービスに関する当チームとユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める
                  消費者契約となる場合、この免責規定は適用されません。
                </p>
              </div>
              
              <div className="terms-item">
                <h3>第8条（サービス内容の変更等）</h3>
                <p>
                  当チームは、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、
                  ユーザーはこれを承諾するものとします。
                </p>
              </div>
              
              <div className="terms-item">
                <h3>第9条（利用規約の変更）</h3>
                <p>
                  当チームは必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
                  なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
                </p>
              </div>
              
              <div className="terms-item">
                <h3>第10条（準拠法・裁判管轄）</h3>
                <p>
                  本規約の解釈にあたっては、日本法を準拠法とします。
                  本サービスに関して紛争が生じた場合には、当チームの本店所在地を管轄する裁判所を専属的合意管轄とします。
                </p>
              </div>
              
              <div className="terms-footer">
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

export default Terms;
