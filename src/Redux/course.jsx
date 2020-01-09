let courseState ={
    courses:[],
    detailCourse:[]
}
const courseReducer =(state=courseState,action)=>{
        switch (action.type) {
            case "SHOW_ALL":{
                state.courses= action.payload;
                console.log(action)
                return {...state}
            }
            case "DETAIL_COURSE":{
                state.detailCourse= action.payload;
                console.log(action)
                return {...state}
            }
       
         default: return state;
        break;
      
    }
}


export default courseReducer;