import '@/styles/globals.css';

// Wrapper for all pages, add shared UI components
export default function App({ Component, pageProps }) {
	return (
		<div>
			<Component {...pageProps} />

			<footer>
				<p>@ 2023 Developer</p>
			</footer>
		</div>
	);
}
