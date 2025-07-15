export const metadata = {
	title: "Tailwind Typography 灰阶主题演示",
	description: "对比 prose-gray、slate、zinc、neutral、stone 的视觉差异与设计意图",
}

export default function GrayScalePage() {
	const generateHtmlCode = (proseClass: string, title: string = "技术文档标题", subtitle: string = "小节标题") => {
		return `<div class="${proseClass} dark:prose-invert">
			<h1>H1：${title}</h1>
			<h2>H2：${subtitle}</h2>
			<h3>H3：子小节标题</h3>
			<p>这是一个段落内容，用来演示 \`p\` 的样式。包括行高、字间距、段距等相关的内容。</p>
			<p>
				你可以写一些<strong>加粗</strong>、<em>斜体</em>或<code>代码片段</code>的文字。
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
			<pre><code>function greet(name) {
  return 'Hello, ' + name + '!';
}</code></pre>
			<table>
				<thead>
					<tr><th>项目</th><th>说明</th></tr>
				</thead>
				<tbody>
					<tr><td>HTML</td><td>超文本标记语言</td></tr>
					<tr><td>CSS</td><td>层叠样式表</td></tr>
				</tbody>
			</table>
		</div>`
	}

	const configurations = [
		{ proseClass: "prose-gray", title: "灰色主题 gray", subtitle: "灰色小节" },
		{ proseClass: "prose-slate", title: "石板色主题 slate", subtitle: "石板色小节" },
		{ proseClass: "prose-zinc", title: "锌色主题 zinc", subtitle: "锌色小节" },
		{ proseClass: "prose-neutral", title: "中性色主题 neutral", subtitle: "中性色小节" },
		{ proseClass: "prose-stone", title: "石色主题 stone", subtitle: "石色小节" },
	]

	return (
		<div className="p-4 w-screen space-y-4">
			{/* 顶部说明文案 */}
			<section className="max-w-5xl prose dark:prose-invert">
				<h1>Tailwind Typography 灰阶主题对比</h1>
				<p>
					Tailwind 提供了<code>5</code>种灰度排版主题，其目的在于适配不同设计语言中的灰度风格。
				</p>
				<table>
					<thead>
						<tr>
							<th>名称</th>
							<th>风格倾向</th>
							<th>色温倾向</th>
							<th>应用感受</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>gray</td>
							<td>默认 / 通用</td>
							<td>中性偏暖</td>
							<td>最通用、最传统</td>
						</tr>
						<tr>
							<td>slate</td>
							<td>冷感 / 科技风</td>
							<td>偏冷</td>
							<td>稍偏蓝调，适合代码类文档</td>
						</tr>
						<tr>
							<td>zinc</td>
							<td>金属感 / 极简风</td>
							<td>冷灰</td>
							<td>非常中性，适合 UI 组件说明文档</td>
						</tr>
						<tr>
							<td>neutral</td>
							<td>纯中性色</td>
							<td>极中性</td>
							<td>略偏灰黄，视觉最柔和</td>
						</tr>
						<tr>
							<td>stone</td>
							<td>自然风 / 柔和感</td>
							<td>偏暖</td>
							<td>类似纸张、石块，有自然复古感</td>
						</tr>
					</tbody>
				</table>

				<h2>为什么看起来好像“都差不多”？</h2>
				<p>默认背景色相同、字体较小，会掩盖它们在引用、列表符号、代码块、表格边框等处的细节色彩差异，但在不同主题中会有微妙差异。</p>
			</section>

			{/* 灰阶主题演示区域 */}
			<div className="flex flex-row space-x-2">
				{configurations.map((config, index) => (
					<div
						key={index}
						className={`w-1/5 prose prose-invert p-2 rounded-lg border border-gray-300 shadow-sm ${config.proseClass}`}
						dangerouslySetInnerHTML={{
							__html: generateHtmlCode(config.proseClass, config.title, config.subtitle),
						}}
					/>
				))}
			</div>
		</div>
	)
}
