import Featured from "./components/featured/Featured.jsx"
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";

export default function Home() {
  return (
    <div className='transition-all'>
      <Featured />
      <CategoryList />
      <div className='content | flex gap-12 my-12'>
        <CardList  />
        <Menu  />
      </div>
    </div>
  )
}