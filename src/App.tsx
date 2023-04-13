import { Counter } from './sample04/Counter'
import { Calculator } from './sample05/Calculator'

function App() {
    return (
        <div className="App">
            <section>
                <h2>カウンターコンポーネント</h2>
                <Counter />
            </section>
            <section>
                <h2>計算機コンポーネント</h2>
                <Calculator />
            </section>
        </div>
    )
}

export default App
