const baseUrl = 'http://localhost:3030';

export default {
    auth: {
        login: `${baseUrl}/auth/login`,
        register: `${baseUrl}/auth/register`,
    },
    user: {
        buildResume: `${baseUrl}/resumes`,
    }
};
