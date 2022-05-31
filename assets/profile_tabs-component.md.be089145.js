import{_ as n,c as s,o as a,a as p}from"./app.ba9c527d.js";const g='{"title":"\u5C01\u88C5Tabs\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[],"relativePath":"profile/tabs-component.md"}',t={},e=p(`<h1 id="\u5C01\u88C5tabs\u7EC4\u4EF6" tabindex="-1">\u5C01\u88C5Tabs\u7EC4\u4EF6 <a class="header-anchor" href="#\u5C01\u88C5tabs\u7EC4\u4EF6" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">Object</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5C01\u88C5\u9009\u9879\u5361\u529F\u80FD\u7EC4\u4EF6</p></div><div class="warning custom-block"><p class="custom-block-title">Path</p><ol><li>\u521B\u5EFA\u9009\u9879\u5361\u6807\u9898\u7EC4\u4EF6</li><li>\u521B\u5EFA\u9009\u9879\u5361\u5185\u5BB9\u7EC4\u4EF6</li><li>\u521B\u5EFA\u9009\u9879\u5361\u7EC4\u4EF6</li><li>\u9009\u9879\u5361\u7EC4\u4EF6\u5347\u7EA7, \u652F\u6301\u7EC4\u4EF6\u6807\u9898\u548C\u7EC4\u4EF6\u5185\u5BB9\u7684\u52A8\u6001\u6E32\u67D3</li></ol></div><div class="info custom-block"><p class="custom-block-title">Experience</p><ul><li><strong>Step.1\uFF1A\u521B\u5EFA\u9009\u9879\u5361\u6807\u9898\u7EC4\u4EF6</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token comment">&lt;!-- TabTitle \u7EC4\u4EF6: \u7528\u4E8E\u5411 XtxTabs \u7EC4\u4EF6\u4F20\u9012\u9009\u9879\u5361\u6807\u9898 --&gt;</span>
<span class="token comment">&lt;!-- TabTitle --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><strong>Step.2\uFF1A\u521B\u5EFA\u9009\u9879\u5361\u5185\u5BB9\u7EC4\u4EF6</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token comment">&lt;!-- TabContent --&gt;</span>
<span class="token comment">&lt;!-- TabContent \u7EC4\u4EF6: \u7528\u4E8E\u5411 XtxTabs \u7EC4\u4EF6\u4F20\u9012\u9009\u9879\u5361\u5185\u5BB9 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><strong>Step.3\uFF1A\u521B\u5EFA\u9009\u9879\u5361\u7EC4\u4EF6</strong></li></ul><p>Tabs \u7EC4\u4EF6: \u7528\u4E8E\u6536\u96C6\u9009\u9879\u5361\u7684\u6807\u9898\u548C\u5185\u5BB9, \u6839\u636E\u6807\u9898\u548C\u5185\u5BB9\u6E32\u67D3\u9009\u9879\u5361\u754C\u9762, \u5B9E\u73B0\u9009\u9879\u5361\u7684\u5207\u6362\u903B\u8F91</p><div class="language-html line-numbers-mode"><pre><code><span class="token comment">&lt;!-- \u9759\u6001\u7ED3\u6784\u548C\u6837\u5F0F --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xtx-tabs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript:<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6807\u9898\u4E00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript:<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6807\u9898\u4E8C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\u5185\u5BB9\u4E00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\u5185\u5BB9\u4E8C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* tab\u7EC4\u4EF6 */</span>
<span class="token selector">.xtx-tabs</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.xtx-tabs &gt; nav</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #f5f5f5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.xtx-tabs &gt; nav &gt; a</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 110px<span class="token punctuation">;</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> 1px solid #f5f5f5<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.xtx-tabs &gt; nav &gt; a.active</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 2px solid #27BA9B<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.xtx-tabs &gt; div</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.xtx-tabs &gt; div.active</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><ul><li><strong>Step.4\uFF1A\u9009\u9879\u5361\u7EC4\u4EF6\u5347\u7EA7, \u652F\u6301\u7EC4\u4EF6\u6807\u9898\u548C\u7EC4\u4EF6\u5185\u5BB9\u7684\u52A8\u6001\u6E32\u67D3</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token comment">&lt;!-- \u6D4B\u8BD5\u8C03\u7528\u4EE3\u7801 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XtxTabs</span> <span class="token attr-name"><span class="token namespace">v-model:</span>active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XtxTabTitle</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in tabsData<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{item.title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>XtxTabTitle</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XtxTabTitle</span><span class="token punctuation">&gt;</span></span>\u6D4B\u8BD5\u6807\u9898\u4E09<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>XtxTabTitle</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XtxTabContent</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in tabsData<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{item.content}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>XtxTabContent</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XtxTabContent</span><span class="token punctuation">&gt;</span></span>\u6D4B\u8BD5\u5185\u5BB9\u4E09<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>XtxTabContent</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>XtxTabs</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">const</span> tabsData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u9009\u9879\u5361\u6807\u9898\u4E00&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u9009\u9879\u5361\u5185\u5BB9\u4E00&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u9009\u9879\u5361\u6807\u9898\u4E8C&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;\u9009\u9879\u5361\u5185\u5BB9\u4E8C&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>useVModel<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vueuse/core&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;active&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;update:active&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span>slots<span class="token punctuation">,</span>emit<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token comment">// \u83B7\u53D6\u63D2\u69FD\u5185\u5BB9</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
     <span class="token keyword">const</span> defaults <span class="token operator">=</span> slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token comment">// \u7528\u4E8E\u5B58\u50A8\u9009\u9879\u5361\u6807\u9898</span>
     <span class="token keyword">const</span> titles <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
     <span class="token comment">// \u7528\u4E8E\u5B58\u50A8\u9009\u9879\u5361\u5185\u5BB9</span>
     <span class="token keyword">const</span> contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


     <span class="token comment">// \u6536\u96C6\u9009\u9879\u5361\u6807\u9898\u548C\u5185\u5BB9</span>
    defaults<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> item<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&quot;symbol&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>props<span class="token punctuation">.</span>title<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            titles<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>props<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            contents<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>props<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


  <span class="token comment">// \u9009\u9879\u5361\u7D22\u5F15</span>
  <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token function">useVModel</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">&quot;active&quot;</span><span class="token punctuation">,</span> emit<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onTabTitleClickHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    index<span class="token punctuation">.</span>value <span class="token operator">=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;xtx-tabs&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>nav<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>
          titles<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>a
            className<span class="token operator">=</span><span class="token punctuation">{</span>i <span class="token operator">===</span> index<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token string">&quot;active&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">}</span>
            href<span class="token operator">=</span><span class="token string">&quot;javascript:&quot;</span>
            onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">onTabTitleClickHandler</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&gt;</span>
              <span class="token punctuation">{</span>item<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>contents<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>i <span class="token operator">===</span> index<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token string">&quot;active&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div></div><div class="danger custom-block"><p class="custom-block-title">Note</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),o=[e];function c(l,u,i,r,k,b){return a(),s("div",null,o)}var d=n(t,[["render",c]]);export{g as __pageData,d as default};
