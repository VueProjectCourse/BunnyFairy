import{_ as n,c as s,o as a,a as p}from"./app.ba9c527d.js";var t="/BunnyFairy/assets/150.bf023bb4.jpeg";const v='{"title":"Mock Service Worker","description":"","frontmatter":{},"headers":[],"relativePath":"profile/msw.md"}',e={},o=p('<h1 id="mock-service-worker" tabindex="-1">Mock Service Worker <a class="header-anchor" href="#mock-service-worker" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">Object</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u638C\u63E1 Mock Service Worker \u7684\u57FA\u672C\u4F7F\u7528\u65B9\u5F0F</p></div><div class="warning custom-block"><p class="custom-block-title">Path</p><ol><li>MSW\u7684\u6267\u884C\u8FC7\u7A0B</li><li>MSW\u7684\u4F7F\u7528\u65B9\u5F0F</li></ol></div><div class="info custom-block"><p class="custom-block-title">Experience</p><ul><li><strong>Step.1\uFF1AMSW\u7684\u6267\u884C\u8FC7\u7A0B</strong></li></ul><p><a href="https://mswjs.io/" target="_blank" rel="noopener noreferrer">Mock Service Worker</a>: \u5728\u7F51\u7EDC\u7EA7\u522B\u4E0A\u5BF9\u8BF7\u6C42\u8FDB\u884C\u62E6\u622A, \u5BF9\u8BF7\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u5904\u7406.</p><p><img src="'+t+`" alt=""></p><ul><li><p><strong>Step.2\uFF1AMSW\u7684\u4F7F\u7528\u65B9\u5F0F</strong></p><ul><li>\u24F5 \u4E0B\u8F7D\u6307\u5B9A\u7248\u672C\u7684\u8BF7\u6C42\u62E6\u622A\u5DE5\u5177</li></ul><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> <span class="token function">install</span> msw@0.35.0
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>\u24F6 \u751F\u6210 service worker \u7684\u6CE8\u518C\u6587\u4EF6</li></ul><p>\u4EE5\u4E0B\u547D\u4EE4\u8FD0\u884C\u540E\u4F1A\u5728 public \u6587\u4EF6\u5939\u4E0B\u751F\u6210 <code>mockServiceWorker.js</code>, \u5728\u6BCF\u4E00\u4E2A\u9879\u76EE\u4E2D\u751F\u6210\u7684\u6587\u4EF6\u4EE3\u7801\u90FD\u662F\u4E00\u6837\u7684. \u4E0D\u9700\u5173\u5FC3.</p><div class="language-bash line-numbers-mode"><pre><code>npx msw init public/
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>\u24F7 \u7F16\u5199\u5E76\u914D\u7F6E\u8BF7\u6C42\u62E6\u622A\u7A0B\u5E8F</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// mocks/worker.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> rest<span class="token punctuation">,</span> setupWorker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;msw&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> baseURL <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/request&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token function">setupWorker</span><span class="token punctuation">(</span>
  rest<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>baseURL<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">message</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">res</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> worker<span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>\u24F8 \u542F\u52A8\u8BF7\u6C42\u62E6\u622A</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u5224\u65AD\u5F53\u524D\u662F\u5426\u4E3A\u5F00\u53D1\u73AF\u5883</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u52A8\u6001\u5F15\u5165\u8BF7\u6C42\u62E6\u622A\u5B9E\u4F8B\u5BF9\u8C61</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./mocks/worker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> worker <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u542F\u52A8\u8BF7\u6C42\u62E6\u622A\u5B9E\u7528\u7A0B\u5E8F</span>
    <span class="token comment">// onUnhandledRequest: \u62E6\u622A\u5230\u672A\u5904\u7406\u7684\u8BF7\u6C42\u8D70\u8BE5\u51FD\u6570</span>
    <span class="token comment">// quiet: true \u5B89\u9759\u6A21\u5F0F, \u5BF9\u4E8E\u62E6\u622A\u6210\u529F\u7684\u8BF7\u6C42\u4E0D\u8981\u5728\u63A7\u5236\u53F0\u4E2D\u8FDB\u884C\u8F93\u51FA\u63D0\u793A</span>
    <span class="token keyword">await</span> worker
      <span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token function">onUnhandledRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;%c\u62E6\u622A\u7A0B\u5E8F\u542F\u52A8\u6210\u529F&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;color: green&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul><li>\u24F9 \u914D\u7F6E \u73AF\u5883\u53D8\u91CF</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// vite.config.js</span>
<span class="token literal-property property">define</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token string-property property">&quot;process.<wbr>env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token constant">BASE_URL</span><span class="token operator">:</span> <span class="token string">&quot;http://pcapi-xiaotuxian-front-devtest.itheima.net/&quot;</span><span class="token punctuation">,</span>
     <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul></div><div class="danger custom-block"><p class="custom-block-title">Note</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),c=[o];function l(u,r,i,k,m,b){return a(),s("div",null,c)}var g=n(e,[["render",l]]);export{v as __pageData,g as default};
