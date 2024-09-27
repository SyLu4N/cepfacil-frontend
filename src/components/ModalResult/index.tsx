/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { BiLoaderAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { Form, CloseModal, Container } from './styles';
import { ResponseData } from '../../@types/ResponseData';
import { useCep } from '../../hooks/useCep';
import { Local } from '../../@types/Local';

interface ModalResultProps {
  isOpen: boolean;
  onClose: () => void;
  data: ResponseData | undefined;
}

export function ModalResult({ onClose, data, isOpen }: ModalResultProps) {
  const { saveLocal } = useCep();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function sendSaveCep(e: FormEvent) {
    try {
      e.preventDefault();
      setIsLoading(true);

      const saveData: Omit<Local, 'id'> = {
        name,
        number,
        bairro: data!.bairro,
        uf: data!.uf,
        regiao: data!.regiao,
        logradouro: data!.logradouro,
        localidade: data!.localidade,
        estado: data!.estado,
        ddd: data!.ddd,
        cep: data!.cep,
      };

      await saveLocal(saveData as Local);

      setIsLoading(false);
      clearAndCloseModal();

      return navigate('locais');
    } catch (error) {
      const erros = document.querySelectorAll('.errorParagraph');
      erros.forEach((erro) => erro.remove());

      setIsLoading(false);
      return clearAndCloseModal();
    }
  }

  function clearAndCloseModal() {
    setName('');
    setNumber('');
    return onClose();
  }

  return (
    <Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        overlayClassName="overlayModal"
        className="modalContent"
      >
        <h1>Salvar local</h1>

        <Form onSubmit={sendSaveCep}>
          <label htmlFor="">
            <p>CEP</p>

            <input
              type="text"
              value={data?.cep}
              disabled
              className="inputModalCep"
            />
          </label>

          <label>
            <p>Nome do lugar:</p>

            <input
              placeholder="Ex: Parque municipal"
              onChange={(e) => setName(e.target.value)}
              value={name}
              maxLength={30}
            />
          </label>

          <label className="number">
            <p>Número:</p>

            <input
              placeholder="Ex: 342"
              onChange={(e) => setNumber(e.target.value.replace(/\D/g, ''))}
              value={number}
              maxLength={5}
            />
          </label>

          <button
            type="submit"
            disabled={name.length < 3 || !number || isLoading}
          >
            {isLoading ? <BiLoaderAlt className="loading" /> : 'Salvar'}
          </button>
        </Form>

        <CloseModal type="button" onClick={onClose}>
          <img src={'/assets/closeModal.svg'} alt="Fechar Modal" />
        </CloseModal>
      </Modal>
    </Container>
  );
}
