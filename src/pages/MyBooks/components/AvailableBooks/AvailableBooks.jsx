import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { MdOutlineModeEdit } from 'react-icons/md'; 
import { MdOutlineDelete } from 'react-icons/md';

import ExchangedButton from './ExchangedButton';
import Modal from '../../../../components/Modal';
import FilledButton from '../../../../components/FilledButton';
 
 export default function AvailableBooks({image, status, title, author}){
    const [confirmModal, setconfirmModal] = useState(false);
    const [deleteModal, setDeteleModal] = useState(false);

    const navigate = useNavigate();

    return(
        <>
            <div className="flex w-[350px] h-[180px] p-3 gap-2 bg-white border rounded-md border-purple-tr">
                <div className="w-[120px] h-[155px]">
                    <img src={image} alt="Capa do livro" className="w-full h-full rounded-md"/>
                </div>

                <div className="flex flex-col justify-between w-[250px]">
                    <div>
                        <p className="text-sm font-semibold">{status}</p>
                        <h2 className="font-medium">
                            {title.length > 24 ? `${title.substring(0, 23)}...` : title}
                        </h2>
                        <p className="text-sm">{author}</p>
                    </div>

                    <div className="items-center mt-2">
                        <hr className="text-purple-tr mb-2"/>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                                {/* Botão de editar livro */}
                                <button 
                                    onClick={() => navigate(`/editar-livro`)}
                                    className="flex items-center p-1 border border-purple rounded-full text-purple transition duration-400 ease hover:bg-purple-tr cursor-pointer">
                                        <MdOutlineModeEdit className="text-2xl"/>
                                </button>

                                {/* Botão de deletar livro */}
                                <button 
                                    onClick={() => setDeteleModal(true)}
                                    className="flex items-center p-1 border border-purple rounded-full text-purple transition duration-400 ease hover:bg-purple-tr cursor-pointer">
                                        <MdOutlineDelete className="text-2xl"/>
                                </button>

                                {/* Modal de confirmação de exclusão de livro */}
                                <Modal isOpen={deleteModal} onClose={() => setDeteleModal(false)}>
                                    <p className="mt-2 font-medium">Tem certeza que deseja deletar este livro? <br/> Essa ação é irreversível.</p>

                                    <div className="flex gap-4">
                                        <button 
                                            className="py-1 px-6 rounded-full bg-red text-white font-semibold cursor-pointer">
                                                Deletar
                                        </button>
                                    </div>
                                </Modal>
                            </div>

                            <div>
                                <ExchangedButton onClick={() => setconfirmModal(true)} text={"Trocado"}/>

                                {/* Modal de confirmação para marcar o livro como trocado */}
                                <Modal isOpen={confirmModal} onClose={() => setconfirmModal(false)}>
                                    <h1 className="font-medium">Ficamos felizes por ter conseguido trocar seu livro!</h1>

                                    <FilledButton text={"Marcar como trocado"}/>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
 }