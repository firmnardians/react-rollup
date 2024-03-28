import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import html from '@rollup/plugin-html';

/** @type {import("rollup").RollupOptions} */
export default {
	input: 'src/index.jsx',
	output: {
		format: 'iife',
		sourcemap: false,
		name: 'app',
		entryFileNames: 'public/bundle.js',
		dir: './',
	},
	plugins: [
		nodeResolve({
			extensions: ['.js', '.jsx'],
		}),
		babel({
			babelHelpers: 'bundled',
			presets: ['@babel/preset-react'],
			extensions: ['.js', '.jsx'],
		}),
		commonjs(),
		replace({
			preventAssignment: false,
			'process.env.NODE_ENV': '"development"',
		}),
	],
};
