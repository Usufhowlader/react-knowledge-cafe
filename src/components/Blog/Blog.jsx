import PropTypes from 'prop-types';
import {  FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmark,handleMarksAsRead}) => {
      const {title, cover,author, posted_date, author_img, reading_time,hashtags}=blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full' src={cover} alt={`Cover picture of the tittle ${title}`} />
            <div className='flex justify-between my-6 mb-4 '>
               <div className='flex '>
                 <img className='w-14' src={author_img} alt="" />
                 <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>

                 </div>
               </div>
               <div>
                  <span>{reading_time}min read</span>
                  <button  onClick={()=> handleAddToBookmark(blog)} className='ml-2 text-red-600 text-xl'>
                  <FaBookmark></FaBookmark></button>
               </div>

            </div>
            <h2 className='text-4xl '>{title}</h2>
            <p className='mt-6'>
                {
                    hashtags.map((hash, idx)=><span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button
              onClick={()=>handleMarksAsRead(reading_time)}
             className='text-purple-800 font-bold underline'>
             Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
   blog:PropTypes.object.isRequired,
   handleAddToBookmark:PropTypes.func,
   handleMarksAsRead:PropTypes.func
}

export default Blog;