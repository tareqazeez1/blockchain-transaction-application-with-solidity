import { Navbar, Home, Services, Transactions, Footer } from './components'


const App = () => {

  return (
    <div className="min-h-sceen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Home />
      </div>
      <Services/>
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
