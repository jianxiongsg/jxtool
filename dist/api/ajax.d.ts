export interface AjaxParam {
    type: 'get' | "post";
    url: string;
    data: any;
    header: {
        [type: string]: string;
    };
    success: (result: any, xhr: any) => void;
    error: (result: any, xhr: any) => void;
}
declare function ajax(options: AjaxParam): void;
export default ajax;
