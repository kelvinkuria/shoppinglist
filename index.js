function shoppingListManager(){
let shoppingList = [];

while (true){
    let action = prompt("Choose an action: Add,View,Remove,Exit")


    if (action === "add"){
        let item = prompt("Enter Item to add: ");
        shoppingList.push(item)
        console.log(`${item} added to the list`)
    }else if (action === "View"){
        console.log('Shopping List :')
        shoppingList.forEach((item,index) => {
            console.log(`${index + 1} . ${item}`);
        });
    }else if (action === "remove"){
        let itemToRemove = prompt('Enter name of item to remove:')
        let index =  shoppingList.indexOf(itemToRemove);
        if( index !== -1){
            shoppingList.splice(index,1);
            console.log (`${itemToRemove} removed from list`)

        }else{
            console.log('Item nt found')
        }
    }else if (action === "exit"){
        console.log('Exiting the program')
        break;
    }else{
        console.log('Invalid action')
    }
}




}
shoppingListManager();