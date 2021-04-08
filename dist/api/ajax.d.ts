declare function ajax(options: {
    type: 'get' | "post";
    url: string;
    data: any;
    header: {
        [type: string]: string;
    };
    success: (result: any, xhr: any) => void;
    error: (result: any, xhr: any) => void;
}): void;
export default ajax;
