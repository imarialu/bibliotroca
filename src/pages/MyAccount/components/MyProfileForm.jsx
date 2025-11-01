import { Input } from "../../../components/Input"
import FilledButton from "../../../components/FilledButton"

export default function MyProfileForm(){
    return(
        <form className="p-8 rounded-md shadow-cont">
            <h1 className="mb-5 text-xl font-bold text-purple">Dados Pessoais</h1>

            <div className="flex items-center gap-5">
                <div className="w-[80px] h-[80px] rounded-full bg-gray-200">
                    {/* Foto de perfil do usuário */}
                </div>
                
                <button className="rounded-full py-1 px-8 bg-purple-tr text-purple font-semibold cursor-pointer transition duration-400 ease hover:bg-purple-h">Alterar</button>
            </div>

            <hr className="mt-5 text-purple"/>

            <div className="mt-5">
                <div className="grid grid-cols-2 gap-6">
                    <Input label={"Nome completo"}/>
                    <Input label={"Telefone"}/>
                </div>

                <div className="grid grid-cols-1">
                    <Input label={"Endereço"}/>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <Input label={"Número"}/>
                    <Input label={"CEP"}/>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <Input label={"Estado"}/>
                    <Input label={"Cidade"}/>
                </div>
            </div>

            <div className="flex justify-center mt-5">
                <FilledButton text={"Salvar"}/>
            </div>
        </form>
    )
}