import{_ as s,c as n,o as a,a as t}from"./app.ba9c527d.js";const b='{"title":"\u9000\u51FA\u767B\u5F55","description":"","frontmatter":{},"headers":[],"relativePath":"login/logout.md"}',p={},o=t(`<h1 id="\u9000\u51FA\u767B\u5F55" tabindex="-1">\u9000\u51FA\u767B\u5F55 <a class="header-anchor" href="#\u9000\u51FA\u767B\u5F55" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5B9E\u73B0\u7528\u6237\u9000\u51FA\u767B\u5F55\u529F\u80FD</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u4E3A\u9000\u51FA\u767B\u5F55\u6309\u94AE\u6DFB\u52A0\u70B9\u51FB\u4E8B\u4EF6, \u4E8B\u4EF6\u89E6\u53D1\u540E\u6267\u884C\u9000\u51FA\u767B\u5F55\u65B9\u6CD5</li><li>\u6267\u884C\u9000\u51FA\u64CD\u4F5C, \u6E05\u9664\u7528\u6237\u4FE1\u606F, \u8DF3\u8F6C\u5230\u767B\u5F55\u9875</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u4E3A\u9000\u51FA\u767B\u5F55\u6309\u94AE\u6DFB\u52A0\u70B9\u51FB\u4E8B\u4EF6, \u4E8B\u4EF6\u89E6\u53D1\u540E\u6267\u884C\u9000\u51FA\u767B\u5F55\u65B9\u6CD5</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logout<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript:;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9000\u51FA\u767B\u5F55<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li><strong>Step.2\uFF1A\u6267\u884C\u9000\u51FA\u64CD\u4F5C, \u6E05\u9664\u7528\u6237\u4FE1\u606F, \u8DF3\u8F6C\u5230\u767B\u5F55\u9875</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u5BFC\u5165 useUserStore</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useUserStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/stores/userStore&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5BFC\u5165 storeToRefs</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> storeToRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u89E3\u6784\u51FA profile</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> profile <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span><span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">handlerLogout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.\u91CD\u7F6Estore\u4E2D\u7684\u6570\u636E</span>
  store<span class="token punctuation">.</span><span class="token function">$reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 2.\u8DF3\u8F6C\u8DEF\u7531</span>
  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),e=[o];function c(l,u,i,r,k,m){return a(),n("div",null,e)}var g=s(p,[["render",c]]);export{b as __pageData,g as default};
