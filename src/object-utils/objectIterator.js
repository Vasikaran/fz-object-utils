function objectIterator(object){
    let keys = Object.keys(object);
    let index = 0;
    return {
        next: ()=>{
            if (index < keys.length){
                return {
                    done: false,
                    value: object[keys[index++]]
                }
            }else{
                return {
                    done: true
                }
            }
        }
    }
}

export default objectIterator;
