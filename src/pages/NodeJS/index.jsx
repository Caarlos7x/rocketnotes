import { FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, Content, NewNote } from './style';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Node() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><a href="/"><ButtonText title="Todos" /></a></li>
        <li><a href="/react"><ButtonText title="React" /></a></li> 
        <li><a href="/nodejs"><ButtonText title="NodeJS" isActive/></a></li>  
      </Menu>

      <Content>
        <Section title="NodeJS">
          <p>
            Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google 
            e que permite a execução de códigos JavaScript fora de um navegador web.[6][7]
            O runtime de JavaScript é constituído pelos seguintes comandos: node package manager (npm), 
            e npx (node package extractor); onde o primeiro tem o propósito de executar código armazenado 
            num package de nodejs, instalando o software globalmente ou localmente, já o segundo tem o propósito 
            de instalar a nível local o código instalado globalmente. Um exemplo disso é o npx create-react-app 
            que tem como propósito instalar a nível local um template vazio de um site de react, pronto a ser 
            usado, através de uma fórmula instalada com npm.
            A tecnologia robusta C++ e boost, como era conhecido no final da década de 1990 
            (quando a sintaxe foi completamente alterada, mantendo-se para fins de compatibilidade backward). 
            Usando também recorrentemente para este fim a linguagem bindings com sistemas de JavaScript mais universais, 
            garantindo que há o mínimo de deprecações no código com o passar do tempo. 
            Exceções disso, são alguns de JavaScript vanilla, que não são incluídos em node, que podem ser importados para nodejs. 
            Um exemplo disso é o comando readine(), que precisa de ser importado e sofre de algumas alterações. 
            Ainda assim o código é bem mais buletproof do que o código de Python, que depreca com relativa facilidade.
            O código de nodejs é baseado na arquitetura event-driven, capaz de entrada/saída assíncrona. 
            Otimizado para ser corrido em tempo real tratando-se também de um ditribuído.
          </p>
          
        </Section>
      </Content>

      <NewNote to="/">
        <FiPlus />
        Voltar
      </NewNote>
    </Container>
  )
}