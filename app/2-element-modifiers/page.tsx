import Link from "next/link"

export default function Home() {
	return (
		<div className="flex flex-row space-x-6 items-start justify-center h-screen w-screen p-8">
			<div className="prose dark:prose-invert">
				<h1>⚙️ 默认样式</h1>
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
						<Link href="/size-modifiers">Size Modifiers 内置字号调整工具</Link>
					</li>
					<li>
						<Link href="/size-modifiers">自定义字号 & 颜色</Link>
					</li>
					<li>
						<Link href="/size-modifiers">不使用 typography 样式</Link>
					</li>
					<li>
						<Link href="/gray-scale">Gray Scale 灰度主题</Link>
					</li>
				</ul>
			</div>

			<div className="prose dark:prose-invert prose-h1:text-blue-600 prose-h2:text-base prose-h3:text-pink-400 prose-h3:border prose-h3:border-orange-600 prose-h3:rounded-md prose-h3:p-2 prose-p:italic prose-table:border-collapse prose-table:border prose-table:border-gray-300 prose-th:border prose-th:border-gray-300 prose-th:text-center prose-td:border prose-td:border-gray-300 prose-td:text-center">
				<h1>✍️ 使用Element Modifiers 个性化。prose-h1:text-blue-600</h1>
				<h2>H2：小节标题，使用 prose-h2:text-base 将 h2 的字号设置为 base</h2>
				<h3>H3：子小节标题，使用 prose-h3:text-pink-400 prose-h3:border prose-h3:border-orange-600 prose-h3:rounded-md prose-h3:p-2 个性化</h3>
				<p>这是一个段落内容，用来演示 typography 样式。行高、字间距、段距等展示的视觉效果。prose-p:italic</p>
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
						<tr>
							<td>示例样式</td>
							<td>
								prose-table:border-collapse prose-table:border prose-table:border-gray-300 prose-th:border prose-th:border-gray-300 prose-th:text-center prose-td:border
								prose-td:border-gray-300 prose-td:text-center
							</td>
						</tr>
					</tbody>
				</table>

				<h4>功能展示</h4>
				<ul>
					<li>
						<Link href="/1-size-modifiers">Size Modifiers 内置字号调整工具</Link>
					</li>
					<li>
						<Link href="/2-element-modifiers">Element Modifiers 个性化</Link>
					</li>
					<li>
						<Link href="/3-tailwind-config-js">Tailwind Config JS 个性化</Link>
					</li>
					<li>
						<Link href="/4-gray-scale">Gray Scale 灰度主题</Link>
					</li>
					<li>
						<Link href="/5-override-max-width">覆盖默认最大宽度</Link>
					</li>
					<li>
						<Link href="/6-undo-style">撤销prose样式</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
