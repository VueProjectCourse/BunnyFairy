import{_ as n,c as s,o as a,a as p}from"./app.ba9c527d.js";const b='{"title":"\u8D2D\u7269\u8F66-\u5220\u9664\u5546\u54C1-\u5DF2\u767B\u5F55","description":"","frontmatter":{},"headers":[],"relativePath":"cart/cart-delete-login.md"}',t={},e=p(`<h1 id="\u8D2D\u7269\u8F66-\u5220\u9664\u5546\u54C1-\u5DF2\u767B\u5F55" tabindex="-1">\u8D2D\u7269\u8F66-\u5220\u9664\u5546\u54C1-\u5DF2\u767B\u5F55 <a class="header-anchor" href="#\u8D2D\u7269\u8F66-\u5220\u9664\u5546\u54C1-\u5DF2\u767B\u5F55" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5B9E\u73B0\u5220\u9664\u670D\u52A1\u5668\u7AEF\u8D2D\u7269\u8F66\u5220\u9664</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u521B\u5EFA\u7528\u4E8E\u5220\u9664\u8D2D\u7269\u5546\u54C1\u7684API\u63A5\u53E3\u51FD\u6570</li><li>\u5728store\u4E2D\u8C03\u7528\u63A5\u53E3\u5B9E\u73B0\u5220\u9664\u5546\u54C1\u529F\u80FD</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u521B\u5EFA\u7528\u4E8E\u5220\u9664\u8D2D\u7269\u5546\u54C1\u7684API\u63A5\u53E3\u51FD\u6570</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">/**
 * \u5220\u9664\u8D2D\u7269\u8F66\u4E2D\u7684\u5546\u54C1 \u652F\u6301\u6279\u91CF\u5220\u9664 \u652F\u6301\u5355\u4E2A\u5220\u9664
 * @param ids {Array&lt;string&gt;} \u5546\u54C1 skuId \u6570\u7EC4
 * @return {AxiosPromise}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">deleteGoodsOfCartBySkuIds</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ids</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ids<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;/member/cart&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> ids <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><strong>Step.2\uFF1A\u5728store\u4E2D\u8C03\u7528\u63A5\u53E3\u5B9E\u73B0\u5220\u9664\u5546\u54C1\u529F\u80FD</strong></li></ul><div class="language-js line-numbers-mode"><pre><code>   <span class="token comment">// \u628A\u5546\u54C1\u4ECE\u8D2D\u7269\u8F66\u4E2D\u5220\u9664</span>
    <span class="token keyword">async</span> <span class="token function">deleteGoodsOfCartBySkuId</span><span class="token punctuation">(</span><span class="token parameter">skuId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u5224\u65AD\u7528\u6237\u662F\u5426\u767B\u9646</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>userStore<span class="token punctuation">.</span>profile<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u767B\u9646</span>
        <span class="token comment">// console.log(skuId);</span>
        <span class="token keyword">await</span> <span class="token function">deleteGoodsOfCartBySkuIds</span><span class="token punctuation">(</span><span class="token punctuation">[</span>skuId<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u66F4\u65B0\u8D2D\u7269\u8F66\u5546\u54C1\u5217\u8868</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateCartList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u6CA1\u6709\u767B\u9646\u600E\u4E48\u529E</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>skuId <span class="token operator">===</span> skuId<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),o=[e];function c(l,u,i,r,k,d){return a(),s("div",null,o)}var _=n(t,[["render",c]]);export{b as __pageData,_ as default};