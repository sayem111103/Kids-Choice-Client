import { useEffect } from "react";

const useTitle = title => {
    useEffect(()=>{
        document.title = `Kids Choice - ${title}`
    },[title])
};

export default useTitle;