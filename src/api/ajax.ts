
function ajax(options:{
    type:'get' | "post";
    url: string;
    data:any;
    header:{[type:string]:string};
    success:(result,xhr)=>void,
    error:(result,xhr)=>void
}){
    let defaults = {
        type:'get',
        url:'',
        data:{},
        header:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        success:function(a,b){},
        error:function(a,b){}
    }
    Object.assign(defaults,options);
    let xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest()
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }
    let params = defaults.url.indexOf("?") === -1 ? '?':"&";
    for(let key in options.data){
        params += key + '=' + defaults.data[key]+"&";
    }
    params = params.substr(0,params.length-1);
    if(defaults.type === 'get'){
        defaults.url = defaults.url + params;
    }
    xhr.open(defaults.type,defaults.url);
    if(defaults.type === 'post'){
        let contentType = defaults.header['Content-Type'];
        xhr.setRequestHeader('Content-Type',contentType);
        if(contentType === 'application/json'){
            xhr.send(JSON.stringify(defaults.data))
        }else{
            xhr.send(params)
        }
    }else{
        xhr.send();
    }

    xhr.onload = function(){
        let contentType = xhr.getResponseHeader('Content-Type') || "";
        let responseText = xhr.responseText;
        if(contentType.includes("application/json")){
            responseText = JSON.parse(responseText)
        }
        if(xhr.status == 200){
            defaults.success(responseText,xhr);
        }else{
            defaults.error(responseText,xhr);
        }
    }
}

export default ajax;