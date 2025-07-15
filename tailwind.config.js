/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			typography: () => ({
				DEFAULT: {
					css: {
						h1: {
							color: 'var(--color-blue-600)'
						},
						h2: {
							fontSize: 'var(--font-size-base)'
						},
						h3: {
							color: 'var(--color-pink-400)',
							border: '1px solid var(--color-orange-600)',
							padding: '8px',
							borderRadius: '0.6rem'
						},
						p: {
							fontStyle: 'italic'
						},
						table: {
							borderCollapse: 'collapse',
							border: '1px solid var(--color-gray-300)'
						},
						th: {
							border: '1px solid var(--color-gray-300)',
							textAlign: 'center'
						},
						td: {
							border: '1px solid var(--color-gray-300)',
							textAlign: 'center'
						}
					},
				},
				xl: {
					css: {
						h1: {
							color: 'blue'
						}
					}
				},
				extend: {
					css: {
						h1: {
							color: 'green'
						}
					}
				}
			}),
		},
	},
}