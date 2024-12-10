var username = "Vignesh";

function wish() {
    return `hello ${username}`;
}

class Morning{
    
    wish() {
        return `Good Morning! ${username}`;
    }

}

export {wish, Morning};
