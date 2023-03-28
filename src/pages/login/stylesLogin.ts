import styled from "styled-components";

export const StyledDivLogin = styled.div`
    width: 65%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;

    gap: 5%;

    @media (max-width: 1000px) {
        flex-direction: column;

        width: 100%;

        margin-top: 48px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;

        gap: 20px;

        height: 45%;
        width: 48%;

        background: white;

        padding: 32px;

        border: 2px solid rgba(0, 0, 0, 0.3);
        border-radius: 8px;

        @media (max-width: 1000px) {
            width: 95%;
            height: 60%;
            padding: 16px;
        }

        section {
            width: 100%;
            position: relative;

            span {
                font-size: 12px;

                opacity: .7;

                width: 100%;
                position: absolute;
                bottom: -15px;
                left: 2%;
            }
        }

        input {
            width: 100%;

            padding: 12px;
            border-radius: 16px;
            border: 2px solid #d6e4e5;

            font-size: 14px;

            height: 45px;
        }

        button {
            background: #eb6440;

            height: 45px;

            color: white;
            font-size: 18px;

            border-radius: 16px;
        }

        p {
            width: 60%;
            margin: 0 auto;

            @media (max-width: 1000px) {
                width: 100%;
            }
        }

        a {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            background: #497174;

            height: 45px;

            color: white;
            font-size: 18px;

            border-radius: 16px;
        }
    }

    div {
        width: 49%;

        display: flex;
        flex-direction: column;

        gap: 32px;

        @media (max-width: 1000px) {
            width: 95%;

            align-items: center;
            gap: 8px;
        }

        h1 {
            span {
                color: #eb6440;
            }
        }

        div {
            padding: 16px;
            width: 80%;

            border-radius: 8px;
            border: 2px solid rgba(0, 0, 0, 0.3);

            display: flex;
            flex-direction: row;
            align-items: center;

            justify-content: space-between;

            @media (max-width: 1000px) {
                width: 100%;
                padding: 8px;
            }

            p {
                width: 80%;
            }
        }
    }
`;
