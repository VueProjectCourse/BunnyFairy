import{_ as n,c as s,o as a,a as p}from"./app.ba9c527d.js";const d='{"title":"\u4E2A\u4EBA\u4E2D\u5FC3-\u6211\u7684\u6536\u85CF","description":"","frontmatter":{},"headers":[],"relativePath":"profile/profile-collect.md"}',t={},e=p(`<h1 id="\u4E2A\u4EBA\u4E2D\u5FC3-\u6211\u7684\u6536\u85CF" tabindex="-1">\u4E2A\u4EBA\u4E2D\u5FC3-\u6211\u7684\u6536\u85CF <a class="header-anchor" href="#\u4E2A\u4EBA\u4E2D\u5FC3-\u6211\u7684\u6536\u85CF" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">Object</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u4F7F\u7528\u6A21\u62DF\u6570\u636E\u5B8C\u6210\u6211\u7684\u6536\u85CF\u6570\u636E\u6E32\u67D3</p></div><div class="warning custom-block"><p class="custom-block-title">Path</p><ol><li>\u521B\u5EFA\u7528\u4E8E\u83B7\u53D6\u6536\u85CF\u6570\u636E\u7684API\u51FD\u6570</li><li>\u5728\u4E2A\u4EBA\u4E2D\u5FC3\u9996\u9875\u9875\u9762\u7EC4\u4EF6\u53D1\u9001\u8BF7\u6C42\u83B7\u53D6\u6536\u85CF\u6570\u636E</li><li>\u62E6\u622AAjax\u8BF7\u6C42, \u8FD4\u56DE\u6A21\u62DF\u6570\u636E</li><li>\u4F7F\u7528\u6A21\u62DF\u6570\u636E\u8FDB\u884C\u7EC4\u4EF6\u6E32\u67D3</li></ol></div><div class="info custom-block"><p class="custom-block-title">Experience</p><ul><li><strong>Step.1\uFF1A\u521B\u5EFA\u7528\u4E8E\u83B7\u53D6\u6536\u85CF\u6570\u636E\u7684API\u51FD\u6570</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// api/memberAPI.js</span>
<span class="token comment">/**
 * \u83B7\u53D6\u6211\u7684\u6536\u85CF
 * @param collectType \u6536\u85CF\u7C7B\u578B\uFF0C1\u4E3A\u5546\u54C1\uFF0C2\u4E3A\u4E13\u9898\uFF0C3\u4E3A\u54C1\u724C
 * @param page \u9875\u7801
 * @param pageSize \u6BCF\u9875\u663E\u793A\u6570\u636E\u6761\u6570
 * @return {Promise}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> collectType <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> pageSize <span class="token operator">=</span> <span class="token number">10</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&quot;/member/collect&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> collectType<span class="token punctuation">,</span> page<span class="token punctuation">,</span> pageSize <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li><strong>Step.2\uFF1A\u5728\u4E2A\u4EBA\u4E2D\u5FC3\u9996\u9875\u9875\u9762\u7EC4\u4EF6\u53D1\u9001\u8BF7\u6C42\u83B7\u53D6\u6536\u85CF\u6570\u636E</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// views/member/home/MemberHomePage.vu</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCollection <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api/member&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6\u6536\u85CF\u6570\u636E</span>
    <span class="token keyword">const</span> collection <span class="token operator">=</span> <span class="token function">useCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> collection <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">useCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7528\u4E8E\u5B58\u50A8\u6536\u85CF\u6570\u636E</span>
  <span class="token keyword">const</span> collection <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u83B7\u53D6\u5E76\u5B58\u50A8\u6536\u85CF\u6570\u636E</span>
  <span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>value <span class="token operator">=</span> data<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8FD4\u56DE\u6536\u85CF\u6570\u636E</span>
  <span class="token keyword">return</span> collection<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li><strong>Step.3\uFF1A\u62E6\u622AAjax\u8BF7\u6C42, \u8FD4\u56DE\u6A21\u62DF\u6570\u636E</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// mocks/worker.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> rest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;msw&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> faker <span class="token keyword">from</span> <span class="token string">&quot;faker&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> baseURL <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/request&quot;</span><span class="token punctuation">;</span>

faker<span class="token punctuation">.</span>locale <span class="token operator">=</span> <span class="token string">&quot;zh_CN&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  rest<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>baseURL<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">member/collect</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">res</span><span class="token punctuation">(</span>
      ctx<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;\u6210\u529F&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">counts</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
          <span class="token literal-property property">page</span><span class="token operator">:</span> req<span class="token punctuation">.</span>url<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;page&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">pageSize</span><span class="token operator">:</span> req<span class="token punctuation">.</span>url<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;pageSize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token function">makeArray</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;pageSize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> faker<span class="token punctuation">.</span>datatype<span class="token punctuation">.</span><span class="token function">uuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> faker<span class="token punctuation">.</span>internet<span class="token punctuation">.</span><span class="token function">userName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">desc</span><span class="token operator">:</span> faker<span class="token punctuation">.</span>commerce<span class="token punctuation">.</span><span class="token function">productDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">price</span><span class="token operator">:</span> faker<span class="token punctuation">.</span>commerce<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">picture</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>faker<span class="token punctuation">.</span>datatype<span class="token punctuation">.</span><span class="token function">number</span><span class="token punctuation">(</span>
              <span class="token punctuation">{</span> <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span>
            <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.jpg</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">makeArray</span><span class="token punctuation">(</span><span class="token parameter">length<span class="token punctuation">,</span> generator</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> length <span class="token punctuation">}</span><span class="token punctuation">,</span> generator<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><ul><li><strong>Step.4\uFF1A\u4F7F\u7528\u6A21\u62DF\u6570\u636E\u8FDB\u884C\u7EC4\u4EF6\u6E32\u67D3</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token operator">&lt;</span>MemberHomePanel title<span class="token operator">=</span><span class="token string">&quot;\u6211\u7684\u6536\u85CF&quot;</span> v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;collection&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>GoodsItem v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;goods in collection.items&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;goods.id&quot;</span> <span class="token operator">:</span>goods<span class="token operator">=</span><span class="token string">&quot;goods&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>MemberHomePanel<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><div class="danger custom-block"><p class="custom-block-title">Note</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),o=[e];function c(l,u,r,i,k,m){return a(),s("div",null,o)}var g=n(t,[["render",c]]);export{d as __pageData,g as default};
