import{_ as n,c as s,o as a,a as t}from"./app.ba9c527d.js";var p="/BunnyFairy/assets/113.f3f293c6.png";const d='{"title":"\u4E00\u7EA7\u5206\u7C7B-\u8F6E\u64AD\u56FE","description":"","frontmatter":{},"headers":[],"relativePath":"category/top-carousel.md"}',o={},e=t('<h1 id="\u4E00\u7EA7\u5206\u7C7B-\u8F6E\u64AD\u56FE" tabindex="-1">\u4E00\u7EA7\u5206\u7C7B-\u8F6E\u64AD\u56FE <a class="header-anchor" href="#\u4E00\u7EA7\u5206\u7C7B-\u8F6E\u64AD\u56FE" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5B9E\u73B0\u4E00\u7EA7\u5206\u7C7B\u9875\u9762\u7684\u8F6E\u64AD\u56FE</p><p>\u793A\u4F8B\u5982\u4E0B: <img src="'+p+`" alt=""></p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728<code>TopCategory</code>\u7EC4\u4EF6\u4E2D\u8C03\u7528<code>Carousel</code>\u7EC4\u4EF6</li><li>\u5728<code>TopCategory</code>\u7EC4\u4EF6\u7684JavaScript\u4EE3\u7801\u4E2D\u8BF7\u6C42\u8F6E\u64AD\u56FE\u6570\u636E</li><li>\u6E32\u67D3\u8F6E\u64AD\u56FE\uFF0C\u4F20\u9012\u6240\u9700\u53C2\u6570</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><p><strong>Step.1\uFF1A\u5728<code>TopCategory</code>\u7EC4\u4EF6\u4E2D\u8C03\u7528<code>Carousel</code>\u7EC4\u4EF6</strong></p><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container top-category<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Bread</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ...\u7701\u7565\u4EE3\u7801 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Bread</span><span class="token punctuation">&gt;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><p><strong>Step.2\uFF1A\u5728<code>TopCategory</code>\u7EC4\u4EF6\u7684JavaScript\u4EE3\u7801\u4E2D\u8BF7\u6C42\u8F6E\u64AD\u56FE\u6570\u636E</strong></p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useTopCateBanner</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5B58\u50A8\u8F6E\u64AD\u56FE\u6570\u636E</span>
  <span class="token keyword">const</span> carouselList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u83B7\u53D6\u8F6E\u64AD\u56FE\u6570\u636E</span>
  <span class="token function">readBanners</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res<span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> status <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      carouselList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> carouselList <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li><li><p><strong>Step.3\uFF1A\u6E32\u67D3\u8F6E\u64AD\u56FE\uFF0C\u4F20\u9012\u6240\u9700\u53C2\u6570</strong></p><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&quot;../../components/Layout/Layout.vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useBread<span class="token punctuation">,</span> useTopCateBanner <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./useTopCategory&quot;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> topCate <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useBread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> carouselList <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTopCateBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container top-category<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Bread</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BreadItem</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9996\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BreadItem</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fade-right<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>out-in<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BreadItem</span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>topCate?.id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`/category/\${topCate?.id}\`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ topCate?.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BreadItem</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Transition</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Bread</span><span class="token punctuation">&gt;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>carouselList<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">:auto</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:carousel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>carouselList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ height: <span class="token punctuation">&#39;</span>500px<span class="token punctuation">&#39;</span> }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li></ul></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),c=[e];function l(u,i,r,k,g,m){return a(),s("div",null,c)}var v=n(o,[["render",l]]);export{d as __pageData,v as default};
