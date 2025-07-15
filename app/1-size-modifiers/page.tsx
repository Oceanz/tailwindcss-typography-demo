export const metadata = {
	title: "Size Modifiers",
	description: "Size Modifiers",
}

export default function SizeModifiersPage() {
	const generateHtmlCode = (title: string = "技术文档标题", subtitle: string = "小节标题") => {
		return `
			<h1>H1：${title}</h1>
			<h2>H2：${subtitle}</h2>
			<h3>H3：子小节标题</h3>
			<p>Tailwind CSS 遵循的是移动优先的设计原则。这意味着：默认情况下不加任何修饰符（比如 text-blue-500 或 p-4）的 CSS 规则会应用于所有屏幕尺寸，包括最小的移动设备屏幕。当你使用像 sm:, md:, lg: 这样的断点前缀时，你是在为更大（或等于）的屏幕尺寸添加或覆盖样式。断点是累积和覆盖的。 如果你只使用了 sm: 而没有使用 md: 或 lg:，那么 sm: 的样式将从 640px 开始一直生效到无限大（或者直到被另一个断点样式覆盖）。</p>
			<p>
				你可以写一些<span style="font-weight: bold;">加粗</span>、<em>斜体</em>或<code>代码片段</code>的文字。
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
}</code>
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
			</table>`
	}

	const configurations = [
		{ proseClass: "prose-sm", title: "prose-sm 0.875rem (14px)", subtitle: "适用于 640px 以上屏幕" },
		{ proseClass: "prose-base", title: "prose-base 1rem (16px)", subtitle: "也可写成 prose，是默认规则，适用于 768px 以上屏幕" },
		{ proseClass: "prose-lg", title: "prose-lg 1.125rem (18px)", subtitle: "适用于 1024px 以上屏幕" },
		{ proseClass: "prose-xl", title: "prose-xl 1.25rem (20px)", subtitle: "适用于 1280px 以上屏幕" },
		{ proseClass: "prose-2xl", title: "prose-2xl 1.5rem (24px)", subtitle: "适用于 1536px 以上屏幕" },
	]

	return (
		<div className="flex flex-row space-x-4 p-3">
			{configurations.map((config, index) => (
				<div
					key={index}
					className={`w-1/5 border-1 border-gray-300 p-2 prose dark:prose-invert ${config.proseClass}`}
					dangerouslySetInnerHTML={{
						__html: generateHtmlCode(config.title, config.subtitle),
					}}
				/>
			))}
		</div>
	)
}
