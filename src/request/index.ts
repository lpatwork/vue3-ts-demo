import axios from 'axios';

const service = axios.create({
    baseURL:"https://www.fastmock.site/mock/c73a2908f88d080273b4ca18b7091ff5/tsdemo/api",
    timeout: 10000,
    headers:{
        "Content-Type" : "application/json;charset=utf-8"
    }
});

service.interceptors.request.use((config)=>{
    config.headers = config.headers || {};
    if(localStorage.getItem("token")){
        config.headers.token = localStorage.getItem("token") || "";
    }
    return config;
});

service.interceptors.response.use((res)=>{
    const code:number = res.data.code;
    if(code!=200){
       return Promise.reject(res.data);
    }
    
    return res.data;
},(err)=>{
    console.log(err);
});

export default service;