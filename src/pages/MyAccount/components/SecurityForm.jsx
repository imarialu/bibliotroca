import { Input } from "../../../components/Input"

export default function SecurityForm(){
    return(
        <form className="p-8 rounded-md shadow-[0px_0px_5px_2px_rgba(198,_174,_230,_0.4)]">
            <h1 className="mb-5 text-xl font-bold text-[var(--color-purple)]">Alterar Senha</h1>

            <div>
                <div className="grid grid-cols-2">
                    <Input label={"Senha atual"}/>
                </div>
                
                <div className="grid grid-cols-2">
                    <Input label={"Nova senha"}/>
                </div>
                
                <div className="grid grid-cols-2">
                    <Input label={"Confirmar nova senha"}/>
                </div>
            </div>

            <div>
                <button className="py-1 px-8 rounded-full bg-[var(--color-purple)] text-white font-semibold cursor-pointer mt-5">Atualizar Senha</button>
            </div>
        </form>
    )
}