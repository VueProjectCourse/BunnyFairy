import{_ as n,c as s,o as a,a as t}from"./app.ba9c527d.js";var p="/BunnyFairy/assets/55.1580f2a6.png";const b='{"title":"QQ\u767B\u5F55-\u521B\u5EFA\u767B\u5F55\u6309\u94AE","description":"","frontmatter":{},"headers":[],"relativePath":"login/login-button.md"}',o={},e=t(`<h1 id="qq\u767B\u5F55-\u521B\u5EFA\u767B\u5F55\u6309\u94AE" tabindex="-1">QQ\u767B\u5F55-\u521B\u5EFA\u767B\u5F55\u6309\u94AE <a class="header-anchor" href="#qq\u767B\u5F55-\u521B\u5EFA\u767B\u5F55\u6309\u94AE" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F \u751F\u6210\u8BBF\u95EEQQ\u767B\u5F55\u9875\u9762\u7684\u94FE\u63A5\u5730\u5740</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728\u5E94\u7528\u4E2D\u7684HTML\u6A21\u677F\u4E2D\u6DFB\u52A0\u5BFC\u5165QQ\u4E92\u8054\u7684JS\u5E93\u6587\u4EF6</li><li>\u4E34\u65F6\u4F7F\u7528\u4EE5\u4E0B\u4EE3\u7801\u66FF\u6362\u5199\u6B7B\u5728\u7EC4\u4EF6\u6A21\u677F\u7684\u4E2DQQ\u767B\u5F55\u56FE\u7247</li><li>\u5728\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u540E\u521B\u5EFAQQ\u767B\u5F55\u6309\u94AE(\u4E34\u65F6)</li><li>\u62F7\u8D1D\u751F\u6210\u7684\u94FE\u63A5\u5730\u5740, \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u94FE\u63A5\u6807\u8BB0, \u586B\u5145\u94FE\u63A5\u5730\u5740, \u5305\u88F9\u539F\u6709\u7684QQ\u767B\u5F55\u56FE\u7247.</li><li>\u5220\u9664\u5728\u4EE5\u4E0A\u6B65\u9AA4\u4E2D\u751F\u6210\u7684\u4E34\u65F6\u4EE3\u7801</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step1\uFF1A\u5728\u5E94\u7528\u4E2D\u7684HTML\u6A21\u677F\u4E2D\u6DFB\u52A0\u5BFC\u5165QQ\u4E92\u8054\u7684JS\u5E93\u6587\u4EF6</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://connect.qq.com/qc_jssdk.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-appid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100556005<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-redirecturi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.corho.com:8080/#/login/callback<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li><strong>Step2\uFF1A\u4E34\u65F6\u4F7F\u7528\u4EE5\u4E0B\u4EE3\u7801\u66FF\u6362\u5199\u6B7B\u5728\u7EC4\u4EF6\u6A21\u677F\u7684\u4E2DQQ\u767B\u5F55\u56FE\u7247</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>qqLoginBtn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- &lt;img src=&quot;https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png&quot;/&gt; --&gt;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><strong>Step3\uFF1A\u5728\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u540E\u521B\u5EFAQQ\u767B\u5F55\u6309\u94AE(\u4E34\u65F6)</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token constant">QC</span><span class="token punctuation">.</span><span class="token function">Login</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">btnId</span><span class="token operator">:</span> <span class="token string">&#39;qqLoginBtn&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="`+p+`" alt=""></p><ul><li><strong>Step4\uFF1A\u62F7\u8D1D\u751F\u6210\u7684\u94FE\u63A5\u5730\u5740, \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u94FE\u63A5\u6807\u8BB0, \u586B\u5145\u94FE\u63A5\u5730\u5740, \u5305\u88F9\u539F\u6709\u7684QQ\u767B\u5F55\u56FE\u7247.</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://graph.qq.com/oauth2.0/authorize?client_id=100556005&amp;response_type=token&amp;scope=all&amp;redirect_uri=http%3A%2F%2Fwww.corho.com%3A8080%2F%23%2Flogin%2Fcallback<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><strong>Step5\uFF1A\u5220\u9664\u5728\u4EE5\u4E0A\u6B65\u9AA4\u4E2D\u751F\u6210\u7684\u4E34\u65F6\u4EE3\u7801</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>qqLoginBtn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-js line-numbers-mode"><pre><code><span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token constant">QC</span><span class="token punctuation">.</span><span class="token function">Login</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">btnId</span><span class="token operator">:</span> <span class="token string">&#39;qqLoginBtn&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),c=[e];function l(u,i,r,k,d,g){return a(),s("div",null,c)}var v=n(o,[["render",l]]);export{b as __pageData,v as default};