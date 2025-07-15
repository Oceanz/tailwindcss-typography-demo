export default function UndoStyle() {
	return (
		<div className="flex flex-row space-x-6 items-start justify-center h-screen w-screen p-8">
			<div className="prose dark:prose-invert">
				<h1>✅ 使用 Typography</h1>
				<h2>H2：小节标题</h2>
				<h3>H3：子小节标题</h3>
				<p>这是一个段落内容，用来演示 typography 样式。行高、字间距、段距等展示的视觉效果。</p>
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
			</div>

			<div className="prose dark:prose-invert">
				<h1 className="not-prose">❌ 撤销 Typography部分样式</h1>
				<h2>H2：not-prose</h2>
				<h3>H3：子小节标题</h3>
				<p>这是一个段落内容，用来演示 typography 样式。行高、字间距、段距等展示的视觉效果。</p>
				<p>
					你可以写一些<span style={{ fontWeight: "bold" }}>加粗</span>、<em>斜体</em>或<code>代码片段</code>的文字。
				</p>
				<blockquote>这是一个引用区域。</blockquote>
				<ul className="not-prose">
					<li>无序列表项 A</li>
					<li>无序列表项 B</li>
					<li className="text-red-500">增加 not-prose 类，撤销 typography 样式</li>
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
				<table className="not-prose">
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
							<td className="text-red-500">增加 not-prose 类，撤销 typography 样式</td>
							<td className="text-red-500">增加 not-prose 类，撤销 typography 样式</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
