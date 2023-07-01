import '@/styles/globals.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function App({ Component, pageProps, router }) {
  const excludeComponents = ['/login']; 

  const shouldExcludeComponents = excludeComponents.includes(router.pathname);

  return (
    <>
      {!shouldExcludeComponents && <Header />}
      {!shouldExcludeComponents && (
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      )}
      {shouldExcludeComponents && <Component {...pageProps} />}
    </>
  );
}
