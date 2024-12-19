import { Header } from "./components/HeaderComponent.js";
import { Footer } from "./components/FooterComponent.js";
import { ProductList } from "./components/ProductListComponent.js";

export function App() {
    return (
        <div>
            <Header />
            <main>
                <h1 style={{ textAlign: "center" }}>Welcome to the Product Store</h1>
                <ProductList />
            </main>
            <Footer />
        </div>
    );
}
