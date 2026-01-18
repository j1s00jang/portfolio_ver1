import Header from './components/Header'
import Breadcrumbs from './components/Breadcrumbs'
import './App.css'

function App() {
  // 예시: 나중에 각 페이지에서 이렇게 사용하면 됩니다
  // const breadcrumbItems = [
  //   { label: 'Home', link: '/' },
  //   { label: 'About me', link: null }
  // ]

  return (
    <div className="app">
      <Header />
      {/* Breadcrumbs는 각 페이지에서 필요할 때 추가하세요 */}
      {/* <Breadcrumbs items={breadcrumbItems} /> */}
      <main className="main-content">
        {/* Main content will go here */}
      </main>
    </div>
  )
}

export default App
