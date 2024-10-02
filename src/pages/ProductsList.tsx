import { Link } from "react-router-dom";

function ProductsList() {
    const stringProducts = localStorage.getItem("products");
    const products = stringProducts ? JSON.parse(stringProducts) : []; // Corrigido para um array vazio

    console.log(products);

    return (
        <main className="bg-green-300 min-h-screen flex justify-center items-center">
            <div className="bg-slate-50 p-8 rounded-2xl">
                <h1 className="mb-5 text-center text-2xl font-bold">Lista de Produtos</h1>
                <div className="flex flex-col gap-2">
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <div className="flex justify-between bg-slate-100 py-1 px-2 rounded-lg" key={index}>
                                <h2 className="font-bold">{product.name}</h2>
                                <p>R$ {product.price}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">Nenhum produto cadastrado.</p> // Mensagem caso não haja produtos
                    )}
                </div>
                <Link to="/">
                    <button className="bg-green-300 py-1 w-full font-bold rounded-md mt-4">Cadastrar Produto</button>
                </Link>
            </div>
        </main>
    );
}

export default ProductsList;
