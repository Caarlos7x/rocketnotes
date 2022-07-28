import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './style';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function React() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><a href="/"><ButtonText title="Todos" /></a></li>
        <li><a href="/react"><ButtonText title="React" isActive/></a></li> 
        <li><a href="/nodejs"><ButtonText title="NodeJS"/></a></li> 
      </Menu>
      <Content>
        <Section title="React">
          <p>
            O React JS é uma biblioteca do JavaScript que tem como função criar, de maneira simples, interfaces de usuário – ou User Interface (UI). De forma resumida, podemos dizer que ele transforma uma mesma tela em partes individuais. Assim, a biblioteca simplifica o trabalho do desenvolvedor sobre cada uma delas.
            Criada em 2011 pelo Facebook, a biblioteca se tornou uma ferramenta de código aberto em 2013. Isto é, após virar open-source, qualquer pessoa pode baixar, alterar e distribuir alterações no seu código-fonte.
            Na empresa de Mark Zuckerberg, o Facebook, a biblioteca foi desenvolvida a fim de facilitar a conexão entre atividades simultâneas operadas na rede social. Logo, o React servia para otimizar a atualização de tarefas como status, chat e outras operações online.
            De lá para cá, ele se tornou uma das bibliotecas JavaScript mais utilizadas em todo o mundo. Entre as organizações que usam a ferramenta estão Netflix, Airbnb, American Express, WhatsApp e eBay.
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