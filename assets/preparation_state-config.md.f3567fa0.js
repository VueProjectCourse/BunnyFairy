import{_ as n,c as s,o as a,a as p}from"./app.ba9c527d.js";const d='{"title":"\u914D\u7F6E\u72B6\u6001\u7BA1\u7406\u5668","description":"","frontmatter":{},"headers":[],"relativePath":"preparation/state-config.md"}',t={},e=p(`<h1 id="\u914D\u7F6E\u72B6\u6001\u7BA1\u7406\u5668" tabindex="-1">\u914D\u7F6E\u72B6\u6001\u7BA1\u7406\u5668 <a class="header-anchor" href="#\u914D\u7F6E\u72B6\u6001\u7BA1\u7406\u5668" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5728Vue\u9879\u76EE\u4E2D\u914D\u7F6EPinia,\u5E76\u5B9E\u73B0\u72B6\u6001\u6301\u4E45\u5316</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5B89\u88C5Pinia</li><li>\u5728\u9879\u76EE\u5165\u53E3\u6587\u4EF6\u4E2D\uFF0C\u6302\u8F7DPinia</li><li>\u5728src\u76EE\u5F55\u521B\u5EFAstores\u6587\u4EF6\u5939\u5E76\u521B\u5EFAJavaScript\u6587\u4EF6</li><li>\u521B\u5EFA\u7528\u6237\u6A21\u5757\u5F00\u542F\u7F13\u5B58</li><li>\u521B\u5EFA\u8D2D\u7269\u8F66\u6A21\u5757\u5F00\u542F\u7F13\u5B58</li><li>\u521B\u5EFA\u5206\u7C7B\u6A21\u5757</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><p><strong>Step.1\uFF1A\u5B89\u88C5Pinia</strong></p><div class="language-bash line-numbers-mode"><pre><code><span class="token comment"># \u5B89\u88C5Pinia</span>
<span class="token function">npm</span> <span class="token function">install</span> pinia
<span class="token comment"># \u5B89\u88C5pinia \u6301\u4E45\u5316\u63D2\u4EF6</span>
<span class="token function">npm</span> i pinia-plugin-persist --save
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p><strong>Step.2\uFF1A\u5728src\u76EE\u5F55\u521B\u5EFAstores\u6587\u4EF6\u5939\u5E76\u521B\u5EFA<code>index.js</code>\u6587\u4EF6</strong></p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u4ECE pinia\u4E2D\u89E3\u6784 createPinia\u65B9\u6CD5</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token comment">// \u5BFC\u5165pinia\u7684\u72B6\u6001\u6301\u4E45\u5316\u63D2\u4EF6</span>
<span class="token keyword">import</span> piniaPluginPersist <span class="token keyword">from</span> <span class="token string">&#39;pinia-plugin-persist&#39;</span>
<span class="token comment">// \u521B\u5EFA store\u5B9E\u4F8B</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u5728 pinia\u4E2D \u6302\u8F7D \u63D2\u4EF6</span>
store<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>piniaPluginPersist<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li><p><strong>Step.3\uFF1A\u5728\u9879\u76EE\u5165\u53E3\u6587\u4EF6\u4E2D\uFF0C\u6302\u8F7DPinia</strong></p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&quot;./stores&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li><p><strong>Step.4\uFF1A\u521B\u5EFA\u7528\u6237\u6A21\u5757\u5F00\u542F\u7F13\u5B58</strong></p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useUserStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;userStore&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// \u7528\u6237\u4FE1\u606F</span>
    <span class="token literal-property property">profile</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7528\u6237id</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u7528\u6237\u5934\u50CF</span>
      <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u7528\u6237\u6635\u79F0</span>
      <span class="token literal-property property">nickname</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u7528\u6237\u8D26\u53F7</span>
      <span class="token literal-property property">account</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u7528\u6237\u624B\u673A\u53F7</span>
      <span class="token literal-property property">mobile</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u7528\u6237\u767B\u5F55\u51ED\u8BC1</span>
      <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5F00\u542F\u6570\u636E\u7F13\u5B58</span>
  <span class="token literal-property property">persist</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></li><li><p><strong>Step.5\uFF1A\u521B\u5EFA\u8D2D\u7269\u8F66\u6A21\u5757\u5F00\u542F\u7F13\u5B58</strong></p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useCartStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;cartStore&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// \u5B58\u50A8\u5206\u7C7B\u5217\u8868</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token comment">// \u5F00\u542F\u6570\u636E\u7F13\u5B58</span>
  <span class="token literal-property property">persist</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li><li><p><strong>Step.6\uFF1A\u521B\u5EFA\u5206\u7C7B\u6A21\u5757</strong></p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useCateStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;cartStore&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// \u5B58\u50A8\u5206\u7C7B\u5217\u8868</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li></ul></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li><p>\u3010\u91CD\u70B9\u3011</p><ul><li>\u24F5 \u5B89\u88C5Pinia</li><li>\u24F6 \u5728\u9879\u76EE\u5165\u53E3\u6587\u4EF6\u4E2D\uFF0C\u6302\u8F7DPinia</li><li>\u24F7 \u5728src\u76EE\u5F55\u521B\u5EFAstores\u6587\u4EF6\u5939\u5E76\u521B\u5EFAJavaScript\u6587\u4EF6</li></ul></li><li><p>\u3010\u96BE\u70B9\u3011</p><ul><li>\u24F6 \u5728\u9879\u76EE\u5165\u53E3\u6587\u4EF6\u4E2D\uFF0C\u6302\u8F7DPinia</li><li>\u24F8 \u5728JavaScript\u6587\u4EF6\u4E2D\u58F0\u660EStore</li></ul></li></ul></div>`,5),o=[e];function l(c,r,i,u,k,b){return a(),s("div",null,o)}var y=n(t,[["render",l]]);export{d as __pageData,y as default};
