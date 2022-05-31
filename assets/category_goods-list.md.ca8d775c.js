import{_ as n,c as s,o as a,a as p}from"./app.ba9c527d.js";var t="/BunnyFairy/assets/118.d0145f85.png";const g='{"title":"\u4E8C\u7EA7\u5206\u7C7B-\u5546\u54C1\u5217\u8868\u6E32\u67D3","description":"","frontmatter":{},"headers":[],"relativePath":"category/goods-list.md"}',e={},o=p('<h1 id="\u4E8C\u7EA7\u5206\u7C7B-\u5546\u54C1\u5217\u8868\u6E32\u67D3" tabindex="-1">\u4E8C\u7EA7\u5206\u7C7B-\u5546\u54C1\u5217\u8868\u6E32\u67D3 <a class="header-anchor" href="#\u4E8C\u7EA7\u5206\u7C7B-\u5546\u54C1\u5217\u8868\u6E32\u67D3" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F \u6E32\u67D3\u5546\u54C1\u5217\u8868\u7EC4\u4EF6</p><p>\u793A\u4F8B\u5982\u4E0B:</p><p><img src="'+t+`" alt=""></p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728\u5546\u54C1\u5217\u8868\u7EC4\u4EF6(GoodsList)\u4E2D\uFF0C\u7F16\u5199\u5E03\u5C40\u4EE3\u7801</li><li>\u5728\u5546\u54C1\u5217\u8868\u7EC4\u4EF6(GoodsList)\u4E2D\uFF0C\u7F16\u5199\u6837\u5F0F\u4EE3\u7801</li><li>\u5728<code>SubCategoryPage</code>\u4E2D\u8C03\u7528\u5546\u54C1\u5217\u8868\u7EC4\u4EF6</li><li>\u521B\u5EFA\u7528\u4E8E\u83B7\u53D6\u5546\u54C1\u5217\u8868\u6570\u636E\u7684API\u65B9\u6CD5</li><li>\u5728<code>SubCategoryPage</code> \u4E2D\u8C03\u7528\u63A5\u53E3\u83B7\u53D6\u5546\u54C1\u6570\u636E</li><li>\u4F7F\u7528\u83B7\u53D6\u5230\u7684\u5546\u54C1\u5217\u8868\u6570\u636E\u6E32\u67D3\u7EC4\u4EF6\u6A21\u677F</li><li>\u5B9E\u73B0\u8DEF\u7531\u66F4\u65B0\u91CD\u65B0\u83B7\u53D6\u5546\u54C1\u5217\u8868\u6570\u636E</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728\u5546\u54C1\u5217\u8868\u7EC4\u4EF6(GoodsList)\u4E2D\uFF0C\u7F16\u5199\u5E03\u5C40\u4EE3\u7801</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">goods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
    <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in 20<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GoodsItem</span> <span class="token attr-name">:goods</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li><strong>Step.2\uFF1A\u5728\u5546\u54C1\u5217\u8868\u7EC4\u4EF6(GoodsList)\u4E2D\uFF0C\u7F16\u5199\u6837\u5F0F\u4EE3\u7801</strong></li></ul><div class="language-css line-numbers-mode"><pre><code><span class="token selector">ul</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul li</span> <span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul li:nth-child(5n)</span> <span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li><strong>Step.3\uFF1A\u5728<code>SubCategoryPage</code>\u4E2D\u8C03\u7528\u5546\u54C1\u5217\u8868\u7EC4\u4EF6</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token comment">&lt;!-- \u6761\u4EF6\u8FC7\u6EE4\u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubFilter</span>  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>goods-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u5546\u54C1\u6392\u5E8F\u7EC4\u4EF6 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubSort</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \u5546\u54C1\u5C55\u793A\u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GoodsList</span>  <span class="token punctuation">/&gt;</span></span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li><strong>Step.4\uFF1A\u521B\u5EFA\u7528\u4E8E\u83B7\u53D6\u5546\u54C1\u5217\u8868\u6570\u636E\u7684API\u65B9\u6CD5</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// categoryAPI.js</span>
<span class="token comment">/**
 * \u83B7\u53D6\u5546\u54C1\u5217\u8868
 * @param params \u5206\u7C7Bid\u3001\u7B5B\u9009\u6761\u4EF6\u3001\u6392\u5E8F\u6761\u4EF6\u3001\u5206\u9875\u4FE1\u606F
 * @return {Promise}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">readGoodsReq</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/category/goods&quot;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><strong>Step.5\uFF1A\u5728<code>SubCategoryPage</code> \u4E2D\u8C03\u7528\u63A5\u53E3\u83B7\u53D6\u5546\u54C1\u6570\u636E</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">function</span> <span class="token function">useGoods</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6\u8DEF\u7531\u4FE1\u606F\u5BF9\u8C61</span>
  <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u7528\u4E8E\u5B58\u50A8\u5546\u54C1\u6570\u636E</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u7528\u4E8E\u5B58\u50A8\u8BF7\u6C42\u53C2\u6570</span>
  <span class="token keyword">let</span> reqParams <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">categoryId</span><span class="token operator">:</span> route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u7528\u4E8E\u83B7\u53D6\u5546\u54C1\u6570\u636E (\u521D\u59CB\u8FDB\u5165\u9875\u9762, \u7B5B\u9009\u6761\u4EF6\u53D8\u5316, \u6392\u5E8F\u6761\u4EF6\u53D8\u5316\u90FD\u8981\u8C03\u7528 getGoods)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getGoods</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6\u5546\u54C1\u6570\u636E</span>
    <span class="token function">getGoodsReq</span><span class="token punctuation">(</span>reqParams<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span>value <span class="token operator">=</span> data<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// \u76D1\u542C\u8BF7\u6C42\u53C2\u6570\u53D8\u5316, \u91CD\u65B0\u83B7\u53D6\u6570\u636E</span>
  <span class="token function">watch</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> reqParams<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">getGoods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u521D\u59CB\u8FDB\u5165\u9875\u9762\u83B7\u53D6\u5546\u54C1\u6570\u636E</span>
      <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> result <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><ul><li><strong>Step.6\uFF1A\u4F7F\u7528\u83B7\u53D6\u5230\u7684\u5546\u54C1\u5217\u8868\u6570\u636E\u6E32\u67D3\u7EC4\u4EF6\u6A21\u677F</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token comment">&lt;!-- \u5546\u54C1\u5217\u8868\u533A\u5757 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GoodsList</span> <span class="token attr-name">:goods</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>result.items<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>result<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-html line-numbers-mode"><pre><code><span class="token comment">&lt;!-- GoodsList.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in goods<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GoodsItem</span> <span class="token attr-name">:goods</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><strong>Step.7\uFF1A\u5B9E\u73B0\u8DEF\u7531\u66F4\u65B0\u91CD\u65B0\u83B7\u53D6\u5546\u54C1\u5217\u8868\u6570\u636E</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u8DEF\u7531\u66F4\u65B0, \u66F4\u65B0\u8BF7\u6C42\u53C2\u6570\u4E2D\u7684\u5206\u7C7Bid</span>
<span class="token function">onBeforeRouteUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  reqParams<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">categoryId</span><span class="token operator">:</span> to<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),c=[o];function l(u,r,i,k,b,m){return a(),s("div",null,c)}var v=n(e,[["render",l]]);export{g as __pageData,v as default};
