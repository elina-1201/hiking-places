import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "var(--color-primary-900)",
		"--theme-font-color-dark": "var(--color-secondary-100)",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #13575A 
		"--color-primary-50": "220 230 230", // #dce6e6
		"--color-primary-100": "208 221 222", // #d0ddde
		"--color-primary-200": "196 213 214", // #c4d5d6
		"--color-primary-300": "161 188 189", // #a1bcbd
		"--color-primary-400": "90 137 140", // #5a898c
		"--color-primary-500": "19 87 90", // #13575A
		"--color-primary-600": "17 78 81", // #114e51
		"--color-primary-700": "14 65 68", // #0e4144
		"--color-primary-800": "11 52 54", // #0b3436
		"--color-primary-900": "9 43 44", // #092b2c
		// secondary | #BEBEBE 
		"--color-secondary-50": "245 245 245", // #f5f5f5
		"--color-secondary-100": "242 242 242", // #f2f2f2
		"--color-secondary-200": "239 239 239", // #efefef
		"--color-secondary-300": "229 229 229", // #e5e5e5
		"--color-secondary-400": "210 210 210", // #d2d2d2
		"--color-secondary-500": "190 190 190", // #BEBEBE
		"--color-secondary-600": "171 171 171", // #ababab
		"--color-secondary-700": "143 143 143", // #8f8f8f
		"--color-secondary-800": "114 114 114", // #727272
		"--color-secondary-900": "93 93 93", // #5d5d5d
		// tertiary | #976A45 
		"--color-tertiary-50": "239 233 227", // #efe9e3
		"--color-tertiary-100": "234 225 218", // #eae1da
		"--color-tertiary-200": "229 218 209", // #e5dad1
		"--color-tertiary-300": "213 195 181", // #d5c3b5
		"--color-tertiary-400": "182 151 125", // #b6977d
		"--color-tertiary-500": "151 106 69", // #976A45
		"--color-tertiary-600": "136 95 62", // #885f3e
		"--color-tertiary-700": "113 80 52", // #715034
		"--color-tertiary-800": "91 64 41", // #5b4029
		"--color-tertiary-900": "74 52 34", // #4a3422
		// success | #10827F 
		"--color-success-50": "219 236 236", // #dbecec
		"--color-success-100": "207 230 229", // #cfe6e5
		"--color-success-200": "195 224 223", // #c3e0df
		"--color-success-300": "159 205 204", // #9fcdcc
		"--color-success-400": "88 168 165", // #58a8a5
		"--color-success-500": "16 130 127", // #10827F
		"--color-success-600": "14 117 114", // #0e7572
		"--color-success-700": "12 98 95", // #0c625f
		"--color-success-800": "10 78 76", // #0a4e4c
		"--color-success-900": "8 64 62", // #08403e
		// warning | #E1813E 
		"--color-warning-50": "251 236 226", // #fbece2
		"--color-warning-100": "249 230 216", // #f9e6d8
		"--color-warning-200": "248 224 207", // #f8e0cf
		"--color-warning-300": "243 205 178", // #f3cdb2
		"--color-warning-400": "234 167 120", // #eaa778
		"--color-warning-500": "225 129 62", // #E1813E
		"--color-warning-600": "203 116 56", // #cb7438
		"--color-warning-700": "169 97 47", // #a9612f
		"--color-warning-800": "135 77 37", // #874d25
		"--color-warning-900": "110 63 30", // #6e3f1e
		// error | #B03C17 
		"--color-error-50": "243 226 220", // #f3e2dc
		"--color-error-100": "239 216 209", // #efd8d1
		"--color-error-200": "235 206 197", // #ebcec5
		"--color-error-300": "223 177 162", // #dfb1a2
		"--color-error-400": "200 119 93", // #c8775d
		"--color-error-500": "176 60 23", // #B03C17
		"--color-error-600": "158 54 21", // #9e3615
		"--color-error-700": "132 45 17", // #842d11
		"--color-error-800": "106 36 14", // #6a240e
		"--color-error-900": "86 29 11", // #561d0b
		// surface | #13575A 
		"--color-surface-50": "220 230 230", // #dce6e6
		"--color-surface-100": "208 221 222", // #d0ddde
		"--color-surface-200": "196 213 214", // #c4d5d6
		"--color-surface-300": "161 188 189", // #a1bcbd
		"--color-surface-400": "90 137 140", // #5a898c
		"--color-surface-500": "19 87 90", // #13575A
		"--color-surface-600": "17 78 81", // #114e51
		"--color-surface-700": "14 65 68", // #0e4144
		"--color-surface-800": "11 52 54", // #0b3436
		"--color-surface-900": "9 43 44", // #092b2c
		
	}
}
