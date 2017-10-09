export const johnnyFive = {
    greet (name){
        if(name){
            return `Hello, ${name}. I am Johnny 5.  I am alive!`
        
        }
         return 'Johnny Five is Alive'
    }
}

export const shout = (message) => {
    return `${message.toUpperCase()}!!!`;
}