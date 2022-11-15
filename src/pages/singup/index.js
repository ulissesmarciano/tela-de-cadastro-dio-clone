import React from "react"

import { MdEmail, MdLock } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, AccountExist, CriarText, Row, Wrapper, PrivacyText } from './styles';

const Singup = () => {


    const { control, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Faça seu cadastro e make the change._</SubtitleLogin>
                <form >
                <Input placeholder="Nome Completo" leftIcon={<FaUserAlt />} name="name"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                    <PrivacyText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</PrivacyText>
                    <Row>
                        <AccountExist>Ja tenho conta.</AccountExist>
                        <CriarText>Fazer Login</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export default Singup 