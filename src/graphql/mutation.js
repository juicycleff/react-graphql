import gql from 'graphql-tag';

export const LOGIN = gql`
    mutation login($username: String!, $password: String!){
        login(username: $username, password: $password){
            token
            user {
                id
                username
            }
        }
    }
`;

export const SIGNUP = gql`
    mutation signup($username: String!, $password: String!, $displayName: String!){
        signup(username: $username, password: $password, displayName: $displayName ){
            token
            user {
                id
                username
                displayName
            }
        }
    }
`;

/**
 * Post tweet mutation
 */
export const POST = gql`
    mutation post($text: String!, $upload: String){
        post(text: $text, upload: $upload){
            id
            text
        }
    }
`;