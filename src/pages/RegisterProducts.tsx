import { FormEvent, useEffect, useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

function RegisterProducts() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState("");
    const navigate = useNavigate();
    const [products, setProducts] = useState<{ name: string; description: string; price: string; available: string }[]>([]);

    // Carregar produtos do localStorage ao montar o componente
    useEffect(() => {
        const stringProducts = localStorage.getItem("products");
        if (stringProducts) {
            setProducts(JSON.parse(stringProducts));
        }
    }, []);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newProduct = {
            name,
            description,
            price,
            available: available === "" || available === "sim" ? "sim" : "não",
        };
        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        navigate("/products");
    }

    return (
        <main className="bg-green-300 min-h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-2xl">
                <h1 className="mb-5 text-center text-2xl font-bold">Cadastro de Produtos</h1>
                <Input required label="Nome:" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <Input required label="Descrição:" type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <Input required label="Valor:" type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <label className="block mb-1">Disponível para Venda:</label>
                <select required className="mb-4 w-full border-2 border-slate-200 rounded-md py-1 px-2" name="available" id="available" value={available} onChange={(e) => setAvailable(e.target.value)}>
                    <option value="sim">Sim</option>
                    <option value="não">Não</option>
                </select>
                <button type="submit" className="bg-green-300 py-1 w-full font-bold rounded-md">Cadastrar</button>
            </form>
        </main>
    );
}

export default RegisterProducts;
