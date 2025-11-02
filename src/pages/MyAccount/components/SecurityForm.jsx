import { Input } from "../../../components/Input"
import FilledButton from "../../../components/FilledButton"

export default function SecurityForm(){
    return(
        <form className="bg-white p-8 rounded-md shadow-cont">
            <h1 className="mb-5 text-xl font-bold text-purple">Alterar Senha</h1>

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

            <div className="mt-5">
                <FilledButton text={"Atualizar Senha"}/>
            </div>
        </form>
    )
}