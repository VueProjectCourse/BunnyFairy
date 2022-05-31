import{_ as n,c as s,o as a,a as p}from"./app.ba9c527d.js";const d='{"title":"\u767B\u5F55-\u8D26\u53F7\u5BC6\u7801\u767B\u5F55","description":"","frontmatter":{},"headers":[],"relativePath":"login/account-login.md"}',t={},o=p(`<h1 id="\u767B\u5F55-\u8D26\u53F7\u5BC6\u7801\u767B\u5F55" tabindex="-1">\u767B\u5F55-\u8D26\u53F7\u5BC6\u7801\u767B\u5F55 <a class="header-anchor" href="#\u767B\u5F55-\u8D26\u53F7\u5BC6\u7801\u767B\u5F55" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5B9E\u73B0\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u529F\u80FD</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u4F7F\u7528 POSTMAN \u63A5\u53E3\u6D4B\u8BD5\u5DE5\u5177\u4E34\u65F6\u6CE8\u518C\u8D26\u53F7\u4F9B\u767B\u5F55\u529F\u80FD\u4F7F\u7528</li><li>\u521B\u5EFA\u7528\u4E8E\u5B9E\u73B0\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u7684API\u63A5\u53E3\u51FD\u6570</li><li>\u5F53\u7528\u6237\u63D0\u4EA4\u8D26\u53F7\u767B\u5F55\u8868\u5355\u65F6\u5411\u670D\u52A1\u5668\u7AEF\u53D1\u9001\u8BF7\u6C42\u5B9E\u73B0\u8D26\u53F7\u767B\u5F55</li><li>\u5904\u7406\u767B\u5F55\u6210\u529F\u548C\u767B\u5F55\u5931\u8D25\u7684\u7ED3\u679C</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><p><strong>Step.1\uFF1A\u4F7F\u7528 POSTMAN \u63A5\u53E3\u6D4B\u8BD5\u5DE5\u5177\u4E34\u65F6\u6CE8\u518C\u8D26\u53F7\u4F9B\u767B\u5F55\u529F\u80FD\u4F7F\u7528</strong></p><div class="language-text line-numbers-mode"><pre><code>http://pcapi-xiaotuxian-front-devtest.itheima.net/register/code?mobile=18000000002
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-text line-numbers-mode"><pre><code>
http://pcapi-xiaotuxian-front-devtest.itheima.net/register

{
&quot;account&quot;: &quot;testLogin04&quot;,
&quot;password&quot;: &quot;123456&quot;,
&quot;code&quot;: &quot;123456&quot;,
&quot;mobile&quot;: &quot;18000000004&quot;
}
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p><strong>Step.2\uFF1A\u521B\u5EFA\u7528\u4E8E\u5B9E\u73B0\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u7684API\u63A5\u53E3\u51FD\u6570</strong></p></li></ul><div class="language-js line-numbers-mode"><pre><code>
<span class="token comment">// create(add)\u589E delete(remove)\u5220 update(edit)\u6539  read(find)\u67E5</span>
<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&quot;@/utils/request&quot;</span><span class="token punctuation">;</span>
<span class="token comment">/**
 * \u8D26\u53F7\u5BC6\u7801\u767B\u5F55
 * @param account \u7528\u6237\u540D\u6216\u624B\u673A\u53F7
 * @param password \u5BC6\u7801
 * @return {AxiosPromise}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">loginByAccountAndPassword</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> account<span class="token punctuation">,</span> password <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> account<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>



</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li><strong>Step.3\uFF1A\u5F53\u7528\u6237\u63D0\u4EA4\u8D26\u53F7\u767B\u5F55\u8868\u5355\u65F6\u5411\u670D\u52A1\u5668\u7AEF\u53D1\u9001\u8BF7\u6C42\u5B9E\u73B0\u8D26\u53F7\u767B\u5F55</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useLoginWay<span class="token punctuation">,</span> useAccountValidate<span class="token punctuation">,</span> useAccountLogin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./LoginForm&quot;</span><span class="token punctuation">;</span>


<span class="token keyword">const</span> <span class="token punctuation">{</span> setAccountLogin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAccountLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u53EA\u6709\u6240\u6709\u8868\u5355\u89C4\u5219\u90FD\u9A8C\u8BC1\u901A\u8FC7\u4E86 \u5728\u70B9\u51FB\u63D0\u4EA4\u7684\u65F6\u5019 \u624D\u53EF\u4EE5\u89E6\u53D1</span>
<span class="token keyword">const</span> onAccountSubmit <span class="token operator">=</span> <span class="token function">handleAccountSubmit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// values \u5C31\u662F\u767B\u9646\u6240\u9700\u7684\u53C2\u6570</span>
  <span class="token function">setAccountLogin</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><strong>Step.4\uFF1A\u5904\u7406\u767B\u5F55\u6210\u529F\u548C\u767B\u5F55\u5931\u8D25\u7684\u7ED3\u679C</strong></li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useUserStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/stores/userStore&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> storeToRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> loginByAccountAndPassword <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api/loginAPI&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Message <span class="token keyword">from</span> <span class="token string">&quot;@/components/Message/Message&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u8D26\u53F7\u767B\u9646\u7684\u529F\u80FD</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useAccountLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// vue-router \u7528\u7684\u662Fprovide inject</span>
  <span class="token comment">// \u6CE8\u610F useRouter\u65B9\u6CD5 \u5FC5\u987B\u5728setup\u5185\u6267\u884C \u6216\u8005\u662F \u51FD\u6570\u5F0F\u7EC4\u4EF6</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// route \u548C router</span>
  <span class="token comment">// route \u83B7\u53D6 \u8DEF\u7531\u91CC\u9762\u7684\u4FE1\u606F\u7684</span>
  <span class="token comment">// router \u662F\u8DEF\u7531\u5BF9\u8C61 \u4E13\u95E8\u7528\u6765\u6539\u53D8\u8DEF\u7531\u7684 \u91CC\u9762\u6709 \u6539\u53D8\u8DEF\u7531\u7684\u65B9\u6CD5 route\u91CC\u9762\u5168\u90E8\u662F\u5C5E\u6027</span>
  <span class="token comment">// console.log(router);</span>

  <span class="token comment">// \u8BF7\u6C42\u6210\u529F\u65F6\u7684\u56DE\u8C03</span>
  <span class="token keyword">const</span> <span class="token function-variable function">successFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res<span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> status <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> profile <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span><span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u628A\u7528\u6237\u4FE1\u606F\u5B58\u50A8\u5230Store\u4E2D</span>
      profile<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>profile<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token operator">...</span>res<span class="token punctuation">.</span>result <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token comment">// // \u5224\u65AD\u767B\u9646\u6210\u529F \u8DF3\u8F6C\u5230\u9996\u9875</span>
      router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u767B\u5F55\u6210\u529F\u4E4B\u540E\u7684\u63D0\u793A\u4FE1\u606F</span>
        <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u767B\u5F55\u6210\u529F&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// \u767B\u9646\u5931\u8D25\u65F6\u7684\u56DE\u8C03</span>
  <span class="token keyword">const</span> <span class="token function-variable function">failFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(error.response.data.message);</span>
    <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u767B\u9646\u65B9\u6CD5</span>
  <span class="token keyword">const</span> <span class="token function-variable function">setAccountLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">loginParams</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">loginByAccountAndPassword</span><span class="token punctuation">(</span>loginParams<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>successFn<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>failFn<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> setAccountLogin <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),e=[o];function c(l,u,r,i,k,b){return a(),s("div",null,e)}var g=n(t,[["render",c]]);export{d as __pageData,g as default};