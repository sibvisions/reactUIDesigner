/* Copyright 2022 SIB Visions GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

/**
 * Returns a promise which times out and throws an error and displays dialog after given ms
 * @param promise - the promise
 * @param ms - the ms to wait before a timeout
 */
function timeoutRequest(promise: Promise<any>, ms: number) {
    return new Promise((resolve, reject) => {
        let timeoutId= setTimeout(() => {
            reject(new Error("timeOut"))
        }, ms);
        promise.then(res => {
                clearTimeout(timeoutId);
                resolve(res);
            },
            err => {
                clearTimeout(timeoutId);
                reject(err);
        });
    });
}

/**
 * Builds a request to send to the server
 * @param request - the request to send
 * @returns - a request to send to the server
 */
function buildReqOpts(request:any):RequestInit {
    const requestHeaders: HeadersInit = new Headers();
    //requestHeaders.set('Content-Type', 'multipart/form-data');

    return {
        method: 'POST',
        body: request.formData,
        headers: requestHeaders,
        credentials:"include",
    };
}

/**
 * Sends a request to the server
 * @param request - the request to send
 * @param url - the url to send the request to
 */
export function sendRequest(request: any, url: string) {
    let promise = new Promise<any>((resolve, reject) => {
        timeoutRequest(fetch(url, buildReqOpts(request)), 10000)
        .then((response:any) => {
            if (response.status === 204) {
                resolve({});
            }
            else if (response.status < 400) {
                resolve(response.json())
            }
            else {
                reject()
            }
        })
    });
    return promise
}