import{_ as n,c as s,o as a,a as p}from"./app.ba9c527d.js";const d='{"title":"\u5206\u9875\u7EC4\u4EF6-\u5173\u8054\u8BC4\u8BBA\u5217\u8868","description":"","frontmatter":{},"headers":[],"relativePath":"detail/pagination-concat.md"}',t={},e=p(`<h1 id="\u5206\u9875\u7EC4\u4EF6-\u5173\u8054\u8BC4\u8BBA\u5217\u8868" tabindex="-1">\u5206\u9875\u7EC4\u4EF6-\u5173\u8054\u8BC4\u8BBA\u5217\u8868 <a class="header-anchor" href="#\u5206\u9875\u7EC4\u4EF6-\u5173\u8054\u8BC4\u8BBA\u5217\u8868" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5728\u8BC4\u8BBA\u5217\u8868\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u5206\u9875\u7EC4\u4EF6, \u5B9E\u73B0\u6570\u636E\u5206\u9875</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728\u8C03\u7528\u5206\u9875\u7EC4\u4EF6\u65F6\u4F20\u9012\u5F53\u524D\u9875\u548C\u603B\u6570\u636E\u6761\u6570</li><li>\u5F53\u524D\u9875\u5B9E\u73B0\u53CC\u5411\u6570\u636E\u7ED1\u5B9A</li><li>\u603B\u6570\u636E\u6761\u6570\u6620\u5C04\u4E3A\u8BA1\u7B97\u5C5E\u6027</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728\u8C03\u7528\u5206\u9875\u7EC4\u4EF6\u65F6\u4F20\u9012\u5F53\u524D\u9875\u548C\u603B\u6570\u636E\u6761\u6570</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XtxPagination</span>
  <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>commentList.pages &gt; 1<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name"><span class="token namespace">v-model:</span>page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reqParams.page<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:pageSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reqParams.pageSize<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>commentList.counts<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><strong>Step.2\uFF1A\u5F53\u524D\u9875\u5B9E\u73B0\u53CC\u5411\u6570\u636E\u7ED1\u5B9A</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;XtxPagination&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5F53\u524D\u9875</span>
    <span class="token keyword">const</span> currentPage <span class="token operator">=</span> <span class="token function">useVModel</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span> emit<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u603B\u6570\u636E\u6761\u6570</span>
    <span class="token keyword">const</span> totalCount <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6BCF\u9875\u663E\u793A\u6570\u636E\u6761\u6570</span>
    <span class="token keyword">const</span> pageSize <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li><strong>Step.3\uFF1A\u603B\u6570\u636E\u6761\u6570\u6620\u5C04\u4E3A\u8BA1\u7B97\u5C5E\u6027</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;XtxPagination&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5F53\u524D\u9875</span>
    <span class="token keyword">const</span> currentPage <span class="token operator">=</span> <span class="token function">useVModel</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span> emit<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u603B\u6570\u636E\u6761\u6570</span>
    <span class="token keyword">const</span> totalCount <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6BCF\u9875\u663E\u793A\u6570\u636E\u6761\u6570</span>
    <span class="token keyword">const</span> pageSize <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),o=[e];function c(l,u,r,i,k,b){return a(),s("div",null,o)}var g=n(t,[["render",c]]);export{d as __pageData,g as default};