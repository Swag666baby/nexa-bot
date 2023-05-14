function registro(fs, numeroUsuario, nameUser, groupName, groupID){
    if(!fs.existsSync(`./data-base/users/${numeroUsuario}.json`)){
        class User{
            constructor(){
                this.nome = nameUser;
                this.numero = numeroUsuario;
                this.xp = 1500;
                this.patentes = "🥉I";
            }
        }
        const recordUser = new User();
        fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(recordUser, null, 2))
    }
    if(!fs.existsSync(`./data-base/groups/${groupID}.json`)){
        class Group{
            constructor(){
                this.nome = groupName;
                this.id = groupID;
                this.nsfw = false;
                this.cassino = true;
                this.antilink = false
            }
        }
        const recordGroup = new Group();
        fs.writeFileSync(`./data-base/groups/${groupID}.json`, JSON.stringify(recordGroup, null, 2))
    }
}
module.exports = registro;
