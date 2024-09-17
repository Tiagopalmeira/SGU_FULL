import { render, screen, fireEvent } from '@testing-library/react';
import FormEnvio from './src/components/FormEnvio';

describe('Testes do Formulário de Envio', () => {
  test('Deve renderizar o formulário corretamente', () => {
    render(<FormEnvio />);

    
    expect(screen.getByPlaceholderText('Digite o nome do cadastrante')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite o nome do desbravador')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite o contato do desbravador')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite o contato de emergência')).toBeInTheDocument();
    
    
    expect(screen.getByLabelText('Amigo')).toBeInTheDocument();
    expect(screen.getByLabelText('Conselheiro')).toBeInTheDocument();
  });

  test('Deve permitir que o usuário preencha e envie o formulário', async () => {
    render(<FormEnvio />);

    
    fireEvent.change(screen.getByPlaceholderText('Digite o nome do cadastrante'), { target: { value: 'Tiago' } });
    fireEvent.change(screen.getByPlaceholderText('Digite o nome do desbravador'), { target: { value: 'João' } });
    fireEvent.change(screen.getByPlaceholderText('Digite o contato do desbravador'), { target: { value: '123456789' } });
    fireEvent.change(screen.getByPlaceholderText('Digite o contato de emergência'), { target: { value: '987654321' } });

  
    fireEvent.click(screen.getByLabelText('Conselheiro'));
    fireEvent.click(screen.getByLabelText('Capitão'));

  
    const submitButton = screen.getByText('Enviar');
    fireEvent.click(submitButton);

 
    expect(screen.getByPlaceholderText('Digite o nome do cadastrante').value).toBe('Tiago');
    expect(screen.getByPlaceholderText('Digite o nome do desbravador').value).toBe('João');
  });

  test('Deve mostrar o campo de alergias se "Sim" for selecionado', () => {
    render(<FormEnvio />);


    fireEvent.click(screen.getByLabelText('Sim'));


    expect(screen.getByPlaceholderText('Descreva as alergias, se houver')).toBeInTheDocument();
  });
});

