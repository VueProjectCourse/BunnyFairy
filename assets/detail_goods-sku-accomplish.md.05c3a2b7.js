import{_ as n,c as s,o as a,a as p}from"./app.ba9c527d.js";const d='{"title":"\u89C4\u683C\u7EC4\u4EF6-\u7981\u7528\u6548\u679C\u5B9E\u73B0","description":"","frontmatter":{},"headers":[],"relativePath":"detail/goods-sku-accomplish.md"}',t={},e=p(`<h1 id="\u89C4\u683C\u7EC4\u4EF6-\u7981\u7528\u6548\u679C\u5B9E\u73B0" tabindex="-1">\u89C4\u683C\u7EC4\u4EF6-\u7981\u7528\u6548\u679C\u5B9E\u73B0 <a class="header-anchor" href="#\u89C4\u683C\u7EC4\u4EF6-\u7981\u7528\u6548\u679C\u5B9E\u73B0" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5B9E\u73B0\u89C4\u683C\u9009\u9879\u7684\u7981\u7528\u6548\u679C</p><p>\u89C4\u683C\u7EC4\u4EF6\u6D4B\u8BD5\u5546\u54C1: <code>/goods/1369155859933827074</code> \u63A5\u53E3: <code>https://apipc-xiaotuxian-front.itheima.net</code></p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u521B\u5EFA\u89C4\u683C\u67E5\u8BE2\u5BF9\u8C61</li><li>\u5B9E\u73B0\u89C4\u683C\u6309\u94AE\u7684\u7981\u9009\u6548\u679C\uFF08\u521D\u59CB\u5316\uFF09</li><li>\u5B9E\u73B0\u89C4\u683C\u6309\u94AE\u7684\u7981\u9009\u6548\u679C (\u7528\u6237\u9009\u62E9)</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u521B\u5EFA\u89C4\u683C\u67E5\u8BE2\u5BF9\u8C61</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u5904\u7406\u89C4\u683C\u5339\u914D</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useSpecPathMap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7528\u4E8E\u5B58\u50A8\u6700\u7EC8\u7684\u89C4\u683C\u67E5\u8BE2\u5BF9\u8C61</span>
  <span class="token keyword">const</span> pathMap <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// skus</span>
  <span class="token keyword">const</span> <span class="token function-variable function">setPathMap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">skus</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    skus<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">sku</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(sku);</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>sku<span class="token punctuation">.</span>inventory <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// console.log(sku);</span>
        <span class="token comment">// \u5C06\u53EF\u7EC4\u5408\u7684\u89C4\u683C\u540D\u79F0\u4E34\u65F6\u5B58\u4E00\u4EFD\u5230\u6570\u7EC4\u4E2D</span>
        <span class="token keyword">const</span> valueNames <span class="token operator">=</span> sku<span class="token punctuation">.</span>specs<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">spec</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> spec<span class="token punctuation">.</span>valueName<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> max <span class="token operator">=</span> valueNames<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">// console.log(max);</span>
        <span class="token comment">// console.log(valueNames);</span>
        <span class="token comment">// \u83B7\u53D6\u5F53\u524D\u5546\u54C1\u7684\u89C4\u683C\u6570\u91CF\uFF0C\u540E\u9762\u5C06\u7528\u4E8E\u5224\u65AD\u67D0\u4E2A\u89C4\u683C\u662F\u5426\u662F\u5B8C\u6574\u7684</span>
        <span class="token comment">// \u83B7\u53D6\u89C4\u683C\u96C6\u5408\u7684\u5B50\u96C6\u7EC4\u5408</span>
        <span class="token keyword">const</span> sets <span class="token operator">=</span> <span class="token function">powerSet</span><span class="token punctuation">(</span>valueNames<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// console.log(sets);</span>
        <span class="token comment">// \u904D\u5386\u89C4\u683C\u5B50\u96C6\u7EC4\u5408</span>
        sets<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">set</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// console.log(set);</span>
          <span class="token comment">// \u5C06\u89C4\u683C\u540D\u79F0\u4EE5_\u8FDB\u884C\u62FC\u63A5</span>
          <span class="token keyword">const</span> key <span class="token operator">=</span> set<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// console.log(key);</span>
          <span class="token comment">// \u5224\u65AD\u5F53\u524D\u89C4\u683C\u662F\u5426\u662F\u5B8C\u6574\u7684</span>
          <span class="token comment">// console.log(set.length);</span>
          <span class="token keyword">const</span> isCompleteSku <span class="token operator">=</span> set<span class="token punctuation">.</span>length <span class="token operator">===</span> max<span class="token punctuation">;</span>

          <span class="token comment">// \u5224\u65AD\u89C4\u683C\u67E5\u8BE2\u5BF9\u8C61\u4E2D\u662F\u5426\u5DF2\u7ECF\u5B58\u50A8\u4E86\u5F53\u524D\u89C4\u683C</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> pathMap<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>isCompleteSku<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              pathMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> sku<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              pathMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> pathMap<span class="token punctuation">,</span> setPathMap <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><ul><li><strong>Step.2\uFF1A\u5B9E\u73B0\u89C4\u683C\u6309\u94AE\u7684\u7981\u9009\u6548\u679C\uFF08\u521D\u59CB\u5316\uFF09</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u5904\u7406\u89C4\u683C\u7981\u7528</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useSpecDisabled</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">setUserSelected</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">setSpecDisabled</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">specs<span class="token punctuation">,</span> pathMap</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u904D\u5386\u89C4\u683C\u6570\u7EC4</span>
    specs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">spec<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4E3A\u4EC0\u4E48\u8981\u5728\u6B64\u5904\u83B7\u53D6\u7528\u6237\u9009\u62E9\u7684\u89C4\u683C?</span>
      <span class="token comment">// \u5728\u6BCF\u4E00\u8F6E\u89C4\u683C\u5339\u914D\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4E0B\u9762\u7684\u5FAA\u73AF\u90FD\u4F1A\u5411\u6570\u7EC4\u4E2D\u52A8\u6001\u6DFB\u52A0\u503C</span>
      <span class="token keyword">const</span> selected <span class="token operator">=</span> <span class="token function">setUserSelected</span><span class="token punctuation">(</span>specs<span class="token punctuation">)</span><span class="token punctuation">;</span>

      spec<span class="token punctuation">.</span>values<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>selected<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        selected<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">.</span>name<span class="token punctuation">;</span>

        <span class="token comment">// \u9519\u8BEF\u4EE3\u7801</span>
        <span class="token comment">// const key = selected.filter((item) =&gt; item.join(&quot;_&quot;));</span>
        <span class="token comment">// \u6B63\u786E\u4EE3\u7801</span>
        <span class="token keyword">const</span> key <span class="token operator">=</span> selected<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        value<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> pathMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> setSpecDisabled <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>goods-sku<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>spec in specs<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>spec.name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>{{ spec.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value in spec.values<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value.name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
            <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value.picture<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value.picture<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
              setSpecSelect(spec, value);
              setSpecDisabled(props.specs, pathMap);
              // setSelectedToParent(props.specs, props.skus, emit, pathMap);
            <span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ selected: value.selected, disabled: value.disabled }<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
              setSpecSelect(spec, value);
              setSpecDisabled(props.specs, pathMap);
              // setSelectedToParent(props.specs, props.skus, emit, pathMap);
            <span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ selected: value.selected, disabled: value.disabled }<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">v-else</span>
            <span class="token punctuation">&gt;</span></span>{{ value.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span>
          <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><ul><li><strong>Step.3\uFF1A\u5B9E\u73B0\u89C4\u683C\u6309\u94AE\u7684\u7981\u9009\u6548\u679C (\u7528\u6237\u9009\u62E9)</strong></li></ul><div class="language-js line-numbers-mode"><pre><code> <span class="token comment">// \u7528\u4E8E\u5B58\u50A8\u7528\u6237\u9009\u62E9\u7684\u89C4\u683C</span>

  <span class="token keyword">const</span> <span class="token function-variable function">setUserSelected</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">specs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    specs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">spec<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5728\u5F53\u524D\u89C4\u683C\u4E2D\u67E5\u627E\u7528\u6237\u9009\u62E9\u7684\u89C4\u683C</span>
      <span class="token keyword">const</span> selected <span class="token operator">=</span> spec<span class="token punctuation">.</span>values<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value<span class="token punctuation">.</span>selected<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// \u5982\u679C\u627E\u5230\u4E86</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>selected<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u628A\u8BE5\u89C4\u683C\u653E\u5728\u5B83\u81EA\u5DF1\u7684\u4F4D\u7F6E\u4E0A</span>
        result<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> selected<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),c=[e];function o(l,u,i,r,k,b){return a(),s("div",null,c)}var g=n(t,[["render",o]]);export{d as __pageData,g as default};