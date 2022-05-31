import{_ as n,c as s,o as a,a as t}from"./app.ba9c527d.js";const d='{"title":"\u8D2D\u7269\u8F66-\u6279\u91CF\u5220\u9664-\u6E05\u7A7A\u65E0\u6548-\u672A\u767B\u5F55","description":"","frontmatter":{},"headers":[],"relativePath":"cart/batch-delete.md"}',p={},e=t(`<h1 id="\u8D2D\u7269\u8F66-\u6279\u91CF\u5220\u9664-\u6E05\u7A7A\u65E0\u6548-\u672A\u767B\u5F55" tabindex="-1">\u8D2D\u7269\u8F66-\u6279\u91CF\u5220\u9664-\u6E05\u7A7A\u65E0\u6548-\u672A\u767B\u5F55 <a class="header-anchor" href="#\u8D2D\u7269\u8F66-\u6279\u91CF\u5220\u9664-\u6E05\u7A7A\u65E0\u6548-\u672A\u767B\u5F55" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F \u5B9E\u73B0\u5220\u9664\u9009\u4E2D\u5546\u54C1\u529F\u80FD\u3001\u5B9E\u73B0\u6E05\u7A7A\u65E0\u6548\u5546\u54C1\u529F\u80FD</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728\u8D2D\u7269\u8F66\u7EC4\u4EF6\u6A21\u677F\u4E2D\u4E3A\u5220\u9664\u5546\u54C1\u6309\u94AE\u548C\u6E05\u7A7A\u65E0\u6548\u5546\u54C1\u6309\u94AE\u6DFB\u52A0\u70B9\u51FB\u4E8B\u4EF6</li><li>\u4E3A\u5220\u9664\u5546\u54C1\u529F\u80FD\u6DFB\u52A0\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u8C03\u7528 action \u65B9\u6CD5\u5B9E\u73B0\u5220\u9664\u64CD\u4F5C</li><li>\u521B\u5EFA\u7528\u4E8E\u5B9E\u73B0\u5220\u9664\u7528\u6237\u9009\u62E9\u5546\u54C1\u548C\u6E05\u7A7A\u65E0\u6548\u5546\u54C1\u7684 action \u65B9\u6CD5</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728\u8D2D\u7269\u8F66\u7EC4\u4EF6\u6A21\u677F\u4E2D\u4E3A\u5220\u9664\u5546\u54C1\u6309\u94AE\u548C\u6E05\u7A7A\u65E0\u6548\u5546\u54C1\u6309\u94AE\u6DFB\u52A0\u70B9\u51FB\u4E8B\u4EF6</strong></li></ul><div class="language-html line-numbers-mode"><pre><code> <span class="token comment">&lt;!-- \u64CD\u4F5C\u680F --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>action<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>batch<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span><span class="token punctuation">&gt;</span></span>\u5168\u9009<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>
              <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript:<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
                deleteGoodsOfCartByUserSelectedOrInvalid(
                  <span class="token punctuation">&#39;</span>userSelectedGoodsList<span class="token punctuation">&#39;</span>
                )
              <span class="token punctuation">&quot;</span></span>
              <span class="token punctuation">&gt;</span></span>\u5220\u9664\u5546\u54C1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span>
            <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript:<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u79FB\u5165\u6536\u85CF\u5939<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>
              <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript:<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
                deleteGoodsOfCartByUserSelectedOrInvalid(<span class="token punctuation">&#39;</span>invalidGoodsList<span class="token punctuation">&#39;</span>)
              <span class="token punctuation">&quot;</span></span>
              <span class="token punctuation">&gt;</span></span>\u6E05\u7A7A\u5931\u6548\u5546\u54C1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span>
            <span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            \u5171 {{ effectiveGoodsCount }} \u4EF6\u5546\u54C1\uFF0C\u5DF2\u9009\u62E9
            {{ userSelectedGoodsCount }} \u4EF6\uFF0C\u5546\u54C1\u5408\u8BA1\uFF1A
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\xA5{{ userSelectedGoodsPrice }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E0B\u5355\u7ED3\u7B97<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><ul><li><strong>Step.2\uFF1A\u4E3A\u5220\u9664\u5546\u54C1\u529F\u80FD\u6DFB\u52A0\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u8C03\u7528 action \u65B9\u6CD5\u5B9E\u73B0\u5220\u9664\u64CD\u4F5C</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u5220\u9664\u7528\u6237\u9009\u62E9\u7684\u5546\u54C1 userSelectedGoodsList\u3001\u6E05\u7A7A\u65E0\u6548\u5546\u54C1 invalidGoodsList</span>
<span class="token keyword">const</span> <span class="token function-variable function">deleteGoodsOfCartByUserSelectedOrInvalid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">flag</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5F39\u6846\u63D0\u793A\u6587\u5B57</span>
  <span class="token keyword">let</span> content <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5982\u679C\u5F53\u524D\u64CD\u4F5C\u662F\u5220\u9664\u7528\u6237\u9009\u62E9\u7684\u5546\u54C1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>flag <span class="token operator">===</span> <span class="token string">&quot;userSelectedGoodsList&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5224\u65AD\u7528\u6237\u662F\u5426\u9009\u62E9\u4E86\u5546\u54C1</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>userSelectedGoodsCount<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u8BF7\u9009\u62E9\u8981\u5220\u9664\u7684\u5546\u54C1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u8BBE\u7F6E\u5F39\u6846\u63D0\u793A\u6587\u5B57</span>
    content <span class="token operator">=</span> <span class="token string">&quot;\u786E\u5B9A\u8981\u5220\u9664\u9009\u4E2D\u7684\u5546\u54C1\u5417?&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5982\u679C\u5F53\u524D\u64CD\u4F5C\u662F\u6E05\u7A7A\u65E0\u6548\u5546\u54C1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>flag <span class="token operator">===</span> <span class="token string">&quot;invalidGoodsList&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5224\u65AD\u5F53\u524D\u662F\u5426\u6709\u65E0\u6548\u5546\u54C1</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>invalidGoodsList<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u63D0\u793A</span>
      <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u6CA1\u6709\u65E0\u6548\u5546\u54C1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u8BBE\u7F6E\u5F39\u6846\u63D0\u793A\u6587\u5B57</span>
    content <span class="token operator">=</span> <span class="token string">&quot;\u786E\u5B9A\u8981\u5220\u9664\u65E0\u6548\u5546\u54C1\u5417?&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u548C\u7528\u6237\u8FDB\u884C\u786E\u8BA4</span>
  <span class="token function">Confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6267\u884C\u64CD\u4F5C</span>
      cartStore<span class="token punctuation">.</span><span class="token function">deleteGoodsOfCartByUserSelectedOrInvalid</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><ul><li><strong>Step.3\uFF1A\u521B\u5EFA\u7528\u4E8E\u5B9E\u73B0\u5220\u9664\u7528\u6237\u9009\u62E9\u5546\u54C1\u548C\u6E05\u7A7A\u65E0\u6548\u5546\u54C1\u7684 action \u65B9\u6CD5</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// cartStore.js</span>
<span class="token comment">// \u5220\u9664\u7528\u6237\u9009\u62E9\u7684\u5546\u54C1\u3001\u6E05\u7A7A\u65E0\u6548\u5546\u54C1</span>
    <span class="token function">deleteGoodsOfCartByUserSelectedOrInvalid</span><span class="token punctuation">(</span><span class="token parameter">flag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u5224\u65AD\u7528\u6237\u662F\u5426\u767B\u9646</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>userStore<span class="token punctuation">.</span>profile<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u767B\u9646</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u6CA1\u6709\u767B\u9646\u600E\u4E48\u529E</span>
        <span class="token keyword">this</span><span class="token punctuation">[</span>flag<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">deleteGoodsOfCartBySkuId</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>skuId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),o=[e];function c(l,u,i,r,k,b){return a(),s("div",null,o)}var g=n(p,[["render",c]]);export{d as __pageData,g as default};