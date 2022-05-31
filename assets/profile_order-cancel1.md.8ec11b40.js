import{_ as n,c as s,o as a,a as p}from"./app.ba9c527d.js";const d='{"title":"\u8BA2\u5355\u7BA1\u7406-\u53D6\u6D88\u8BA2\u5355(1)","description":"","frontmatter":{},"headers":[],"relativePath":"profile/order-cancel1.md"}',t={},e=p(`<h1 id="\u8BA2\u5355\u7BA1\u7406-\u53D6\u6D88\u8BA2\u5355-1" tabindex="-1">\u8BA2\u5355\u7BA1\u7406-\u53D6\u6D88\u8BA2\u5355(1) <a class="header-anchor" href="#\u8BA2\u5355\u7BA1\u7406-\u53D6\u6D88\u8BA2\u5355-1" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">Object</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5B9E\u73B0\u70B9\u51FB\u53D6\u6D88\u8BA2\u5355\u6309\u94AE\u5F39\u51FA\u9009\u62E9\u53D6\u6D88\u539F\u56E0\u7684\u5F39\u51FA\u6846</p></div><div class="warning custom-block"><p class="custom-block-title">Path</p><ol><li>\u521B\u5EFA\u53D6\u6D88\u8BA2\u5355\u5F39\u6846\u7EC4\u4EF6, \u5B9E\u73B0\u57FA\u7840\u5E03\u5C40</li><li>\u5728\u8BA2\u5355\u5217\u8868\u7EC4\u4EF6\u4E2D\u8C03\u7528\u53D6\u6D88\u8BA2\u5355\u5F39\u6846\u7EC4\u4EF6</li><li>\u5728\u53D6\u6D88\u8BA2\u5355\u5F39\u6846\u4E2D\u6E32\u67D3\u53D6\u6D88\u539F\u56E0\u5217\u8868</li><li>\u70B9\u51FB\u5F39\u6846\u7EC4\u4EF6\u4E2D\u7684\u53D6\u6D88\u6309\u94AE\u65F6, \u9690\u85CF\u5F39\u6846</li><li>\u70B9\u51FB\u53D6\u6D88\u8BA2\u5355\u6309\u94AE\u6E32\u67D3\u53D6\u6D88\u5F39\u6846\u7EC4\u4EF6</li><li>\u5728\u8BA2\u5355\u5217\u8868\u9875\u9762\u7EC4\u4EF6\u4E2D\u63A5\u6536\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u4EE5\u6E32\u67D3\u5F39\u5C42</li></ol></div><div class="info custom-block"><p class="custom-block-title">Experience</p><ul><li><strong>Step.1\uFF1A\u521B\u5EFA\u53D6\u6D88\u8BA2\u5355\u5F39\u6846\u7EC4\u4EF6, \u5B9E\u73B0\u57FA\u7840\u5E03\u5C40</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XtxDialog</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u53D6\u6D88\u8BA2\u5355<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u7EC4\u4EF6\u5185\u5BB9 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cancel-info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u53D6\u6D88\u8BA2\u5355\u540E\uFF0C\u672C\u5355\u4EAB\u6709\u7684\u4F18\u60E0\u53EF\u80FD\u4F1A\u4E00\u5E76\u53D6\u6D88\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tip<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8BF7\u9009\u62E9\u53D6\u6D88\u8BA2\u5355\u7684\u539F\u56E0\uFF08\u5FC5\u9009\uFF09\uFF1A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">&gt;</span></span>\u53D6\u6D88\u539F\u56E0\u6587\u5B57<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u6309\u94AE\u64CD\u4F5C --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XtxButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gray<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\u53D6\u6D88<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>XtxButton</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XtxButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u786E\u8BA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>XtxButton</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>XtxDialog</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;CancelOrder&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7528\u4E8E\u63A7\u5236\u5F39\u6846\u662F\u5426\u663E\u793A</span>
    <span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> visible <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.xtx-dialog :deep(.wrapper)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 620px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.cancel-info</span> <span class="token punctuation">{</span>
  <span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
    <span class="token selector">&amp;.tip</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.btn</span> <span class="token punctuation">{</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> 21px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
    <span class="token selector">a</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 45px<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 45px<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #e4e4e4<span class="token punctuation">;</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
      <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
      <span class="token selector">&amp;:nth-child(2n)</span> <span class="token punctuation">{</span>
        <span class="token property">margin-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">&amp;:hover,
      &amp;.active</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #e3f9f4<span class="token punctuation">;</span>
        <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@xtxColor</span><span class="token punctuation">;</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><ul><li><strong>Step.2\uFF1A\u5728\u8BA2\u5355\u5217\u8868\u7EC4\u4EF6\u4E2D\u8C03\u7528\u53D6\u6D88\u8BA2\u5355\u5F39\u6846\u7EC4\u4EF6</strong></li></ul><p>\u56E0\u4E3A\u53D6\u6D88\u8BA2\u5355\u6309\u94AE\u5728 <code>orderItem</code> \u7EC4\u4EF6\u4E2D, \u5982\u679C\u5C06\u53D6\u6D88\u8BA2\u5355\u5F39\u5C42\u7EC4\u4EF6\u6E32\u67D3\u5728\u8FD9\u4E2A\u7EC4\u4EF6\u4E2D, \u90A3\u4E48\u6709\u591A\u5C11\u8BA2\u5355\u5C31\u4F1A\u6E32\u67D3\u591A\u5C11\u5F39\u5C42, \u6240\u4EE5\u6211\u4EEC\u8981\u5C06\u5F39\u5C42\u7EC4\u4EF6\u653E\u5728\u7236\u7EC4\u4EF6\u4E2D, \u5C31\u662F\u8BA2\u5355\u5217\u8868\u7EC4\u4EF6.</p><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CancelOrder</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li><strong>Step.3\uFF1A\u5728\u53D6\u6D88\u8BA2\u5355\u5F39\u6846\u4E2D\u6E32\u67D3\u53D6\u6D88\u539F\u56E0\u5217\u8868</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u53D6\u6D88\u8BA2\u5355\u7684\u539F\u56E0</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> cancelReason <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;\u914D\u9001\u4FE1\u606F\u6709\u8BEF&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;\u5546\u54C1\u4E70\u9519\u4E86&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;\u91CD\u590D\u4E0B\u5355/\u8BEF\u4E0B\u5355&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;\u5FD8\u8BB0\u4F7F\u7528\u4F18\u60E0\u5238\u3001\u5154\u5E01\u7B49&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;\u5176\u4ED6\u6E20\u9053\u4EF7\u683C\u66F4\u4F4E&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;\u4E0D\u60F3\u4E70\u4E86&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-js line-numbers-mode"><pre><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>a
      v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(reason, index) in cancelReason&quot;</span>
      <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;index&quot;</span>
      <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;{ active: reason === selected }&quot;</span>
      @click<span class="token operator">=</span><span class="token string">&quot;selected = reason&quot;</span>
  <span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> reason <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> cancelReason <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api/constants&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7528\u4E8E\u5B58\u50A8\u7528\u6237\u9009\u62E9\u7684\u539F\u56E0</span>
    <span class="token keyword">const</span> selected <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> cancelReason<span class="token punctuation">,</span> selected <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul><li><strong>Step.4\uFF1A\u70B9\u51FB\u5F39\u6846\u7EC4\u4EF6\u4E2D\u7684\u53D6\u6D88\u6309\u94AE\u65F6, \u9690\u85CF\u5F39\u6846</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XtxButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible = false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u53D6\u6D88<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>XtxButton</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li><strong>Step.5\uFF1A\u70B9\u51FB\u53D6\u6D88\u8BA2\u5355\u6309\u94AE\u6E32\u67D3\u53D6\u6D88\u5F39\u6846\u7EC4\u4EF6</strong></li></ul><p>\u7531\u4E8E\u53D6\u6D88\u8BA2\u5355\u6309\u94AE\u5728 <code>OrderItem</code> \u7EC4\u4EF6\u4E2D, \u53D6\u6D88\u8BA2\u5355\u5F39\u6846\u7EC4\u4EF6\u5728 <code>OrderListPage</code> \u7EC4\u4EF6\u4E2D, \u4ED6\u4EEC\u662F\u7236\u5B50\u5173\u7CFB, \u6240\u4EE5\u5F53\u70B9\u51FB\u53D6\u6D88\u8BA2\u5355\u6309\u94AE\u65F6, \u6211\u4EEC\u8981\u89E6\u53D1\u4E00\u4E2A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u544A\u8BC9\u8BA2\u5355\u5217\u8868\u7EC4\u4EF6\u6211\u4EEC\u70B9\u51FB\u4E86\u53D6\u6D88\u6309\u94AE.</p><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onCancelOrderButtonClickHandler(order.id)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u53D6\u6D88\u8BA2\u5355<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5F53\u7528\u6237\u70B9\u51FB\u53D6\u6D88\u8BA2\u5355\u6309\u94AE\u65F6</span>
    <span class="token keyword">const</span> <span class="token function-variable function">onCancelOrderButtonClickHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;onCancelOrder&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> onCancelOrderButtonClickHandler <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li><strong>Step.6\uFF1A\u5728\u8BA2\u5355\u5217\u8868\u9875\u9762\u7EC4\u4EF6\u4E2D\u63A5\u6536\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u4EE5\u6E32\u67D3\u5F39\u5C42</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OrderItem</span> <span class="token attr-name">@onCancelOrder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onCancelOrderHandler<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CancelOrder</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cancelOrderComponent<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7528\u4E8E\u5B58\u50A8\u53D6\u6D88\u8BA2\u5355\u5F39\u5C42\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61</span>
    <span class="token keyword">const</span> cancelOrderComponent <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5F53\u7528\u6237\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6</span>
    <span class="token keyword">const</span> <span class="token function-variable function">onCancelOrderHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6E32\u67D3\u53D6\u6D88\u8BA2\u5355\u5F39\u5C42</span>
      cancelOrderComponent<span class="token punctuation">.</span>value<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> cancelOrderComponent<span class="token punctuation">,</span> onCancelOrderHandler <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></div><div class="danger custom-block"><p class="custom-block-title">Note</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),o=[e];function c(l,u,r,i,k,b){return a(),s("div",null,o)}var g=n(t,[["render",c]]);export{d as __pageData,g as default};