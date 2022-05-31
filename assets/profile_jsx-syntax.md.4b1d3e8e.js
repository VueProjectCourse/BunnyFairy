import{_ as n,c as s,o as a,a as p}from"./app.ba9c527d.js";const g='{"title":"\u5728 vue \u4E2D\u4F7F\u7528 JSX","description":"","frontmatter":{},"headers":[],"relativePath":"profile/jsx-syntax.md"}',t={},o=p(`<h1 id="\u5728-vue-\u4E2D\u4F7F\u7528-jsx" tabindex="-1">\u5728 vue \u4E2D\u4F7F\u7528 JSX <a class="header-anchor" href="#\u5728-vue-\u4E2D\u4F7F\u7528-jsx" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">Object</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F \u638C\u63E1\u5982\u4F55\u5728 Vue \u4E2D\u4F7F\u7528 JSX \u8BED\u6CD5</p></div><div class="warning custom-block"><p class="custom-block-title">Path</p><ol><li>\u6570\u636E\u7ED1\u5B9A</li><li>\u4E8B\u4EF6\u7ED1\u5B9A</li><li>\u7C7B\u540D\u7ED1\u5B9A</li><li>\u904D\u5386\u8BED\u6CD5</li><li>\u53CC\u5411\u6570\u636E\u7ED1\u5B9A</li></ol></div><div class="info custom-block"><p class="custom-block-title">Experience</p><p>\u793A\u4F8B:</p><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LearnJSXChild <span class="token keyword">from</span> <span class="token string">&quot;@/test/LearnJSXChild&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;LearnJSX&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> LearnJSXChild <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6D4B\u8BD5\u6570\u636E\u7ED1\u5B9A</span>
    <span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6D4B\u8BD5\u4E8B\u4EF6\u7ED1\u5B9A</span>
    <span class="token keyword">const</span> <span class="token function-variable function">onClickHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      person<span class="token punctuation">.</span>value<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6D4B\u8BD5\u7C7B\u540D\u7ED1\u5B9A</span>
    <span class="token keyword">const</span> activeClassName <span class="token operator">=</span> <span class="token string">&quot;active&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6D4B\u8BD5\u904D\u5386\u8BED\u6CD5</span>
    <span class="token keyword">const</span> hobbies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;\u8DB3\u7403&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7BEE\u7403&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6A44\u6984\u7403&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6D4B\u8BD5 JSX</span>
    <span class="token keyword">const</span> paragraph <span class="token operator">=</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>i am a paragraph<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6D4B\u8BD5\u53CC\u5411\u6570\u636E\u7ED1\u5B9A (input \u7ED1\u5B9A\u7684\u6570\u636E)</span>
    <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6D4B\u8BD5\u53CC\u5411\u6570\u636E\u7ED1\u5B9A ( html -&gt; js)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">onChangedHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      text<span class="token punctuation">.</span>value <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6D4B\u8BD5\u53CC\u5411\u6570\u636E\u7ED1\u5B9A ( js -&gt; html)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">onTextChanged</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      text<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;hello i am another text&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>span onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClickHandler<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>person<span class="token punctuation">.</span>value<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token punctuation">{</span>activeClassName<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>person<span class="token punctuation">.</span>value<span class="token punctuation">.</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>hobbies<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">hobby</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token punctuation">{</span>hobby<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
            <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
          <span class="token punctuation">{</span>paragraph<span class="token punctuation">}</span>
          <span class="token punctuation">{</span><span class="token comment">/* \u6D4B\u8BD5 this \u6307\u5411 */</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span>button
            onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">&gt;</span>
            show message
          <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> value<span class="token operator">=</span><span class="token punctuation">{</span>text<span class="token punctuation">.</span>value<span class="token punctuation">}</span> onInput<span class="token operator">=</span><span class="token punctuation">{</span>onChangedHandler<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>text<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>onTextChanged<span class="token punctuation">}</span><span class="token operator">&gt;</span>change text<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>LearnJSXChild onClickHandler<span class="token operator">=</span><span class="token punctuation">{</span>onClickHandler<span class="token punctuation">}</span> msg<span class="token operator">=</span><span class="token punctuation">{</span>person<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token operator">&gt;</span>
            \u6211\u662FLearnJSXChild\u7EC4\u4EF6\u6807\u8BB0\u4E2D\u95F4\u7684\u5185\u5BB9
          <span class="token operator">&lt;</span><span class="token operator">/</span>LearnJSXChild<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;LearnJSXChild&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;onClickHandler&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\u6211\u662FLearnJSXChild\u7EC4\u4EF6<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>props<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>name<span class="token punctuation">}</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>age<span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>onClickHandler<span class="token punctuation">}</span><span class="token operator">&gt;</span>button<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></div>`,4),e=[o];function c(l,r,u,k,i,b){return a(),s("div",null,e)}var d=n(t,[["render",c]]);export{g as __pageData,d as default};