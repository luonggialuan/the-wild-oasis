import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import styled from 'styled-components'

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
  /* Custom Scrollbar Styles */
  &::-webkit-scrollbar {
    width: 12px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: var(--color-grey-0); /* Background of the scrollbar track */
    border-radius: 12px; /* Optional: Round the edges */
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-brand-200); /* Color of the scrollbar thumb */
    border-radius: 12px; /* Optional: Round the edges */
    border: 2px solid var(--color-grey-100); /* Optional: Adds space around the thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-brand-500); /* Darker color on hover */
  }
`

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  )
}

export default AppLayout
