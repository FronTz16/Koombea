/* eslint-disable no-multi-spaces */
import Config                        from 'constants/Config';
/* eslint-enable no-multi-spaces */

const ServerRequest = async ({
    body,
    endpoint,
    method,
}: ServerRequestProps) => {

    const url = `${Config.backend.host}${endpoint}`;

    try {
        const requestHeaders: Headers = new Headers();

        requestHeaders.set('Content-Type', 'application/json');
        // requestHeaders.set('Authorization', token);

        const response = await fetch(url,
            {
                method,
                headers: requestHeaders,
                body: JSON.stringify(body),
            }
        );

        if (!response.ok) {
            throw response;
        }

        const resData = await response.json();

        return resData;

    } catch(error) {

        if (typeof error === 'string') {
            throw new Error(error);
        } else {
            throw new Error('Something went wrong');
        }
    }
};

interface ServerRequestProps {
    body?: unknown;
    endpoint: string;
    method: 'POST' | 'GET';
}

export default ServerRequest;
