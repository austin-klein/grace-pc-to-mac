import Meta from './Meta';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Nav />
      {children}
      <Footer />
    </>
  );
}
