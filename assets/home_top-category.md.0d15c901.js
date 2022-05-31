import{_ as s,c as n,o as a,a as t}from"./app.ba9c527d.js";const m='{"title":"\u521B\u5EFA\u4E00\u7EA7\u5206\u7C7B\u9875\u9762","description":"","frontmatter":{},"headers":[],"relativePath":"home/top-category.md"}',p={},e=t(`<h1 id="\u521B\u5EFA\u4E00\u7EA7\u5206\u7C7B\u9875\u9762" tabindex="-1">\u521B\u5EFA\u4E00\u7EA7\u5206\u7C7B\u9875\u9762 <a class="header-anchor" href="#\u521B\u5EFA\u4E00\u7EA7\u5206\u7C7B\u9875\u9762" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u521B\u5EFA\u4E00\u7EA7\u5206\u7C7B\u9875\u9762, \u914D\u7F6E\u4E00\u7EA7\u5206\u7C7B\u9875\u9762\u7684\u8DEF\u7531\u89C4\u5219</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728<code>views</code>\u6587\u4EF6\u5939\u4E2D\uFF0C\u521B\u5EFA\u4E00\u7EA7\u5206\u7C7B\u7EC4\u4EF6(TopCategory)</li><li>\u914D\u7F6E\u4E00\u7EA7\u5206\u7C7B\u8DEF\u7531</li><li>\u5728\u5BFC\u822A\u7EC4\u4EF6(<code>HeaderNav</code>)\u4E2D\u6DFB\u52A0\u4E00\u7EA7\u5206\u7C7B\u94FE\u63A5</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><p><strong>Step.1\uFF1A\u5728<code>views</code>\u6587\u4EF6\u5939\u4E2D\uFF0C\u521B\u5EFA\u4E00\u7EA7\u5206\u7C7B\u7EC4\u4EF6(TopCategory)</strong></p><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> AppLayout <span class="token keyword">from</span> <span class="token string">&quot;../../components/AppLayout/AppLayout.vue&quot;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppLayout</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>TopCategoryPage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AppLayout</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p><strong>Step.2\uFF1A\u914D\u7F6E\u4E00\u7EA7\u5206\u7C7B\u8DEF\u7531</strong></p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// \u914D\u7F6E\u8DEF\u7531</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/category/:id&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> TopCategory <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p><strong>Step.3\uFF1A\u5728\u5BFC\u822A\u7EC4\u4EF6(<code>HeaderNav</code>)\u4E2D\u6DFB\u52A0\u4E00\u7EA7\u5206\u7C7B\u94FE\u63A5</strong></p><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`/category/\${item.id}\`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div></li></ul></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),o=[e];function c(l,r,i,u,k,d){return a(),n("div",null,o)}var b=s(p,[["render",c]]);export{m as __pageData,b as default};