module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
	plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
	rules: {
		'prettier/prettier': ['error'],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: false,
			},
		],
		'react/function-component-definition': [
			1,
			{
				namedComponents: 'function-declaration',
				unnamedComponents: 'arrow-function',
			},
		],
		'react/jsx-props-no-spreading': [
			0,
			{
				html: 'ignore',
				custom: 'ignore',
			},
		],
	},
};
