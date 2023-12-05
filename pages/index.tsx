
import Hero from './components/Hero';
import Table from './components/table';
import Tabl from './components/tabl';
import Sport from './components/sport';

export default () => {
  return (
    <> 
  
      <div>
        <div className="bg-gradient h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Hero />
        <Sport />
        <div id="anchor_one" />
        <Table />
        <Tabl />
      </div>
   </>
  )
}
