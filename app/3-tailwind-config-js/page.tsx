import "../custom.css"

export default function TailwindConfigJS() {
	return (
		<div className="flex flex-row space-x-6 items-start justify-center h-screen w-screen p-8">
			<div className="prose dark:prose-invert">
				<h1>⚙️ Tailwind Config JS 样式</h1>
				<h2>H2：小节标题</h2>
				<h3>H3：子小节标题</h3>
				<p>没有使用 typography 样式，使用的是浏览器默认的样式，即：User Agent Stylesheet。</p>
				<p>
					你可以写一些<span style={{ fontWeight: "bold" }}>加粗</span>、<em>斜体</em>或<code>代码片段</code>的文字。
				</p>
				<blockquote>这是一个引用区域。</blockquote>
				<ul>
					<li>无序列表项 A</li>
					<li>无序列表项 B</li>
				</ul>
				<ol>
					<li>有序列表 1</li>
					<li>有序列表 2</li>
				</ol>
				<pre>
					<code>{`function greet(name) {
  return 'Hello, ' + name + '!';
}`}</code>
				</pre>
				<table>
					<thead>
						<tr>
							<th>项目</th>
							<th>说明</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>HTML</td>
							<td>超文本标记语言</td>
						</tr>
						<tr>
							<td>CSS</td>
							<td>层叠样式表</td>
						</tr>
					</tbody>
				</table>

				<h4>功能展示</h4>
				<ul>
					<li>
						<a href="/1-size-modifiers">Size Modifiers 内置字号调整工具</a>
					</li>
					<li>
						<a href="/2-element-modifiers">Element Modifiers 个性化</a>
					</li>
					<li>
						<a href="/3-tailwind-config-js">Tailwind Config JS 个性化</a>
					</li>
					<li>
						<a href="/4-gray-scale">Gray Scale 灰度主题</a>
					</li>
					<li>
						<a href="/5-override-max-width">覆盖默认最大宽度</a>
					</li>
					<li>
						<a href="/6-undo-style">撤销prose样式</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
