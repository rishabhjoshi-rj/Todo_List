let input=prompt("what would you like to do ")
const todos=["Collect eggs","Clean house"];
while(input!=='quit' && input!=='q'){
    if(input==='list'){
        console.log('*************')
        for(let i =0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*************')
    } 
    else if(input==='new'){
        const newTodo=prompt("OK, what is the new Todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    }
    else if(input ==='delete'){
            const index=parseInt(prompt('OK, enter an index to delete:'));
            if(!Number.isNaN(index)){
                const deleted =todos.splice(index,1);
                console.log(`Ok, deleted ${deleted[0]}`);
            } else{
                console.log("Unknown Index")
            }
        }
    
    input=prompt("What would would like to do ")
}
console.log("Ok you quit the app!")
