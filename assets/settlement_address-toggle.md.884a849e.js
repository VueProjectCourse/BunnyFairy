import{_ as n,c as s,o as a,a as t}from"./app.ba9c527d.js";var p="/BunnyFairy/assets/68.f726cdfa.png";const d='{"title":"\u7ED3\u7B97-\u6536\u8D27\u5730\u5740-\u5207\u6362","description":"","frontmatter":{},"headers":[],"relativePath":"settlement/address-toggle.md"}',e={},o=t('<h1 id="\u7ED3\u7B97-\u6536\u8D27\u5730\u5740-\u5207\u6362" tabindex="-1">\u7ED3\u7B97-\u6536\u8D27\u5730\u5740-\u5207\u6362 <a class="header-anchor" href="#\u7ED3\u7B97-\u6536\u8D27\u5730\u5740-\u5207\u6362" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">Object</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5B9E\u73B0\u5207\u6362\u6536\u8D27\u5730\u5740\u529F\u80FD</p><p>\u793A\u4F8B\u5982\u4E0B: <img src="'+p+`" alt=""></p></div><div class="warning custom-block"><p class="custom-block-title">Path</p><ol><li>\u521B\u5EFA\u5207\u6362\u6536\u8D27\u5730\u5740\u7EC4\u4EF6, \u5B9E\u73B0\u57FA\u7840\u5E03\u5C40</li><li>\u5728\u6536\u8D27\u5730\u5740\u7EC4\u4EF6\u4E2D\u8C03\u7528\u5207\u6362\u6536\u8D27\u5730\u5740\u7EC4\u4EF6\u3001\u70B9\u51FB\u5207\u6362\u6536\u8D27\u5730\u5740\u6309\u94AE\u6E32\u67D3\u5207\u6362\u6536\u8D27\u5730\u5740\u7EC4\u4EF6</li><li>\u5B9E\u73B0\u5207\u6362\u6536\u8D27\u5730\u5740\u529F\u80FD, \u5C06\u7528\u6237\u9009\u62E9\u7684\u6536\u8D27\u5730\u5740\u7684ID\u901A\u8FC7\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u4F20\u9012\u5230\u7236\u7EC4\u4EF6</li><li>\u5728\u5207\u6362\u6536\u8D27\u5730\u5740\u5217\u8868\u4E2D\u4E3A\u5F53\u524D\u9009\u4E2D\u7684\u6536\u8D27\u5730\u5740\u6DFB\u52A0\u9AD8\u4EAE\u6548\u679C</li></ol></div><div class="info custom-block"><p class="custom-block-title">Experience</p><ul><li><strong>Step.1\uFF1A\u521B\u5EFA\u5207\u6362\u6536\u8D27\u5730\u5740\u7EC4\u4EF6, \u5B9E\u73B0\u57FA\u7840\u5E03\u5C40</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token comment">&lt;!-- AddressSwitch.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
 <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XtxDialog</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u66F4\u6362\u6536\u8D27\u5730\u5740<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>address-switch<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>\u6536<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token punctuation">/&gt;</span></span>\u8D27<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token punctuation">/&gt;</span></span>\u4EBA\uFF1A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>{{ item.receiver }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>\u8054\u7CFB\u65B9\u5F0F\uFF1A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>{{ item.contact }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>\u6536\u8D27\u5730\u5740\uFF1A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>{{ item.fullLocation + item.address }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>footer</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XtxButton</span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible = false<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
        <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span>
        <span class="token punctuation">&gt;</span></span>\u53D6\u6D88<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>XtxButton</span>
      <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>XtxDialog</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><div class="language-css line-numbers-mode"><pre><code><span class="token selector">.address-switch</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 478px<span class="token punctuation">;</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.xtx-dialog .text</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 90px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.xtx-dialog .text.item</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #f5f5f5<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.xtx-dialog .text.item.active,
.xtx-dialog .text.item:hover</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #27BA9B<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #e6faf6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.xtx-dialog .text.item &gt; ul</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ul><li><strong>Step.2\uFF1A\u5728\u6536\u8D27\u5730\u5740\u7EC4\u4EF6\u4E2D\u8C03\u7528\u5207\u6362\u6536\u8D27\u5730\u5740\u7EC4\u4EF6\u3001\u70B9\u51FB\u5207\u6362\u6536\u8D27\u5730\u5740\u6309\u94AE\u6E32\u67D3\u5207\u6362\u6536\u8D27\u5730\u5740\u7EC4\u4EF6</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token comment">&lt;!-- AddressCheckout.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// \u7528\u4E8E\u5B58\u50A8\u5207\u6362\u6536\u8D27\u5730\u5740\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61</span>
    <span class="token keyword">const</span> addressSwitchInstance <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u83B7\u53D6\u6536\u8D27\u5730\u5740\u5217\u8868</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> addresses <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getAddresses</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5207\u6362\u6536\u8D27\u5730\u5740</span>
    <span class="token keyword">const</span> <span class="token function-variable function">switchAddress</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      addressSwitchInstance<span class="token punctuation">.</span>value<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-html line-numbers-mode"><pre><code><span class="token comment">&lt;!-- AddressCheckout.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XtxButton</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>switchAddress<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5207\u6362\u5730\u5740<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>XtxButton</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AddressSwitch</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addressSwitchInstance<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addresses<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><strong>Step.3\uFF1A\u5B9E\u73B0\u5207\u6362\u6536\u8D27\u5730\u5740\u529F\u80FD, \u5C06\u7528\u6237\u9009\u62E9\u7684\u6536\u8D27\u5730\u5740\u7684ID\u901A\u8FC7\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u4F20\u9012\u5230\u7236\u7EC4\u4EF6</strong></li></ul><div class="language-html line-numbers-mode"><pre><code><span class="token comment">&lt;!-- AddressSwitch.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onAddressSwitchHandler(item.id)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">onAddressSwitchHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u901A\u8FC7\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u5C06\u7528\u6237\u9009\u62E9\u7684\u6536\u8D27\u5730\u5740ID\u4F20\u9012\u5230\u7236\u7EC4\u4EF6</span>
  <span class="token comment">// \u7236\u7EC4\u4EF6\u4F1A\u6839\u636E\u6536\u8D27\u5730\u5740ID\u67E5\u627E\u6536\u8D27\u5730\u5740\u5E76\u4F18\u5148\u6E32\u67D3\u7528\u6237\u9009\u62E9\u7684\u6536\u8D27\u5730\u5740</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;onAddressChanged&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5173\u95ED\u5BF9\u8BDD\u6846</span>
  visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><strong>Step.4\uFF1A\u5728\u5207\u6362\u6536\u8D27\u5730\u5740\u5217\u8868\u4E2D\u4E3A\u5F53\u524D\u9009\u4E2D\u7684\u6536\u8D27\u5730\u5740\u6DFB\u52A0\u9AD8\u4EAE\u6548\u679C</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token operator">&lt;</span>AddressSwitch <span class="token operator">:</span>activeAddressId<span class="token operator">=</span><span class="token string">&quot;finalAddress?.id&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">activeAddressId</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
     <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ active: item.id === activeAddressId }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div></div><div class="danger custom-block"><p class="custom-block-title">Note</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),c=[o];function l(u,i,r,k,b,m){return a(),s("div",null,c)}var v=n(e,[["render",l]]);export{d as __pageData,v as default};