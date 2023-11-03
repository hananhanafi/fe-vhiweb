import Service, { serializeQuery } from './index';

class UserAPI {
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
    async getUserDetail(params: any){
        return new Promise(async(resolve,reject)=>{
            const endpoint = `/users/${params.id}`;
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

export default new UserAPI;