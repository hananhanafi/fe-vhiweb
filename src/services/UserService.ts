import Service, { serializeQuery } from './index';

class UserService {
    async getUserList(params: any){
        return new Promise(async(resolve,reject)=>{
            const endpoint = `/users?${serializeQuery(params)}`;
            await Service.get(endpoint)
            .then((res)=>{
                resolve(res);
            })
            .catch((err)=>{
                reject(err);
            });
        })
    }
    async getUserDetail(id: number){
        return new Promise(async(resolve,reject)=>{
            const endpoint = `/users/${id}`;
            await Service.get(endpoint)
            .then((res)=>{
                resolve(res);
            })
            .catch((err)=>{
                reject(err);
            });
        })
    }
}

export default new UserService;