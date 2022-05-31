import{_ as n,c as s,o as a,a as t}from"./app.ba9c527d.js";var p="/BunnyFairy/assets/126.62521db7.png";const g='{"title":"\u57CE\u5E02\u9009\u62E9\u7EC4\u4EF6-\u83B7\u53D6\u6570\u636E","description":"","frontmatter":{},"headers":[],"relativePath":"detail/city-getdata.md"}',e={},o=t('<h1 id="\u57CE\u5E02\u9009\u62E9\u7EC4\u4EF6-\u83B7\u53D6\u6570\u636E" tabindex="-1">\u57CE\u5E02\u9009\u62E9\u7EC4\u4EF6-\u83B7\u53D6\u6570\u636E <a class="header-anchor" href="#\u57CE\u5E02\u9009\u62E9\u7EC4\u4EF6-\u83B7\u53D6\u6570\u636E" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5B9E\u73B0\u57CE\u5E02\u9009\u62E9\u7EC4\u4EF6\u4E2D\u57CE\u5E02\u6570\u636E\u7684\u83B7\u53D6, \u52A0\u8F7D\u8FC7\u7A0B\u7684\u63D0\u793A\u6548\u679C</p><p>\u793A\u4F8B\u5982\u4E0B: <img src="'+p+`" alt=""></p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u83B7\u53D6\u57CE\u5E02\u6570\u636E\u5E76\u6DFB\u52A0\u7F13\u5B58</li><li>\u6DFB\u52A0\u52A0\u8F7D\u7B49\u5F85\u63D0\u793A\u7684\u7ED3\u6784\u548C\u6837\u5F0F</li><li>\u4F18\u5316 loading \u56FE\u7247\u5C55\u793A\u6548\u679C</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u83B7\u53D6\u57CE\u5E02\u6570\u636E\u5E76\u6DFB\u52A0\u7F13\u5B58</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onClickOutside <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vueuse/core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u7528\u4E8E\u5B58\u50A8\u57CE\u5E02\u6570\u636E</span>
<span class="token keyword">const</span> cityData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u663E\u793A\u4E0B\u62C9\u83DC\u5355</span>
<span class="token keyword">const</span> <span class="token function-variable function">show</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u83B7\u53D6\u57CE\u5E02\u6570\u636E</span>
  <span class="token function">getCityData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
    <span class="token comment">/* \u5B58\u50A8\u57CE\u5E02\u6570\u636E*/</span> cityData<span class="token punctuation">.</span>value <span class="token operator">=</span> data<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u663E\u793A\u4E0B\u62C9\u83DC\u5355</span>
      visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token comment">// \u5728 window \u5BF9\u8C61\u4E2D\u7F13\u5B58\u57CE\u5E02\u6570\u636E</span>
window<span class="token punctuation">.</span>cityData <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token comment">// \u83B7\u53D6\u57CE\u5E02\u6570\u636E</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getCityData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5982\u679Cwindow\u5BF9\u8C61\u4E2D\u5DF2\u7ECF\u7F13\u5B58\u4E86\u57CE\u5E02\u6570\u636E, \u4ECE window \u5BF9\u8C61\u4E2D\u83B7\u53D6\u57CE\u5E02\u6570\u636E</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>cityData<span class="token punctuation">)</span> <span class="token keyword">return</span> window<span class="token punctuation">.</span>cityData<span class="token punctuation">;</span>
  <span class="token comment">// window \u5BF9\u8C61\u4E2D\u6CA1\u6709\u57CE\u5E02\u6570\u636E, \u5411\u670D\u52A1\u5668\u7AEF\u53D1\u9001\u8BF7\u6C42\u83B7\u53D6\u57CE\u5E02\u6570\u636E</span>
  <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>
    <span class="token string">&quot;https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json&quot;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5C06\u57CE\u5E02\u6570\u636E\u7F13\u5B58\u5230 window \u5BF9\u8C61\u4E2D, \u5E76\u4F5C\u4E3A\u5F53\u524D\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>cityData <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u6CE8\u610F: \u5728\u7F51\u901F\u6BD4\u8F83\u6162\u7684\u60C5\u51B5\u4E0B, \u7B2C\u4E00\u6B21\u6253\u5F00\u57CE\u5E02\u7EC4\u4EF6\u7684\u4E0B\u62C9\u83DC\u5355\u65F6\u4F1A\u6709\u7A7A\u767D, \u56E0\u4E3A\u57CE\u5E02\u6570\u636E\u662F\u5728\u6253\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u4E00\u77AC\u95F4\u5411\u670D\u52A1\u5668\u7AEF\u8BF7\u6C42\u7684, \u6709\u5EF6\u8FDF, \u6240\u4EE5\u9020\u6210\u4E86\u7A7A\u767D, \u7528\u6237\u4F53\u9A8C\u4E0D\u597D.</p><ul><li><strong>Step.2\uFF1A\u6DFB\u52A0\u52A0\u8F7D\u7B49\u5F85\u63D0\u793A\u7684\u7ED3\u6784\u548C\u6837\u5F0F</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cityData<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ellipsis<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in 24<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5317\u4EAC\u5E02<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-css line-numbers-mode"><pre><code><span class="token selector">.xtx-city .option .loading</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 290px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>@/assets/images/loading.gif<span class="token punctuation">)</span></span> no-repeat center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u867D\u7136\u4EE5\u4E0A\u4EE3\u7801\u5B9E\u73B0\u4E86\u52A0\u8F7D\u8FC7\u7A0B\u7684 loading \u63D0\u793A, \u4F46\u662F loading \u56FE\u7247\u4E5F\u662F\u5728\u8C03\u7528 show \u65B9\u6CD5\u65F6\u52A8\u6001\u8BF7\u6C42\u7684, \u6240\u4EE5 loading \u56FE\u7247\u5E76\u4E0D\u80FD\u7ACB\u5373\u663E\u793A.</p><ul><li><strong>Step.3\uFF1A\u4F18\u5316 loading \u56FE\u7247\u5C55\u793A\u6548\u679C</strong></li></ul><p>\u5C06\u5E94\u7528\u4E2D\u5C0F\u4E8E 10kb \u7684\u56FE\u7247\u6253\u5305\u4E3A base64 \u7F16\u7801\u683C\u5F0F, \u8FD9\u6837 loading \u56FE\u7247\u5C31\u53EF\u4EE5\u968F\u6837\u5F0F\u4E00\u8D77\u52A0\u8F7D, \u5F53\u8C03\u7528 show \u65B9\u6CD5\u65F6, \u5B83\u5C31\u53EF\u4EE5\u7ACB\u5373\u663E\u793A\u4E86.</p><p>\u5728 img \u6807\u7B7E\u7684 src \u5C5E\u6027\u4E2D\u5982\u679C\u586B\u5199\u7684\u662F\u56FE\u7247\u7684\u5916\u94FE\u5730\u5740, \u90A3\u4E48\u5F53\u4EE3\u7801\u6267\u884C\u5230 img \u6807\u7B7E\u7684\u65F6\u5019, \u6D4F\u89C8\u5668\u4F1A\u52A8\u6001\u5411\u670D\u52A1\u5668\u7AEF\u53D1\u9001\u8BF7\u6C42\u83B7\u53D6\u56FE\u7247\u8D44\u6E90\u672C\u8EAB, \u56FE\u7247\u8D44\u6E90\u83B7\u53D6\u5B8C\u6210\u4E4B\u540E\u624D\u80FD\u663E\u793A\u3002</p><p>\u5982\u679C\u5728 img \u6807\u7B7E\u7684 src \u5C5E\u6027\u4E2D\u586B\u5199\u7684\u662F\u56FE\u7247\u7684 base64 \u7F16\u7801, \u90A3\u4E48\u76F8\u5F53\u4E8E\u5C06\u56FE\u7247\u8D44\u6E90\u672C\u8EAB\u5D4C\u5165\u4E86 html \u6587\u4EF6\u4E2D, \u5F53\u6D4F\u89C8\u5668\u89E3\u6790\u5230 img \u6807\u7B7E\u65F6, \u56FE\u7247\u4F1A\u7ACB\u5373\u663E\u793A, \u56E0\u4E3A\u56FE\u7247\u8D44\u6E90\u672C\u8EAB\u5DF2\u7ECF\u5B58\u5728\u4E86.</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A <a href="https://cn.vitejs.dev/guide/assets.html" target="_blank" rel="noopener noreferrer">https://cn.vitejs.dev/guide/assets.html</a></p></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),c=[o];function l(u,i,r,k,m,b){return a(),s("div",null,c)}var v=n(e,[["render",l]]);export{g as __pageData,v as default};