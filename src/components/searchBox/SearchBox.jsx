import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import {changeFilter} from '../../redux/filtersSlice'

const SearchBox = () =>{

    const dispatch = useDispatch();
   
    const filter = useSelector((state) => state.filters.name);

    const handleFilterChange = (e) =>{
        const name = e.target.value.trim();
        dispatch(changeFilter(name))
    }

    return(
        <div>
            <p>Find contacts by name or number</p>
            <input type="text" value={filter} onChange={handleFilterChange}/>
        </div>
    )
}

export default SearchBox;