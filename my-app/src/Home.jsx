
import './App.css';
import Tree from './components/Tree';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <section className="colmns">
    <Tree
    name="Live Oak"
    Description="Doesn't lose leaves"
    image="images/tree.avif"/>

    <Tree 
    name="dogwood"
    description="flowers in spring"
    image="images/tree.avif"/>
    </section>
    </div>
  );
}

export default App;
