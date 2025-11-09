import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { ProductCatalog } from "@/components/ProductCatalog";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Header />
      <ProductCatalog />
      <Footer />
    </main>
  );
}
