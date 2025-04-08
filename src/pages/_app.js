import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return Component.getLayout ? Component.getLayout(pageProps) : (<Component {...pageProps} />);
}
