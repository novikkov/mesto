export class UserInfo {
    constructor(container, api){
        this.api = api;
        this.container = container;
        this.userName = document.querySelector('.user-info__name');
        this.userJob = document.querySelector('.user-info__job');
        
    }
    setUserInfo(_id, name, job){
        this._id = _id;
        this.name = name;
        this.job = job;
        
        this.userName.textContent = this.name;
        this.userJob.textContent = this.job;
    }
    updateUserInfo (name, about){
        return this.api.editUser(name, about);
    }
}



