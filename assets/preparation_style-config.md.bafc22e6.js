import{_ as n,c as s,o as a,a as p}from"./app.ba9c527d.js";const d='{"title":"\u9879\u76EE\u6837\u5F0F\u914D\u7F6E","description":"","frontmatter":{},"headers":[],"relativePath":"preparation/style-config.md"}',t={},e=p(`<h1 id="\u9879\u76EE\u6837\u5F0F\u914D\u7F6E" tabindex="-1">\u9879\u76EE\u6837\u5F0F\u914D\u7F6E <a class="header-anchor" href="#\u9879\u76EE\u6837\u5F0F\u914D\u7F6E" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5B9E\u73B0\u9879\u76EE\u4E2D\u7684\u91CD\u7F6E\u6837\u5F0F\u53CA\u5E94\u7528\u7EA7\u516C\u5171\u6837\u5F0F</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u4E0B\u8F7D\u7B2C\u4E09\u65B9\u6837\u5F0F\u91CD\u7F6E\u5E93</li><li>\u521B\u5EFA\u516C\u5171\u6837\u5F0F\u6587\u4EF6</li><li>\u5728<code>main.js</code> \u6587\u4EF6\u4E2D\u5F15\u5165\u91CD\u7F6E\u6837\u5F0F\u53CA\u516C\u5171\u6837\u5F0F</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><p><strong>Step.1\uFF1A\u4E0B\u8F7D\u7B2C\u4E09\u65B9\u6837\u5F0F\u91CD\u7F6E\u5E93</strong></p><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> <span class="token function">install</span> normalize.css
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div></li><li><p><strong>Step.2\uFF1A\u521B\u5EFA\u516C\u5171\u6837\u5F0F\u6587\u4EF6</strong></p><div class="language-css line-numbers-mode"><pre><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

<span class="token selector">html</span> <span class="token punctuation">{</span>
   <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
   <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 1240px<span class="token punctuation">;</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 1em/1.4 <span class="token string">&#39;Microsoft Yahei&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PingFang SC&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Avenir&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Segoe UI&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hiragino Sans GB&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;STHeiti&#39;</span><span class="token punctuation">,</span>  <span class="token string">&#39;Microsoft Sans Serif&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;WenQuanYi Micro Hei&#39;</span><span class="token punctuation">,</span> sans-serif
<span class="token punctuation">}</span>

<span class="token selector">ul,
h1,
h3,
h4,
p,
dl,
dd</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">i</span> <span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input[type=&quot;text&quot;],
input[type=&quot;search&quot;],
input[type=&quot;password&quot;], 
input[type=&quot;checkbox&quot;]</span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input[type=&quot;text&quot;]::placeholder,
input[type=&quot;search&quot;]::placeholder,
input[type=&quot;password&quot;]::placeholder, 
input[type=&quot;checkbox&quot;]::placeholder</span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">img</span> <span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">max-height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul</span> <span class="token punctuation">{</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#app</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span>
  <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1240px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ellipsis</span> <span class="token punctuation">{</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ellipsis-2</span> <span class="token punctuation">{</span>
  <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.fl</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fr</span> <span class="token punctuation">{</span>
 <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.clearfix:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br></div></div></li><li><p><strong>Step.3\uFF1A\u5728<code>main.js</code> \u6587\u4EF6\u4E2D\u5F15\u5165\u91CD\u7F6E\u6837\u5F0F\u53CA\u516C\u5171\u6837\u5F0F</strong></p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token string">&quot;normalize.css&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;./assets/styles/base.css&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011 <ol><li>\u4E0B\u8F7D\u7B2C\u4E09\u65B9\u6837\u5F0F\u91CD\u7F6E\u5E93</li><li>\u521B\u5EFA\u516C\u5171\u6837\u5F0F\u6587\u4EF6</li><li>\u5728<code>main.js</code> \u6587\u4EF6\u4E2D\u5F15\u5165\u91CD\u7F6E\u6837\u5F0F\u53CA\u516C\u5171\u6837\u5F0F</li></ol></li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),l=[e];function c(o,r,u,i,b,k){return a(),s("div",null,l)}var y=n(t,[["render",c]]);export{d as __pageData,y as default};
