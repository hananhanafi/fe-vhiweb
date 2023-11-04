import Service from './index';

class AuthService {
    async login(payload: object){
        return new Promise(async(resolve,reject)=>{
            const endpoint = `/login`;
            await Service.post(endpoint,payload)
            .then((res)=>{
                resolve(res);
            })
            .catch((err)=>{
                reject(err);
            });
        })
    }
}

export default new AuthService;