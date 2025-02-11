
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
function App() {
  
 const [bookmarks,setBookmarks]=useState([]);
 const [readingtime,setReadingTime]=useState(0)
 const handleAddToBookmark=blog=>{
    const newBookmarks=[...bookmarks,blog];
    setBookmarks(newBookmarks);
 }

 const handleMarkAsRead=(id,time)=>{
     setReadingTime(readingtime+time);
    // console.log('remove bookmark',id)
    const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id!==id);
    setBookmarks(remainingBookmarks);
 }
  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}
      handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingtime={readingtime}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
