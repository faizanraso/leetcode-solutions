//Initial Method
var interpret = function(command) {
    var interpretation = "";
    for(var i=0; i<command.length(); i++){
        if(command[i] == "G"){
            interpretation += "G";
        } else if (command[i] == "(" && command[i+1] == ")"){
            interpretation += "o";
        } else if(command[i] == "(" && command[i+1] == "a" && command[i+2] == "l" && command[i+3] == ")"){
            interpretation += "al";
        }
    }
    return interpretation;
};

//Alternative Method
var interpret = function(command){
    command = command.replaceAll("()", "o");
    command = command.replaceAll("(al)", "al");
    return command;
}