
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks,readingtime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div>
                <h3 className="text-4xl">Reading Time:{readingtime}</h3>
            </div>
            <h2 className="text-3xl text-center ">Bookmarks:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingtime:PropTypes.number
}
export default Bookmarks;