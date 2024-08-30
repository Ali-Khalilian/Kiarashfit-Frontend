import {useContext} from "react";
import BodyContext from "../context/BodyProvider";

const useBody =()=>{
    return useContext(BodyContext);
};

export default useBody;