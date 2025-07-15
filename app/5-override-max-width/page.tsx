export default function OverrideMaxWidth() {
	return (
		<div className="flex flex-col space-y-8 p-8">
			<div className="prose dark:prose-invert">
				<h1>默认行为</h1>
				<p>
					覆盖最大宽度: 每个尺寸修饰符都内置了一个
					max-width（最大宽度），旨在尽可能保持内容的可读性。然而，这并非总是你想要的效果，有时你可能希望内容完全填充其容器的宽度。在这些情况下，你只需在内容中添加 max-w-none
					即可覆盖内置的最大宽度：总结要点： prose 类默认行为：Tailwind CSS 的 prose 类（例如 prose-lg, prose-xl 等）在应用到内容块时，会内置一个max-width 限制。 目的： 这个默认的 max-width
					是为了提高文本内容的阅读舒适性，防止文本行过长导致难以阅读。 覆盖需求： 有时，你可能不希望内容受到这个 max-width的限制，而是希望它完全填充其父容器的可用宽度。 解决方案：
					若要实现内容完全填充容器，只需在应用了 prose 类的元素上额外添加 max-w-none 这个 Tailwind CSS 工具类。 示例： max-w-none会移除 prose 默认设置的最大宽度约束。
				</p>
			</div>
			<div className="prose dark:prose-invert max-w-none">
				<h1>Override Max Width</h1>
				<p>
					覆盖最大宽度 每个尺寸修饰符都内置了一个
					max-width（最大宽度），旨在尽可能保持内容的可读性。然而，这并非总是你想要的效果，有时你可能希望内容完全填充其容器的宽度。在这些情况下，你只需在内容中添加 max-w-none
					即可覆盖内置的最大宽度：总结要点： prose 类默认行为：Tailwind CSS 的 prose 类（例如 prose-lg, prose-xl 等）在应用到内容块时，会内置一个max-width 限制。 目的： 这个默认的 max-width
					是为了提高文本内容的阅读舒适性，防止文本行过长导致难以阅读。 覆盖需求： 有时，你可能不希望内容受到这个 max-width的限制，而是希望它完全填充其父容器的可用宽度。 解决方案：
					若要实现内容完全填充容器，只需在应用了 prose 类的元素上额外添加 max-w-none 这个 Tailwind CSS 工具类。 示例： max-w-none会移除 prose 默认设置的最大宽度约束。
				</p>
			</div>
		</div>
	)
}
