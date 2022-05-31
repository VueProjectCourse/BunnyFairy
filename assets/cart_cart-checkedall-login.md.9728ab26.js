import{_ as n,c as s,o as a,a as p}from"./app.ba9c527d.js";const b='{"title":"\u8D2D\u7269\u8F66-\u5168\u9009\u4E0E\u53D6\u6D88\u5168\u9009-\u5DF2\u767B\u5F55","description":"","frontmatter":{},"headers":[],"relativePath":"cart/cart-checkedall-login.md"}',t={},e=p(`<h1 id="\u8D2D\u7269\u8F66-\u5168\u9009\u4E0E\u53D6\u6D88\u5168\u9009-\u5DF2\u767B\u5F55" tabindex="-1">\u8D2D\u7269\u8F66-\u5168\u9009\u4E0E\u53D6\u6D88\u5168\u9009-\u5DF2\u767B\u5F55 <a class="header-anchor" href="#\u8D2D\u7269\u8F66-\u5168\u9009\u4E0E\u53D6\u6D88\u5168\u9009-\u5DF2\u767B\u5F55" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F \u5B9E\u73B0\u5168\u9009\u3001\u5168\u4E0D\u9009\u670D\u52A1\u5668\u7AEF\u8D2D\u7269\u8F66\u5546\u54C1</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u521B\u5EFA\u7528\u4E8E\u5B9E\u73B0\u5168\u9009\u548C\u53D6\u6D88\u5168\u9009\u529F\u80FD\u7684API\u63A5\u53E3\u51FD\u6570</li><li>\u5728store \u4E2D\u8C03\u7528\u63A5\u53E3\u5B9E\u73B0\u5546\u54C1\u7684\u5168\u9009\u4E0E\u53D6\u6D88\u5168\u9009\u64CD\u4F5C</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u521B\u5EFA\u7528\u4E8E\u5B9E\u73B0\u5168\u9009\u548C\u53D6\u6D88\u5168\u9009\u529F\u80FD\u7684API\u63A5\u53E3\u51FD\u6570</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/**
 * \u5168\u9009\u3001\u53D6\u6D88\u5168\u9009
 * @param selected \u9009\u4E2D\u72B6\u6001
 * @param ids skuId \u6570\u7EC4
 * @return {AxiosPromise}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">selectOrUnselectCartGoods</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> selected<span class="token punctuation">,</span> ids <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&quot;/member/cart/selected&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;put&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> selected<span class="token punctuation">,</span> ids <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li><strong>Step.2\uFF1A\u5728store \u4E2D\u8C03\u7528\u63A5\u53E3\u5B9E\u73B0\u5546\u54C1\u7684\u5168\u9009\u4E0E\u53D6\u6D88\u5168\u9009\u64CD\u4F5C</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5168\u9009\u3001\u5168\u4E0D\u9009</span>
    <span class="token keyword">async</span> <span class="token function">selectIsAll</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> rootState<span class="token punctuation">,</span> getters<span class="token punctuation">,</span> commit<span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span><span class="token punctuation">,</span> isAll</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>rootState<span class="token punctuation">.</span>user<span class="token punctuation">.</span>profile<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u767B\u5F55</span>
        <span class="token comment">// \u83B7\u53D6\u5546\u54C1 skuId \u6570\u7EC4</span>
        <span class="token keyword">const</span> ids <span class="token operator">=</span> getters<span class="token punctuation">.</span>effectiveGoodsList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>skuId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u53D1\u9001\u8BF7\u6C42\u6267\u884C, \u5168\u9009\u3001\u5168\u4E0D\u9009\u64CD\u4F5C</span>
        <span class="token keyword">await</span> <span class="token function">selectOrUnselectCartGoods</span><span class="token punctuation">(</span><span class="token punctuation">{</span> ids<span class="token punctuation">,</span> <span class="token literal-property property">selected</span><span class="token operator">:</span> isAll <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u66F4\u65B0\u8D2D\u7269\u8F66\u5546\u54C1\u5217\u8868</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&quot;updateCartList&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u672A\u767B\u5F55</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),c=[e];function o(l,u,i,r,k,m){return a(),s("div",null,c)}var _=n(t,[["render",o]]);export{b as __pageData,_ as default};