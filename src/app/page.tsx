"use client"
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { Aside } from '@/components/Aside';
import { TodoItemContainer } from '@/components/TodoItemContainer';

export default function Home() {
  return (
    <Main >
      <Aside />
      <TodoItemContainer/>
    </Main>
  )
}

const Main = styled.main`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-start;
  height:953px;
  width:1440px;
  border-radius:20px;
  @media (max-width:1575px){
    height:920px;
    width:1295px;
  }
  background-color:${colors.lightGreen};

`
