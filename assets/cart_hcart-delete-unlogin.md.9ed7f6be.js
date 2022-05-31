import{_ as n,c as s,o as a,a as t}from"./app.ba9c527d.js";const b='{"title":"\u5934\u90E8\u8D2D\u7269\u8F66-\u5220\u9664-\u672A\u767B\u5F55","description":"","frontmatter":{},"headers":[],"relativePath":"cart/hcart-delete-unlogin.md"}',p={},e=t(`<h1 id="\u5934\u90E8\u8D2D\u7269\u8F66-\u5220\u9664-\u672A\u767B\u5F55" tabindex="-1">\u5934\u90E8\u8D2D\u7269\u8F66-\u5220\u9664-\u672A\u767B\u5F55 <a class="header-anchor" href="#\u5934\u90E8\u8D2D\u7269\u8F66-\u5220\u9664-\u672A\u767B\u5F55" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5B9E\u73B0\u5220\u9664\u672C\u5730\u8D2D\u7269\u8F66\u4E2D\u7684\u5546\u54C1</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728 Store \u4E2D\u5B9A\u4E49\u7528\u4E8E\u5220\u9664\u8D2D\u7269\u8F66\u4E2D\u5546\u54C1\u7684 action \u65B9\u6CD5</li><li>\u5728\u7EC4\u4EF6\u4E2D\u5B9E\u73B0\u5220\u9664\u8D2D\u7269\u8F66\u5546\u54C1\u529F\u80FD</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728 Store \u4E2D\u5B9A\u4E49\u7528\u4E8E\u5220\u9664\u8D2D\u7269\u8F66\u4E2D\u5546\u54C1\u7684 action \u65B9\u6CD5</strong></li></ul><div class="language-js line-numbers-mode"><pre><code> <span class="token comment">// \u6839\u636EskuId \u5220\u9664\u5546\u54C1</span>
    <span class="token function">deleteGoodsOfCartBySkuId</span><span class="token punctuation">(</span><span class="token parameter">skuId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>skuId<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u83B7\u53D6\u8981\u88AB\u5220\u9664\u5546\u54C1\u7684\u7D22\u5F15</span>
      <span class="token comment">//  \u5224\u65AD\u7528\u6237\u662F\u5426\u767B\u5F55</span>
      <span class="token comment">// \u5224\u65AD\u7528\u6237\u662F\u5426\u767B\u5F55</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>userStore<span class="token punctuation">.</span>profile<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u767B\u5F55\u4E86</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u767B\u5F55\u4E86&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u83B7\u53D6\u8981\u88AB\u5220\u9664\u7684\u5546\u54C1\u7684\u7D22\u5F15</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>skuId <span class="token operator">===</span> skuId<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">[</span>
          <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul><li><strong>Step.2\uFF1A\u5728\u7EC4\u4EF6\u4E2D\u5B9E\u73B0\u5220\u9664\u8D2D\u7269\u8F66\u5546\u54C1\u529F\u80FD</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">const</span> cartStore <span class="token operator">=</span> <span class="token function">useCartStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iconfont icon-close-new<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cartStore.deleteGoodsOfCartBySkuId(goods.skuId)<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),o=[e];function c(l,u,i,r,k,d){return a(),s("div",null,o)}var _=n(p,[["render",c]]);export{b as __pageData,_ as default};
